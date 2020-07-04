const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command);
}


bot.once('ready', () =>{
	console.log('Turq-Bot is online!');
});

bot.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
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

	case 'server':
		bot.commands.get('server').execute(message);
		break;

	case 'user-info':
		bot.commands.get('user-info').execute(message, args);
		break;

	}

});


bot.login(token);