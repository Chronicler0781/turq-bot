module.exports = {
	name: 'menu',
	description: 'this command opens the main menu for the game, await user choice to be made',

	async execute(Discord, bot, message, args) {
		try {
			const userID = message.author.id;
			const filter = m => m.author.id === userID;
			const menuEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				// .setAuthor('Main Menu', 'https://i.imgur.com/G9LRB6c.png')
				.attachFiles(['./images/menus/main.png'])
				.setImage('attachment://main.png')
				.setFooter('Enter the number or word corresponding to the option\nyou\'d like to choose!');
			const embedMessage = await message.channel.send(menuEmbed);

			let optionPicked = false;

			while (!optionPicked) {
				const collected = await embedMessage.channel.awaitMessages(filter, { max: 1, time: 300000, errors: ['time'] });
				const response = collected.first().content.trim().toLocaleLowerCase();

				switch (response) {
				case '1':
				case 'pkmn':
				case 'party':
				case 'pokemon':
				case 'pokémon':
					optionPicked = true;
					bot.commands.get('pkmn').execute(message, args);
					break;
				case '2':
				case 'dex':
				case 'pokedex':
				case 'pokédex':
					optionPicked = true;
					bot.commands.get('dex').execute(message, args);
					break;
				case '3':
				case 'pc':
					optionPicked = true;
					bot.commands.get('pc').execute(message, args);
					break;
				case '4':
				case 'travel':
					optionPicked = true;
					bot.commands.get('travel').execute(Discord, message, args);
					break;
				case '5':
				case 'adv':
				case 'adventure':
					optionPicked = true;
					bot.commands.get('adventure').execute(message, args);
					break;
				case '6':
				case 'bag':
					optionPicked = true;
					bot.commands.get('bag').execute(message, args);
					break;
				case '7':
				case 'id':
				case 'i.d.':
				case 'i.d':
				case 'id.':
					optionPicked = true;
					bot.commands.get('id').execute(message, args);
					break;
				case '8':
				case 'misc':
					optionPicked = true;
					bot.commands.get('misc').execute(message, args);
					break;
				default:
					message.channel.send('>>> That option is not valid. Please try again!');
					break;
				}
			}
		}
		catch (e) {
			console.error(e);
			message.channel.send('>>> An error was encountered opening the menu. Please try again later!');
		}
	},
};
