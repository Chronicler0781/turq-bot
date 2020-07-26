const { User } = require("../models");

module.exports = {
	name: 'check',
	description: 'this command retrieves profile content for the author or a tagged user',
	execute(message, args) {

		// add client commands for mongodb
		async function main() {
			try {
				// read first argument to figure out what is to be checked
				if (args.length > 0) {
					switch(args[0].toLowerCase()) {

					case 'profile':
						const taggedUser = message.mentions.users.first() 
							|| message.author.id;
						const userID = taggedUser.id;
						const result = await User.findById(userID);
						message.channel.send(`>>> __Profile of: ${taggedUser.username}__ \
							\n**Name:** ${result.name} \
							\n**Age:** ${result.age} \
							\n**Gender:** ${result.gender}`);
						break;
					case 'party':
						message.channel.send('to be implemented...')
					}
				}
			}
			catch (e) {
				console.error(e);
			}
		}

		main().catch(console.error);
	},
};