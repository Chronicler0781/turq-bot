// add discord.js files to use related commands, set prefix and token, and create bot to access discord
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client({
	restTimeOffset: 0,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
const runServer = require('./server');


// mongoose / mongodb setup
const mongoose = require('mongoose');
const conf = require('./config.json');
mongoose.connect(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to mongodb');
});

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

	case 'check':
		bot.commands.get('check').execute(message, args);
		break;

	case 'dex':
		bot.commands.get('dex').execute(message, args);
		break;

	case 'help':
		bot.commands.get('help').execute(message, args);
		break;

	case 'map':
		bot.commands.get('map').execute(Discord, message, args, fs);
		break;

	case 'travel':
		bot.commands.get('travel').execute(Discord, message, args);
		break;

	case 'wild':
		bot.commands.get('wild').execute(Discord, bot, message);
		break;

	// if no command found, return message
	default:
		message.channel.send(`>>> The command, ${command}, is not recognized. Please check your spelling or enter '-help' for a full list of commands.`);
		console.log('Command not found');
		break;
	}

});


// Set messageID for sign-up channel, and ID for trainer role to add
const MessageNumber = '749970227898351648';
const trainerRole = '749977507876438107';

// Watch for reactions to sign-up channel
bot.on('messageReactionAdd', async (reaction, user) => {

	// function for starting profile creation if user reacts
	const createProfile = async () => {
		const emojiName = reaction.emoji.name;
		console.log(emojiName);
		const member = await reaction.message.guild.members.fetch(user.id);
		console.log(member);
		let reactionValues = null;
		let userReactedAlready = null;


		if (member) {
			console.log('Role and Member Found');

			// Create array with starters not chosen and boolean for a starter react having been chosen
			const starters = ['acafia', 'crocoal', 'spraylet'];
			const emojiStarter = starters.includes(emojiName);
			const starterIndex = starters.indexOf(emojiName);
			if (starterIndex > -1) {
				starters.splice(starterIndex, 1);
			}
			console.log(starters);

			// Find reactions of message, get user if anotther starter has already been reacted to
			reactionValues = Array.from(reaction.message.reactions.cache.values());
			for (let i = 0; i < reactionValues.length; i++) {
				if (reactionValues[i]._emoji.name === starters[0] || reactionValues[i]._emoji.name == starters[1]) {
					userReactedAlready = reactionValues[i].users.cache.find(mem => mem.id == user.id);
					if (userReactedAlready) {
						break;
					}
				}
			}

			// Find roles of user, get user if trainer role is already given
			const memberTrainer = member.roles.cache.find(r => r.id === trainerRole);
			console.log(memberTrainer);

			// Continue, otherwise send error messages if starter react not chosen, user has already reacted to another starter, or is already a trainer.
			if (emojiStarter === true) {
				if (!userReactedAlready) {
					if (!memberTrainer) {
						await member.roles.add(trainerRole);
						console.log('New profile about to be created');
						bot.commands.get('new').execute(Discord, bot, member, emojiName, trainerRole, reaction);
					}
					else {
						member.send('You are already a Trainer. If you do not have a profile created yet, please finish or quit the profile creation that you\'ve already started.');
						reaction.users.remove(user.id);
					}
				}
				else {
					member.send('You have already reacted to another starter. If you do not have a profile created yet and would like to swich starters, please quit your current profile creation and remove the react of the previous starter you chose.');
					reaction.users.remove(user.id);
				}
			}
			else {
				member.send('Please only react to the sign-up channel with a starter emoji.');
				reaction.remove();
			}
		}
	};

	if (reaction.message.partial) {
		try {
			const msg = await reaction.message.fetch();
			if (msg.id === MessageNumber) {
				console.log('Cached');
				createProfile();
			}
		}
		catch (err) {
			console.log(err);
		}
	}
	else {
		if (reaction.message.id === MessageNumber) {
			console.log('Not a Partial');
			createProfile();
		}
	}
});

bot.login(token);
runServer();