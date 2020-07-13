import requests
import json
from bs4 import BeautifulSoup

def get_pokemon_url(pokemon_name):
    slug = pokemon_name.lower().replace(' ', '-')
    return "https://phoenixdex.alteredorigin.net/pokemon/{}/".format(slug)

def get_soup(pokemon_name):
    url = get_pokemon_url(pokemon_name)
    src = requests.get(url).text
    return BeautifulSoup(src, 'html.parser')

def get_pokemon_names():
    """gets a list of all pokémon.  built for the new logora page, but probably works for others?"""
    names = []
    url = "https://phoenixdex.alteredorigin.net/pokemon/new-logora-pokedex/"
    src = requests.get(url).text
    soup = BeautifulSoup(src, 'html.parser')
    captions = soup.find_all('ul', class_='list-unstyled')
    for caption in captions:
        label = caption.find('strong').text
        name = label.split(" ")[1] # strip dex number
        names.append(name)
    return names

def get_types(pokemon_name):
    """returns a list of the given pokémon's types."""
    soup = get_soup(pokemon_name)
    return [type_.text for type_ in soup.find_all('a', class_='type-large')]

def get_abilities(pokemon_name):
    """returns a list of the given pokémon's types."""
    abilities = []
    soup = get_soup(pokemon_name)
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

def get_base_stats(pokemon_name):
    base_stats = []
    soup = get_soup(pokemon_name)
    stats_table = soup.find('table', class_='base-stats')
    stat_cells = stats_table.findChildren('tr')
    for cell in stat_cells:
        stat_block = cell.find('th')
        stat = stat_block.text.split(": ")[1] # strip stat name
        base_stats.append(int(stat))
    stat_names = ["hp", "atk", "def", "spatk", "spdef", "spd"]
    return {stat_names[i]: base_stats[i] for i in range(len(base_stats))}

def get_learnset(pokemon_name):
    moves = {"levelUp": {}, "relearn": [], "evo": []}
    soup = get_soup(pokemon_name)
    moveset_table = soup.find('table', class_='move-table')
    move_rows = moveset_table.findChildren('tr')
    for move_row in move_rows:
        lastLevel = 1
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
                lastLevel = int(cols[0].text)
                moves["levelUp"][lastLevel] = cols[1].text
    return moves

def get_pokemon_data(pokemon_name, as_json=False):
    """returns a dict of all pokémon data."""
    data = {
        "name": pokemon_name,
        "types": get_types(pokemon_name),
        "abilities": get_abilities(pokemon_name),
        "baseStats": get_base_stats(pokemon_name),
        "moves": get_learnset(pokemon_name)
    }
    if as_json == True:
        return json.dumps(data, indent=4)
    else:
        return data

if __name__ == '__main__':
    pokemon = {}
    for mon in get_pokemon_names():
        print("Writing {}... ".format(mon), end='', flush=True)
        pokemon[mon.lower()] = get_pokemon_data(mon)
        print("Done.")
    with open("new_logora_dex.json", 'w') as outfile:
        json.dump(pokemon, outfile, indent=4)
    print("Success.")
    # example output: https://gist.github.com/kyeugh/cc9e7ec27c033669e77925df4e327252