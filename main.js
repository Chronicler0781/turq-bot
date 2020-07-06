// add discord.js files to use related commands, set prefix and token, and create bot to access discord
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');

// create commands collection so that command files can be referenced from command folder
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// add command files to collection for execution
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

// log in Turq-Bot
bot.once('ready', () =>{
	console.log('Turq-Bot is online!');
});

// watch for messages that start with the config file prefix or were posted by the bot
bot.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// remove prefix, set words that are spaced apart as separate strings in args array
	const args = message.content.slice(prefix.length).split(/ +/);
	// set first argument to lowercase command
	const command = args.shift().toLowerCase();

	switch(command) {

	case 'dex':
		bot.commands.get('dex').execute(message, args);
		break;

	case 'help':
		bot.commands.get('help').execute(message, args);
		break;

	case 'new':
		bot.commands.get('new').execute(message, args);
		break;

	case 'check':
		bot.commands.get('check').execute(message, args);
		break;

	case 'embed':
		bot.commands.get('embed').execute(Discord, message, args);
		break;

	case 'server':
		bot.commands.get('server').execute(message);
		break;

	case 'user-info':
		bot.commands.get('user-info').execute(message, args);
		break;
	
	// if no command found, return message
	default:
		message.channel.send(`The command, ${command}, is not recognized. Please check your spelling or enter '-help' for a full list of commands.`);
		break;
	}

});


bot.login(token);