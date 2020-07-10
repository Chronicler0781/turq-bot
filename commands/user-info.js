module.exports = {
	name: 'user-info',
	description: 'this command retrieves user-based discord info regarding either the author or a tagged user',
	// command created for practice, will most likely be removed in future

	execute(message, args) {
		if (!args.length) {
			message.channel.send(`>>> Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
		}
		else {
			const taggedUser = message.guild.members.cache.find(m => m.user.tag === args[0]).user;
			message.channel.send(`>>> Tagged username: ${taggedUser.username}\nTagged ID: ${taggedUser.id}`);
		}
	},

};