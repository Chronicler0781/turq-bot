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

	case 'new':
		// check to see if user has the required staff roles needed to use the new command
		if(message.member.roles.cache.some(role => role.name === 'Administrator') || message.member.roles.cache.some(role => role.name === 'Global Mod') || message.member.roles.cache.some(role => role.name === 'RPG Mod')) {
			// message.channel.send(`Member ${message.member.user.username} is recognized as an Administrator. A profile will be created.`);
			bot.commands.get('new').execute(Discord, bot, message, args);
		}
		else {
			message.channel.send(`>>> You do not have the required role(s) needed to use the '${command}' command.`);
		}
		break;

	case 'server':
		bot.commands.get('server').execute(message);
		break;

	case 'travel':
		bot.commands.get('travel').execute(Discord, message, args);
		break;

	case 'user-info':
		bot.commands.get('user-info').execute(message, args);
		break;

	case 'wild':
		bot.commands.get('wild').execute(Discord, message);
		break;

	// if no command found, return message
	default:
		message.channel.send(`>>> The command, ${command}, is not recognized. Please check your spelling or enter '-help' for a full list of commands.`);
		break;
	}

});


bot.login(token);



const express = require('express')
var cors = require('cors')

const app = express()
const port = 3001

const MongoClient = require('mongodb').MongoClient;
const conf = require('./config.json');
const client = new MongoClient(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.get('/profile/:id', async (req, res) => {
	await client.connect();
	const id = req.params.id;
	try {
		const data = await client.db('turqdb').collection('profiles').findOne({ _id: id });
		return res.json({data});
	}
	catch (e)
	{
		return res.json({e});
	}
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))