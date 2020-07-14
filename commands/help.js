module.exports = {
	name: 'help',
	description: 'this command retrieves instructions for the specified command.',

	execute(message, args) {
		var conf = require('../config.json');
		var command_prefix = conf.prefix;
		// Send standard help message if no arguments specified
		if (!args.length) {
			message.channel.send(`>>> Hello, I am Turq-Bot, your friendly neighborhood bot with the purpose of assisting new trainers of New Logora with their Pokémon adventure needs! \
				\nMy prefix on this server is the ${command_prefix} key. To see explanations and examples of my commands, please type ${command_prefix}help followed by the desired command name. \
				\n\nPlease see below for a full list of my commands! \
				\n${command_prefix}check \
				\n${command_prefix}dex \
				\n${command_prefix}new *(Staff Only)* \
				\n${command_prefix}server \
				\n${command_prefix}user-info`);
		}
		else {
			// if there are arguments, post help document depending on which command is specified
			switch(args[0]) {

			case 'check':
				message.channel.send(`>>> Command: check \
							\nArguments: profile \
							\nDescription: check command followed by one of the listed arguments returns back profile info for the author or a user tagged at the end. \
							\n\n__Example:__ \
							\nUser: ${command_prefix}check profile @Turq-Bot \
							\nTurq-Bot: \
							\n   __Profile of Turq-Bot__ \
							\n   **Name:** Turqy Botswath \
							\n   **Age:** 0 \
							\n   **Gender:** None`);
				break;

			case 'dex':
				message.channel.send(`>>> Command: dex \
							\nArguments: Name of Pokémon \
							\nDescription: dex command followed by the name of a Pokémon returns a link to the Turquoise Dex page for the specified Pokémon. \
							\n\n__Example:__ \
							\nUser: ${command_prefix}dex acafia \
							\nTurq-Bot: http://turquoise.alteredorigin.net/pokemon/acafia/`);
				break;

			case 'new':
				message.channel.send(`>>> Command: new \
							\nSubcommand: profile \
							\nArguments: (separated by spaces) \
							\n   1. Player name (multiple names separated by underscores) \
							\n   2. Player age \
							\n   3. Player gender \
							\n   4. Starter Pokemon choice (i.e: Crocoal) \
							\n   5. Starter Pokemon nickname (enter none if unnamed) \
							\n   6. Rival name (multiple names separated by underscores) \
							\n   7. Rival age \
							\n   8. Rival gender \
							\n   9. Tagged User \
							\nDescription: new command followed by profile, arguments 1-8, and then a user tag will create a new profile for the tagged user and generate a starter Pokémon in slot 1. \
							\nComing soon: profile creation will generate a populated profile channel for the player, as well as a fresh adventure channel. \
							\n\n__Example:__ \
							\nUser: ${command_prefix}new profile Turqy_Botswath 0 None Crocoal Fireboy Chronicler 26 Male Turq-Bot#8380 \
							\nTurq-Bot: Profile successfully created for Turq-Bot.`);
				break;
			}
		}
	},
};