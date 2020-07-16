import os
import re
import requests
import json
from abc import ABC, abstractmethod
from bs4 import BeautifulSoup

class PhoenixdexScraper(ABC):
    """a modular class for scraping the PhoenixDex, intended to be inherited by other scraping classes.
       most methods are useless when used by this class alone.  children should update their member data to make the methods functional.
       provides a few basic scraping utilities required by all scrapers.
    """

    def __init__(self, _type=""):
        self.content_type = _type
        self.base_url = "https://phoenixdex.alteredorigin.net/" + self.content_type

    def get_slug(self, name):
        """return a url-friendly slug from the provided content name."""
        return name.lower().replace(" ", '-')

    def get_url(self, name):
        """return a phoenixdex url for the provided content name."""
        return self.base_url +  "/" + self.get_slug(name)

    def get_soup(self, name):
        """return a soup instance for the provided content name."""
        src = requests.get(self.get_url(name))
        return BeautifulSoup(src.text, 'html.parser')

    @abstractmethod
    def get_all_names(self, name):
        """return a list of all names of the objects of the scraper's type.
           needs to be overwritten by children."""
        ...

    @abstractmethod
    def get_data(self, name, as_json=True):
        """return data about the object with the provided name.
           needs to be overwritten by children."""
        ...

    def dump(self, name, filepath):
        """write the object's data to a json file at the given file path."""
        data = self.get_data(name, as_json=True)
        print("Writing data for {} to {}... ".format(name, filepath), flush=True)
        with open(filepath, 'w') as outfile:
            outfile.write(data)
        print("Success.")

    def dump_all(self, path, aggregate=True):
        """write ALL object data to a json file or files.
           if the aggregate flag is set to false, each pokémon's data will be written
           to its own file.  if this is the case, the path arg must refer to a directory,
           not a file name.
        """
        if aggregate:
            objs = {}
            for name in self.get_all_names():
                print("Gathering data for {}... ".format(name), end='', flush=True)
                objs[name.lower()] = self.get_data(name)
                print("Done.")
            print("Writing to {}...".format(path), flush=True)
            with open(path, 'w') as outfile:
                json.dump(objs, outfile, indent=4)
            print("Success.")
        else:
            if os.path.exists(path):
                if not os.path.isdir(path):
                    raise NotADirectoryError("Output path must be a directory.")
            else:
                os.mkdir(path)
            for objs in self.get_all_names():
                print("Gathering data for {}... ".format(name), end='', flush=True)
                data = self.get_data(name)
                print("Done.")
                filepath = path + ("/" if not path.endswith("/") else "") + name.lower() + ".json"
                print("Writing to {}... ".format(filepath), end='', flush=True)
                with open(filepath, 'w') as outfile:
                    json.dump(data, outfile, indent=4)
                print("Done.")
            print("Success.")

class PokemonScraper(PhoenixdexScraper):
    """a class for scraping pokémon data from the Phoenixdex."""
    # TODO: other information, like egg groups, dex descriptions, measurements, etc.
    def __init__(self):
        super().__init__("pokemon")

    def get_all_names(self):
        """return a list of all pokémon names in the new logora pokédex."""
        names = []
        soup = self.get_soup("new-logora-pokedex")
        captions = soup.find_all('ul', class_='list-unstyled')
        for caption in captions:
            label = caption.find('strong').text
            name = label.split(" ")[1] # strip dex number
            names.append(name)
        return names

    def get_types(self, pokemon_name):
        """return a list of the pokémon's types."""
        soup = self.get_soup(pokemon_name)
        return [type_.text for type_ in soup.find_all('a', class_='type-large')]

    def get_abilities(self, pokemon_name):
        """return a list of the pokémon's abilities.
           the list always has a length of 3.  the hidden ability is always stored
           in the third slot.  slots that would normally be empty (e.g. no hidden ability,
           no second ability) are filled with duplicates of the pokémon's first ability.
        """
        abilities = []
        soup = self.get_soup(pokemon_name)
        ability_list = soup.find('dl', class_='ability-list')
        found_abilities = ability_list.findChildren('dt', recursive=False)
        for ability in found_abilities:
            if ability.text.endswith(' hidden ability'):
                if len(abilities) < 2: # duplicate ability 1 for pokémon with only one non-hidden ability
                    abilities.append(abilities[0])
                abilities.append(ability.text[:-15])
            else:
                abilities.append(ability.text)
        while len(abilities) < 3:
            abilities.append(abilities[0])
        return abilities

    def get_stats(self, pokemon_name):
        """return a dict of the pokémon's stats, in the format
               { stat_name: stat_value, ... }
        """
        base_stats = []
        soup = self.get_soup(pokemon_name)
        stats_table = soup.find('table', class_='base-stats')
        stat_cells = stats_table.findChildren('tr')
        for cell in stat_cells:
            stat_block = cell.find('th')
            stat = stat_block.text.split(": ")[1] # strip stat name
            base_stats.append(stat)
        stat_names = ["hp", "atk", "def", "spatk", "spdef", "spd"]
        return {stat_names[i]: base_stats[i] for i in range(len(base_stats))}

    def get_gender(self, pokemon_name):
        """return a float value for the pokémon's gender.
           if the return is negative, the pokémon is genderless;
           otherwise, the float is value (0 <= x <= 1) representing
           the pokémon's odds of rolling male.
        """
        soup = self.get_soup(pokemon_name)
        gender_div = soup.find('div', class_='gender-ratio')
        is_genderless = gender_div.find('div', class_='progress-bar-neuter')
        if is_genderless:
            return -1
        else:
            male_ratio = gender_div.find('div', class_='progress-bar-male')
            if not male_ratio:
                return 0 # 100% female
            else:
                male_ratio = male_ratio.text.split(" ")[0][:-1] # ger percentage, strip % sign
                return str(float(male_ratio) / 100)

    def get_egg_groups(self, pokemon_name):
        """return an array containing the pokémon's egg groups."""
        soup = self.get_soup(pokemon_name)
        egg_group_header = soup.find('h4', text="Egg Groups")
        egg_groups = egg_group_header.nextSibling.nextSibling.text.strip()
        return egg_groups.split(", ")

    def get_misc_data(self, pokemon_name):
        """return a dict containing the pokémon's capture rate and base happiness."""
        soup = self.get_soup(pokemon_name)
        catch_rate_header = soup.find(lambda tag: tag.name == 'strong' and "Catch Rate:" in tag.text)
        catch_rate = catch_rate_header.nextSibling
        happiness_header = soup.find(lambda tag: tag.name == 'strong' and "Base Happiness:" in tag.text)
        happiness = happiness_header.nextSibling
        classification_header = soup.find(lambda tag: tag.name == 'h3' and "Classification" in tag.text)
        classification = classification_header.nextSibling.nextSibling.text.split(" ")
        return {"catchRate": catch_rate.strip(), "baseHappiness": happiness.strip(), "classification": " ".join(classification[1:-1])}

    def get_dex_entries(self, pokemon_name):
        """return an array containing the pokémon's dex flavor entries."""
        soup = self.get_soup(pokemon_name)
        dex_header = soup.find(lambda tag: tag.name == 'h3' and "Pokédex Entries" in tag.text)
        dex_entry_div = dex_header.nextSibling.nextSibling
        entries = dex_entry_div.findChildren('p')
        return [entry.text for entry in entries]

    def get_held_items(self, pokemon_name):
        """return a dict containing the pokémon's possible held items and their probabilities."""
        soup = self.get_soup(pokemon_name)
        held_items = {}
        held_items_header = soup.find(lambda tag: tag.name == 'h3' and "Wild Held Items" in tag.text)
        if not held_items_header:
            return held_items
        else:
            held_items_list = held_items_header.nextSibling.findChildren('li')
            for item in held_items_list:
                item_arr = item.text.split("% ")
                probability = str(float(item_arr[0]) / 100)
                held_items[item_arr[1]] = probability
            return held_items


    def get_moves(self, pokemon_name):
        """return a nested dict of the moves that the pokémon learns.
        the keys and dicts are as follows:
        - "levelUp": contains a dict of the moves the pokémon learns by level-up, mapped to the levels it learns them.
        - "relearn": contains a list of moves the pokémon may learn exclusively by relearn tutor.
        - "evo":     contains a list of moves the pokémon learns upon evolution.
        - "machine": contains a list of moves the pokémon learns by TM/HM.
        - "tutor":   contains a list of moves the pokémon learns by tutor.
        - "egg":     contains a list of moves the pokémon may receive as egg moves.
        """
        moves = {"levelUp": {}, "relearn": [], "evo": [], "machine": [], "tutor": [], "egg": []}
        soup = self.get_soup(pokemon_name)
        move_tables = soup.findAll('table', class_='move-table')
        # by level-up/relearn/evo
        learnset_table = move_tables[0]
        move_rows = learnset_table.findChildren('tr')
        for move_row in move_rows:
            lastLevel = "1"
            cols = move_row.findChildren('td')
            if (cols):
                if cols[0].text == "1RL": # relearner moves
                    moves["relearn"].append(cols[1].text)
                elif cols[0].text == "1EVO": # learned on evolution
                    moves["evo"].append(cols[1].text)
                elif cols[0].text == '': # if multiple moves are learned at the same level,
                                        # all moves after the first do not have their levels marked.
                    moves["levelUp"][lastLevel] = cols[1].text
                else:
                    lastLevel = cols[0].text
                    moves["levelUp"][lastLevel] = cols[1].text
        # by machine
        for index, learn_method in enumerate(["machine", "tutor", "egg"]):
            table = move_tables[index + 1]
            move_rows = table.findChildren('tr')
            for move_row in move_rows:
                cols = move_row.findChildren('td')
                if cols:
                    move_name = cols[1 if learn_method == "machine" else 0].text
                    moves[learn_method].append(move_name)
        return moves

    def get_data(self, pokemon_name, as_json=False):
        """return a dict aggretating all the pokémon's data.
        contains the pokémon's name, types, abilities, base stats, and moves.
        if the as_json flag is set to True, return the dict as json.
        """
        misc_data = self.get_misc_data(pokemon_name)
        data = {
            "name": pokemon_name,
            "classification": misc_data["classification"],
            "types": self.get_types(pokemon_name),
            "abilities": self.get_abilities(pokemon_name),
            "baseStats": self.get_stats(pokemon_name),
            "gender": self.get_gender(pokemon_name),
            "dexEntries": self.get_dex_entries(pokemon_name),
            "eggGroup": self.get_egg_groups(pokemon_name),
            "catchRate": misc_data["catchRate"],
            "baseHappiness": misc_data["baseHappiness"],
            "heldItems": self.get_held_items(pokemon_name),
            "moves": self.get_moves(pokemon_name)
        }
        if as_json:
            return json.dumps(data, indent=4)
        else:
            return data

class MoveScraper(PhoenixdexScraper):
    """a class for scraping move data from the Phoenixdex."""

    def __init__(self):
        super().__init__("moves")

    def get_all_names(self):
        """return a list of all move names on the phoenixdex."""
        moves = []
        soup = self.get_soup('')
        move_table = soup.find('table', class_='move-table')
        move_rows = move_table.findChildren('tr')
        for row in move_rows:
            cols = row.findChildren('td')
            if cols:
                moves.append(cols[0].text)
        return moves

    def get_url(self, move_name):
        """return a phoenixdex url for the provided move name."""
        exceptions = {"Arc Lightning": "Arclightning"}
        if move_name in exceptions:
            return super().get_url(exceptions[move_name])
        else:
            return super().get_url(move_name)

    def get_type(self, move_name):
        """return the move's type as a string."""
        soup = self.get_soup(move_name)
        type_name = soup.find('a', class_='type-large')
        return type_name.text

    def get_damage_class(self, move_name):
        """return the move's damage class (special/physical/status) as a string."""
        soup = self.get_soup(move_name)
        damage_classes = {"type-special": "Special", "type-physical": "Physical", "type-other": "Status"}
        for dmg_class in damage_classes:
            if soup.find('a', class_=dmg_class):
                return damage_classes[dmg_class]

    def get_stats(self, move_name):
        """return a dict containing the move's base power, PP,
           accuracy, target, priority, and effect chance.
        """
        stats = {
            "power": 0,
            "pp": 0,
            "accuracy": 0,
            "effectChance": 0,
            "priority": 0,
            "target": ''
        }
        soup = self.get_soup(move_name)
        move_stats = soup.find('table', class_='move-stats')
        stat_rows = move_stats.findChildren('tr')
        # flatten list and remove headers/whitespace
        stat_rows = [stat for row in [stat_rows[1], stat_rows[3]] for stat in row if stat != '\n']
        stat_rows = [stat.text for stat in stat_rows]
        for i, k in enumerate(stats):
            stat = stat_rows[i]
            if stat.endswith("%"):
                stat = stat[:-1]
                if stat.isnumeric():
                    stat = str(float(int(stat) / 100))
            if stat == "—":
                stat = None
            stats[k] = stat
        return stats

    def get_power(self, move_name):
        """return the move's power as an integer, or None if not applicable."""
        stats = self.get_stats(move_name)
        return stats["power"]

    def get_pp(self, move_name):
        """return the move's power points as an integer."""
        stats = self.get_stats(move_name)
        return stats["pp"]

    def get_accuracy(self, move_name):
        """return the move's accuracy as a float."""
        stats = self.get_stats(move_name)
        return stats["accuracy"]

    def get_effect_chance(self, move_name):
        """return the move's effect% as a float, or None if not applicable."""
        stats = self.get_stats(move_name)
        return stats["effectChance"]

    def get_priority(self, move_name):
        """return the move's priority as an integer."""
        stats = self.get_stats(move_name)
        return stats["priority"]

    def get_target(self, move_name):
        """return the move's target as a string."""
        stats = self.get_stats(move_name)
        return stats["target"]

    def get_flags(self, move_name):
        """return a list of the move's flags."""
        soup = self.get_soup(move_name)
        flag_list = soup.find_all('a', {'href': re.compile(r'\/moves\/meta\/move-flags\/([a-z])\w+\/')})
        return [flag.text for flag in flag_list]

    def get_flavor(self, move_name):
        """return the move's flavor text/description."""
        soup = self.get_soup(move_name)
        flavor_heading = soup.find('h2', id="flavor")
        return flavor_heading.nextSibling.strip()

    def get_effect(self, move_name):
        """return a description of the move's effect."""
        soup = self.get_soup(move_name)
        effect_fields = soup.findAll('div', class_='markdown')
        if len(effect_fields) > 1:
            effect_fields.pop(0)
        return effect_fields[0].text

    def get_data(self, move_name, as_json=False):
        """return a dict aggregating all of the move's data.
           contains the move's name, type, damage class, power,
           pp, accuracy, effect chance, priority, target, flags,
           flavor, and effect description.
           if the as_json flag is set to True, return the dict as json.
        """
        data = {
            "name": move_name,
            "type": self.get_type(move_name),
            "damageClass": self.get_damage_class(move_name),
            "flags": self.get_flags(move_name),
            "flavor": self.get_flavor(move_name),
            "effectDescription": self.get_effect(move_name)
        }
        for key, value in self.get_stats(move_name).items():
            data[key] = value
        if as_json:
            return json.dumps(data, indent=4)
        else:
            return data

class AbilityScraper(PhoenixdexScraper):
    """a class for scraping ability data from the Phoenixdex."""

    def __init__(self):
        super().__init__("abilities")

    def get_all_names(self):
        """return a list of all ability names in the phoenixdex."""
        soup = self.get_soup('')
        return [ability.text for ability in soup.find_all('dt')]

    def get_flavor(self, ability_name):
        """return the ability's flavor description as a string."""
        soup = self.get_soup(ability_name)
        return soup.find('h2', id='flavor').nextSibling.nextSibling.text

    def get_effect(self, ability_name):
        """return a description of the ability's effect."""
        soup = self.get_soup(ability_name)
        return soup.find('h2', id='effect').nextSibling.nextSibling.text

    def get_data(self, ability_name, as_json=False):
        """return a dict aggregating all the ability's data.
           contains the ability's name, flavor, and effect description.
        """
        data = {
            "name": ability_name,
            "flavor": self.get_flavor(ability_name),
            "effectDescription": self.get_effect(ability_name)
        }
        if as_json:
            return json.dumps(data, indent=4)
        else:
            return data

if __name__ == "__main__":
    mon_scraper = PokemonScraper()
    print(mon_scraper.get_data("Rapscalion"))