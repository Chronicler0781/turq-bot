module.exports = {
	name: 'server',
	description: 'this command retrieves the server name and community size.',
	// command created for practice, will most likely be removed in future

	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},

};