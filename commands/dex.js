module.exports = {
	name: 'dex',
	description: 'this command retrieves a link to the turquoise dex page of the specified pokemon',
	// practice command for linking to the dex entry of a specified pokemon

	execute(message, args) {
		if (args.length > 0) {
			message.channel.send('http://turquoise.alteredorigin.net/pokemon/' + args[0].toLowerCase() + '/');
		}
	},
};