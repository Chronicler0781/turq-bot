import os
import json
import ScrapingTools
from sys import argv
from pymongo import MongoClient

class DBUpdater:
    """a class for updating the Pokémon Turquoise database
       from information on the Phoenixdex.
    """
    def __init__(self):
        config_path = os.path.join(os.path.dirname(__file__), '../config.json')
        with open (config_path) as config_file:
            self.config = json.load(config_file)
        self.client = MongoClient(self.config["uri"])
        self.db = self.client.turqdb
        self.scrapers =    {
                           "dex": ScrapingTools.PokemonScraper(),
                           "moves": ScrapingTools.MoveScraper(),
                           "abilities": ScrapingTools.AbilityScraper()
                           }
    
    def update(self, name, content_type):
        """update the database record for the content.
           if no record exists, one is created.
        """
        if content_type not in self.scrapers.keys():
            raise ValueError("Invalid content type.  Choose one of [dex, moves, abilities]")
        filter_ = {"name": name}
        existing_record = self.db[content_type].find_one(filter_)
        was_updated = False
        if existing_record:
            print("Record for {} exists (id={})".format(name, existing_record["_id"]))
            data = self.scrapers[content_type].get_data(name)
            needs_updating = {}
            for field in data:
                # add non-existent fields or update inaccurate ones
                if field not in existing_record or existing_record[field] != data[field]:
                    needs_updating[field] = data[field]
            if needs_updating:
                was_updated = True
                print("Updating the following fields: " + ', '.join(list(needs_updating.keys())), flush=True)
                self.db[content_type].update_one(filter_, {"$set": needs_updating})
                print("Success.")
            needs_updating.clear()
            for field in existing_record:
                # remove defunct fields
                if field != "_id" and field not in data:
                    needs_updating[field] = ""
            if needs_updating:
                was_updated = True
                print("Removing the following defunct fields: " + ', '.join(list(needs_updating.keys())), flush=True)
                self.db[content_type].update_one(filter_, {"$unset": needs_updating})
                print("Success.")
            if not was_updated:
                print("Record up-to-date; no update required.")
        else:
            # create record if necessary
            print("No existing record for {}.  Creating one now...".format(name), flush=True)
            data = self.scrapers[content_type].get_data(name)
            record = self.db[content_type].insert_one(data)
            print("Record for {} created successfully (id={})".format(name, record.inserted_id))

    def update_type(self, content_type):
        """update all records of a given content type in the database."""
        if content_type not in self.scrapers.keys():
            raise ValueError("Invalid content type.  Choose one of [dex, moves, abilities]")
        names = self.scrapers[content_type].get_all_names()
        for name in names:
            self.update(name, content_type)

    def update_all(self):
        """update all records in the database."""
        for content_type in self.scrapers.keys():
            self.update_type(content_type)
            

if __name__ == "__main__":
    updater = DBUpdater()
    valid_content_types = {"pokemon": "dex", "move": "moves", "ability": "abilities", "all": ''}
    if len(argv) == 1:
        content_type = ""
        while content_type.lower() not in valid_content_types:
            content_type = input("What type of content would you like to update? [{}]\n> ".format("/".join([*valid_content_types.keys()])))
            if content_type not in valid_content_types:
                print("Invalid content type.  Choose one of [{}]\n> ".format("/".join([*valid_content_types.keys()])))
    else:
        content_type = argv[1]
        if content_type not in valid_content_types:
            raise ValueError("Invalid content type.  Choose one of [{}]\n> ".format("/".join([*valid_content_types.keys()])))
    if content_type == "all":
        updater.update_all()
    else:
        if len(argv) == 3:
            record = argv[2].split(",")
        else:
            print("What record will you update?  You may enter a comma-separated list of record names (no spaces), or 'all' to update all {} records.".format(content_type))
            record = input("> ").split(",")
        if record[0] == "all":
            updater.update_type(valid_content_types[content_type])
        else:
            for item in record:
                updater.update(item, valid_content_types[content_type])
