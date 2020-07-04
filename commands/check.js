module.exports = {
	name: 'check',
	description: 'this command retrieves profile content for the author or a tagged user',
	execute(message, args) {

		const MongoClient = require('mongodb').MongoClient;

		async function main() {

			const uri = 'mongodb+srv://turqbot:turquoise2007@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority';
			const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

			try {
				await client.connect();

				switch(args[0]) {

				case 'profile':
					if (typeof message.mentions.users.first() == 'undefined') {
						const userID = message.author.id;
						const result = await findProfilebyID(client, userID);
						message.channel.send(`>>> __Profile of ${message.author.username}__ \
							\n**Name:** ${result.Name} \
							\n**Age:** ${result.Age} \
							\n**Gender:** ${result.Gender}`);
					}
					else {
						const taggedUser = message.mentions.users.first();
						const userID = taggedUser.id;
						const result = await findProfilebyID(client, userID);
						message.channel.send(`>>> __Profile of: ${taggedUser.username}__ \
							\n**Name:** ${result.Name} \
							\n**Age:** ${result.Age} \
							\n**Gender:** ${result.Gender}`);
					}
					break;

				case 'party':
				}

			}
			catch (e) {
				console.error(e);
			}
			finally {
				await client.close();
			}
		}

		main().catch(console.error);

		async function findProfilebyID(client, userID) {
			const result = await client.db('turqdb').collection('profiles').findOne({ _id: userID });
			if (result) {
				console.log(`Found a profile associated with UserID: '${userID}'`);
				return result;
			}
			else {
				console.log(`No profile found with the UserID: '${userID}'`);
			}
		}

	},
};