module.exports = {
	name: 'embed',
	description: 'this command retrieves a link to the turquoise dex page of the specified pokemon',
	// practice command for linking to the dex entry of a specified pokemon

	execute(Discord, message, args) {
        const ProgressBar = require('./ProgressBar.js');
        const progressBar = new ProgressBar(5, 100, 20); 
        //Create the bar
        let bar = progressBar.createBar();

        const male = message.guild.emojis.cache.find(emoji => emoji.name === "m_");
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Party Slot 1', 'http://turquoise.alteredorigin.net/forumstuff/sprites/pokeball.png')
        .setTitle(`Lvl. 5 Crocoal ${male}`)
        .setURL('http://turquoise.alteredorigin.net/pokemon/crocoal/')
        .setDescription('**HP:** 24/24')
        .addFields(
            { name: '__Info:__ ', value: '**Ability:** Blaze \
            \n**Nature:** Docile \
            \n**Nickname:** Fireboy \
            \n**OT:** Turqy Botswath', inline: true },
            { name: '__Moves__', value: 'Tackle, Howl, Tackle, Howl, Coal Scatter, Tackle, Howl, Coal Scatter, Tackle, Howl, Coal Scatter, Tackle, Howl', inline: true },
        )
        .setImage('http://turquoise.alteredorigin.net/images/pseudosprites/crocoal.png')
        .setFooter(`${bar}  •  Last Updated`, 'https://i.imgur.com/KK6AcrY.png')
        .setTimestamp();
        message.channel.send(exampleEmbed);
    },
};