module.exports = {
	name: 'help',
	description: 'this command retrieves instructions for the specified command.',

	execute(message, args) {
		const conf = require('../../config.json');
		const prefix = conf.prefix;
		// Send standard help message if no arguments specified
		if (!args.length) {
			message.channel.send(`>>> Hello, I am Turq-Bot, your friendly neighborhood bot with the purpose of assisting new trainers of New Logora with their Pokémon adventure needs! \
				\nMy prefix on this server is the ${prefix} key. To see explanations and examples of my commands, please type ${prefix}help followed by the desired command name. \
				\n\nPlease see below for a full list of my commands! \
				\n${prefix}dex \
				\n${prefix}map \
				\n${prefix}wild`);
		}
		else {
			// if there are arguments, post help document depending on which command is specified
			switch(args[0]) {

			case 'dex':
				message.channel.send(`>>> Command: dex \
							\nArguments: Name of Pokémon \
							\nDescription: dex command followed by the name of a Pokémon returns a link to the Turquoise Dex page for the specified Pokémon. \
							\n\n__Example:__ \
							\nUser: ${prefix}dex acafia \
							\nTurq-Bot: http://turquoise.alteredorigin.net/pokemon/acafia/`);
				break;

			case 'map':
				message.channel.send(`>>> Command: map \
							\nArguments: (separated by spaces) \
							\n   1. Location Name (optional, entered as one word, all undercase) \
							\n   2. Area Name (optional, entered as one work, all undercase)
							\nDescription: map command will return current location of player and provide react options for travel. map command followed optionally by location name (and optionally area name) will return location specificed and travel options if applicable. \
							\n\n__Example:__ \
							\nUser: ${prefix}map leddintown`);
				break;

			case 'wild':
				message.channel.send(`>>> Command: wild \
							\nDescription: wild command will enter the player into a wild Pokémon battle in the area they are currently in, otherwise an error message will be returned if not possible.\
							\n\n__Example:__ \
							\nUser: ${prefix}wild`);
				break;
			}
		}
	},
};