module.exports = {
	name: 'server',
	description: 'this command retrieves the server name and community size.',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	},
};