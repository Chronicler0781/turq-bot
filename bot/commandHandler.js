const { prefix, signUpMessageID } = require('../config.json');

module.exports = function commandHandler(Discord, bot, message) {

	// remove prefix, set words that are spaced apart as separate strings in args array
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLocaleLowerCase();

	switch(command) {

	// Tier 0 Commands:
	case 'menu':
		bot.commands.get('menu').execute(Discord, bot, message, args);
		break;
		// Children: All Tier 1 Commands


	// Tier 1 Commands
	case 'pkmn':
		bot.commands.get('pkmn').execute(message, args);
		break;
		// Children: Tier 2 Command(s): check, swap, give, take, use
	case 'dex':
		bot.commands.get('dex').execute(message, args);
		break;
		// Children: Tier 2 Command(s): habitat
	case 'pc':
		bot.commands.get('pc').execute(message, args);
		break;
		// Children: Tier 2 Command(s): check, swap, give, take, release
	case 'travel':
		bot.commands.get('travel').execute(Discord, message, args);
		break;
		// Children: Tier 2 Command(s): fly, ferry, habitat
	case 'adv':
	case 'adventure':
		bot.commands.get('adventure').execute(message, args);
		break;
		// Children: Tier 2 Command(s): wild, trainer, gym, elitefour, quests, center, shop
	case 'bag':
		bot.commands.get('bag').execute(message, args);
		break;
		// Children: Tier 2 Command(s): -use, -give, -destroy
	case 'id':
		bot.commands.get('id').execute(message, args);
		break;
		// Children: Tier 2 Command(s): -profile, -log
	case 'misc':
		bot.commands.get('misc').execute(message, args);
		break;
		// Children: Tier 2 Command(s): -credits, -support, -help


	// Tier 2 Commands
	// temporary command used to heal party until a menu with pokemon center access is added
	case 'center':
		bot.commands.get('center').execute(message);
		break;
	case 'check':
		bot.commands.get('check').execute(message);
		break;
	case 'credits':
		bot.commands.get('credits').execute(message);
		break;
	case 'destroy':
		bot.commands.get('destroy').execute(message);
		break;
	case 'elitefour':
		bot.commands.get('elitefour').execute(message);
		break;
	case 'ferry':
		bot.commands.get('ferry').execute(message);
		break;
	case 'fly':
		bot.commands.get('fly').execute(message);
		break;
	case 'give':
		bot.commands.get('give').execute(message);
		break;
	case 'gym':
		bot.commands.get('gym').execute(message);
		break;
	case 'habitat':
		bot.commands.get('habitat').execute(message);
		break;
	case 'log':
		bot.commands.get('log').execute(message);
		break;
	case 'profile':
		bot.commands.get('profile').execute(message);
		break;
	case 'release':
		bot.commands.get('release').execute(message);
		break;
	case 'shop':
		bot.commands.get('shop').execute(message);
		break;
	case 'support':
		bot.commands.get('support').execute(message);
		break;
	case 'swap':
		bot.commands.get('swap').execute(message);
		break;
	case 'take':
		bot.commands.get('take').execute(message);
		break;
	case 'trainer':
		bot.commands.get('trainer').execute(message);
		break;
	case 'use':
		bot.commands.get('use').execute(message);
		break;
	case 'wild':
		bot.commands.get('wild').execute(Discord, bot, message);
		break;


	// Miscellaneous Commands:
	case 'help':
		bot.commands.get('help').execute(message, args);
		break;
	// temporary command used to force exit a wild battle if a battle errors out while debugging
	case 'run':
		bot.commands.get('run').execute(message);
		break;
	// Only used once to create signup channel messages
	case 'signup':
		// Add requirements for staff role from config
		if (!signUpMessageID) bot.commands.get('signup').execute(message, args);
		else message.channel.send('>>> Error: A signup channel has already been registered for this server. Please check the github ReadMe for more information.');
		break;


	default:
		message.channel.send(`>>> Error: The command, ${command}, is not recognized. Please check your spelling or enter '${prefix}help' for a full list of commands.`);
		console.log('Command not found');
		break;
	}
};
