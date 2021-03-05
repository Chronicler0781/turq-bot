const { Location } = require('../models');
// Script updates locations with listed properties, adds a location if it doesn't exist in the db

async function main() {

	try {

		const mongoose = require('mongoose');
		const conf = require('../config.json');
		mongoose.connect(conf.uri, { useNewUrlParser: true, useUnifiedTopology: true});
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
			console.log('connected to mongodb');
		});
	
		const data = await Location.find()
            .populate({path: 'accessedBy', select: '_id name locNames areaName island accessedBy ferry'});
		console.log(data[0]);

		// leddinTown = await Location.findOne({_id: 'leddintown'});
		// console.log(leddinTown.ferry[0].id.name);
		const check = 2;

		if (check === 0) {
			await Location.remove({}, (err, product) => {
				if (err) return handleError(err);
			});
		}

		if (check === 1) {
			// Leddin Town
			await Location.create(
				{
					_id: 'leddintown',
					name: 'Leddin Town',
					island: 'Brol Island',
					startLocation: true,
					usableHMs: ['fly'],
					actions: ['Rival'],
					accessTo: ['routenl1south', 'routenl20'],
					ferry: [
						{ id: 'shrdlutown', cost: '100' },
						{ id: 'allogracity', cost: '300' },
						{ id: 'routenl5', cost: '500' },
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '700' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '700' },
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '300' },
					],
					hasTrainers: true,
					shops: ['PokéMart'],
				}, 
			);

			// Route NL1 South
			await Location.create(
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
							{ name: 'auriole', minLvl: 2, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'dustley', minLvl: 2, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'kizziff', minLvl: 2, maxLvl: 12 },
							{ name: 'murgaz', minLvl: 8, maxLvl: 22 },
							{ name: 'chaszin', minLvl: 18 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'tinimer', minLvl: 3 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Dingbat Cave Upper Caverns
			await Location.create(
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
							{ name: 'bucarat', minLvl: 3, maxLvl: 24 },
							{ name: 'mortarat', minLvl: 20 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'paras', minLvl: 3, maxLvl: 26 },
							{ name: 'parasect', minLvl: 22 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'dustley', minLvl: 3, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'gravendou', minLvl: 3, maxLvl: 20 },
							{ name: 'cragendou', minLvl: 16, maxLvl: 38 },
							{ name: 'quarendou', minLvl: 34 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Dingbat Cave Lower Caverns
			await Location.create(
				{
					_id: 'dingbatcavelowercaverns',
					name: 'Dingbat Cave Lower Caverns',
					isPrimaryLoc: false,
					locNames: ['dingbatcave'],
					areaName: 'lowercaverns',
					island: 'Brol Island',
					numRequiredBadges: 3,
					actions: ['Quests'],
					accessTo: ['dingbatcaveuppercaverns'],
					wilds: [
						{ probability: 25, pokemon: [
							{ name: 'bucarat', minLvl: 18, maxLvl: 24 },
							{ name: 'mortarat', minLvl: 20 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'aron', minLvl: 18, maxLvl: 34 },
							{ name: 'lairon', minLvl: 30, maxLvl: 44 },
							{ name: 'aggron', minLvl: 40 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'beddybite', minLvl: 18, maxLvl: 34 },
							{ name: 'bitemare', minLvl: 30 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'dasfix', minLvl: 18, maxLvl: 38 },
							{ name: 'malraja', minLvl: 34 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'misdreavus', minLvl: 20 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'sableye', minLvl: 20 },
							{ name: 'petrocka', minLvl: 25 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'derfin', minLvl: 15, maxLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL1 North
			await Location.create(
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
							{ name: 'auriole', minLvl: 2, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'dustley', minLvl: 2, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'kizziff', minLvl: 2, maxLvl: 12 },
							{ name: 'murgaz', minLvl: 8, maxLvl: 22 },
							{ name: 'chaszin', minLvl: 18 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'tinimer', minLvl: 3 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Shrdlu Town
			await Location.create(
				{
					_id: 'shrdlutown',
					name: 'Shrdlu Town',
					island: 'Brol Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['routenl1north', 'routenl2'],
					ferry: [
						{ id: 'leddintown', cost: '100' },
						{ id: 'allogracity', cost: '300' },
						{ id: 'routenl5', cost: '500' },
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '700' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '700' },
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '300' },
					],
					hasTrainers: true,
					shops: ['PokéMart'],
				},
			);

			// Route NL2
			await Location.create(
				{
					_id: 'routenl2',
					name: 'Route NL2',
					island: 'Brol Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['shrdlutown', 'allogracity'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinr', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'kelfee', minLvl: 10, maxLvl: 33 },
							{ name: 'drakella', minLvl: 29 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Allogra City
			await Location.create(
				{
					_id: 'allogracity',
					name: 'Allogra City',
					island: 'Kronea Island',
					usableHMs: ['fly'],
					actions: ['Gym Leader', 'Quests'],
					accessTo: ['routenl2', 'routenl3'],
					ferry: [
						{ id: 'leddintown', cost: '300' },
						{ id: 'shrdlutown', cost: '300' },
						{ id: 'routenl5', cost: '100' },
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '500' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '700' },
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '500' },
					],
					hasTrainers: true,
					shops: ['PokéMart'],
				},
			);

			// Route NL3
			await Location.create(
				{
					_id: 'routenl3',
					name: 'Route NL3',
					island: 'Kronea Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['allogracity', 'denathvillage'],
					wilds: [
						{ probability: 25, pokemon: [
							{ name: 'gowatu', minLvl: 5, maxLvl: 27 },
							{ name: 'turatal', minLvl: 23 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'auriole', minLvl: 5, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'dustley', minLvl: 5, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'espurr', minLvl: 5, maxLvl: 27 },
							{ name: 'meowstic', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'petilil', minLvl: 5 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'buneary', minLvl: 5 },
						] },
					],
					fishing: [
						{ probability: 40, pokemon: [
							{ name: 'carvanha', minLvl: 10 },
						] },
						{ probability: 40, pokemon: [
							{ name: 'carvanha', minLvl: 10, maxLvl: 19 },
							{ name: 'basculinb', minLvl: 20 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'carvanha', minLvl: 10, maxLvl: 24 },
							{ name: 'garapaima', minLvl: 25 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'feebas', minLvl: 15, maxLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Denath Village
			await Location.create(
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
			await Location.create(
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
							{ name: 'gowatu', minLvl: 8, maxLvl: 27 },
							{ name: 'turatal', minLvl: 23 },
						] },
						{ probability: 24, pokemon: [
							{ name: 'mefflora', minLvl: 8, maxLvl: 22 },
							{ name: 'mephodil', minLvl: 18, maxLvl: 33 },
							{ name: 'spilotalis', minLvl: 29 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'espurr', minLvl: 8, maxLvl: 27 },
							{ name: 'meowstic', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'natu', minLvl: 8, maxLvl: 27 },
							{ name: 'xatu', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'petilil', minLvl: 8 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'buneary', minLvl: 8, maxLvl: 24 },
							{ name: 'kangaskhan', minLvl: 25 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'cherubi', minLvl: 8, maxLvl: 27 },
							{ name: 'cherrim', minLvl: 23 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Ambalchi Temple Gardens
			await Location.create(
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
							{ name: 'gowatu', minLvl: 12, maxLvl: 27 },
							{ name: 'turatal', minLvl: 23 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'mefflora', minLvl: 12, maxLvl: 22 },
							{ name: 'mephodil', minLvl: 18, maxLvl: 33 },
							{ name: 'spilotalis', minLvl: 29 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'exeggcute', minLvl: 12 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'petilil', minLvl: 12 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'cherubi', minLvl: 12, maxLvl: 27 },
							{ name: 'cherrim', minLvl: 23 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Ambalchi Temple Ruins
			await Location.create(
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
							{ name: 'parasect', minLvl: 28 },
						] },
						{ probability: 35, pokemon: [
							{ name: 'turatal', minLvl: 28 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'mephodil', minLvl: 25, maxLvl: 33 },
							{ name: 'spilotalis', minLvl: 29 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unownd', minLvl: 25 },
							{ name: 'unowng', minLvl: 25 },
							{ name: 'unownh', minLvl: 25 },
							{ name: 'unownv', minLvl: 25 },
							{ name: 'unownw', minLvl: 25 },
							{ name: 'unowny', minLvl: 25 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Ambalchi Temple Shrine
			await Location.create(
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
							{ name: 'unownd', minLvl: 30 },
							{ name: 'unowng', minLvl: 30 },
							{ name: 'unownh', minLvl: 30 },
							{ name: 'unownv', minLvl: 30 },
							{ name: 'unownw', minLvl: 30 },
							{ name: 'unowny', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Route NL5
			await Location.create(
				{
					_id: 'routenl5',
					name: 'Route NL5',
					island: 'Kronea Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['denathvillage', 'routenl6'],
					ferry: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
						{ id: 'allogracity', cost: '100' },
						{ id: 'routenl7', cost: '300' },
						{ id: 'diacity', cost: '500' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '700' },
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '700' },
					],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'gowatu', minLvl: 5, maxLvl: 27 },
							{ name: 'turatal', minLvl: 23 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'auriole', minLvl: 5, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'dustley', minLvl: 5, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'natu', minLvl: 5, maxLvl: 27 },
							{ name: 'xatu', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'nincada', minLvl: 5, maxLvl: 22 },
							{ name: 'ninjask', minLvl: 18 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'pachirisu', minLvl: 7 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL6
			await Location.create(
				{
					_id: 'routenl6',
					name: 'Route NL6',
					island: 'Kronea Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['routenl5', 'routenl7'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinb', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'clauncher', minLvl: 10, maxLvl: 39 },
							{ name: 'clawitzer', minLvl: 35 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL7
			await Location.create(
				{
					_id: 'routenl7',
					name: 'Route NL7',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					accessTo: ['routenl6', 'szlazancity'],
					ferry: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '300' },
						{ id: 'diacity', cost: '100' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '700' },
						{ id: 'runecity', cost: '500' },
						{ id: 'routenl16', cost: '700' },
						{ id: 'fracturacity', cost: '700' },
					],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'auriole', minLvl: 5, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'paras', minLvl: 5, maxLvl: 26 },
							{ name: 'parasect', minLvl: 22 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'gowatu', minLvl: 5, maxLvl: 27 },
							{ name: 'turatal', minLvl: 23, maxLvl: 29 },
							{ name: 'josuche', minLvl: 30 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'curlsa', minLvl: 5, maxLvl: 24 },
							{ name: 'coiffaire', minLvl: 20, maxLvl: 40 },
							{ name: 'ostento', minLvl: 36 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'nincada', minLvl: 5, maxLvl: 22 },
							{ name: 'ninjask', minLvl: 18 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'pachirisu', minLvl: 7 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'minijina', minLvl: 5, maxLvl: 27 },
							{ name: 'bojina', minLvl: 23, maxLvl: 42 },
							{ name: 'noperajina', minLvl: 38 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Szlazan City
			await Location.create(
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
			await Location.create(
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
							{ name: 'auriole', minLvl: 12, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'natu', minLvl: 12, maxLvl: 27 },
							{ name: 'xatu', minLvl: 23 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'transmite', minLvl: 13 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'tianglis', minLvl: 13 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'farfetch\'d', minLvl: 12, maxLvl: 39 },
							{ name: 'rapscalion', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'chatot', minLvl: 12, maxLvl: 39 },
							{ name: 'lyrissimo', minLvl: 35 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Acoatly Tower Upper Floors
			await Location.create(
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
							{ name: 'icauriole', minLvl: 28 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'murkrow', minLvl: 25 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'sigilyph', minLvl: 28 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'swablu', minLvl: 25, maxLvl: 37 },
							{ name: 'altaria', minLvl: 33 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'vulkhet', minLvl: 25, maxLvl: 34 },
							{ name: 'nekhetura', minLvl: 30 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unowni', minLvl: 25 },
							{ name: 'unownm', minLvl: 25 },
							{ name: 'unownr', minLvl: 25 },
							{ name: 'unownt', minLvl: 25 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Acoatyl Tower Shrine
			await Location.create(
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
							{ name: 'unowni', minLvl: 30 },
							{ name: 'unownm', minLvl: 30 },
							{ name: 'unownr', minLvl: 30 },
							{ name: 'unownt', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Route NL8
			await Location.create(
				{
					_id: 'routenl8',
					name: 'Route NL8',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					accessTo: ['szlazancity', 'baaresatown'],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'mareep', minLvl: 8, maxLvl: 22 },
							{ name: 'flaaffy', minLvl: 18, maxLvl: 32 },
							{ name: 'ampharos', minLvl: 28 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'swablu', minLvl: 8, maxLvl: 37 },
							{ name: 'altaria', minLvl: 33 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'humbuzz', minLvl: 12, maxLvl: 27 },
							{ name: 'klaitning', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'lamlie', minLvl: 8, maxLvl: 22 },
							{ name: 'lobovo', minLvl: 18, maxLvl: 37 },
							{ name: 'luvaris', minLvl: 33 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'phanpy', minLvl: 8, maxLvl: 27 },
							{ name: 'donphan', minLvl: 23 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'thunderma', minLvl: 9 },
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
			await Location.create(
				{
					_id: 'baaresatown',
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
			await Location.create(
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
							{ name: 'mareep', minLvl: 12, maxLvl: 22 },
							{ name: 'flaaffy', minLvl: 18, maxLvl: 32 },
							{ name: 'ampharos', minLvl: 28 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'nuwill', minLvl: 12 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'helioptile', minLvl: 12 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'humbuzz', minLvl: 12, maxLvl: 27 },
							{ name: 'klaitning', minLvl: 23 },
						] },
						{ probability: 14, pokemon: [
							{ name: 'thunderma', minLvl: 14 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'finnial', minLvl: 12, maxLvl: 20 },
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
			await Location.create(
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
							{ name: 'transmite', minLvl: 28 },
						] },
						{ probability: 35, pokemon: [
							{ name: 'pachirisu', minLvl: 25 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'donarith', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unownc', minLvl: 25 },
							{ name: 'unownj', minLvl: 25 },
							{ name: 'unownp', minLvl: 25 },
							{ name: 'unownu', minLvl: 25 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Fulgurok Mountains Shrine
			await Location.create(
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
							{ name: 'unownc', minLvl: 30 },
							{ name: 'unownj', minLvl: 30 },
							{ name: 'unownp', minLvl: 30 },
							{ name: 'unownu', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Fulgurok Mountains Low Peaks
			await Location.create(
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
							{ name: 'invicunya', minLvl: 13, maxLvl: 40 },
							{ name: 'heladalca', minLvl: 36 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'meditite', minLvl: 13, maxLvl: 39 },
							{ name: 'medicham', minLvl: 35 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'snorunt', minLvl: 13, maxLvl: 44 },
							{ name: 'glalie', minLvl: 40 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'invicunya', minLvl: 13, maxLvl: 19 },
							{ name: 'rakateis', minLvl: 20 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'snorunt', minLvl: 13, maxLvl: 24 },
							{ name: 'cryogonal', minLvl: 25 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'cubly', minLvl: 15, maxLvl: 20 },
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
			await Location.create(
				{
					_id: 'routenl9',
					name: 'Route NL9',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['fulgurokmountainsmountainside', 'fulgurokcaves', 'routenl10'],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'mareep', minLvl: 8, maxLvl: 22 },
							{ name: 'flaaffy', minLvl: 18, maxLvl: 32 },
							{ name: 'ampharos', minLvl: 28 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'auriole', minLvl: 8, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'nuwill', minLvl: 8 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'lamlie', minLvl: 8, maxLvl: 22 },
							{ name: 'lobovo', minLvl: 18, maxLvl: 37 },
							{ name: 'luvaris', minLvl: 33 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'phanpy', minLvl: 8, maxLvl: 27 },
							{ name: 'donphan', minLvl: 23 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'thunderma', minLvl: 10, maxLvl: 29 },
							{ name: 'rasqueon', minLvl: 30 },
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
			await Location.create(
				{
					_id: 'fulgurokcaves',
					name: 'Fulgurok Caves',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					accessTo: ['routenl9', 'routenl10', 'fulgurokisland'],
					wilds: [
						{ probability: 25, pokemon: [
							{ name: 'bucarat', minLvl: 12, maxLvl: 24 },
							{ name: 'mortarat', minLvl: 20 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'aron', minLvl: 12, maxLvl: 34 },
							{ name: 'lairon', minLvl: 30, maxLvl: 44 },
							{ name: 'aggron', minLvl: 40 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'drilbur', minLvl: 12, maxLvl: 33 },
							{ name: 'excadrill', minLvl: 29 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'dasfix', minLvl: 12, maxLvl: 38 },
							{ name: 'malraja', minLvl: 34 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'mawile', minLvl: 14 },
							{ name: 'caslot', minLvl: 25 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aron', minLvl: 12, maxLvl: 19 },
							{ name: 'durant', minLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Fulgurok Island
			await Location.create(
				{
					_id: 'fulgurokisland',
					name: 'Fulgurok Island',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['fulgurokcaves'],
					wilds: [
						{ probability: 40, pokemon: [
							{ name: 'bucarat', minLvl: 16, maxLvl: 24 },
							{ name: 'mortarat', minLvl: 20 },
						] },
						{ probability: 35, pokemon: [
							{ name: 'kiblis', minLvl: 16, maxLvl: 41 },
							{ name: 'ibazel', minLvl: 37 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'gravendou', minLvl: 16, maxLvl: 20 },
							{ name: 'cragendou', minLvl: 16, maxLvl: 38 },
							{ name: 'quarendou', minLvl: 34 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'gravendou', minLvl: 16, maxLvl: 19 },
							{ name: 'cragendou', minLvl: 16, maxLvl: 19 },
							{ name: 'shuckle', minLvl: 20 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'kiblis', minLvl: 16, maxLvl: 19 },
							{ name: 'caslot', minLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL10
			await Location.create(
				{
					_id: 'routenl10',
					name: 'Route NL10',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					accessTo: ['routenl9', 'fulgurokcaves', 'diacity'],
					wilds: [
						{ probability: 25, pokemon: [
							{ name: 'mareep', minLvl: 5, maxLvl: 22 },
							{ name: 'flaaffy', minLvl: 18, maxLvl: 32 },
							{ name: 'ampharos', minLvl: 28 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'humbuzz', minLvl: 5, maxLvl: 27 },
							{ name: 'klaitning', minLvl: 23 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'meditite', minLvl: 5, maxLvl: 39 },
							{ name: 'medicham', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'lamlie', minLvl: 5, maxLvl: 22 },
							{ name: 'lobovo', minLvl: 18, maxLvl: 37 },
							{ name: 'luvaris', minLvl: 33 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'phanpy', minLvl: 5, maxLvl: 27 },
							{ name: 'donphan', minLvl: 23 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'duskull', minLvl: 5, maxLvl: 39 },
							{ name: 'dusclops', minLvl: 35 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Dia City
			await Location.create(
				{
					_id: 'diacity',
					name: 'Dia City',
					island: 'Tilnen Island',
					usableHMs: ['fly'],
					actions: ['Rival'],
					accessTo: ['routenl10', 'routenl11'],
					ferry: [
						{ id: 'leddintown', cost: '700' },
						{ id: 'shrdlutown', cost: '700' },
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '500' },
						{ id: 'routenl7', cost: '100' },
						{ id: 'routenl12falantrdocks', cost: '300' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '500' },
						{ id: 'routenl16', cost: '500' },
						{ id: 'fracturacity', cost: '700' },
					],
					hasTrainers: true,
					shops: ['PokéMart', 'Dia Department Store', 'Fabulous Items \'R\' Us'],
				},
			);

			// Route NL11
			await Location.create(
				{
					_id: 'routenl11',
					name: 'Route NL11',
					island: 'Tilnen Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['diacity', 'routenl12falantrdocks'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinb', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'skrelp', minLvl: 10, maxLvl: 50 },
							{ name: 'dragalge', minLvl: 46 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL12 / Falantr Docks
			await Location.create(
				{
					_id: 'routenl12falantrdocks',
					name: 'Route NL12 / Falantr Docks',
					locNames: ['routenl12', 'falantrdocks'],
					island: 'Xybryle Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['routenl11', 'falantrcity', 'routenl21'],
					ferry: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
						{ id: 'allogracity', cost: '500' },
						{ id: 'routenl5', cost: '500' },
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '300' },
						{ id: 'routenl14', cost: '100' },
						{ id: 'runecity', cost: '100' },
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
					wilds: [
						{ probability: 35, pokemon: [
							{ name: 'dustley', minLvl: 5, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'kizziff', minLvl: 5, maxLvl: 12 },
							{ name: 'murgaz', minLvl: 8, maxLvl: 22 },
							{ name: 'chaszin', minLvl: 18 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'farfetch\'d', minLvl: 6, maxLvl: 39 },
							{ name: 'rapscalion', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'duskull', minLvl: 5, maxLvl: 39 },
							{ name: 'dusclops', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'minccino', minLvl: 5 },
							{ name: 'zangoose', minLvl: 20 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'farfetch\'d', minLvl: 6, maxLvl: 24 },
							{ name: 'hawlucha', minLvl: 25 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'turistar', minLvl: 5, maxLvl: 34 },
							{ name: 'turumaken', minLvl: 30 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Falantr City
			await Location.create(
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
			await Location.create(
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
							{ name: 'turistar', minLvl: 8, maxLvl: 34 },
							{ name: 'turumaken', minLvl: 30 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'minccino', minLvl: 8 },
							{ name: 'zangoose', minLvl: 20 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'minccino', minLvl: 8 },
							{ name: 'seviper', minLvl: 20 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'farfetch\'d', minLvl: 9, maxLvl: 24 },
							{ name: 'hawlucha', minLvl: 25 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'chatot', minLvl: 9, maxLvl: 24 },
							{ name: 'onzarudo', minLvl: 25 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'minccino', minLvl: 8, maxLvl: 29 },
							{ name: 'rasqueon', minLvl: 30 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'quimpy', minLvl: 15, maxLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL14
			await Location.create(
				{
					_id: 'routenl14',
					name: 'Route NL14',
					island: 'Xybryle Island',
					usableHMs: ['fly'],
					accessTo: ['routenl13xybrylebridge', 'runecity', 'routenl15'],
					ferry: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '500' },
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '500' },
						{ id: 'routenl12falantrdocks', cost: '100' },
						{ id: 'runecity', cost: '100' },
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
					wilds: [
						{ probability: 35, pokemon: [
							{ name: 'auriole', minLvl: 5, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'kizziff', minLvl: 5, maxLvl: 12 },
							{ name: 'murgaz', minLvl: 8, maxLvl: 22 },
							{ name: 'chaszin', minLvl: 18 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'chatot', minLvl: 6, maxLvl: 39 },
							{ name: 'lyrissimo', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'scraggy', minLvl: 5, maxLvl: 41 },
							{ name: 'scrafty', minLvl: 37 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'minccino', minLvl: 5 },
							{ name: 'seviper', minLvl: 20 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'chatot', minLvl: 6, maxLvl: 24 },
							{ name: 'onzarudo', minLvl: 25 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'turistar', minLvl: 5, maxLvl: 34 },
							{ name: 'turumaken', minLvl: 30 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Rune City
			await Location.create(
				{
					_id: 'runecity',
					name: 'Rune City',
					island: 'Xybryle Island',
					usableHMs: ['fly'],
					actions: ['Gym Leader', 'Rival', 'Quests', 'Revivalist HQ'],
					accessTo: ['routenl14', 'xybrylebay'],
					ferry: [
						{ id: 'leddintown', cost: '700' },
						{ id: 'shrdlutown', cost: '700' },
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
						{ id: 'routenl7', cost: '500' },
						{ id: 'diacity', cost: '300' },
						{ id: 'routenl12falantrdocks', cost: '100' },
						{ id: 'routenl14', cost: '100' },
						{ id: 'routenl16', cost: '300' },
						{ id: 'fracturacity', cost: '500' },
					],
					hasTrainers: true,
					shops: ['PokéMart'],
				},
			);

			// Xybryle Bay
			await Location.create(
				{
					_id: 'xybrylebay',
					name: 'Xybryle Bay',
					island: 'Xybryle Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['runecity', 'submarinesafari', 'tonkuraseabed'],
					wilds: [
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 35, pokemon: [
							{ name: 'turistar', minLvl: 18, maxLvl: 34 },
							{ name: 'turumaken', minLvl: 30 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'vaering', minLvl: 15, maxLvl: 30 },
							{ name: 'raidnarr', minLvl: 26, maxLvl: 44 },
							{ name: 'drasarkr', minLvl: 40 },
						] },
					],
					fishing: [
						{ probability: 34, pokemon: [
							{ name: 'kelfee', minLvl: 10, maxLvl: 33 },
							{ name: 'drakella', minLvl: 29 },
						] },
						{ probability: 33, pokemon: [
							{ name: 'clauncher', minLvl: 10, maxLvl: 39 },
							{ name: 'clawitzer', minLvl: 35 },
						] },
						{ probability: 33, pokemon: [
							{ name: 'skrelp', minLvl: 10, maxLvl: 50 },
							{ name: 'dragalge', minLvl: 46 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Submarine Safari
			await Location.create(
				{
					_id: 'submarinesafari',
					name: 'Submarine Safari',
					island: 'Xybryle Island',
					usableHMs: ['fly', 'dive'],
					hasMinigame: true,
					accessTo: ['xybrylebay'],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'sharpedo', minLvl: 30 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'kelfee', minLvl: 25, maxLvl: 33 },
							{ name: 'drakella', minLvl: 29 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'clauncher', minLvl: 25, maxLvl: 39 },
							{ name: 'clawitzer', minLvl: 35 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'skrelp', minLvl: 25, maxLvl: 50 },
							{ name: 'dragalge', minLvl: 46 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'freye', minLvl: 25, maxLvl: 29 },
							{ name: 'floundirt', minLvl: 25 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'octillery', minLvl: 25 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'raidnarr', minLvl: 28, maxLvl: 44 },
							{ name: 'drasarkr', minLvl: 40 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'wyrmal', minLvl: 25, maxLvl: 37 },
							{ name: 'ventorm', minLvl: 33 },
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
			await Location.create(
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
							{ name: 'kelfee', minLvl: 25, maxLvl: 33 },
							{ name: 'drakella', minLvl: 29 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'sharpedo', minLvl: 30 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'freye', minLvl: 25, maxLvl: 29 },
							{ name: 'floundirt', minLvl: 25 },
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
			await Location.create(
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
							{ name: 'drakella', minLvl: 30 },
						] },
						{ probability: 35, pokemon: [
							{ name: 'sharpedo', minLvl: 30 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'octillery', minLvl: 30 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unownb', minLvl: 25 },
							{ name: 'unowne', minLvl: 25 },
							{ name: 'unownf', minLvl: 25 },
							{ name: 'unowns', minLvl: 25 },
							{ name: 'unownx', minLvl: 25 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Ton-Kura Shrine
			await Location.create(
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
							{ name: 'unownb', minLvl: 30 },
							{ name: 'unowne', minLvl: 30 },
							{ name: 'unownf', minLvl: 30 },
							{ name: 'unowns', minLvl: 30 },
							{ name: 'unownx', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Route NL15
			await Location.create(
				{
					_id: 'routenl15',
					name: 'Route NL15',
					island: 'Xybryle Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['routenl14', 'routenl16'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinb', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'kelfee', minLvl: 10, maxLvl: 33 },
							{ name: 'drakella', minLvl: 29 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL16
			await Location.create(
				{
					_id: 'routenl16',
					name: 'Route NL16',
					island: 'Krtuso Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['routenl15', 'versorectocity'],
					ferry: [
						{ id: 'leddintown', cost: '500' },
						{ id: 'shrdlutown', cost: '700' },
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '500' },
						{ id: 'routenl12falantrdocks', cost: '300' },
						{ id: 'routenl14', cost: '300' },
						{ id: 'runecity', cost: '300' },
						{ id: 'fracturacity', cost: '100' },
					],
					wilds: [
						{ probability: 35, pokemon: [
							{ name: 'auriole', minLvl: 5, maxLvl: 26 },
							{ name: 'icauriole', minLvl: 22 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'dustley', minLvl: 5, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'scraggy', minLvl: 5, maxLvl: 41 },
							{ name: 'scrafty', minLvl: 37 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'numel', minLvl: 5, maxLvl: 36 },
							{ name: 'camerupt', minLvl: 32 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'thunderma', minLvl: 7, maxLvl: 29 },
							{ name: 'razelodon', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'smeargle', minLvl: 7 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Versocrecto City
			await Location.create(
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
			await Location.create(
				{
					_id: 'routenl17',
					name: 'Route NL17',
					island: 'Krtuso Island',
					usableHMs: ['fly'],
					actions: ['Quests'],
					accessTo: ['versorectocity', 'etaoincity'],
					wilds: [
						{ probability: 25, pokemon: [
							{ name: 'dustley', minLvl: 8, maxLvl: 22 },
							{ name: 'aculago', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'sandile', minLvl: 8, maxLvl: 32 },
							{ name: 'krokorok', minLvl: 28, maxLvl: 42 },
							{ name: 'krookodile', minLvl: 38 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'numel', minLvl: 8, maxLvl: 36 },
							{ name: 'camerupt', minLvl: 32 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'pindillo', minLvl: 8, maxLvl: 31 },
							{ name: 'charandillo', minLvl: 27 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'murkrow', minLvl: 10 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'misdreavus', minLvl: 10 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'lamanda', minLvl: 15, maxLvl: 20 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Etaoin City
			await Location.create(
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
			await Location.create(
				{
					_id: 'routenl18',
					name: 'Route NL18',
					island: 'Krtuso Island',
					usableHMs: ['fly'],
					accessTo: ['etaoincity', 'jarovesubadlandsflatlands'],
					wilds: [
						{ probability: 30, pokemon: [
							{ name: 'numel', minLvl: 12, maxLvl: 36 },
							{ name: 'camerupt', minLvl: 32 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'sandile', minLvl: 12, maxLvl: 32 },
							{ name: 'krokorok', minLvl: 28, maxLvl: 42 },
							{ name: 'krookodile', minLvl: 38 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'pindillo', minLvl: 12, maxLvl: 31 },
							{ name: 'charandillo', minLvl: 27 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'galorindle', minLvl: 12, maxLvl: 39 },
							{ name: 'galaraud', minLvl: 35 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'numel', minLvl: 12, maxLvl: 19 },
							{ name: 'heatmor', minLvl: 20 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'slugma', minLvl: 12, maxLvl: 19 },
							{ name: 'durant', minLvl: 20 },
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
			await Location.create(
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
							{ name: 'numel', minLvl: 12, maxLvl: 36 },
							{ name: 'camerupt', minLvl: 32 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'vulkhet', minLvl: 12 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'slugma', minLvl: 12, maxLvl: 40 },
							{ name: 'magcargo', minLvl: 36 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'virlich', minLvl: 12 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'fallorite', minLvl: 12 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'virlich', minLvl: 12, maxLvl: 19 },
							{ name: 'sparcoil', minLvl: 20 },
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
			await Location.create(
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
							{ name: 'slugma', minLvl: 25, maxLvl: 40 },
							{ name: 'magcargo', minLvl: 36 },
						] },
						{ probability: 30, pokemon: [
							{ name: 'fallorite', minLvl: 25 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'heatmor', minLvl: 28 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'torranel', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unownk', minLvl: 25 },
							{ name: 'unownl', minLvl: 25 },
							{ name: 'unownn', minLvl: 25 },
							{ name: 'unowno', minLvl: 25 },
							{ name: 'unownq', minLvl: 25 },
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
			await Location.create(
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
							{ name: 'unownk', minLvl: 30 },
							{ name: 'unownl', minLvl: 30 },
							{ name: 'unownn', minLvl: 30 },
							{ name: 'unowno', minLvl: 30 },
							{ name: 'unownq', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Route NL19
			await Location.create(
				{
					_id: 'routenl19',
					name: 'Route NL19',
					island: 'Krtuso Island',
					usableHMs: ['fly'],
					accessTo: ['jarovesubadlandsflatlands', 'fracturacity'],
					wilds: [
						{ probability: 35, pokemon: [
							{ name: 'sandile', minLvl: 5, maxLvl: 32 },
							{ name: 'krokorok', minLvl: 28, maxLvl: 42 },
							{ name: 'krookodile', minLvl: 38 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'numel', minLvl: 5, maxLvl: 36 },
							{ name: 'camerupt', minLvl: 32 },
						] },
						{ probability: 20, pokemon: [
							{ name: 'galorindle', minLvl: 5, maxLvl: 39 },
							{ name: 'galaraud', minLvl: 35 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'drilbur', minLvl: 5, maxLvl: 33 },
							{ name: 'excadrill', minLvl: 29 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'slugma', minLvl: 25, maxLvl: 40 },
							{ name: 'magcargo', minLvl: 36 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'tianglis', minLvl: 7, maxLvl: 24 },
							{ name: 'mandicore', minLvl: 25 },
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
			await Location.create(
				{
					_id: 'fracturacity',
					name: 'Fractura City',
					island: 'Krtuso Island',
					usableHMs: ['fly'],
					actions: ['Gym Leader', 'Quests'],
					ferry: [
						{ id: 'leddintown', cost: '300' },
						{ id: 'shrdlutown', cost: '500' },
						{ id: 'allogracity', cost: '700' },
						{ id: 'routenl5', cost: '700' },
						{ id: 'routenl7', cost: '700' },
						{ id: 'diacity', cost: '300' },
						{ id: 'routenl12falantrdocks', cost: '500' },
						{ id: 'routenl14', cost: '500' },
						{ id: 'runecity', cost: '500' },
						{ id: 'routenl16', cost: '100' },
					],
					accessTo: ['routenl19', 'routenl20'],
					hasTrainers: true,
					shops: ['PokéMart'],
				},
			);

			// Route NL20
			await Location.create(
				{
					_id: 'routenl20',
					name: 'Route NL20',
					island: 'Krtuso Island',
					usableHMs: ['fly', 'surf', 'dive'],
					accessTo: ['fracturacity', 'leddintown'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinr', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'clauncher', minLvl: 10, maxLvl: 39 },
							{ name: 'clawitzer', minLvl: 35 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Route NL21
			await Location.create(
				{
					_id: 'routenl21',
					name: 'Route NL21',
					island: 'Adar Zilira',
					usableHMs: ['fly', 'surf', 'dive'],
					numRequiredBadges: 8,
					accessTo: ['routenl12falantrdocks', 'alnirazruinsvictoryroadstreets'],
					wilds: [
						{ probability: 50, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 36 },
							{ name: 'kraitra', minLvl: 32 },
						] },
						{ probability: 45, pokemon: [
							{ name: 'latikrai', minLvl: 18, maxLvl: 32 },
							{ name: 'sharpedo', minLvl: 28 },
						] },
						{ probability: 4, pokemon: [
							{ name: 'aeolagio', minLvl: 20 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'lapras', minLvl: 20 },
						] },
					],
					fishing: [
						{ probability: 75, pokemon: [
							{ name: 'latikrai', minLvl: 10, maxLvl: 22 },
							{ name: 'basculinb', minLvl: 18 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'skrelp', minLvl: 10, maxLvl: 50 },
							{ name: 'dragalge', minLvl: 46 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Alniraz Ruins / Victory Road Streets
			await Location.create(
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
							{ name: 'donphan', minLvl: 40 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'xatu', minLvl: 38 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'hawlucha', minLvl: 38 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'onzarudo', minLvl: 38 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'ibazel', minLvl: 40 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'petrocka', minLvl: 38 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'sigilyph', minLvl: 38 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'quarendou', minLvl: 40 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'mandicore', minLvl: 40 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Alniraz Ruins / Victory Road Buildings
			await Location.create(
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
							{ name: 'transmite', minLvl: 38 },
						] },
						{ probability: 25, pokemon: [
							{ name: 'tianglis', minLvl: 38 },
						] },
						{ probability: 15, pokemon: [
							{ name: 'galaraud', minLvl: 40 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'malraja', minLvl: 40 },
						] },
						{ probability: 10, pokemon: [
							{ name: 'bitemare', minLvl: 40 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'ostento', minLvl: 40 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'sigilyph', minLvl: 38 },
						] },
						{ probability: 5, pokemon: [
							{ name: 'unowna', minLvl: 30 },
							{ name: 'unownz', minLvl: 30 },
						] },
					],
					hasTrainers: true,
				},
			);

			// Alniraz Ruins / Victory Road Shrine
			await Location.create(
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
							{ name: 'unowna', minLvl: 30 },
							{ name: 'unownz', minLvl: 30 },
						] },
						{ probability: 1, pokemon: [
							{ name: 'unownem', minLvl: 30 },
							{ name: 'unownqm', minLvl: 30 },
						] },
					],
					hasTrainers: false,
				},
			);

			// Pokemon League Headquarters
			await Location.create(
				{
					_id: 'pokemonleaguehq',
					name: 'Pokémon League Headquarters',
					island: 'Adar Zilira',
					usableHMs: ['fly'],
					actions: ['Elite4'],
					numRequiredBadges: 8,
					accessTo: ['alnirazruinsvictoryroadstreets'],
					hasTrainers: false,
					shops: ['PokéMart'],
				},
			);
		}


	}
	catch (e) {
		console.error(e);
	}
}

main().catch(console.error);


// async function updatelocation(client, location) {
// 	const result = await client.db('turqdb').collection('locations').insertOne(location);
// 	console.log(`New profile created with the following id: ${result.insertedId}`);
// }