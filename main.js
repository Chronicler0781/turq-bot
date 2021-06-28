// add discord.js files to use related commands, set prefix and token, and create bot to access discord
const Discord = require('discord.js');
const { prefix, token, uri } = require('./config.json');
const bot = new Discord.Client({
	restTimeOffset: 0,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
const runServer = require('./server');
const commandHandler = require('./bot/commandHandler');
const reactionHandler = require('./bot/reactionHandler');

// mongoose / mongodb setup
const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to mongodb');
});

// create commands collection so that command files can be executed from bot get call
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./bot/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./bot/commands/${file}`);
	bot.commands.set(command.name, command);
}

// log in Turq-Bot
bot.once('ready', () =>{
	console.log('Turq-Bot is online!');
});

// handle messages that the bot sees/receives on the server
bot.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	commandHandler(Discord, bot, message);
});

// handle reactions that the bot sees/receives on the server
bot.on('messageReactionAdd', async (reaction, user) => {
	reactionHandler(Discord, bot, reaction, user);
});

bot.login(token);
runServer();

// run pokemon showdown build, then change working directory back to main
require('./node_modules/pokemon-showdown/build');
setTimeout(() => {
	process.chdir(__dirname);
	console.log('Turq-Bot is ready to receive commands.');
}, 10000);