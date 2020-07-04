module.exports = {
	name: 'dex',
	description: 'this command retrieves a link to the turquoise dex page of the specified pokemon',
	execute(message, args) {
		message.channel.send('http://turquoise.alteredorigin.net/pokemon/' + args[0] + '/');
	},
};