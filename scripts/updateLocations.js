// Script updates locations with listed properties, adds a location if it doesn't exist in the db

const MongoClient = require('mongodb').MongoClient;

async function main() {
	/**
   * Connection URI. Update <userloc>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

	const uri = 'mongodb+srv://turqbot:turquoise2007@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority';
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		// Leddin Town
		await updatelocation(client,
			{
				_id: 'leddintown',
				name: 'Leddin Town',
				island: 'Brol Island',
				startLocation: true,
				usableHMs: ['fly'],
				actions: ['Rival'],
				accessTo: ['routenl1south', 'routenl20'],
				ferry: {
					brol: [
						{ id: 'shrdlutown', cost: '100' },
					],
					kronea: [
						{ id: 'allogracity', cost: '300' },
						{ id: 'routenl5', cost: '500' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '700' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '700' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '300' },
					],
				},
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Route NL1 South
		await updatelocation(client,
			{
				_id: 'routenl1south',
				name: 'Route NL1 South',
				isPrimaryLoc: true,
				locNames: ['routenl1'],
				areaName: 'south',
				island: 'Brol Island',
				usableHMs: ['fly'],
				accessTo: ['leddintown', 'dingbatcaveuppercaverns'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'auriole', minLvl: 2, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'dustley', minLvl: 2, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'kizziff', minLvl: 2, maxLvl: 12 },
						{ id: 'murgaz', minLvl: 8, maxLvl: 22 },
						{ id: 'chaszin', minLvl: 18 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'tinimer', minLvl: 3 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Dingbat Cave Upper Caverns
		await updatelocation(client,
			{
				_id: 'dingbatcaveuppercaverns',
				name: 'Dingbat Cave Upper Caverns',
				isPrimaryLoc: true,
				locNames: ['dingbatcave'],
				areaName: 'uppercaverns',
				island: 'Brol Island',
				usableHMs: ['fly'],
				accessTo: ['routenl1south', 'dingbatcavelowercaverns', 'routenl1north'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'bucarat', minLvl: 3, maxLvl: 24 },
						{ id: 'mortarat', minLvl: 20 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'paras', minLvl: 3, maxLvl: 26 },
						{ id: 'parasect', minLvl: 22 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'dustley', minLvl: 3, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'gravendou', minLvl: 3, maxLvl: 20 },
						{ id: 'cragendou', minLvl: 16, maxLvl: 38 },
						{ id: 'quarendou', minLvl: 34 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Dingbat Cave Lower Caverns
		await updatelocation(client,
			{
				_id: 'dingbatcavelowercaverns',
				name: 'Dingbat Cave Lower Caverns',
				isPrimaryLoc: false,
				locNames: ['dingbatcave'],
				areaName: 'uppercaverns',
				island: 'Brol Island',
				numRequiredBadges: 3,
				actions: ['Quests'],
				accessTo: ['dingbatcaveuppercaverns'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'bucarat', minLvl: 18, maxLvl: 24 },
						{ id: 'mortarat', minLvl: 20 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'aron', minLvl: 18, maxLvl: 34 },
						{ id: 'lairon', minLvl: 30, maxLvl: 44 },
						{ id: 'aggron', minLvl: 40 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'beddybite', minLvl: 18, maxLvl: 34 },
						{ id: 'bitemare', minLvl: 30 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'dasfix', minLvl: 18, maxLvl: 38 },
						{ id: 'malraja', minLvl: 34 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'misdreavus', minLvl: 20 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'sableye', minLvl: 20 },
						{ id: 'petrocka', minLvl: 25 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'derfin', minLvl: 15, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL1 North
		await updatelocation(client,
			{
				_id: 'routenl1north',
				name: 'Route NL1 North',
				isPrimaryLoc: false,
				locNames: ['routenl1'],
				areaName: 'north',
				island: 'Brol Island',
				usableHMs: ['fly'],
				accessTo: ['dingbatcaveuppercaverns', 'shrdlutown'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'auriole', minLvl: 2, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'dustley', minLvl: 2, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'kizziff', minLvl: 2, maxLvl: 12 },
						{ id: 'murgaz', minLvl: 8, maxLvl: 22 },
						{ id: 'chaszin', minLvl: 18 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'tinimer', minLvl: 3 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Shrdlu Town
		await updatelocation(client,
			{
				_id: 'shrdlutown',
				name: 'Shrdlu Town',
				island: 'Brol Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['routenl1north', 'routenl2'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '100' },
					],
					kronea: [
						{ id: 'allogracity', cost: '300' },
						{ id: 'routenl5', cost: '500' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '700' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '700' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '300' },
					],
				},
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Route NL2
		await updatelocation(client,
			{
				_id: 'routenl2',
				name: 'Route NL2',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['shrdlutown', 'allogracity'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinr', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'kelfee', minLvl: 10, maxLvl: 33 },
						{ id: 'drakella', minLvl: 29 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Allogra City
		await updatelocation(client,
			{
				_id: 'allogracity',
				name: 'Allogra City',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Quests'],
				accessTo: ['routenl2', 'routenl3'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '300' },
						{ id: 'shrdlutown', cost: '300' },
					],
					kronea: [
						{ id: 'routenl5', cost: '100' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '500' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '700' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '500' },
					],
				},
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Route NL3
		await updatelocation(client,
			{
				_id: 'routenl3',
				name: 'Route NL3',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['allogracity', 'denathvillage'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'gowatu', minLvl: 5, maxLvl: 27 },
						{ id: 'turatal', minLvl: 23 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'auriole', minLvl: 5, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'dustley', minLvl: 5, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'espurr', minLvl: 5, maxLvl: 27 },
						{ id: 'meowstic', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'petilil', minLvl: 5 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'buneary', minLvl: 5 },
					] },
				],
				fishing: [
					{ probability: 40, pokemon: [
						{ id: 'carvanha', minLvl: 10 },
					] },
					{ probability: 40, pokemon: [
						{ id: 'carvanha', minLvl: 10, maxLvl: 19 },
						{ id: 'basculinb', minLvl: 20 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'carvanha', minLvl: 10, maxLvl: 24 },
						{ id: 'garapaima', minLvl: 25 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'feebas', minLvl: 15, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Denath Village
		await updatelocation(client,
			{
				_id: 'denathvillage',
				name: 'Denath Village',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Rival', 'Revivalist HQ'],
				accessTo: ['routenl3', 'routenl4denathplains', 'routenl5'],
				hasTrainers: true,
				shops: ['PokéMart', 'Open-Air Market'],
			},
		);

		// Route NL4 / Denath Plains
		await updatelocation(client,
			{
				_id: 'routenl4denathplains',
				name: 'Route NL4 / Denath Plains',
				locNames: ['routenl4', 'denathplains'],
				island: 'Kronea Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['denathvillage', 'ambalchitemplegardens'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'gowatu', minLvl: 8, maxLvl: 27 },
						{ id: 'turatal', minLvl: 23 },
					] },
					{ probability: 24, pokemon: [
						{ id: 'mefflora', minLvl: 8, maxLvl: 22 },
						{ id: 'mephodil', minLvl: 18, maxLvl: 33 },
						{ id: 'spilotalis', minLvl: 29 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'espurr', minLvl: 8, maxLvl: 27 },
						{ id: 'meowstic', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'natu', minLvl: 8, maxLvl: 27 },
						{ id: 'xatu', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'petilil', minLvl: 8 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'buneary', minLvl: 8, maxLvl: 24 },
						{ id: 'kangaskhan', minLvl: 25 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'cherubi', minLvl: 8, maxLvl: 27 },
						{ id: 'cherrim', minLvl: 23 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Ambalchi Temple Gardens
		await updatelocation(client,
			{
				_id: 'ambalchitemplegardens',
				name: 'Ambalchi Temple Gardens',
				isPrimaryLoc: true,
				locNames: ['ambalchitemple'],
				areaName: 'gardens',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				accessTo: ['routenl4denathplains', 'ambalchitempleruins'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'gowatu', minLvl: 12, maxLvl: 27 },
						{ id: 'turatal', minLvl: 23 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'mefflora', minLvl: 12, maxLvl: 22 },
						{ id: 'mephodil', minLvl: 18, maxLvl: 33 },
						{ id: 'spilotalis', minLvl: 29 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'exeggcute', minLvl: 12 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'petilil', minLvl: 12 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'cherubi', minLvl: 12, maxLvl: 27 },
						{ id: 'cherrim', minLvl: 23 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Ambalchi Temple Ruins
		await updatelocation(client,
			{
				_id: 'ambalchitempleruins',
				name: 'Ambalchi Temple Ruins',
				isPrimaryLoc: false,
				locNames: ['ambalchitemple'],
				areaName: 'ruins',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				numRequiredRevJobs: 2,
				numRequiredBadges: 3,
				accessTo: ['ambalchitemplegardens', 'ambalchitempleshrine'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'parasect', minLvl: 28 },
					] },
					{ probability: 35, pokemon: [
						{ id: 'turatal', minLvl: 28 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'mephodil', minLvl: 25, maxLvl: 33 },
						{ id: 'spilotalis', minLvl: 29 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unownd', minLvl: 25 },
						{ id: 'unowng', minLvl: 25 },
						{ id: 'unownh', minLvl: 25 },
						{ id: 'unownv', minLvl: 25 },
						{ id: 'unownw', minLvl: 25 },
						{ id: 'unowny', minLvl: 25 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Ambalchi Temple Shrine
		await updatelocation(client,
			{
				_id: 'ambalchitempleshrine',
				name: 'Ambalchi Temple Shrine',
				isPrimaryLoc: false,
				locNames: ['ambalchitemple'],
				areaName: 'shrine',
				island: 'Kronea Island',
				numRequiredRevJobs: 6,
				numRequiredBadges: 5,
				accessTo: ['ambalchitempleruins'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unownd', minLvl: 30 },
						{ id: 'unowng', minLvl: 30 },
						{ id: 'unownh', minLvl: 30 },
						{ id: 'unownv', minLvl: 30 },
						{ id: 'unownw', minLvl: 30 },
						{ id: 'unowny', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Route NL5
		await updatelocation(client,
			{
				_id: 'routenl5',
				name: 'Route NL5',
				island: 'Kronea Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['denathvillage', 'routenl6'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '100' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '300' },
						{ id: 'diacity', cost: '500' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '700' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '700' },
					],
				},
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'gowatu', minLvl: 5, maxLvl: 27 },
						{ id: 'turatal', minLvl: 23 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'auriole', minLvl: 5, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'dustley', minLvl: 5, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'natu', minLvl: 5, maxLvl: 27 },
						{ id: 'xatu', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'nincada', minLvl: 5, maxLvl: 22 },
						{ id: 'ninjask', minLvl: 18 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'pachirisu', minLvl: 7 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL6
		await updatelocation(client,
			{
				_id: 'routenl6',
				name: 'Route NL6',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['routenl5', 'routenl7'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinb', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'clauncher', minLvl: 10, maxLvl: 39 },
						{ id: 'clawitzer', minLvl: 35 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL7
		await updatelocation(client,
			{
				_id: 'routenl7',
				name: 'Route NL7',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['routenl6', 'szlazancity'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '300' },
					],
					tilnen: [
						{ id: 'diacity', cost: '100' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '500' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '700' },
					],
				},
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'auriole', minLvl: 5, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'paras', minLvl: 5, maxLvl: 26 },
						{ id: 'parasect', minLvl: 22 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'gowatu', minLvl: 5, maxLvl: 27 },
						{ id: 'turatal', minLvl: 23, maxLvl: 29 },
						{ id: 'josuche', minLvl: 30 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'curlsa', minLvl: 5, maxLvl: 24 },
						{ id: 'coiffaire', minLvl: 20, maxLvl: 40 },
						{ id: 'ostento', minLvl: 36 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'nincada', minLvl: 5, maxLvl: 22 },
						{ id: 'ninjask', minLvl: 18 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'pachirisu', minLvl: 7 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'minijina', minLvl: 5, maxLvl: 27 },
						{ id: 'bojina', minLvl: 23, maxLvl: 42 },
						{ id: 'noperajina', minLvl: 38 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Szlazan City
		await updatelocation(client,
			{
				_id: 'szlazancity',
				name: 'Szlazan City',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Rival', 'Quests', 'Revivalist HQ'],
				accessTo: ['routenl7', 'acoatyltowerlowerfloors', 'routenl8'],
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Acoatyl Tower Lower Floors
		await updatelocation(client,
			{
				_id: 'acoatyltowerlowerfloors',
				name: 'Acoatyl Tower Lower Floors',
				isPrimaryLoc: true,
				locNames: ['acoatyltower'],
				areaName: 'lowerfloors',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['szlazancity', 'acoatyltowerupperfloors'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'auriole', minLvl: 12, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'natu', minLvl: 12, maxLvl: 27 },
						{ id: 'xatu', minLvl: 23 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'transmite', minLvl: 13 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'tianglis', minLvl: 13 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'farfetch\'d', minLvl: 12, maxLvl: 39 },
						{ id: 'rapscallion', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'chatot', minLvl: 12, maxLvl: 39 },
						{ id: 'lyrissimo', minLvl: 35 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Acoatly Tower Upper Floors
		await updatelocation(client,
			{
				_id: 'acoatyltowerupperfloors',
				name: 'Acoatyl Tower Upper Floors',
				isPrimaryLoc: false,
				locNames: ['acoatyltower'],
				areaName: 'upperfloors',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				numRequiredRevJobs: 2,
				numRequiredBadges: 3,
				accessTo: ['acoatyltowerlowerfloors', 'acoatyltowershrine'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'icauriole', minLvl: 28 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'murkrow', minLvl: 25 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'sigilyph', minLvl: 28 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'swablu', minLvl: 25, maxLvl: 37 },
						{ id: 'altaria', minLvl: 33 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'vulkhet', minLvl: 25, maxLvl: 34 },
						{ id: 'nekhetura', minLvl: 30 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unowni', minLvl: 25 },
						{ id: 'unownm', minLvl: 25 },
						{ id: 'unownr', minLvl: 25 },
						{ id: 'unownt', minLvl: 25 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Acoatyl Tower Shrine
		await updatelocation(client,
			{
				_id: 'acoatyltowershrine',
				name: 'Acoatyl Tower Shrine',
				isPrimaryLoc: false,
				locNames: ['acoatyltower'],
				areaName: 'shrine',
				island: 'Tilnen Island',
				numRequiredRevJobs: 6,
				numRequiredBadges: 5,
				accessTo: ['acoatyltowerupperfloors'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unowni', minLvl: 30 },
						{ id: 'unownm', minLvl: 30 },
						{ id: 'unownr', minLvl: 30 },
						{ id: 'unownt', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Route NL8
		await updatelocation(client,
			{
				_id: 'routenl8',
				name: 'Route NL8',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['szlazancity', 'baaresatown'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'mareep', minLvl: 8, maxLvl: 22 },
						{ id: 'flaafy', minLvl: 18, maxLvl: 32 },
						{ id: 'amhparos', minLvl: 28 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'swablu', minLvl: 8, maxLvl: 37 },
						{ id: 'altaria', minLvl: 33 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'humbuzz', minLvl: 12, maxLvl: 27 },
						{ id: 'klaitning', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'lamlie', minLvl: 8, maxLvl: 22 },
						{ id: 'lobovo', minLvl: 18, maxLvl: 37 },
						{ id: 'luvaris', minLvl: 33 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'phanpy', minLvl: 8, maxLvl: 27 },
						{ id: 'donphan', minLvl: 23 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'thunderma', minLvl: 9 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Rain',
					chance: 25,
				},
			},
		);

		// Baaresa Town
		await updatelocation(client,
			{

				id: 'baaresatown',
				name: 'Baaresa Town',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Revivalist HQ'],
				accessTo: ['routenl8', 'fulgurokmountainsmountainside'],
				hasTrainers: true,
				shops: ['PokéMart'],
				weather: {
					type: 'Rain',
					chance: 25,
				},
			},
		);

		// Fulgurok Mountains Mountainside
		await updatelocation(client,
			{
				_id: 'fulgurokmountainsmountainside',
				name: 'Fulgurok Mountains Mountainside',
				isPrimaryLoc: true,
				locNames: ['fulgurokmountains'],
				areaName: 'mountainside',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['baaresatown', 'fulgurokmountainscaves', 'fulgurokmountainslowpeaks', 'routenl9'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'mareep', minLvl: 12, maxLvl: 22 },
						{ id: 'flaafy', minLvl: 18, maxLvl: 32 },
						{ id: 'amhparos', minLvl: 28 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'nuwill', minLvl: 12 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'helioptile', minLvl: 12 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'humbuzz', minLvl: 12, maxLvl: 27 },
						{ id: 'klaitning', minLvl: 23 },
					] },
					{ probability: 14, pokemon: [
						{ id: 'thunderma', minLvl: 14 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'finnial', minLvl: 12, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Rain',
					chance: 50,
				},
			},
		);

		// Fulgurok Mountains Caves
		await updatelocation(client,
			{
				_id: 'fulgurokmountainscaves',
				name: 'Fulgurok Mountains Caves',
				isPrimaryLoc: false,
				locNames: ['fulgurokmountains'],
				areaName: 'caves',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				numRequiredRevJobs: 2,
				numRequiredBadges: 3,
				accessTo: ['fulgurokmountainsmountainside', 'fulgurokmountainsshrine'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'transmite', minLvl: 28 },
					] },
					{ probability: 35, pokemon: [
						{ id: 'pachirisu', minLvl: 25 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'donarith', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unownc', minLvl: 25 },
						{ id: 'unownj', minLvl: 25 },
						{ id: 'unownp', minLvl: 25 },
						{ id: 'unownu', minLvl: 25 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Fulgurok Mountains Shrine
		await updatelocation(client,
			{
				_id: 'fulgurokmountainsshrine',
				name: 'Fulgurok Mountains Shrine',
				isPrimaryLoc: false,
				locNames: ['fulgurokmountains'],
				areaName: 'shrine',
				island: 'Tilnen Island',
				numRequiredRevJobs: 6,
				numRequiredBadges: 5,
				accessTo: ['fulgurokmountainscaves'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unownc', minLvl: 30 },
						{ id: 'unownj', minLvl: 30 },
						{ id: 'unownp', minLvl: 30 },
						{ id: 'unownu', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Fulgurok Mountains Low Peaks
		await updatelocation(client,
			{
				_id: 'fulgurokmountainslowpeaks',
				name: 'Fulgurok Mountains Low Peaks',
				isPrimaryLoc: false,
				locNames: ['fulgurokmountains'],
				areaName: 'lowpeaks',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['fulgurokmountainsmountainside'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'invicunya', minLvl: 13, maxLvl: 40 },
						{ id: 'heladalca', minLvl: 36 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'meditite', minLvl: 13, maxLvl: 39 },
						{ id: 'medicham', minLvl: 35 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'snorunt', minLvl: 13, maxLvl: 44 },
						{ id: 'glalie', minLvl: 40 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'invicunya', minLvl: 13, maxLvl: 19 },
						{ id: 'rakateis', minLvl: 20 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'snorunt', minLvl: 13, maxLvl: 24 },
						{ id: 'cryogonal', minLvl: 25 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'cubly', minLvl: 15, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Hail',
					chance: 50,
				},
			},
		);

		// Route NL9
		await updatelocation(client,
			{
				_id: 'routenl9',
				name: 'Route NL9',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['fulgurokmountains_mountainside', 'fulgurokcaves', 'routenl10'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'mareep', minLvl: 8, maxLvl: 22 },
						{ id: 'flaafy', minLvl: 18, maxLvl: 32 },
						{ id: 'amhparos', minLvl: 28 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'auriole', minLvl: 8, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'nuwill', minLvl: 8 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'lamlie', minLvl: 8, maxLvl: 22 },
						{ id: 'lobovo', minLvl: 18, maxLvl: 37 },
						{ id: 'luvaris', minLvl: 33 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'phanpy', minLvl: 8, maxLvl: 27 },
						{ id: 'donphan', minLvl: 23 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'thunderma', minLvl: 10, maxLvl: 29 },
						{ id: 'rasqueon', minLvl: 30 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Fog',
					chance: 100,
				},
			},
		);

		// Fulgurok Caves
		await updatelocation(client,
			{
				_id: 'fulgurokcaves',
				name: 'Fulgurok Caves',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['routenl9', 'routenl10', 'fulgurokisland'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'bucarat', minLvl: 12, maxLvl: 24 },
						{ id: 'mortarat', minLvl: 20 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'aron', minLvl: 12, maxLvl: 34 },
						{ id: 'lairon', minLvl: 30, maxLvl: 44 },
						{ id: 'aggron', minLvl: 40 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'drilbur', minLvl: 12, maxLvl: 33 },
						{ id: 'excadrill', minLvl: 29 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'dasfix', minLvl: 12, maxLvl: 38 },
						{ id: 'malraja', minLvl: 34 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'mawile', minLvl: 14 },
						{ id: 'caslot', minLvl: 25 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aron', minLvl: 12, maxLvl: 19 },
						{ id: 'durant', minLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Fulgurok Island
		await updatelocation(client,
			{
				_id: 'fulgurokisland',
				name: 'Fulgurok Island',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['fulgurokcaves'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'bucarat', minLvl: 16, maxLvl: 24 },
						{ id: 'mortarat', minLvl: 20 },
					] },
					{ probability: 35, pokemon: [
						{ id: 'kiblis', minLvl: 16, maxLvl: 41 },
						{ id: 'ibazel', minLvl: 37 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'gravendou', minLvl: 16, maxLvl: 20 },
						{ id: 'cragendou', minLvl: 16, maxLvl: 38 },
						{ id: 'quarendou', minLvl: 34 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'gravendou', minLvl: 16, maxLvl: 19 },
						{ id: 'cragendou', minLvl: 16, maxLvl: 19 },
						{ id: 'shuckle', minLvl: 20 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'kiblis', minLvl: 16, maxLvl: 19 },
						{ id: 'caslot', minLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL10
		await updatelocation(client,
			{
				_id: 'routenl10',
				name: 'Route NL10',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				accessTo: ['routenl9', 'fulgurokcaves', 'diacity'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'mareep', minLvl: 5, maxLvl: 22 },
						{ id: 'flaafy', minLvl: 18, maxLvl: 32 },
						{ id: 'amhparos', minLvl: 28 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'humbuzz', minLvl: 5, maxLvl: 27 },
						{ id: 'klaitning', minLvl: 23 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'meditite', minLvl: 5, maxLvl: 39 },
						{ id: 'medicham', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'lamlie', minLvl: 5, maxLvl: 22 },
						{ id: 'lobovo', minLvl: 18, maxLvl: 37 },
						{ id: 'luvaris', minLvl: 33 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'phanpy', minLvl: 5, maxLvl: 27 },
						{ id: 'donphan', minLvl: 23 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'duskull', minLvl: 5, maxLvl: 39 },
						{ id: 'dusclops', minLvl: 35 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Dia City
		await updatelocation(client,
			{
				_id: 'diacity',
				name: 'Dia City',
				island: 'Tilnen Island',
				usableHMs: ['fly'],
				actions: ['Rival'],
				accessTo: ['routenl10', 'routenl11'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '700' },
						{ id: 'shrdlutown', cost: '700' },
					],
					kronea: [
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '500' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '100' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '300' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '500' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '700' },
					],
				},
				hasTrainers: true,
				shops: ['PokéMart', 'Dia Department Store', 'Fabulous Items \'R\' Us'],
			},
		);

		// Route NL11
		await updatelocation(client,
			{
				_id: 'routenl11',
				name: 'Route NL11',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['diacity', 'routenl12falantrdocks'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinb', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'skrelp', minLvl: 10, maxLvl: 50 },
						{ id: 'dragalge', minLvl: 46 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL12 / Falantr Docks
		await updatelocation(client,
			{
				_id: 'routenl12falantrdocks',
				name: 'Route NL12 / Falantr Docks',
				locNames: ['routenl12', 'falantrdocks'],
				island: 'Xybryle Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['routenl11', 'falantrcity', 'routenl21'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '500' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '300' },
					],
					xybryle: [
						{ id: 'routenl14', cost: '100' },
						{ id: 'runecity', cost: '100' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
				},
				wilds: [
					{ probability: 35, pokemon: [
						{ id: 'dustley', minLvl: 5, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'kizziff', minLvl: 5, maxLvl: 12 },
						{ id: 'murgaz', minLvl: 8, maxLvl: 22 },
						{ id: 'chaszin', minLvl: 18 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'farfetch\'d', minLvl: 6, maxLvl: 39 },
						{ id: 'rapscalion', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'duskull', minLvl: 5, maxLvl: 39 },
						{ id: 'dusclops', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'minccino', minLvl: 5 },
						{ id: 'zangoose', minLvl: 20 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'farfetch\'d', minLvl: 6, maxLvl: 24 },
						{ id: 'hawlucha', minLvl: 25 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'turistar', minLvl: 5, maxLvl: 34 },
						{ id: 'turumaken', minLvl: 30 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Falantr City
		await updatelocation(client,
			{
				_id: 'falantrcity',
				name: 'Falantr City',
				island: 'Xybryle Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader'],
				accessTo: ['routenl12falantrdocks', 'routenl13xybrylebridge'],
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Route NL13 / Xybryle Bridge
		await updatelocation(client,
			{
				_id: 'routenl13xybrylebridge',
				name: 'Route NL13 / Xybryle Bridge',
				locNames: ['routenl13', 'xybrylebridge'],
				island: 'Xybryle Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['falantrcity', 'routenl14'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'turistar', minLvl: 8, maxLvl: 34 },
						{ id: 'turumaken', minLvl: 30 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'minccino', minLvl: 8 },
						{ id: 'zangoose', minLvl: 20 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'minccino', minLvl: 8 },
						{ id: 'seviper', minLvl: 20 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'farfetch\'d', minLvl: 9, maxLvl: 24 },
						{ id: 'hawlucha', minLvl: 25 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'chatot', minLvl: 9, maxLvl: 24 },
						{ id: 'onzarudo', minLvl: 25 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'minccino', minLvl: 8, maxLvl: 29 },
						{ id: 'rasqueon', minLvl: 30 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'quimpy', minLvl: 15, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL14
		await updatelocation(client,
			{
				_id: 'routenl14',
				name: 'Route NL14',
				island: 'Xybryle Island',
				usableHMs: ['fly'],
				accessTo: ['routenl13/xybrylebridge', 'runecity', 'routenl15'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '500' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '100' },
						{ id: 'runecity', cost: '100' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
				},
				wilds: [
					{ probability: 35, pokemon: [
						{ id: 'auriole', minLvl: 5, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'kizziff', minLvl: 5, maxLvl: 12 },
						{ id: 'murgaz', minLvl: 8, maxLvl: 22 },
						{ id: 'chaszin', minLvl: 18 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'chatot', minLvl: 6, maxLvl: 39 },
						{ id: 'lyrissimo', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'scraggy', minLvl: 5, maxLvl: 41 },
						{ id: 'scrafty', minLvl: 37 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'minccino', minLvl: 5 },
						{ id: 'seviper', minLvl: 20 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'chatot', minLvl: 6, maxLvl: 24 },
						{ id: 'onzarudo', minLvl: 25 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'turistar', minLvl: 5, maxLvl: 34 },
						{ id: 'turumaken', minLvl: 30 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Rune City
		await updatelocation(client,
			{
				_id: 'runecity',
				name: 'Rune City',
				island: 'Xybryle Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Rival', 'Quests', 'Revivalist HQ'],
				accessTo: ['routenl14', 'xybrylebay'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '700' },
						{ id: 'shrdlutown', cost: '700' },
					],
					kronea: [
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '300' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '100' },
						{ id: 'routenl14', cost: '100' },
						{ id: 'runecity', cost: '300' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
				},
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Xybryle Bay
		await updatelocation(client,
			{
				_id: 'xybrylebay',
				name: 'Xybryle Bay',
				island: 'Xybryle Island',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['runecity', 'submarinesafari', 'tonkuraseabed'],
				wilds: [
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 35, pokemon: [
						{ id: 'turistar', minLvl: 18, maxLvl: 34 },
						{ id: 'turumaken', minLvl: 30 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'vaering', minLvl: 15, maxLvl: 30 },
						{ id: 'raidnarr', minLvl: 26, maxLvl: 44 },
						{ id: 'drasarkr', minLvl: 40 },
					] },
				],
				fishing: [
					{ probability: 34, pokemon: [
						{ id: 'kelfee', minLvl: 10, maxLvl: 33 },
						{ id: 'drakella', minLvl: 29 },
					] },
					{ probability: 33, pokemon: [
						{ id: 'clauncher', minLvl: 10, maxLvl: 39 },
						{ id: 'clawitzer', minLvl: 35 },
					] },
					{ probability: 33, pokemon: [
						{ id: 'skrelp', minLvl: 10, maxLvl: 50 },
						{ id: 'dragalge', minLvl: 46 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Submarine Safari
		await updatelocation(client,
			{
				_id: 'submarinesafari',
				name: 'Submarine Safari',
				island: 'Xybryle Island',
				usableHMs: ['fly', 'dive'],
				hasMinigame: true,
				accessTo: ['xybrylebay'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'sharpedo', minLvl: 30 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'kelfee', minLvl: 25, maxLvl: 33 },
						{ id: 'drakella', minLvl: 29 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'clauncher', minLvl: 25, maxLvl: 39 },
						{ id: 'clawitzer', minLvl: 35 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'skrelp', minLvl: 25, maxLvl: 50 },
						{ id: 'dragalge', minLvl: 46 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'freye', minLvl: 25, maxLvl: 29 },
						{ id: 'floundirt', minLvl: 25 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'octillery', minLvl: 25 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'raidnarr', minLvl: 28, maxLvl: 44 },
						{ id: 'drasarkr', minLvl: 40 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'wyrmal', minLvl: 25, maxLvl: 37 },
						{ id: 'ventorm', minLvl: 33 },
					] },
				],
				hasTrainers: false,
				weather: {
					type: 'Underwater',
					chance: 100,
				},
			},
		);

		// Ton-Kura Seabed
		await updatelocation(client,
			{
				_id: 'tonkuraseabed',
				name: 'Ton-Kura Seabed',
				isPrimaryLoc: true,
				locNames: ['tonkura'],
				areaName: 'seabed',
				island: 'Xybryle Island',
				usableHMs: ['fly', 'dive'],
				accessTo: ['xybrylebay', 'tonkuracaves'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'kelfee', minLvl: 25, maxLvl: 33 },
						{ id: 'drakella', minLvl: 29 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'sharpedo', minLvl: 30 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'freye', minLvl: 25, maxLvl: 29 },
						{ id: 'floundirt', minLvl: 25 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Underwater',
					chance: 100,
				},
			},
		);

		// Ton-Kura Caves
		await updatelocation(client,
			{
				_id: 'tonkuracaves',
				name: 'Ton-Kura Caves',
				isPrimaryLoc: false,
				locNames: ['tonkura'],
				areaName: 'caves',
				island: 'Xybryle Island',
				numRequiredRevJobs: 2,
				numRequiredBadges: 3,
				accessTo: ['tonkuraseabed', 'tonkurashrine'],
				wilds: [
					{ probability: 40, pokemon: [
						{ id: 'drakella', minLvl: 30 },
					] },
					{ probability: 35, pokemon: [
						{ id: 'sharpedo', minLvl: 30 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'octillery', minLvl: 30 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unownb', minLvl: 25 },
						{ id: 'unowne', minLvl: 25 },
						{ id: 'unownf', minLvl: 25 },
						{ id: 'unowns', minLvl: 25 },
						{ id: 'unownx', minLvl: 25 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Ton-Kura Shrine
		await updatelocation(client,
			{
				_id: 'tonkurashrine',
				name: 'Ton-Kura Shrine',
				isPrimaryLoc: false,
				locNames: ['tonkura'],
				areaName: 'shrine',
				island: 'Xybryle Island',
				numRequiredRevJobs: 6,
				numRequiredBadges: 5,
				accessTo: ['tonkuracaves'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unownb', minLvl: 30 },
						{ id: 'unowne', minLvl: 30 },
						{ id: 'unownf', minLvl: 30 },
						{ id: 'unowns', minLvl: 30 },
						{ id: 'unownx', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Route NL15
		await updatelocation(client,
			{
				_id: 'routenl15',
				name: 'Route NL15',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['routenl14', 'routenl16'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinb', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'kelfee', minLvl: 10, maxLvl: 33 },
						{ id: 'drakella', minLvl: 29 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL16
		await updatelocation(client,
			{
				_id: 'routenl16',
				name: 'Route NL16',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['routenl15', 'versorectocity'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '700' },
					],
					kronea: [
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '500' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '300' },
						{ id: 'routenl14', cost: '300' },
						{ id: 'runecity', cost: '300' },
					],
					krtuso: [
						{ id: 'fracturacity', cost: '100' },
					],
				},
				wilds: [
					{ probability: 35, pokemon: [
						{ id: 'auriole', minLvl: 5, maxLvl: 26 },
						{ id: 'icauriole', minLvl: 22 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'dustley', minLvl: 5, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'scraggy', minLvl: 5, maxLvl: 41 },
						{ id: 'scrafty', minLvl: 37 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'numel', minLvl: 5, maxLvl: 36 },
						{ id: 'camerupt', minLvl: 32 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'thunderma', minLvl: 7, maxLvl: 29 },
						{ id: 'razelodon', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'smeargle', minLvl: 7 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Versocrecto City
		await updatelocation(client,
			{
				_id: 'versorectocity',
				name: 'Versorecto City',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Quests'],
				accessTo: ['routenl16', 'routenl17'],
				hasTrainers: true,
				shops: ['PokéMart', 'Versorecto Department Store'],
			},
		);

		// Route NL17
		await updatelocation(client,
			{
				_id: 'routenl17',
				name: 'Route NL17',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['versorectocity', 'etaoincity'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'dustley', minLvl: 8, maxLvl: 22 },
						{ id: 'aculago', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'sandile', minLvl: 8, maxLvl: 32 },
						{ id: 'krokorok', minLvl: 28, maxLvl: 42 },
						{ id: 'krookodile', minLvl: 38 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'numel', minLvl: 8, maxLvl: 36 },
						{ id: 'camerupt', minLvl: 32 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'pindillo', minLvl: 8, maxLvl: 31 },
						{ id: 'charandillo', minLvl: 27 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'murkrow', minLvl: 10 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'misdreavus', minLvl: 10 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'lamanda', minLvl: 15, maxLvl: 20 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Etaoin City
		await updatelocation(client,
			{
				_id: 'etaoincity',
				name: 'Etaoin City',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Rival', 'Revivalist HQ'],
				accessTo: ['routenl17', 'routenl18'],
				hasTrainers: true,
				weather: {
					type: 'Harsh Sunlight',
					chance: 100,
				},
				shops: ['PokéMart'],
			},
		);

		// Route NL18
		await updatelocation(client,
			{
				_id: 'routenl18',
				name: 'Route NL18',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				accessTo: ['etaoincity', 'jarovesubadlandsflatlands'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'numel', minLvl: 12, maxLvl: 36 },
						{ id: 'camerupt', minLvl: 32 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'sandile', minLvl: 12, maxLvl: 32 },
						{ id: 'krokorok', minLvl: 28, maxLvl: 42 },
						{ id: 'krookodile', minLvl: 38 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'pindillo', minLvl: 12, maxLvl: 31 },
						{ id: 'charandillo', minLvl: 27 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'galorindle', minLvl: 12, maxLvl: 39 },
						{ id: 'galaraud', minLvl: 35 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'numel', minLvl: 12, maxLvl: 19 },
						{ id: 'heatmor', minLvl: 20 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'slugma', minLvl: 12, maxLvl: 19 },
						{ id: 'durant', minLvl: 20 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Harsh Sunlight',
					chance: 100,
				},
			},
		);

		// Jarovesu Badlands Flatlands
		await updatelocation(client,
			{
				_id: 'jarovesubadlandsflatlands',
				name: 'Jarovesu Badlands Flatlands',
				isPrimaryLoc: true,
				locNames: ['jarovesubadlands'],
				areaName: 'flatlands',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Quests'],
				accessTo: ['routenl18', 'routenl19', 'jarovesubadlandsheights'],
				wilds: [
					{ probability: 30, pokemon: [
						{ id: 'numel', minLvl: 12, maxLvl: 36 },
						{ id: 'camerupt', minLvl: 32 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'vulkhet', minLvl: 12 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'slugma', minLvl: 12, maxLvl: 40 },
						{ id: 'magcargo', minLvl: 36 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'virlich', minLvl: 12 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'fallorite', minLvl: 12 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'virlich', minLvl: 12, maxLvl: 19 },
						{ id: 'sparcoil', minLvl: 20 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Harsh Sunlight',
					chance: 100,
				},
			},
		);

		// Jarovesu Badlands Heights
		await updatelocation(client,
			{
				_id: 'jarovesubadlandsheights',
				name: 'Jarovesu Badlands Heights',
				isPrimaryLoc: false,
				locNames: ['jarovesubadlands'],
				areaName: 'heights',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				numRequiredRevJobs: 2,
				numRequiredBadges: 3,
				accessTo: ['jarovesubadlandsflatlands', 'jarovesubadlandsshrine'],
				wilds: [
					{ probability: 35, pokemon: [
						{ id: 'slugma', minLvl: 25, maxLvl: 40 },
						{ id: 'magcargo', minLvl: 36 },
					] },
					{ probability: 30, pokemon: [
						{ id: 'fallorite', minLvl: 25 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'heatmor', minLvl: 28 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'torranel', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unownk', minLvl: 25 },
						{ id: 'unownl', minLvl: 25 },
						{ id: 'unownn', minLvl: 25 },
						{ id: 'unowno', minLvl: 25 },
						{ id: 'unownq', minLvl: 25 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Harsh Sunlight',
					chance: 100,
				},
			},
		);

		// Jarovesu Badlands Shrine
		await updatelocation(client,
			{
				_id: 'jarovesubadlandsshrine',
				name: 'Jarovesu Badlands Shrine',
				isPrimaryLoc: false,
				locNames: ['jarovesubadlands'],
				areaName: 'shrine',
				island: 'Krtuso Island',
				numRequiredRevJobs: 6,
				numRequiredBadges: 5,
				accessTo: ['jarovesubadlandsheights'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unownk', minLvl: 30 },
						{ id: 'unownl', minLvl: 30 },
						{ id: 'unownn', minLvl: 30 },
						{ id: 'unowno', minLvl: 30 },
						{ id: 'unownq', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Route NL19
		await updatelocation(client,
			{
				_id: 'routenl19',
				name: 'Route NL19',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				accessTo: ['jarovesubadlandsflatlands', 'fracturacity'],
				wilds: [
					{ probability: 35, pokemon: [
						{ id: 'sandile', minLvl: 5, maxLvl: 32 },
						{ id: 'krokorok', minLvl: 28, maxLvl: 42 },
						{ id: 'krookodile', minLvl: 38 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'numel', minLvl: 5, maxLvl: 36 },
						{ id: 'camerupt', minLvl: 32 },
					] },
					{ probability: 20, pokemon: [
						{ id: 'galorindle', minLvl: 5, maxLvl: 39 },
						{ id: 'galaraud', minLvl: 35 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'drilbur', minLvl: 5, maxLvl: 33 },
						{ id: 'excadrill', minLvl: 29 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'slugma', minLvl: 25, maxLvl: 40 },
						{ id: 'magcargo', minLvl: 36 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'tianglis', minLvl: 7, maxLvl: 24 },
						{ id: 'mandicore', minLvl: 25 },
					] },
				],
				hasTrainers: true,
				weather: {
					type: 'Harsh Sunlight',
					chance: 100,
				},
			},
		);

		// Fractura City
		await updatelocation(client,
			{
				_id: 'fracturacity',
				name: 'Fractura City',
				island: 'Krtuso Island',
				usableHMs: ['fly'],
				actions: ['Gym Leader', 'Quests'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '300' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '300' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '500' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '100' },
					],
				},
				accessTo: ['routenl19', 'routenl12'],
				hasTrainers: true,
				shops: ['PokéMart'],
			},
		);

		// Route NL20
		await updatelocation(client,
			{
				_id: 'routenl20',
				name: 'Route NL20',
				usableHMs: ['fly', 'surf', 'dive'],
				accessTo: ['fracturacity', 'leddintown'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinr', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'clauncher', minLvl: 10, maxLvl: 39 },
						{ id: 'clawitzer', minLvl: 35 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Route NL21
		await updatelocation(client,
			{
				_id: 'routenl21',
				name: 'Route NL21',
				usableHMs: ['fly', 'surf', 'dive'],
				numRequiredBadges: 8,
				accessTo: ['routenl12falantrdocks', 'alnirazruinsvictoryroadstreets'],
				wilds: [
					{ probability: 50, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 36 },
						{ id: 'kraitra', minLvl: 32 },
					] },
					{ probability: 45, pokemon: [
						{ id: 'latikrai', minLvl: 18, maxLvl: 32 },
						{ id: 'sharpedo', minLvl: 28 },
					] },
					{ probability: 4, pokemon: [
						{ id: 'aeolagio', minLvl: 20 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'lapras', minLvl: 20 },
					] },
				],
				fishing: [
					{ probability: 75, pokemon: [
						{ id: 'latikrai', minLvl: 10, maxLvl: 22 },
						{ id: 'basculinb', minLvl: 18 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'skrelp', minLvl: 10, maxLvl: 50 },
						{ id: 'dragalge', minLvl: 46 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Alniraz Ruins / Victory Road Streets
		await updatelocation(client,
			{
				_id: 'alnirazruinsvictoryroadstreets',
				name: 'Alniraz Ruins / Victory Road Streets',
				isPrimaryLoc: true,
				locNames: ['alnirazruins', 'victoryroad'],
				areaName: 'streets',
				island: 'Adar Zilira',
				usableHMs: ['fly'],
				actions: ['Rival'],
				numRequiredBadges: 8,
				accessTo: ['routenl21', 'alnirazruinsvictoryroadbuildings', 'pokemonleaguehq'],
				wilds: [
					{ probability: 20, pokemon: [
						{ id: 'donphan', minLvl: 40 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'xatu', minLvl: 38 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'hawlucha', minLvl: 38 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'onzarudo', minLvl: 38 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'ibazel', minLvl: 40 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'petrocka', minLvl: 38 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'sigilyph', minLvl: 38 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'quarendou', minLvl: 40 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'mandicore', minLvl: 40 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Alniraz Ruins / Victory Road Buildings
		await updatelocation(client,
			{
				_id: 'alnirazruinsvictoryroadbuildings',
				name: 'Alniraz Ruins / Victory Road Buildings',
				isPrimaryLoc: false,
				locNames: ['alnirazruins', 'victoryroad'],
				areaName: 'buildings',
				island: 'Adar Zilira',
				usableHMs: ['fly'],
				numRequiredRevJobs: 2,
				numRequiredBadges: 8,
				accessTo: ['alnirazruinsvictoryroadstreets', 'alnirazruinsvictoryroadshrine'],
				wilds: [
					{ probability: 25, pokemon: [
						{ id: 'transmite', minLvl: 38 },
					] },
					{ probability: 25, pokemon: [
						{ id: 'tianglis', minLvl: 38 },
					] },
					{ probability: 15, pokemon: [
						{ id: 'galaraud', minLvl: 40 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'malraja', minLvl: 40 },
					] },
					{ probability: 10, pokemon: [
						{ id: 'bitemare', minLvl: 40 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'ostento', minLvl: 40 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'sigilyph', minLvl: 38 },
					] },
					{ probability: 5, pokemon: [
						{ id: 'unowna', minLvl: 30 },
						{ id: 'unownz', minLvl: 30 },
					] },
				],
				hasTrainers: true,
			},
		);

		// Alniraz Ruins / Victory Road Shrine
		await updatelocation(client,
			{
				_id: 'alnirazruinsvictoryroadshrine',
				name: 'Alniraz Ruins / Victory Road Shrine',
				isPrimaryLoc: false,
				locNames: ['alnirazruins', 'victoryroad'],
				areaName: 'shrine',
				island: 'Adar Zilira',
				numRequiredRevJobs: 6,
				numRequiredBadges: 8,
				accessTo: ['alnirazruinsvictoryroadbuildings'],
				wilds: [
					{ probability: 99, pokemon: [
						{ id: 'unowna', minLvl: 30 },
						{ id: 'unownz', minLvl: 30 },
					] },
					{ probability: 1, pokemon: [
						{ id: 'unown!', minLvl: 30 },
						{ id: 'unown?', minLvl: 30 },
					] },
				],
				hasTrainers: false,
			},
		);

		// Pokemon League Headquarters
		await updatelocation(client,
			{
				_id: 'pokemonleaguehq',
				name: 'Pokémon League Headquarters',
				island: 'Adar Zilira',
				usableHMs: ['fly'],
				actions: ['Elite4'],
				numRequiredBadges: 8,
				accessTo: ['alnirazruinsvictoryroadstreets'],
				ferry: {
					brol: [
						{ id: 'leddintown', cost: '300' },
						{ id: 'shrdlutown', cost: '500' },
					],
					kronea: [
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
					],
					tilnen: [
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '300' },
					],
					xybryle: [
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '500' },
					],
					krtuso: [
						{ id: 'routenl16', cost: '100' },
					],
				},
				hasTrainers: false,
				shops: ['PokéMart'],
			},
		);


	}
	catch (e) {
		console.error(e);
	}
	finally {
		await client.close();
	}
}

main().catch(console.error);


async function updatelocation(client, location) {
	const result = await client.db('turqdb').collection('locations').insertOne(location);
	console.log(`New profile created with the following id: ${result.insertedId}`);
}