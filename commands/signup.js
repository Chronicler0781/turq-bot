// const { User, Pokemon, DexEntry } = require('../models');

module.exports = {
	name: 'signup',
	description: 'this command generates the signup channel embeds',
	execute(Discord, bot, message) {

		// main function for 'signup' command, will not run until called.
		async function main() {
			try {

				const signupEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setAuthor('Gadari', bot.user.avatarURL())
					.setTitle('__Let\'s Get Started!__')
					.setDescription('Welcome to Leddin Town and to New Logora! My name is Gadari. Nice to meet you! No, none of that "Professor Gadari" nonsense; I\'m no professor. As a matter of fact I used to be a trainer of quite some renown, but now that I\'m retired I help new trainers like you get started by handing out these Pokédexes and special starter Pokémon. That\'s why you\'re here, correct? Wonderful! \
									\n\nNow, here are the Pokémon I have available. Choose wisely—this little fellow will likely become your Pokémon partner for life! (If you need to know a little more about your options, why not try out that new Pokédex and see what it says?)')
					.setImage('https://i.imgur.com/G9LRB6c.png');

				const acafiaEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setAuthor('NL PokéDex #001', 'https://i.imgur.com/G9LRB6c.png')
					.setTitle('__Acafia - The Thorn Bud Pokémon__')
					.setURL('http://turquoise.alteredorigin.net/pokemon/acafia/')
					.setDescription('**Type:** Grass')
					.addField('**PokéDex Entry:** ', 'Acafia rub their thorns against rocks and tree trunks to keep them sharp. The thorns are not very sturdy and can snap if used too roughly, but they will grow back in a few days\' time.')
					.setImage('http://turquoise.alteredorigin.net/images/pokemon/acafia.png');

				const crocoalEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setAuthor('NL PokéDex #004', 'https://i.imgur.com/G9LRB6c.png')
					.setTitle('__Crocoal - The Burn Cub Pokémon__')
					.setURL('http://turquoise.alteredorigin.net/pokemon/crocoal/')
					.setDescription('**Type:** Fire')
					.addField('**PokéDex Entry:** ', 'Crocoal are young and prone to bursting into flame without warning. The tips of this Pokémon\'s mane and tail are always smoldering as a result.')
					.setImage('http://turquoise.alteredorigin.net/images/pokemon/crocoal.png');

				const sprayletEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setAuthor('NL PokéDex #007', 'https://i.imgur.com/G9LRB6c.png')
					.setTitle('__Spraylet - The Seaspray Pokémon__')
					.setURL('http://turquoise.alteredorigin.net/pokemon/spraylet/')
					.setDescription('**Type:** Water')
					.addField('**PokéDex Entry:** ', 'Spraylet are still young and cannot control their impulse to screech when excited. They think they are brave and powerful when in reality they are still quite dependent on their parents or trainers.')
					.setImage('http://turquoise.alteredorigin.net/images/pokemon/spraylet.png');

				const reactEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setAuthor('Turq-Bot', bot.user.avatarURL())
					.setTitle('__Ready to Start?__')
					.setDescription('You\'ve made it this far, but you may be wondering, what next? It\'s actually pretty simple. By now, I imagine there must be one starter Pokémon you\'ve got your eye on, right? If not, take a few extra minutes to figure it out! \n\nOnce you know which starter you want, simply react to this message with the emoji of the starter of your choice and I\'ll send you a message shortly to get more info about your character.');

				// Send embeds to for signup to channel posted in.
				message.channel.send(signupEmbed);
				message.channel.send(acafiaEmbed);
				message.channel.send(crocoalEmbed);
				message.channel.send(sprayletEmbed);
				message.channel.send(reactEmbed).then(sentEmbed => {
					sentEmbed.react(sentEmbed.guild.emojis.cache.get('232033346409070592'));
					sentEmbed.react(sentEmbed.guild.emojis.cache.get('232034704730226689'));
					sentEmbed.react(sentEmbed.guild.emojis.cache.get('232034705199988756'));
				}).catch(console.error);


			}
			catch (e) {
				console.error(e);
			}
		}

		// run main function
		main().catch(console.error);

	},
};