module.exports = {
	name: 'wild',
	description: 'this command generates a wild pokemon battle depending on where a user is',

	execute(Discord, message) {

		// add client commands for mongodb
		const MongoClient = require('mongodb').MongoClient;
		const gen_pokemon = require('./pokeinfo/gen_pokemon.js');

		async function main() {

			// connect to mongodb
			const uri = 'mongodb+srv://USERNAME:PASSWORD@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority';
			const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

			try {
				await client.connect();

				// retrieve user profile from database
				const userID = message.author.id;
				const profile = await findProfilebyID(client, userID);

				if (profile.BattleID == '' || profile.BattleID !== 'None') {

					// choose a numbers between 1-100 to determine the wild slot, held item chance, and evolution stage chance
					const WildResult = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
					const ItemResult = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
					const stage1 = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
					const stage2 = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

					// use the levelcalc function to determine the wild level of the pokemon
					let WildLevel = await levelcalc(client, profile);

					// set wildpoke and default held item values
					let wildpoke = [];
					let helditem = 'None';

					// remove spaces and lowercases from location and area profile fields for switch comparisons
					const location = profile.Location.replace(/\s/g, '').toLowerCase();
					const area = profile.Area.replace(/\s/g, '').toLowerCase();

					// switch-case statement for determining which wild list to use and picking a pokemon based on its rarity
					switch(location) {

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 600: auriole line 40, dustley line 30, kizziff line 20, tinimer 10
					case 'route600':
						if (WildResult > 0 && WildResult < 41) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 40 && WildResult < 71) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 70 && WildResult < 91) {
							if (WildLevel < 10 || (WildLevel < 20 && stage1 < 51) || (WildLevel > 19 && stage2 < 34)) {
								wildpoke = 'kizziff';
							}
							else if ((WildLevel < 20 && stage1 > 50) || (WildLevel > 19 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'murgaz';
							}
							else if (WildLevel > 19 && stage2 > 66) {
								wildpoke = 'chaszin';
								if (ItemResult < 6) {
									helditem = 'Poison Barb';
								}
							}
						}
						else if (WildResult > 90) {
							wildpoke = 'tinimer';
							if (WildLevel < 3) {
								WildLevel = 3;
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 600: auriole line 40, dustley line 30, kizziff line 20, tinimer 10
					case 'dingbatcave':
						switch(area) {

						// Dingbat Cave (Upper Caverns): bucarat line 30, paras line 30, dustley line 25, gravendou line 15
						case 'uppercaverns':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 22 || stage1 < 51) {
									wildpoke = 'bucarat';
									if (WildLevel < 3) {
										WildLevel = 3;
									}
								}
								else if (WildLevel > 21 && stage1 > 50) {
									wildpoke = 'mortarat';
								}
								if (ItemResult < 6) {
									helditem = 'Black Sludge';
								}
							}
							else if (WildResult > 30 && WildResult < 61) {
								if (WildLevel < 24 || stage1 < 51) {
									wildpoke = 'paras';
									if (WildLevel < 3) {
										WildLevel = 3;
									}
								}
								else if (WildLevel > 23 && stage1 > 50) {
									wildpoke = 'parasect';
								}
								if (ItemResult < 51) {
									helditem = 'Tinymushroom';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Big Mushroom';
								}
							}
							else if (WildResult > 60 && WildResult < 86) {
								if (WildLevel < 20 || stage1 < 51) {
									wildpoke = 'dustley';
									if (WildLevel < 3) {
										WildLevel = 3;
									}
									if (ItemResult < 6) {
										helditem = 'Oran Berry';
									}
								}
								else if (WildLevel > 19 && stage1 > 50) {
									wildpoke = 'aculago';
									if (ItemResult < 51) {
										helditem = 'Oran Berry';
									}
									else if (ItemResult > 50 && ItemResult < 56) {
										helditem = 'Sitrus Berry';
									}
								}
							}
							else if (WildResult > 85) {
								if (WildLevel < 18 || (WildLevel < 36 && stage1 < 51) || (WildLevel > 35 && stage2 < 34)) {
									wildpoke = 'gravendou';
									if (WildLevel < 3) {
										WildLevel = 3;
									}
								}
								else if ((WildLevel < 36 && stage1 > 50) || (WildLevel > 35 && stage2 > 33 && stage2 < 67)) {
									wildpoke = 'cragendou';
								}
								else if (WildLevel > 35 && stage2 > 66) {
									wildpoke = 'quarendou';
								}
								if (ItemResult < 6) {
									helditem = 'Sticky Barb';
								}
							}
							break;

						// Dingbat Cave (Lower Caverns): bucarat line 25, aron line 20, beddybite line 20, dasfix line 10, misdreavus 10, sableye/petrocka 5ea, derfin 5
						case 'lowercaverns':
							if (WildResult > 0 && WildResult < 26) {
								if (WildLevel < 22 || stage1 < 51) {
									wildpoke = 'bucarat';
									if (WildLevel < 18) {
										WildLevel = 18;
									}
								}
								else if (WildLevel > 21 && stage1 > 50) {
									wildpoke = 'mortarat';
								}
								if (ItemResult < 6) {
									helditem = 'Black Sludge';
								}
							}
							else if (WildResult > 25 && WildResult < 46) {
								if (WildLevel < 32 || (WildLevel < 42 && stage1 < 51) || (WildLevel > 41 && stage2 < 34)) {
									wildpoke = 'aron';
									if (WildLevel < 18) {
										WildLevel = 18;
									}
								}
								else if ((WildLevel < 42 && stage1 > 50) || (WildLevel > 41 && stage2 > 33 && stage2 < 67)) {
									wildpoke = 'lairon';
								}
								else if (WildLevel > 35 && stage2 > 66) {
									wildpoke = 'aggron';
								}
								if (ItemResult < 6) {
									helditem = 'Hard Stone';
								}
							}
							else if (WildResult > 45 && WildResult < 66) {
								if (WildLevel < 32 || stage1 < 51) {
									wildpoke = 'beddybite';
									if (WildLevel < 18) {
										WildLevel = 18;
									}
								}
								else if (WildLevel > 31 && stage1 > 50) {
									wildpoke = 'bitemare';
								}
							}
							else if (WildResult > 65 && WildResult < 76) {
								if (WildLevel < 36 || stage1 < 51) {
									wildpoke = 'dasfix';
									if (WildLevel < 18) {
										WildLevel = 18;
									}
								}
								else if (WildLevel > 35 && stage1 > 50) {
									wildpoke = 'malraja';
								}
							}
							else if (WildResult > 75 && WildResult < 86) {
								wildpoke = 'misdreavus';
								if (WildLevel < 20) {
									WildLevel = 20;
								}
							}
							else if (WildResult > 85 && WildResult < 96) {
								if (WildLevel < 25 || stage1 < 51) {
									wildpoke = 'sableye';
									if (WildLevel < 20) {
										WildLevel = 20;
									}
									if (ItemResult < 6) {
										helditem = 'Dark Gem';
									}
								}
								else if (WildLevel > 24 && stage1 > 50) {
									wildpoke = 'petrocka';
								}
							}
							else if (WildResult > 95) {
								wildpoke = 'derfin';
								if (WildLevel < 15) {
									WildLevel = 15;
								}
								if (WildLevel > 20) {
									WildLevel = 20;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 601 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
					case 'route601':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 602 (Grass): gowatu line 25, auriole line 20, dustley line 20, espurr line 15, petilil 10, buneary 10
					case 'route602':
						if (WildResult > 0 && WildResult < 26) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'gowatu';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'turatal';
							}
						}
						else if (WildResult > 25 && WildResult < 46) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 45 && WildResult < 66) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 65 && WildResult < 81) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'espurr';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'meowstic';
							}
						}
						else if (WildResult > 80 && WildResult < 91) {
							wildpoke = 'petilil';
							if (WildLevel < 5) {
								WildLevel = 5;
							}
						}
						else if (WildResult > 90) {
							wildpoke = 'buneary';
							if (WildLevel < 5) {
								WildLevel = 5;
							}
							if (ItemResult < 6) {
								helditem = 'Chople Berry';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 603 / Denath Plains: gowatu line 30, mefflora line 24, espurr line 15, natu line 10, petilil 10, buneary/kangaskhan 10, cherubi line 1
					case 'route603':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'gowatu';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'turatal';
							}
						}
						else if (WildResult > 30 && WildResult < 55) {
							if (WildLevel < 20 || (WildLevel < 31 && stage1 < 51) || (WildLevel > 30 && stage2 < 34)) {
								wildpoke = 'mefflora';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 31 && stage1 > 50) || (WildLevel > 30 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'mephodil';
							}
							else if (WildLevel > 30 && stage2 > 66) {
								wildpoke = 'spilotalis';
							}
							if (ItemResult < 6) {
								helditem = 'Pecha Barb';
							}
						}
						else if (WildResult > 54 && WildResult < 70) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'espurr';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'meowstic';
							}
						}
						else if (WildResult > 69 && WildResult < 80) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'natu';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'xatu';
							}
						}
						else if (WildResult > 79 && WildResult < 90) {
							wildpoke = 'petilil';
							if (WildLevel < 8) {
								WildLevel = 8;
							}
						}
						else if (WildResult > 89 && WildResult < 100) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'buneary';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
								if (ItemResult < 6) {
									helditem = 'Chople Berry';
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'kangaskhan';
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'cherubi';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'cherrim';
							}
							if (ItemResult < 6) {
								helditem = 'Miracle Seed';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'ambalchitemple':
						switch(area) {

						// Ambalchi Gardens (Gardens): gowatu line 30, mefflora line 25, exeggcute 20, petilil 15, cherubi line 10
						case 'gardens':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 25 || stage1 < 51) {
									wildpoke = 'gowatu';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 24 && stage1 > 50) {
									wildpoke = 'turatal';
								}
							}
							else if (WildResult > 30 && WildResult < 56) {
								if (WildLevel < 20 || (WildLevel < 31 && stage1 < 51) || (WildLevel > 30 && stage2 < 34)) {
									wildpoke = 'mefflora';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if ((WildLevel < 31 && stage1 > 50) || (WildLevel > 30 && stage2 > 33 && stage2 < 67)) {
									wildpoke = 'mephodil';
								}
								else if (WildLevel > 30 && stage2 > 66) {
									wildpoke = 'spilotalis';
								}
								if (ItemResult < 6) {
									helditem = 'Pecha Barb';
								}
							}
							else if (WildResult > 55 && WildResult < 76) {
								wildpoke = 'exeggcute';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 75 && WildResult < 91) {
								wildpoke = 'petilil';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 90) {
								if (WildLevel < 25 || stage1 < 51) {
									wildpoke = 'cherubi';
									if (WildLevel < 8) {
										WildLevel = 8;
									}
								}
								else if (WildLevel > 24 && stage1 > 50) {
									wildpoke = 'cherrim';
								}
								if (ItemResult < 6) {
									helditem = 'Miracle Seed';
								}
							}
							break;

						// Ambalchi Gardens (Ruins): parasect 40, turatal 35, mephodil line 20, unown dghvwy 5
						case 'ruins':
							if (WildResult > 0 && WildResult < 41) {
								wildpoke = 'parasect';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
								if (ItemResult < 51) {
									helditem = 'Tinymushroom';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Big Mushroom';
								}
							}
							else if (WildResult > 40 && WildResult < 76) {
								wildpoke = 'turatal';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildResult > 75 && WildResult < 96) {
								if (WildLevel < 31 || stage2 < 51) {
									wildpoke = 'mephodil';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 30 && stage1 > 50) {
									wildpoke = 'spilotalis';
								}
								if (ItemResult < 6) {
									helditem = 'Pecha Berry';
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (6 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownd';
								}
								else if (unowntype == 2) {
									wildpoke = 'unowng';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownh';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownv';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownw';
								}
								else if (unowntype == 6) {
									wildpoke = 'unowny';
								}
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							break;

						// Ambalchi Gardens (Shrine): unown dghvwy 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (6 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownd';
								}
								else if (unowntype == 2) {
									wildpoke = 'unowng';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownh';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownv';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownw';
								}
								else if (unowntype == 6) {
									wildpoke = 'unowny';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 604: gowatu line 30, auriole line 25, dustley line 20, natu line 10, nincada line 10, pachirisu 5
					case 'route604':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'gowatu';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'turatal';
							}
						}
						else if (WildResult > 30 && WildResult < 56) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 55 && WildResult < 76) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'natu';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'xatu';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'nincada';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'ninjask';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'pachirisu';
							if (WildLevel < 7) {
								WildLevel = 7;
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 605 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
					case 'route605':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 606: auriole line 30, paras line 20, gowatu line/josuche 15, curlsa line 10, nincada line 10, pachirisu 10, minijina line 5
					case 'route606':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 30 && WildResult < 51) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'paras';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'parasect';
							}
							if (ItemResult < 51) {
								helditem = 'Tinymushroom';
							}
							else if (ItemResult > 50 && ItemResult < 56) {
								helditem = 'Big Mushroom';
							}
						}
						else if (WildResult > 50 && WildResult < 66) {
							if (WildLevel < 25 || (WildLevel < 30 && stage1 < 51)) {
								wildpoke = 'gowatu';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel < 30 && stage1 > 50) {
								wildpoke = 'turatal';
							}
							else if (WildLevel > 29) {
								wildpoke = 'josuche';
								if (ItemResult < 51) {
									helditem = 'Pretty Wing';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Silverpowder';
								}
							}
						}
						else if (WildResult > 65 && WildResult < 76) {
							if (WildLevel < 22 || (WildLevel < 38 && stage1 < 51) || (WildLevel > 37 && stage2 < 34)) {
								wildpoke = 'curlsa';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 38 && stage1 > 50) || (WildLevel > 37 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'coiffaire';
							}
							else if (WildLevel > 37 && stage2 > 66) {
								wildpoke = 'ostento';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'nincada';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'ninjask';
							}
						}
						else if (WildResult > 65 && WildResult < 96) {
							wildpoke = 'pachirisu';
							if (WildLevel < 7) {
								WildLevel = 7;
							}
						}
						else if (WildResult > 95) {
							if (WildLevel < 25 || (WildLevel < 40 && stage1 < 51) || (WildLevel > 39 && stage2 < 34)) {
								wildpoke = 'minijina';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 40 && stage1 > 50) || (WildLevel > 39 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'bojina';
							}
							else if (WildLevel > 39 && stage2 > 66) {
								wildpoke = 'noperajina';
							}
							if (ItemResult < 6) {
								helditem = 'Spell Tag';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'acoatyltower':
						switch(area) {

						// Acoatyl Tower (Lower Floors): auriole line 30, natu line 20, transmite 15, tianglis 15, farfetch'd line 10, chatot line 10
						case 'lowerfloors':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 24 || stage1 < 51) {
									wildpoke = 'auriole';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 23 && stage1 > 50) {
									wildpoke = 'icauriole';
								}
								if (ItemResult < 6) {
									helditem = 'Wacan Berry';
								}
							}
							else if (WildResult > 30 && WildResult < 51) {
								if (WildLevel < 25 || stage1 < 51) {
									wildpoke = 'natu';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 24 && stage1 > 50) {
									wildpoke = 'xatu';
								}
							}
							else if (WildResult > 50 && WildResult < 66) {
								wildpoke = 'transmite';
								if (WildLevel < 13) {
									WildLevel = 13;
								}
							}
							else if (WildResult > 65 && WildResult < 81) {
								wildpoke = 'tianglis';
								if (WildLevel < 13) {
									WildLevel = 13;
								}
							}
							else if (WildResult > 80 && WildResult < 91) {
								if (WildLevel < 37 || stage1 < 51) {
									wildpoke = 'farfetch\'d';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 36 && stage1 > 50) {
									wildpoke = 'rapscalion';
								}
								if (ItemResult < 6) {
									helditem = 'Stick';
								}
							}
							else if (WildResult > 90) {
								if (WildLevel < 37 || stage1 < 51) {
									wildpoke = 'chatot';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 36 && stage1 > 50) {
									wildpoke = 'lyrissimo';
								}
								if (ItemResult < 6) {
									helditem = 'Metronome';
								}
							}
							break;

							// Acoatyl Tower (Upper Floors): icauriole 25, murkrow 20, sigilyph 20, swablu line 20, vulkhet line 10, unown imrt 5
						case 'upperfloors':
							if (WildResult > 0 && WildResult < 26) {
								wildpoke = 'icauriole';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
								if (ItemResult < 6) {
									helditem = 'Wacan Berry';
								}
							}
							else if (WildResult > 25 && WildResult < 46) {
								wildpoke = 'murkrow';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildResult > 45 && WildResult < 66) {
								wildpoke = 'sigilyph';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildResult > 65 && WildResult < 86) {
								if (WildLevel < 35 || stage1 < 51) {
									wildpoke = 'swablu';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 34 && stage1 > 50) {
									wildpoke = 'altaria';
								}
							}
							else if (WildResult > 85 && WildResult < 96) {
								if (WildLevel < 32 || stage1 < 51) {
									wildpoke = 'vulkhet';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 31 && stage1 > 50) {
									wildpoke = 'nekhetura';
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (4 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unowni';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownm';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownr';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownt';
								}
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							break;

							// Acoatyl Tower (Shrine): unown imrt 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (4 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unowni';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownm';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownr';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownt';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 607: mareep line 30, swablu line 25, humbuzz line 20, lamlie line 10, phanpy line 10, thunderma 5
					case 'route607':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 15 || (WildLevel < 30 && stage1 < 51) || (WildLevel > 29 && stage2 < 34)) {
								wildpoke = 'mareep';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 30 && stage1 > 50) || (WildLevel > 29 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'flaaffy';
							}
							else if (WildLevel > 29 && stage2 > 66) {
								wildpoke = 'amhparos';
							}
						}
						else if (WildResult > 30 && WildResult < 56) {
							if (WildLevel < 35 || stage1 < 51) {
								wildpoke = 'swablu';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 34 && stage1 > 50) {
								wildpoke = 'altaria';
							}
						}
						else if (WildResult > 55 && WildResult < 76) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'humbuzz';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'klaitning';
							}
							if (ItemResult < 6) {
								helditem = 'Cheri Berry';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 20 || (WildLevel < 35 && stage1 < 51) || (WildLevel > 34 && stage2 < 34)) {
								wildpoke = 'lamlie';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 35 && stage1 > 50) || (WildLevel > 34 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'lobovo';
							}
							else if (WildLevel > 34 && stage2 > 66) {
								wildpoke = 'luvaris';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'phanpy';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'donphan';
							}
							if (ItemResult < 6) {
								helditem = 'Passho Berry';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'thunderma';
							if (WildLevel < 9) {
								WildLevel = 9;
							}
							if (ItemResult < 6) {
								helditem = 'Shuca Berry';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'fulgurokmountains':
						switch(area) {

						// Fulgurok Mountains (Mountainside): mareep line 30, nuwill 25, helioptile 15, humbuzz line 15, thunderma 14, finnial 1
						case 'mountainside':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 15 || (WildLevel < 30 && stage1 < 51) || (WildLevel > 29 && stage2 < 34)) {
									wildpoke = 'mareep';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if ((WildLevel < 30 && stage1 > 50) || (WildLevel > 29 && stage2 > 33 && stage2 < 67)) {
									wildpoke = 'flaaffy';
								}
								else if (WildLevel > 29 && stage2 > 66) {
									wildpoke = 'amhparos';
								}
							}
							else if (WildResult > 30 && WildResult < 56) {
								wildpoke = 'nuwill';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 55 && WildResult < 71) {
								wildpoke = 'helioptile';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 70 && WildResult < 86) {
								if (WildLevel < 25 || stage1 < 51) {
									wildpoke = 'humbuzz';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 24 && stage1 > 50) {
									wildpoke = 'klaitning';
								}
								if (ItemResult < 6) {
									helditem = 'Cheri Berry';
								}
							}
							else if (WildResult > 85 && WildResult < 100) {
								wildpoke = 'thunderma';
								if (WildLevel < 14) {
									WildLevel = 14;
								}
								if (ItemResult < 6) {
									helditem = 'Shuca Berry';
								}
							}
							else if (WildResult > 99) {
								wildpoke = 'finnial';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
								if (WildLevel > 20) {
									WildLevel = 20;
								}
							}
							break;

						// Fulgurok Mountains (Caves): transmite 40, pachirisu 35, donarith 20, unown cjpu 5
						case 'caves':
							if (WildResult > 0 && WildResult < 41) {
								wildpoke = 'transmite';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildResult > 40 && WildResult < 76) {
								wildpoke = 'pachirisu';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildResult > 75 && WildResult < 96) {
								wildpoke = 'donarith';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (4 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownc';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownj';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownp';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownu';
								}
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							break;

						// Fulgurok Mountains (Shrine): unown cjpu 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (4 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownc';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownj';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownp';
								}
								else if (unowntype == 4) {
									wildpoke = 'unownu';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						// Fulgurok Mountains (Low Peaks): invicunya line 30, meditite line 30, snorunt line 25, snorunt/cryogonal 5, invicunya/rakateis 5, cubly 5
						case 'peaks':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 38 || stage1 < 51) {
									wildpoke = 'invicunya';
									if (WildLevel < 13) {
										WildLevel = 13;
									}
								}
								else if (WildLevel > 37 && stage1 > 50) {
									wildpoke = 'heladalca';
								}
								helditem = 'Aspear Berry';
							}
							else if (WildResult > 30 && WildResult < 61) {
								if (WildLevel < 37 || stage1 < 51) {
									wildpoke = 'meditite';
									if (WildLevel < 13) {
										WildLevel = 13;
									}
								}
								else if (WildLevel > 36 && stage1 > 50) {
									wildpoke = 'medicham';
								}
							}
							else if (WildResult > 60 && WildResult < 86) {
								if (WildLevel < 42 || stage1 < 51) {
									wildpoke = 'snorunt';
									if (WildLevel < 13) {
										WildLevel = 13;
									}
								}
								else if (WildLevel > 41 && stage1 > 50) {
									wildpoke = 'glalie';
								}
								if (ItemResult < 6) {
									helditem = 'Babiri Berry';
								}
							}
							else if (WildResult > 85 && WildResult < 91) {
								if (WildLevel < 20) {
									wildpoke = 'invicunya';
									if (WildLevel < 13) {
										WildLevel = 13;
									}
									helditem = 'Aspear Berry';
								}
								else if (WildLevel > 19) {
									wildpoke = 'rakateis';
									if (ItemResult < 6) {
										helditem = 'Sharp Beak';
									}
									if (ItemResult > 5 && ItemResult < 7) {
										helditem = 'Never-Melt Ice';
									}
								}
							}
							else if (WildResult > 90 && WildResult < 96) {
								if (WildLevel < 25) {
									wildpoke = 'snorunt';
									if (WildLevel < 13) {
										WildLevel = 13;
									}
									if (ItemResult < 6) {
										helditem = 'Babiri Berry';
									}
								}
								else if (WildLevel > 24) {
									wildpoke = 'cryogonal';
									if (ItemResult < 6) {
										helditem = 'Never-Melt Ice';
									}
								}
							}
							else if (WildResult > 95) {
								wildpoke = 'cubly';
								if (WildLevel < 15) {
									WildLevel = 15;
								}
								if (WildLevel > 20) {
									WildLevel = 20;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 608 (Grass): mareep line 30, auriole line 25, nuwill 20, lamlie line 10, phanpy line 10, thunderma/rasqueon 5
					case 'route608':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 15 || (WildLevel < 30 && stage1 < 51) || (WildLevel > 29 && stage2 < 34)) {
								wildpoke = 'mareep';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 30 && stage1 > 50) || (WildLevel > 29 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'flaaffy';
							}
							else if (WildLevel > 29 && stage2 > 66) {
								wildpoke = 'amhparos';
							}
						}
						else if (WildResult > 30 && WildResult < 56) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 55 && WildResult < 76) {
							wildpoke = 'nuwill';
							if (WildLevel < 8) {
								WildLevel = 8;
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 20 || (WildLevel < 35 && stage1 < 51) || (WildLevel > 34 && stage2 < 34)) {
								wildpoke = 'lamlie';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 35 && stage1 > 50) || (WildLevel > 34 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'lobovo';
							}
							else if (WildLevel > 34 && stage2 > 66) {
								wildpoke = 'luvaris';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'phanpy';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'donphan';
							}
							if (ItemResult < 6) {
								helditem = 'Passho Berry';
							}
						}
						else if (WildResult > 95) {
							if (WildLevel < 30) {
								wildpoke = 'thunderma';
								if (WildLevel < 14) {
									WildLevel = 14;
								}
								if (ItemResult < 6) {
									helditem = 'Shuca Berry';
								}
							}
							else if (WildLevel > 29) {
								wildpoke = 'rasqueon';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Fulgurok Caves / Fulgurok Island (Caves): bucarat line 25, aron line 25, drilbur line 25, dasfix line 10, aron/durant 5, mawile/petrocka 5ea
					case 'fulgurokcaves':
						if (WildResult > 0 && WildResult < 26) {
							if (WildLevel < 22 || stage1 < 51) {
								wildpoke = 'bucarat';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 21 && stage1 > 50) {
								wildpoke = 'mortarat';
							}
							if (ItemResult < 6) {
								helditem = 'Black Sludge';
							}
						}
						else if (WildResult > 25 && WildResult < 51) {
							if (WildLevel < 32 || (WildLevel < 42 && stage1 < 51) || (WildLevel > 41 && stage2 < 34)) {
								wildpoke = 'aron';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if ((WildLevel < 42 && stage1 > 50) || (WildLevel > 41 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'lairon';
							}
							else if (WildLevel > 35 && stage2 > 66) {
								wildpoke = 'aggron';
							}
							if (ItemResult < 6) {
								helditem = 'Hard Stone';
							}
						}
						else if (WildResult > 50 && WildResult < 76) {
							if (WildLevel < 31 || stage1 < 51) {
								wildpoke = 'drilbur';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 30 && stage1 > 50) {
								wildpoke = 'excadrill';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 36 || stage1 < 51) {
								wildpoke = 'dasfix';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 35 && stage1 > 50) {
								wildpoke = 'malraja';
							}
						}
						else if (WildResult > 85 && WildResult < 91) {
							if (WildLevel < 20) {
								wildpoke = 'aron';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
								if (ItemResult < 6) {
									helditem = 'Hard Stone';
								}
							}
							else if (WildLevel > 19) {
								wildpoke = 'durant';
							}
						}
						else if (WildResult > 90) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'mawile';
								if (WildLevel < 14) {
									WildLevel = 14;
								}
								if (ItemResult < 6) {
									helditem = 'Occa Berry';
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'petrocka';
							}
						}
						break;

					// Fulgurok Caves / Fulgurok Island (Island): bucarat line 40, kiblis line 35, gravendou line 20, gravendou/cragendou/shuckle 4, kiblis/caslot 1
					case 'fulgurokisland':
						if (WildResult > 0 && WildResult < 41) {
							if (WildLevel < 22 || stage1 < 51) {
								wildpoke = 'bucarat';
								if (WildLevel < 16) {
									WildLevel = 16;
								}
							}
							else if (WildLevel > 21 && stage1 > 50) {
								wildpoke = 'mortarat';
							}
							if (ItemResult < 6) {
								helditem = 'Black Sludge';
							}
						}
						else if (WildResult > 40 && WildResult < 76) {
							if (WildLevel < 39 || stage1 < 51) {
								wildpoke = 'kiblis';
								if (WildLevel < 16) {
									WildLevel = 16;
								}
							}
							else if (WildLevel > 38 && stage1 > 50) {
								wildpoke = 'ibazel';
							}
						}
						else if (WildResult > 75 && WildResult < 96) {
							if (WildLevel < 18 || (WildLevel < 36 && stage1 < 51) || (WildLevel > 35 && stage2 < 34)) {
								wildpoke = 'gravendou';
								if (WildLevel < 16) {
									WildLevel = 16;
								}
							}
							else if ((WildLevel < 36 && stage1 > 50) || (WildLevel > 35 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'cragendou';
							}
							else if (WildLevel > 35 && stage2 > 66) {
								wildpoke = 'quarendou';
							}
							if (ItemResult < 6) {
								helditem = 'Sticky Barb';
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							if (WildLevel < 18 || (WildLevel < 20 && stage1 < 51)) {
								wildpoke = 'gravendou';
								if (WildLevel < 16) {
									WildLevel = 16;
								}
								if (ItemResult < 6) {
									helditem = 'Sticky Barb';
								}
							}
							else if (WildLevel < 20 && stage1 > 50) {
								wildpoke = 'cragendou';
								if (ItemResult < 6) {
									helditem = 'Sticky Barb';
								}
							}
							else if (WildLevel > 19) {
								wildpoke = 'shuckle';
								helditem = 'Berry Juice';
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 20) {
								wildpoke = 'kiblis';
								if (WildLevel < 16) {
									WildLevel = 16;
								}
							}
							else if (WildLevel > 19) {
								wildpoke = 'caslot';
								if (ItemResult < 6) {
									helditem = 'Persim Berry';
								}
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 609: mareep line 25, humbuzz line 25, meditite line 20, lamlie line 10, phanpy line 10, duskull line 10
					case 'route609':
						if (WildResult > 0 && WildResult < 26) {
							if (WildLevel < 15 || (WildLevel < 30 && stage1 < 51) || (WildLevel > 29 && stage2 < 34)) {
								wildpoke = 'mareep';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 30 && stage1 > 50) || (WildLevel > 29 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'flaaffy';
							}
							else if (WildLevel > 29 && stage2 > 66) {
								wildpoke = 'amhparos';
							}
						}
						else if (WildResult > 25 && WildResult < 51) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'humbuzz';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'klaitning';
							}
							if (ItemResult < 6) {
								helditem = 'Cheri Berry';
							}
						}
						else if (WildResult > 50 && WildResult < 71) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'meditite';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'medicham';
							}
						}
						else if (WildResult > 70 && WildResult < 81) {
							if (WildLevel < 20 || (WildLevel < 35 && stage1 < 51) || (WildLevel > 34 && stage2 < 34)) {
								wildpoke = 'lamlie';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 35 && stage1 > 50) || (WildLevel > 34 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'lobovo';
							}
							else if (WildLevel > 34 && stage2 > 66) {
								wildpoke = 'luvaris';
							}
						}
						else if (WildResult > 80 && WildResult < 91) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'phanpy';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'donphan';
							}
							if (ItemResult < 6) {
								helditem = 'Passho Berry';
							}
						}
						else if (WildResult > 90) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'duskull';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'dusclops';
							}
							if (ItemResult < 6) {
								helditem = 'Kasib Berry';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 610 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
					case 'route610':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 611: dustley line 35, kizziff line 25, farfetch'd line 15, duskull line 10, minccino/zangoose 10, farfetch'd/hawlucha 4, turistar line 1
					case 'route611':
						if (WildResult > 0 && WildResult < 36) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 35 && WildResult < 61) {
							if (WildLevel < 10 || (WildLevel < 20 && stage1 < 51) || (WildLevel > 19 && stage2 < 34)) {
								wildpoke = 'kizziff';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 20 && stage1 > 50) || (WildLevel > 19 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'murgaz';
							}
							else if (WildLevel > 19 && stage2 > 66) {
								wildpoke = 'chaszin';
								if (ItemResult < 6) {
									helditem = 'Poison Barb';
								}
							}
						}
						else if (WildResult > 60 && WildResult < 76) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'farfetch\'d';
								if (WildLevel < 6) {
									WildLevel = 6;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'rapscalion';
							}
							if (ItemResult < 6) {
								helditem = 'Stick';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'duskull';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'dusclops';
							}
							if (ItemResult < 6) {
								helditem = 'Kasib Berry';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'minccino';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 51) {
									helditem = 'Chesto Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'zangoose';
								if (ItemResult < 6) {
									helditem = 'Quick Claw';
								}
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							if (WildLevel < 25) {
								wildpoke = 'farfetch\'d';
								if (WildLevel < 6) {
									WildLevel = 6;
								}
								if (ItemResult < 6) {
									helditem = 'Stick';
								}
							}
							else if (WildLevel > 24) {
								wildpoke = 'hawlucha';
								if (ItemResult < 6) {
									helditem = 'King\'s Rock';
								}
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 32 || stage1 < 51) {
								wildpoke = 'turistar';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 31 && stage1 > 50) {
								wildpoke = 'turumaken';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 612 / Xybryle Bridge: turistar line 30, minccino/zangoose 20, minccino/seviper 20, farfetch'd/hawlucha 10, chatot/onzarudo 10, quimpy 5, minccino/rasqueon 5
					case 'route612':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 32 || stage1 < 51) {
								wildpoke = 'turistar';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 31 && stage1 > 50) {
								wildpoke = 'turumaken';
							}
						}
						else if (WildResult > 30 && WildResult < 51) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'minccino';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
								if (ItemResult < 51) {
									helditem = 'Chesto Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'zangoose';
								if (ItemResult < 6) {
									helditem = 'Quick Claw';
								}
							}
						}
						else if (WildResult > 50 && WildResult < 71) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'minccino';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
								if (ItemResult < 51) {
									helditem = 'Chesto Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'seviper';
							}
						}
						else if (WildResult > 70 && WildResult < 81) {
							if (WildLevel < 25) {
								wildpoke = 'farfetch\'d';
								if (WildLevel < 9 || stage1 < 51) {
									WildLevel = 9;
								}
								if (ItemResult < 6) {
									helditem = 'Stick';
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'hawlucha';
								if (ItemResult < 6) {
									helditem = 'King\'s Rock';
								}
							}
						}
						else if (WildResult > 80 && WildResult < 91) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'chatot';
								if (WildLevel < 9) {
									WildLevel = 9;
								}
								if (ItemResult < 6) {
									helditem = 'Metronome';
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'onzarudo';
								if (ItemResult < 6) {
									helditem = 'Bright Powder';
								}
							}
						}
						else if (WildResult > 90 && WildResult < 96) {
							if (WildLevel < 30) {
								wildpoke = 'minccino';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
								if (ItemResult < 51) {
									helditem = 'Chesto Berry';
								}
							}
							else if (WildLevel > 29) {
								wildpoke = 'rasqueon';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'quimpy';
							if (WildLevel < 15) {
								WildLevel = 15;
							}
							if (WildLevel > 20) {
								WildLevel = 20;
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 613: auriole line 35, kizziff line 25, chatot line 15, scraggy line 10, minccino/seviper 10, chatot/onzarudo 4, turistar line 1
					case 'route613':
						if (WildResult > 0 && WildResult < 36) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 35 && WildResult < 61) {
							if (WildLevel < 10 || (WildLevel < 20 && stage1 < 51) || (WildLevel > 19 && stage2 < 34)) {
								wildpoke = 'kizziff';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 20 && stage1 > 50) || (WildLevel > 19 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'murgaz';
							}
							else if (WildLevel > 19 && stage2 > 66) {
								wildpoke = 'chaszin';
								if (ItemResult < 6) {
									helditem = 'Poison Barb';
								}
							}
						}
						else if (WildResult > 60 && WildResult < 76) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'chatot';
								if (WildLevel < 6) {
									WildLevel = 6;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'lyrissimo';
							}
							if (ItemResult < 6) {
								helditem = 'Metronome';
							}
						}
						else if (WildResult > 76 && WildResult < 86) {
							if (WildLevel < 39 || stage1 < 51) {
								wildpoke = 'scraggy';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 38 && stage1 > 50) {
								wildpoke = 'scrafty';
							}
							if (ItemResult < 6) {
								helditem = 'Shed Shell';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'minccino';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 51) {
									helditem = 'Chesto Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'seviper';
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							if (WildLevel < 25) {
								wildpoke = 'chatot';
								if (WildLevel < 6) {
									WildLevel = 6;
								}
								if (ItemResult < 6) {
									helditem = 'Metronome';
								}
							}
							else if (WildLevel > 24) {
								wildpoke = 'onzarudo';
								if (ItemResult < 6) {
									helditem = 'Bright Powder';
								}
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 32 || stage1 < 51) {
								wildpoke = 'turistar';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 31 && stage1 > 50) {
								wildpoke = 'turumaken';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Xybryle Bay (Surfing): latikrai line 45, turistar line 35, latikrai/sharpedo 15, aeolagio 4, vaering line 1
					case 'xybryle_bay':
						if (WildResult > 0 && WildResult < 46) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 45 && WildResult < 81) {
							if (WildLevel < 32 || stage1 < 51) {
								wildpoke = 'turistar';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 31 && stage1 > 50) {
								wildpoke = 'turumaken';
							}
						}
						else if (WildResult > 80 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 28 || (WildLevel < 42 && stage1 < 51) || (WildLevel > 41 && stage2 < 34)) {
								wildpoke = 'vaering';
								if (WildLevel < 15) {
									WildLevel = 15;
								}
							}
							else if ((WildLevel < 42 && stage1 > 50) || (WildLevel > 41 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'raidnarr';
							}
							else if (WildLevel > 41 && stage2 > 66) {
								wildpoke = 'drasarkr';
							}
							if (ItemResult < 6) {
								helditem = 'Dragon Fang';
							}
						}
						break;

					// Xybryle Bay (Submarine Safari): sharpedo 30, kelfee line 15, clauncher line 15, skrelp line 15, freye line 10, octillery 10, raidnarr line 4, wyrmal line 1
					case 'submarinesafari':
						if (WildResult > 0 && WildResult < 31) {
							wildpoke = 'sharpedo';
							if (WildLevel < 30) {
								WildLevel = 30;
							}
						}
						else if (WildResult > 30 && WildResult < 46) {
							if (WildLevel < 31 || stage1 < 51) {
								wildpoke = 'kelfee';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 30 && stage1 > 50) {
								wildpoke = 'drakella';
							}
							if (ItemResult < 6) {
								helditem = 'Absorb Bulb';
							}
						}
						else if (WildResult > 45 && WildResult < 61) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'clauncher';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'clawitzer';
							}
						}
						else if (WildResult > 60 && WildResult < 76) {
							if (WildLevel < 48 || stage1 < 51) {
								wildpoke = 'skrelp';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 47 && stage1 > 50) {
								wildpoke = 'dragalge';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 27 || stage1 < 51) {
								wildpoke = 'freye';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 26 && stage1 > 50) {
								wildpoke = 'floundirt';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							wildpoke = 'octillery';
							if (WildLevel < 25) {
								WildLevel = 25;
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							if (WildLevel < 42 || stage2 < 51) {
								wildpoke = 'raidnarr';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildLevel > 41 && stage2 > 50) {
								wildpoke = 'drasarkr';
							}
							if (ItemResult < 6) {
								helditem = 'Dragon Fang';
							}
						}
						else if (WildResult > 99) {
							if (WildLevel < 35 || stage2 < 51) {
								wildpoke = 'wyrmal';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							else if (WildLevel > 34 && stage2 > 50) {
								wildpoke = 'ventorm';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'tonkura':
						switch(area) {

						// Ton-Kura (Seabed): kelfee line 50, sharpedo 25, freye line 25
						case 'seabed':
							if (WildResult > 0 && WildResult < 51) {
								if (WildLevel < 31 || stage1 < 51) {
									wildpoke = 'kelfee';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 30 && stage1 > 50) {
									wildpoke = 'drakella';
								}
								if (ItemResult < 6) {
									helditem = 'Absorb Bulb';
								}
							}
							else if (WildResult > 50 && WildResult < 76) {
								wildpoke = 'sharpedo';
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 75) {
								if (WildLevel < 27 || stage1 < 51) {
									wildpoke = 'freye';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 26 && stage1 > 50) {
									wildpoke = 'floundirt';
								}
							}
							break;

							// Ton-Kura (Caves): drakella 40, sharpedo 35, octillery 20, unown befsx 5
						case 'caves':
							if (WildResult > 0 && WildResult < 41) {
								wildpoke = 'drakella';
								if (WildLevel < 30) {
									WildLevel = 30;
								}
								if (ItemResult < 6) {
									helditem = 'Absorb Bulb';
								}
								wildpoke = '<span class=\'item\' title=\'Absorb Bulb 5%\'>Drakella</span> (30+)';
							}
							else if (WildResult > 40 && WildResult < 76) {
								wildpoke = 'sharpedo';
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 75 && WildResult < 96) {
								wildpoke = 'octillery';
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (5 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownb';
								}
								else if (unowntype == 2) {
									wildpoke = 'unowne';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownf';
								}
								else if (unowntype == 4) {
									wildpoke = 'unowns';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownx';
								}
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							break;

							// Ton-Kura (Shrine): unown befsx 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (5 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownb';
								}
								else if (unowntype == 2) {
									wildpoke = 'unowne';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownf';
								}
								else if (unowntype == 4) {
									wildpoke = 'unowns';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownx';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 614 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
					case 'route614':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 615: auriole line 35, dustley line 30, scraggy line 20, numel line 10, thunderma/razelodon 4, smeargle 1
					case 'route615':
						if (WildResult > 0 && WildResult < 36) {
							if (WildLevel < 24 || stage1 < 51) {
								wildpoke = 'auriole';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 23 && stage1 > 50) {
								wildpoke = 'icauriole';
							}
							if (ItemResult < 6) {
								helditem = 'Wacan Berry';
							}
						}
						else if (WildResult > 35 && WildResult < 66) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 65 && WildResult < 86) {
							if (WildLevel < 39 || stage1 < 51) {
								wildpoke = 'scraggy';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 38 && stage1 > 50) {
								wildpoke = 'scrafty';
							}
							if (ItemResult < 6) {
								helditem = 'Shed Shell';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'numel';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'camerupt';
							}
							helditem = 'Rawst Berry';
						}
						else if (WildResult > 95 && WildResult < 100) {
							if (WildLevel < 30) {
								wildpoke = 'thunderma';
								if (WildLevel < 7) {
									WildLevel = 7;
								}
								if (ItemResult < 6) {
									helditem = 'Shuca Berry';
								}
							}
							else if (WildLevel > 29) {
								wildpoke = 'razelodon';
							}
						}
						else if (WildResult > 99) {
							wildpoke = 'smeargle';
							if (WildLevel < 7) {
								WildLevel = 7;
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 616: dustley line 25, sandile line 25, numel line 15, pindillo line 10, murkrow 10, misdreavus 10, lamanda 5
					case 'route616':
						if (WildResult > 0 && WildResult < 26) {
							if (WildLevel < 20 || stage1 < 51) {
								wildpoke = 'dustley';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
								if (ItemResult < 6) {
									helditem = 'Oran Berry';
								}
							}
							else if (WildLevel > 19 && stage1 > 50) {
								wildpoke = 'aculago';
								if (ItemResult < 51) {
									helditem = 'Oran Berry';
								}
								else if (ItemResult > 50 && ItemResult < 56) {
									helditem = 'Sitrus Berry';
								}
							}
						}
						else if (WildResult > 25 && WildResult < 51) {
							if (WildLevel < 29 || (WildLevel < 40 && stage1 < 51) || (WildLevel > 39 && stage2 < 34)) {
								wildpoke = 'sandile';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if ((WildLevel < 40 && stage1 > 50) || (WildLevel > 39 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'krokorok';
							}
							else if (WildLevel > 39 && stage2 > 66) {
								wildpoke = 'krookodile';
							}
						}
						else if (WildResult > 50 && WildResult < 66) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'numel';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'camerupt';
							}
							helditem = 'Rawst Berry';
						}
						else if (WildResult > 65 && WildResult < 76) {
							if (WildLevel < 29 || stage1 < 51) {
								wildpoke = 'pindillo';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 28 && stage1 > 50) {
								wildpoke = 'charandillo';
							}
							if (ItemResult < 6) {
								helditem = 'Kebia Berry';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							wildpoke = 'murkrow';
							if (WildLevel < 10) {
								WildLevel = 10;
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							wildpoke = 'misdreavus';
							if (WildLevel < 10) {
								WildLevel = 10;
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'lamanda';
							if (WildLevel < 15) {
								WildLevel = 15;
							}
							if (WildLevel > 20) {
								WildLevel = 20;
							}
							wildpoke = 'Lamanda (15-20)';
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 617: numel line 30, sandile line 25, pindillo line 20, galorindle line 15, numel/heatmor 5, slugma/durant 5
					case 'route617':
						if (WildResult > 0 && WildResult < 31) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'numel';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'camerupt';
							}
							helditem = 'Rawst Berry';
						}
						else if (WildResult > 31 && WildResult < 56) {
							if (WildLevel < 29 || (WildLevel < 40 && stage1 < 51) || (WildLevel > 39 && stage2 < 34)) {
								wildpoke = 'sandile';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if ((WildLevel < 40 && stage1 > 50) || (WildLevel > 39 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'krokorok';
							}
							else if (WildLevel > 39 && stage2 > 66) {
								wildpoke = 'krookodile';
							}
						}
						else if (WildResult > 55 && WildResult < 76) {
							if (WildLevel < 29 || stage1 < 51) {
								wildpoke = 'pindillo';
								if (WildLevel < 8) {
									WildLevel = 8;
								}
							}
							else if (WildLevel > 28 && stage1 > 50) {
								wildpoke = 'charandillo';
							}
							if (ItemResult < 6) {
								helditem = 'Kebia Berry';
							}
						}
						else if (WildResult > 75 && WildResult < 91) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'galorindle';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'galaraud';
							}
							if (ItemResult < 6) {
								helditem = 'Light Clay';
							}
						}
						else if (WildResult > 91 && WildResult < 96) {
							if (WildLevel < 20) {
								wildpoke = 'numel';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
								helditem = 'Rawst Berry';
							}
							else if (WildLevel > 19) {
								wildpoke = 'heatmor';
								if (ItemResult < 2) {
									helditem = 'Flame Orb';
								}
							}
						}
						else if (WildResult > 95) {
							if (WildLevel < 20) {
								wildpoke = 'slugma';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildLevel > 19) {
								wildpoke = 'durant';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'jarovesubadlands':
						switch(area) {

						// Jarovesu Badlands (Flatlands): numel line 30, vulkhet 25, slugma 20, virlich 15, fallorite 5, virlich/sparcoil 5
						case 'flatlands':
							if (WildResult > 0 && WildResult < 31) {
								if (WildLevel < 34 || stage1 < 51) {
									wildpoke = 'numel';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 33 && stage1 > 50) {
									wildpoke = 'camerupt';
								}
								helditem = 'Rawst Berry';
							}
							else if (WildResult > 30 && WildResult < 56) {
								wildpoke = 'vulkhet';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 55 && WildResult < 76) {
								if (WildLevel < 38 || stage1 < 51) {
									wildpoke = 'slugma';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 37 && stage1 > 50) {
									wildpoke = 'magcargo';
								}
							}
							else if (WildResult > 75 && WildResult < 91) {
								wildpoke = 'virlich';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
							}
							else if (WildResult > 90 && WildResult < 96) {
								wildpoke = 'fallorite';
								if (WildLevel < 12) {
									WildLevel = 12;
								}
								if (ItemResult < 6) {
									helditem = 'Stardust';
								}
							}
							else if (WildResult > 95) {
								if (WildLevel < 20) {
									wildpoke = 'virlich';
									if (WildLevel < 12) {
										WildLevel = 12;
									}
								}
								else if (WildLevel > 19) {
									wildpoke = 'sparcoil';
								}
							}
							break;

						// Jarovesu Badlands (Heights): slugma line 35, fallorite 30, heatmor 20, torranel 10, unown klnoq 5
						case 'heights':
							if (WildResult > 0 && WildResult < 36) {
								if (WildLevel < 38 || stage1 < 51) {
									wildpoke = 'slugma';
									if (WildLevel < 25) {
										WildLevel = 25;
									}
								}
								else if (WildLevel > 37 && stage1 > 50) {
									wildpoke = 'magcargo';
								}
							}
							else if (WildResult > 35 && WildResult < 66) {
								wildpoke = 'fallorite';
								if (WildLevel < 25) {
									WildLevel = 25;
								}
								if (ItemResult < 6) {
									helditem = 'Stardust';
								}
							}
							else if (WildResult > 65 && WildResult < 86) {
								wildpoke = 'heatmor';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
								if (ItemResult < 2) {
									helditem = 'Flame Orb';
								}
							}
							else if (WildResult > 85 && WildResult < 96) {
								wildpoke = 'torranel';
								if (WildLevel < 28) {
									WildLevel = 28;
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (5 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownk';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownl';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownn';
								}
								else if (unowntype == 4) {
									wildpoke = 'unowno';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownq';
								}
								if (WildLevel < 25) {
									WildLevel = 25;
								}
							}
							break;

						// Jarovesu Badlands (Shrine): unown klnoq 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (5 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unownk';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownl';
								}
								else if (unowntype == 3) {
									wildpoke = 'unownn';
								}
								else if (unowntype == 4) {
									wildpoke = 'unowno';
								}
								else if (unowntype == 5) {
									wildpoke = 'unownq';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 618: sandile line 35, numel line 20, galorindle 20, drilbur line 10, slugma line 10, tianglis/mandicore 5
					case 'route618':
						if (WildResult > 0 && WildResult < 36) {
							if (WildLevel < 29 || (WildLevel < 40 && stage1 < 51) || (WildLevel > 39 && stage2 < 34)) {
								wildpoke = 'sandile';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if ((WildLevel < 40 && stage1 > 50) || (WildLevel > 39 && stage2 > 33 && stage2 < 67)) {
								wildpoke = 'krokorok';
							}
							else if (WildLevel > 39 && stage2 > 66) {
								wildpoke = 'krookodile';
							}
						}
						else if (WildResult > 35 && WildResult < 56) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'numel';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'camerupt';
							}
							helditem = 'Rawst Berry';
						}
						else if (WildResult > 55 && WildResult < 76) {
							if (WildLevel < 37 || stage1 < 51) {
								wildpoke = 'galorindle';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 36 && stage1 > 50) {
								wildpoke = 'galaraud';
							}
							if (ItemResult < 6) {
								helditem = 'Light Clay';
							}
						}
						else if (WildResult > 75 && WildResult < 86) {
							if (WildLevel < 31 || stage1 < 51) {
								wildpoke = 'drilbur';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 30 && stage1 > 50) {
								wildpoke = 'excadrill';
							}
						}
						else if (WildResult > 85 && WildResult < 96) {
							if (WildLevel < 38 || stage1 < 51) {
								wildpoke = 'slugma';
								if (WildLevel < 5) {
									WildLevel = 5;
								}
							}
							else if (WildLevel > 37 && stage1 > 50) {
								wildpoke = 'magcargo';
							}
						}
						else if (WildResult > 95) {
							if (WildLevel < 25 || stage1 < 51) {
								wildpoke = 'tianglis';
								if (WildLevel < 7) {
									WildLevel = 7;
								}
							}
							else if (WildLevel > 24 && stage1 > 50) {
								wildpoke = 'mandicore';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 619 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
					case 'route619':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					// Route 620 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 4, lapras 1
					case 'route620':
						if (WildResult > 0 && WildResult < 51) {
							if (WildLevel < 34 || stage1 < 51) {
								wildpoke = 'latikrai';

								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 33 && stage1 > 50) {
								wildpoke = 'kraitra';
							}
						}
						else if (WildResult > 50 && WildResult < 96) {
							if (WildLevel < 30 || stage1 < 51) {
								wildpoke = 'latrikrai';
								if (WildLevel < 18) {
									WildLevel = 18;
								}
							}
							else if (WildLevel > 29 && stage1 > 50) {
								wildpoke = 'sharpedo';
							}
						}
						else if (WildResult > 95 && WildResult < 100) {
							wildpoke = 'aeolagio';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
							if (ItemResult < 6) {
								helditem = 'Poison Barb';
							}
						}
						else if (WildResult > 99) {
							wildpoke = 'lapras';
							if (WildLevel < 20) {
								WildLevel = 20;
							}
						}
						break;

					// -----------------------------------------------------------------------------------------------------------------------------------------------------
					case 'alnirazruins':
						switch(area) {

						// Alniraz Ruins / Victory Road (Streets): donphan 20, xatu 15, hawlucha 15, onzarudo 15, ibazel 10, petrocka 10, sigilyph 5, quarendou 5, mandicore 5
						case 'streets':
							if (WildResult > 0 && WildResult < 21) {
								wildpoke = 'donphan';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
								if (ItemResult < 6) {
									helditem = 'Passho Berry';
								}
							}
							else if (WildResult > 20 && WildResult < 36) {
								wildpoke = 'xatu';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 35 && WildResult < 51) {
								wildpoke = 'hawlucha';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
								if (ItemResult < 6) {
									helditem = 'King\'s Rock';
								}
							}
							else if (WildResult > 50 && WildResult < 66) {
								wildpoke = 'onzarudo';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
								if (ItemResult < 6) {
									helditem = 'Bright Powder';
								}
							}
							else if (WildResult > 65 && WildResult < 76) {
								wildpoke = 'ibazel';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
							}
							else if (WildResult > 75 && WildResult < 86) {
								wildpoke = 'petrocka';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 85 && WildResult < 91) {
								wildpoke = 'sigilyph';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 90 && WildResult < 96) {
								wildpoke = 'quarendou';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
								if (ItemResult < 6) {
									helditem = 'Sticky Barb';
								}
							}
							else if (WildResult > 95) {
								wildpoke = 'mandicore';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
								wildpoke = 'Mandicore (40+)';
							}
							break;

							// Alniraz Ruins / Victory Road (Buildings/Alleys): transmite 25, tianglis 25, galaraud 15, malraja 10, bitemare 10, ostento 5, sigilyph 5, unown az 5
						case 'buildings':
							if (WildResult > 0 && WildResult < 26) {
								wildpoke = 'transmite';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 25 && WildResult < 51) {
								wildpoke = 'tianglis';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 50 && WildResult < 66) {
								wildpoke = 'galaraud';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
								if (ItemResult < 6) {
									helditem = 'Light Clay';
								}
							}
							else if (WildResult > 65 && WildResult < 76) {
								wildpoke = 'malraja';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
							}
							else if (WildResult > 75 && WildResult < 86) {
								wildpoke = 'bitemare';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
							}
							else if (WildResult > 85 && WildResult < 91) {
								wildpoke = 'ostento';
								if (WildLevel < 40) {
									WildLevel = 40;
								}
							}
							else if (WildResult > 90 && WildResult < 96) {
								wildpoke = 'sigilyph';
								if (WildLevel < 38) {
									WildLevel = 38;
								}
							}
							else if (WildResult > 95) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unowna';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownz';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

							// Alniraz Ruins / Victory Road (Shrine): unown az 99, unown !? 1
						case 'shrine':
							if (WildResult > 0 && WildResult < 100) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unowna';
								}
								else if (unowntype == 2) {
									wildpoke = 'unownz';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							else if (WildResult > 99) {
								const unowntype = Math.floor(Math.random() * (2 - 1 + 1)) + (1 - 0);
								if (unowntype == 1) {
									wildpoke = 'unown!';
								}
								else if (unowntype == 2) {
									wildpoke = 'unown?';
								}
								if (WildLevel < 30) {
									WildLevel = 30;
								}
							}
							break;

						}
						break;

                    // switch ends
					}

					// create wild pokemon object
					const wild_obj = gen_pokemon(wildpoke, WildLevel, helditem, 'None');

					// create wild pokemon in database, save wild pokemon's ID
					const newWild = await createPokemon(client, wild_obj);
					const wildID = newWild.insertedId.toString();

					// create a new battle database entry with the two pokemon involved, save battle ID
					const wildBattle = await createBattle(client, {
						TrainerPokeID: profile.PartySlot1,
						WildPokeID: wildID,
						TurnCount: 0,
						Type: 'Wild',
					});
					const wildBattleID = wildBattle.insertedId.toString();

					// Update user's profile with new battle ID
					const updatedProfile = { BattleID: wildBattleID };
					await updateProfileByUserID(client, userID, updatedProfile);

					// Create gender emoji variable to male or female
					let gend_emoji = [];
					if(wild_obj.Gender == 'Male') {
						gend_emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'm_');
					}
					else if(wild_obj.Gender == 'Female') {
						gend_emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'f_');
					}

					const wildBattleEmbed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setAuthor(`${profile.Location}: ${profile.Area}`)
						.setTitle(`A wild ${gend_emoji} Lvl. ${WildLevel} ${wildpoke.charAt(0).toUpperCase() + wildpoke.slice(1)} appeared!`)
						.setDescription(`**HP:** ${wild_obj.CurrentHP}/${wild_obj.MaxHP}`)
						.setImage(`http://turquoise.alteredorigin.net/images/pseudosprites/${wildpoke}.png`)
						.setFooter('Battle Started:')
						.setTimestamp();

					message.channel.send(wildBattleEmbed);

				}
				else {
					message.channel.send('>>> Please finish your current battle before searching for a new wild Pokémon!');
				}

			// try ends
			}

			catch (e) {
				console.error(e);
			}
			finally {
				await client.close();
			}
		}

		main().catch(console.error);

		// function for searching a profile by the discord ID.
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

		// function for creating a battle in mongodb, returns new battle database object
		async function createBattle(client, newBattle) {
			const result = await client.db('turqdb').collection('battles').insertOne(newBattle);
			console.log(`New battle created with the following id: ${result.insertedId}`);
			return result;
		}

		// function for creating a pokemon in mongodb, returns new pokemon database object
		async function createPokemon(client, newPokemon) {
			const result = await client.db('turqdb').collection('pokémon').insertOne(newPokemon);
			console.log(`New Pokémon created with the following id: ${result.insertedId}`);
			return result;
		}

		// function that determines the wild pokemon level (between 2 and 60) from the highest level in the player's party
		async function levelcalc(client, profile) {
			const slot1 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot1 });
			const slot2 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot2 });
			const slot3 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot3 });
			const slot4 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot4 });
			const slot5 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot5 });
			const slot6 = await client.db('turqdb').collection('pokémon').findOne({ _id: profile.PartySlot6 });

			let count = 0;
			const levels = [];
			if (slot1 !== null) {
				levels[count] = slot1.Level;
				count = count + 1;
			}
			if (slot2 !== null) {
				levels[count] = slot2.Level;
				count = count + 1;
			}
			if (slot3 !== null) {
				levels[count] = slot3.Level;
				count = count + 1;
			}
			if (slot4 !== null) {
				levels[count] = slot4.Level;
				count = count + 1;
			}
			if (slot5 !== null) {
				levels[count] = slot5.Level;
				count = count + 1;
			}
			if (slot6 !== null) {
				levels[count] = slot6.Level;
				count = count + 1;
			}

			const levelbase = Math.max(levels);

			// var LevelResult = Math.floor(Math.random() * ((levelbase+2) - (levelbase-4) + 1)) + ((levelbase-4) - 0); //old version that allowed wilds slightly stronger than the player's pokemon
			let LevelResult = Math.floor(Math.random() * ((levelbase - 1) - (levelbase - 7) + 1)) + ((levelbase - 7) - 0);
			// wild levels can't go below 2
			if (LevelResult < 2) {
				LevelResult = 2;
			}
			if (LevelResult > 60) {
				LevelResult = 60;
			}
			return LevelResult;
		}

		async function updateProfileByUserID(client, userID, updatedProfile) {
			const result = await client.db('turqdb').collection('profiles').updateOne(
				{ _id: userID },
				{ $set: updatedProfile },
			);

			console.log(`${result.matchedCount} document(s) matched the query criteria.`);
			console.log(`${result.modifiedCount} document(s) was/were updated.`);
		}
	},
};