const { User } = require('../models');

module.exports = {
	name: 'check',
	description: 'this command retrieves profile content for the author or a tagged user',
	execute(message, args) {

		// add client commands for mongodb
		async function main() {
			try {
				// read first argument to figure out what is to be checked
				if (args.length > 0) {
					const taggedUser = message.author.id;
					const userID = taggedUser.id;
					const user = await User.findById(userID);

					switch(args[0].toLowerCase()) {

					case 'profile':
						message.channel.send(`>>> __Profile of: ${taggedUser.username}__ \
							\n**Name:** ${user.name} \
							\n**Age:** ${user.age} \
							\n**Gender:** ${user.gender}`);
						break;
					case 'party':
						message.channel.send('to be implemented...');
						break;
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