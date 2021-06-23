// add discord.js files to use related commands, set prefix and token, and create bot to access discord
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client({
	restTimeOffset: 0,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
const runServer = require('./server');
const createProfile = require('./bot/functions/createProfile.js');


// mongoose / mongodb setup
const mongoose = require('mongoose');
const conf = require('./config.json');
mongoose.connect(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to mongodb');
});

// create commands collection so that command files can be referenced from command folder
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./bot/commands/').filter(file => file.endsWith('.js'));

// add command files to collection for execution
for(const file of commandFiles) {
	const command = require(`./bot/commands/${file}`);
	bot.commands.set(command.name, command);
}

// log in Turq-Bot
bot.once('ready', () =>{
	console.log('Turq-Bot is online!');
});

// Set messageID for sign-up channel, and ID for trainer role to add
const signUpMessageID = conf.signupMessageID;
const trainerRole = conf.trainerRoleID;

// handle messages that the bot sees/receives on the server
bot.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// remove prefix, set words that are spaced apart as separate strings in args array
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command) {
	case 'dex':
		bot.commands.get('dex').execute(message, args);
		break;
	// temporary command used to heal party until a menu with pokemon center access is added
	case 'heal':
		bot.commands.get('heal').execute(message);
		break;
	case 'help':
		bot.commands.get('help').execute(message, args);
		break;
	case 'map':
		bot.commands.get('map').execute(Discord, message, args, fs);
		break;
	// temporary command used to force exit a wild battle if a battle errors out while debugging
	case 'run':
		bot.commands.get('run').execute(message);
		break;
	// typically only used once to create signup channel messages
	case 'signup':
		if (!signUpMessageID) bot.commands.get('signup').execute(message, args);
		else message.channel.send('>>> Error: A signup channel has already been registered for this server. Please check the github ReadMe for information on this.');
		break;
	case 'wild':
		bot.commands.get('wild').execute(Discord, bot, message);
		break;
	default:
		message.channel.send(`>>> Error: The command, ${command}, is not recognized. Please check your spelling or enter '${prefix}help' for a full list of commands.`);
		console.log('Command not found');
		break;
	}
});

// handle reactions that the bot sees/receives on the server
bot.on('messageReactionAdd', async (reaction, user) => {

	if (reaction.message.partial) {
		try {
			const msg = await reaction.message.fetch();

			if (msg.id === signUpMessageID) {
				console.log('Cached');
				await createProfile(Discord, bot, user, trainerRole, reaction);
			}
		}
		catch (err) {
			console.log(err);
		}
	}
	else {
		try {
			if (reaction.message.id === signUpMessageID) {
				console.log('Not a Partial');
				await createProfile(Discord, bot, user, trainerRole, reaction);
			}
		}
		catch (err) {
			console.log(err);
		}
	}
});

bot.login(token);
runServer();

require('./node_modules/pokemon-showdown/build');
setTimeout(() => {
	process.chdir(__dirname);
}, 5000);