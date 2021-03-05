Turq-Bot - The Discord Pokémon FanGame Engine
========================================================================

Navigation: [Discord Server][1] | [Turquoise Dex][2] | [Pokémon Showdown Fork][3]

   [1]: https://discord.gg/5SuaqNh
   [2]: http://turquoise.alteredorigin.net/
   [3]: https://github.com/nbely/pokemon-showdown#pok%C3%A9mon-showdown


Introduction
------------------------------------------------------------------------
**What exactly is the Turq-Bot?**

- Turq-Bot is a node.js application that interfaces with the Discord API to provide custom responses to user-entered commands that advance the player in a fully-built game. 

**What else does it do?**

- Turq-Bot is designed for easy setup with a MongoDB database, and hosts several model schemas for storing player and game data in an efficient way.

- Turq-Bot is to be paired with a React-based web-application. This web application will have a user interface for viewing player profile information, as well as a log of a player's adventure.

- Turq-Bot interacts frequently with a customized Pokémon Showdown forked repository. This fork was altered so that simulated battles can be paused, resumed, or altered as per the demands of a full-scope Pokémon game. 

- Turq-Bot was implemented with the fan-made New Logora Pokémon region in mind, but can really be adapted for any custom region. Keep in mind that custom Pokémon, moves, abilities, or items will need to be coded into a fork of our Pokémon Showdown Fork to be available.

Turq-Bot - Standard Game Set-Up
------------------------------------------------------------------------

**Coming Soon!**


Turq-Bot - Custom Game Set-Up
------------------------------------------------------------------------
First install [Node.js](http://nodejs.org/) and [MongoDB](https://www.mongodb.org/downloads). If you plan on creating your own bot for a custom game, you'll also need to [Setup a Discord Bot](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js) (Step 1 ONLY). Then clone this repository and run:

```sh
$ npm install
```

You will need to create a `config.json` file in the project root directory:

```js
{
    "prefix": "-",
    "token": "Enter custom Discord Bot Token here",
    "uri": "Enter custom MongoDB ",
    "signupMessageID": "",
    "trainerRoleID": ""
}
```

Once you've gotten your Discord Bot and MongoDB up and running, there are two things you'll need to do:

1. Create a trainer role in your discord server and add the role ID to the `trainerRoleID` property of your `config.json` file.

2. Create a new channel and run the '-signup' command inside the channel (you can delete your command afterwards). The last message posted by the bot will need its message ID copied and pasted into the `signupMessageID` property of your `config.json` file.

**More Coming Soon!**

Credits
------------------------------------------------------------------------

**Core Staff**

- [Luceta Taav] - Development, Design
- Nick Bely [Chronicler] - Development, Design,
- [dazel] - Development
- [Kaelyn] - Development
- [Eve] - Development

**Other Credits**

- Pokémon Showdown Team - for Pokémon Battle Simulator Base
- Phoenixsong - for immense character, Pokémon, region, and story contributions
    - Visit [Altered Origin][4] or the [PhoenixDex][5] for more of her work!

    [4]: https://alteredorigin.net/
    [5]: https://phoenixdex.alteredorigin.net/
