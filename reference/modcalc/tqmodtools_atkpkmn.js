/*
* tqmodtools_atkpkmn.js
* A series of JavaScript tools, functions, etc. for running the Pokémon Turquoise moderator tools (calculators, RNGs, etc.) - list of pokémon w/base stats, used to determine attacker stats for battletab.html
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on Pokémon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 100613
*** Added Daphne's drapion and Voltaire's eelektross; commented out ferrothorn and rotom-a
*** Changed damage formula to use min IVs/EVs
* 100712
*** Finished adding all NL pokémon
* 060812
*** Moved the list into its own file
*/

/*
* TO-DO LIST
*** done for now yay
*/


//base stats for attacking pokémon
function chooseattacker() {
	attacker = document.getElementById('atkpokemon').value;
	chosenmove = document.getElementById('movename').value; //get the move name to check for foul play et al
	targetAtk = document.getElementById('oppatk').value; //use the correct stat for foul play

	switch(attacker) {
		case "choose": //Select a Pokémon, a.k.a. blank
			atkAtk = 0;
			atkDef = 0;
			atkSA = 0;
			atkSD = 0;
		break;
		case "acafia": //Acafia
			atkAtk = 68;
			atkDef = 56;
			atkSA = 41;
			atkSD = 48;
		break;
		case "aculago": //Aculago
			atkAtk = 70;
			atkDef = 95;
			atkSA = 50;
			atkSD = 55;
		break;
		case "aeolagio": //Aeolagio
			atkAtk = 40;
			atkDef = 65;
			atkSA = 110;
			atkSD = 110;
		break;
		case "aerodactyl": //Aerodactyl
			atkAtk = 105;
			atkDef = 65;
			atkSA = 60;
			atkSD = 75;
		break;
		case "aggron": //Aggron
			atkAtk = 110;
			atkDef = 180;
			atkSA = 60;
			atkSD = 60;
		break;
		case "altaria": //Altaria
			atkAtk = 70;
			atkDef = 90;
			atkSA = 70;
			atkSD = 105;
		break;
		case "altavault": //Altvault
			atkAtk = 110;
			atkDef = 70;
			atkSA = 100;
			atkSD = 50;
		break;
		case "ampharos": //Ampharos
			atkAtk = 75;
			atkDef = 85;
			atkSA = 115;
			atkSD = 90;
		break;
		case "arctangel": //Arctangel
			atkAtk = 60;
			atkDef = 85;
			atkSA = 109;
			atkSD = 91;
		break;
		case "aron": //Aron
			atkAtk = 70;
			atkDef = 100;
			atkSA = 40;
			atkSD = 40;
		break;
		case "auriole": //Auriole
			atkAtk = 60;
			atkDef = 45;
			atkSA = 20;
			atkSD = 45;
		break;
		case "basculin": //Basculin
			atkAtk = 92;
			atkDef = 65;
			atkSA = 80;
			atkSD = 55;
		break;
		case "bearbegazi": //Bearbegazi
			atkAtk = 50;
			atkDef = 65;
			atkSA = 80;
			atkSD = 90;
		break;
		case "beddybite": //Beddybite
			atkAtk = 40;
			atkDef = 45;
			atkSA = 60;
			atkSD = 65;
		break;
		case "belmarine": //Belmarine
			atkAtk = 70;
			atkDef = 50;
			atkSA = 100;
			atkSD = 80;
		break;
		case "bitemare": //Bitemare
			atkAtk = 70;
			atkDef = 80;
			atkSA = 95;
			atkSD = 100;
		break;
		case "bojina": //Bojina
			atkAtk = 90;
			atkDef = 60;
			atkSA = 40;
			atkSD = 65;
		break;
		case "bossorna": //Bossorna
			atkAtk = 115;
			atkDef = 90;
			atkSA = 70;
			atkSD = 80;
		break;
		case "buneary": //Buneary
			atkAtk = 66;
			atkDef = 44;
			atkSA = 44;
			atkSD = 56;
		break;
		case "bucarat": //Bucarat
			atkAtk = 60;
			atkDef = 30;
			atkSA = 60;
			atkSD = 30;
		break;
		case "burungin": //Burungin
			atkAtk = 85;
			atkDef = 74;
			atkSA = 121;
			atkSD = 70;
		break;
		case "camerupt": //Camerupt
			atkAtk = 70;
			atkDef = 100;
			atkSA = 70;
			atkSD = 105;
		break;
		case "carvanha": //Carvanha
			atkAtk = 90;
			atkDef = 20;
			atkSA = 65;
			atkSD = 20;
		break;
		case "caslot": //Caslot
			atkAtk = 77;
			atkDef = 80;
			atkSA = 77;
			atkSD = 80;
		break;
		case "catalcia": //Catalcia
			atkAtk = 85;
			atkDef = 70;
			atkSA = 54;
			atkSD = 60;
		break;
		case "cerisol": //Cerisol
			atkAtk = 80;
			atkDef = 80;
			atkSA = 117;
			atkSD = 80;
		break;
		case "chantirrus": //Chantirrus
			atkAtk = 60;
			atkDef = 125;
			atkSA = 70;
			atkSD = 130;
		break;
		case "charandillo": //Charandillo
			atkAtk = 103;
			atkDef = 107;
			atkSA = 80;
			atkSD = 68;
		break;
		case "chaszin": //Chaszin
			atkAtk = 85;
			atkDef = 60;
			atkSA = 55;
			atkSD = 55;
		break;
		case "chatot": //Chatot
			atkAtk = 65;
			atkDef = 44;
			atkSA = 92;
			atkSD = 42;
		break;
		case "cherrim": //Cherrim
			atkAtk = 60;
			atkDef = 70;
			atkSA = 87;
			atkSD = 78;
		break;
		case "cherubi": //Cherubi
			atkAtk = 35;
			atkDef = 45;
			atkSA = 62;
			atkSD = 53;
		break;
		case "cinccino": //Cinccino
			atkAtk = 95;
			atkDef = 60;
			atkSA = 65;
			atkSD = 60;
		break;
		case "clauncher": //Clauncher
			atkAtk = 53;
			atkDef = 62;
			atkSA = 58;
			atkSD = 63;
		break;
		case "clawitzer": //Clawitzer
			atkAtk = 73;
			atkDef = 78;
			atkSA = 120;
			atkSD = 89;
		break;
		case "coiffaire": //Coiffaire
		    atkAtk = 75;
		    atkDef = 70;
		    atkSA = 60;
		    atkSD = 60;
		break;
		case "cragendou": //Cragendou
			atkAtk = 75;
			atkDef = 100;
			atkSA = 35;
			atkSD = 62;
		break;
		case "crocoal": //Crocoal
			atkAtk = 55;
			atkDef = 43;
			atkSA = 70;
			atkSD = 40;
		break;
		case "cryogonal": //Cryogonal
            atkAtk = 50;
            atkDef = 30;
            atkSA = 95;
            atkSD = 135;
        break;
		case "cubly": //Cubly
			atkAtk = 10;
			atkDef = 20;
			atkSA = 45;
			atkSD = 35;
		break;
		case "curlsa": //Curlsa
            atkAtk = 60;
            atkDef = 50;
            atkSA = 40;
            atkSD = 40;
        break;
		case "dartizelr": //Dartizel-R
			atkAtk = 80;
			atkDef = 60;
			atkSA = 80;
			atkSD = 60;
		break;
		case "dasfix": //Dasfix
            atkAtk = 55;
            atkDef = 40;
            atkSA = 60;
            atkSD = 70;
        break;
        case "delibird": //Delibird
			atkAtk = 55;
			atkDef = 45;
			atkSA = 65;
			atkSD = 45;
		break;
		case "derfin": //Derfin
			atkAtk = 10;
			atkDef = 10;
			atkSA = 80;
			atkSD = 20;
		break;
		case "donarith": //Donarith
			atkAtk = 108;
			atkDef = 70;
			atkSA = 85;
			atkSD = 60;
		break;
		case "donphan": //Donphan
			atkAtk = 120;
			atkDef = 120;
			atkSA = 60;
			atkSD = 60;
		break;
		case "dragalge": //Dragalge
            atkAtk = 75;
            atkDef = 90;
            atkSA = 97;
            atkSD = 123;
        break;
		case "drakella": //Drakella
			atkAtk = 64;
			atkDef = 60;
			atkSA = 112;
			atkSD = 113;
		break;
		case "drapion": //Drapion
			atkAtk = 90;
			atkDef = 110;
			atkSA = 60;
			atkSD = 75;
		break;
		case "drasarkr": //Drasarkr
			atkAtk = 110;
			atkDef = 75;
			atkSA = 50;
			atkSD = 75;
		break;
		case "drilbur": //Drilbur
            atkAtk = 85;
            atkDef = 40;
            atkSA = 30;
            atkSD = 45;
        break;
		case "durant": //Durant
			atkAtk = 109;
			atkDef = 112;
			atkSA = 48;
			atkSD = 48;
		break;
		case "dusclops": //Dusclops
			atkAtk = 70;
			atkDef = 130;
			atkSA = 60;
			atkSD = 130;
		break;
		case "dusknoir": //Dusknoir
			atkAtk = 100;
			atkDef = 135;
			atkSA = 60;
			atkSD = 135;
		break;
		case "duskull": //Duskull
			atkAtk = 40;
			atkDef = 90;
			atkSA = 30;
			atkSD = 90;
		break;
		case "dustley": //Dustley
			atkAtk = 45;
			atkDef = 55;
			atkSA = 25;
			atkSD = 35;
		break;
		case "dybelial": //Dybelial
			atkAtk = 95;
			atkDef = 80;
			atkSA = 130;
			atkSD = 110;
		break;
		case "dyferal": //Dyferal
			atkAtk = 55;
			atkDef = 50;
			atkSA = 95;
			atkSD = 80;
		break;
		case "dyrascal": //Dyrascal
			atkAtk = 40;
			atkDef = 40;
			atkSA = 65;
			atkSD = 60;
		break;
		case "eelektross": //Eelektross
			atkAtk = 115;
			atkDef = 80;
			atkSA = 105;
			atkSD = 80;
		break;
		case "emperobe": //Emperobe
            atkAtk = 50;
            atkDef = 65;
            atkSA = 100;
            atkSD = 110;
        break;
		case "encanoto": //Encanoto
			atkAtk = 80;
			atkDef = 70;
			atkSA = 125;
			atkSD = 85;
		break;
		case "espurr": //Espurr
            atkAtk = 48;
            atkDef = 54;
            atkSA = 63;
            atkSD = 60;
        break;
        case "excadrill": //Excadrill
            atkAtk = 135;
            atkDef = 60;
            atkSA = 50;
            atkSD = 65;
        break;
		case "exeggcute": //Exeggcute
			atkAtk = 40;
			atkDef = 80;
			atkSA = 60;
			atkSD = 45;
		break;
		case "exeggutor": //Exeggutor
			atkAtk = 95;
			atkDef = 85;
			atkSA = 125;
			atkSD = 65;
		break;
		case "fallorite": //Fallorite
			atkAtk = 70;
			atkDef = 85;
			atkSA = 55;
			atkSD = 50;
		break;
		case "farfetchd": //Farfetch'd
			atkAtk = 65;
			atkDef = 55;
			atkSA = 58;
			atkSD = 62;
		break;
		case "feebas": //Feebas
			atkAtk = 15;
			atkDef = 20;
			atkSA = 10;
			atkSD = 55;
		break;
		//case "ferrothorn": //Ferrothorn
			//atkAtk = 94;
			//atkDef = 131;
			//atkSA = 54;
			//atkSD = 116;
		break;
		case "feucrota": //Feucrota
			atkAtk = 69;
			atkDef = 54;
			atkSA = 90;
			atkSD = 50;
		break;
		case "finnial": //Finnial
			atkAtk = 50;
			atkDef = 35;
			atkSA = 75;
			atkSD = 35;
		break;
		case "flaaffy": //flaaffy
			atkAtk = 55;
			atkDef = 55;
			atkSA = 80;
			atkSD = 60;
		break;
		case "floundirt": //Floundirt
			atkAtk = 50;
			atkDef = 80;
			atkSA = 65;
			atkSD = 60;
		break;
		case "freye": //Freye
			atkAtk = 30;
			atkDef = 60;
			atkSA = 45;
			atkSD = 40;
		break;
		case "froslass": //Froslass
			atkAtk = 80;
			atkDef = 70;
			atkSA = 80;
			atkSD = 70;
		break;
		case "galaraud": //Galaraud
			atkAtk = 85;
			atkDef = 70;
			atkSA = 95;
			atkSD = 70;
		break;
		case "galorindle": //Galorindle
			atkAtk = 50;
			atkDef = 50;
			atkSA = 60;
			atkSD = 50;
		break;
		case "galoryph": //Galoryph
			atkAtk = 70;
			atkDef = 70;
			atkSA = 95;
			atkSD = 85;
		break;
		case "garapaima": //Garapaima
            atkAtk = 120;
            atkDef = 90;
            atkSA = 60;
            atkSD = 55;
        break;
        case "gasvirlich": //Gasvirlich
            atkAtk = 70;
            atkDef = 55;
            atkSA = 128;
            atkSD = 96;
        break;
		case "glalie": //Glalie
			atkAtk = 80;
			atkDef = 80;
			atkSA = 80;
			atkSD = 80;
		break;
		case "gowatu": //Gowatu
			atkAtk = 55;
			atkDef = 35;
			atkSA = 60;
			atkSD = 35;
		break;
		case "gravendou": //Gravendou
			atkAtk = 60;
			atkDef = 85;
			atkSA = 15;
			atkSD = 42;
		break;
		case "halberaxr": //Halberax-R
			atkAtk = 140;
			atkDef = 70;
			atkSA = 40;
			atkSD = 90;
		break;
		case "halirth": //Halirth
			atkAtk = 70;
			atkDef = 100;
			atkSA = 85;
			atkSD = 80;
		break;
		case "hawlucha": //Hawlucha
            atkAtk = 92;
            atkDef = 77;
            atkSA = 74;
            atkSD = 63;
        break;
		case "heatmor": //Heatmor
			atkAtk = 97;
			atkDef = 66;
			atkSA = 105;
			atkSD = 66;
		break;
		case "heladalca": //Heladalca
			atkAtk = 115;
			atkDef = 100;
			atkSA = 50;
			atkSD = 100;
		break;
		case "heliolisk": //Heliolisk
            atkAtk = 55;
            atkDef = 52;
            atkSA = 109;
            atkSD = 94;
        break;
        case "helioptile": //Helioptile
            atkAtk = 38;
            atkDef = 33;
            atkSA = 61;
            atkSD = 43;
        break;
        case "hollimin": //Hollimin
			atkAtk = 60;
			atkDef = 50;
			atkSA = 45;
			atkSD = 50;
		break;
		case "honchkrow": //Honchkrow
			atkAtk = 125;
			atkDef = 52;
			atkSA = 105;
			atkSD = 52;
		break;
		case "humbuzz": //Humbuzz
			atkAtk = 10;
			atkDef = 10;
			atkSA = 60;
			atkSD = 50;
		break;
		case "ibazel": //Ibazel
			atkAtk = 80;
			atkDef = 50;
			atkSA = 122;
			atkSD = 113;
		break;
		case "icauriole": //Icauriole
			atkAtk = 110;
			atkDef = 60;
			atkSA = 50;
			atkSD = 60;
		break;
		case "ignelix": //Ignelix
            atkAtk = 75;
            atkDef = 130;
            atkSA = 105;
            atkSD = 105;
        break;
		case "invicunya": //Jackravage
			atkAtk = 60;
			atkDef = 70;
			atkSA = 60;
			atkSD = 70;
		break;
		case "jackravage": //Jackravage
			atkAtk = 96;
			atkDef = 84;
			atkSA = 54;
			atkSD = 76;
		break;
		case "josuche": //Josuche
			atkAtk = 95;
			atkDef = 60;
			atkSA = 95;
			atkSD = 65;
		break;
		case "kangaskhan": //Kangaskhan
            atkAtk = 95;
            atkDef = 80;
            atkSA = 40;
            atkSD = 80;
        break;
		case "kelfee": //Kelfee
			atkAtk = 34;
			atkDef = 30;
			atkSA = 62;
			atkSD = 63;
		break;
		case "khargonaut": //Khargonaut
			atkAtk = 130;
			atkDef = 100;
			atkSA = 80;
			atkSD = 90;
		break;
		case "kiblis": //Kiblis
			atkAtk = 50;
			atkDef = 30;
			atkSA = 82;
			atkSD = 73;
		break;
		case "kingdra": //Kingdra
			atkAtk = 95;
			atkDef = 95;
			atkSA = 95;
			atkSD = 95;
		break;
		case "kizziff": //Kizziff
			atkAtk = 45;
			atkDef = 30;
			atkSA = 20;
			atkSD = 20;
		break;
		case "klaitning": //Klaitning
			atkAtk = 30;
			atkDef = 30;
			atkSA = 100;
			atkSD = 90;
		break;
		case "kraitra": //Kraitra
			atkAtk = 95;
			atkDef = 85;
			atkSA = 85;
			atkSD = 95;
		break;
		case "krokorok": //Krokorok
			atkAtk = 82;
			atkDef = 45;
			atkSA = 45;
			atkSD = 45;
		break;
		case "krookodile": //Krookodile
			atkAtk = 117;
			atkDef = 80;
			atkSA = 65;
			atkSD = 70;
		break;
		case "lairon": //Lairon
			atkAtk = 90;
			atkDef = 140;
			atkSA = 50;
			atkSD = 50;
		break;
		case "lamanda": //Lamanda
			atkAtk = 70;
			atkDef = 10;
			atkSA = 45;
			atkSD = 35;
		break;
		case "lamlie": //Lamlie
			atkAtk = 70;
			atkDef = 50;
			atkSA = 30;
			atkSD = 35;
		break;
		case "lapras": //Lapras
			atkAtk = 85;
			atkDef = 80;
			atkSA = 85;
			atkSD = 95;
		break;
		case "latikrai": //Latikrai
			atkAtk = 60;
			atkDef = 55;
			atkSA = 55;
			atkSD = 65;
		break;
		case "lilligant": //Lilligant
			atkAtk = 60;
			atkDef = 75;
			atkSA = 110;
			atkSD = 75;
		break;
		case "lobovo": //Lobovo
			atkAtk = 80;
			atkDef = 65;
			atkSA = 45;
			atkSD = 50;
		break;
		case "loftitanr": //Loftitan-R
			atkAtk = 100;
			atkDef = 105;
			atkSA = 50;
			atkSD = 105;
		break;
		case "lopunny": //Lopunny
			atkAtk = 76;
			atkDef = 84;
			atkSA = 54;
			atkSD = 96;
		break;
		case "luvaris": //Luvaris
			atkAtk = 100;
			atkDef = 90;
			atkSA = 65;
			atkSD = 75;
		break;
		case "lyrissimo": //Lyrissimo
			atkAtk = 70;
			atkDef = 67;
			atkSA = 122;
			atkSD = 65;
		break;
		case "magcargo": //Magcargo
			atkAtk = 50;
			atkDef = 120;
			atkSA = 80;
			atkSD = 80;
		break;
		case "makima": //Makima
			atkAtk = 10;
			atkDef = 55;
			atkSA = 55;
			atkSD = 55;
		break;
		case "makitaku": //Makitaku
			atkAtk = 30;
			atkDef = 105;
			atkSA = 105;
			atkSD = 105;
		break;
		case "malraja": //Malraja
            atkAtk = 90;
            atkDef = 75;
            atkSA = 95;
            atkSD = 120;
        break;
		case "mandicore": //Mandicore
			atkAtk = 100;
			atkDef = 100;
			atkSA = 40;
			atkSD = 75;
		break;
		case "marazuma": //Marazuma
			atkAtk = 55;
			atkDef = 105;
			atkSA = 75;
			atkSD = 120;
		break;
		case "mareep": //Mareep
			atkAtk = 40;
			atkDef = 40;
			atkSA = 65;
			atkSD = 45;
		break;
		case "marvelisk": //Marvelisk
			atkAtk = 115;
			atkDef = 70;
			atkSA = 105;
			atkSD = 99;
		break;
		case "mawile": //Mawile
			atkAtk = 85;
			atkDef = 85;
			atkSA = 55;
			atkSD = 55;
		break;
		case "medicham": //Medicham
			atkAtk = 60;
			atkDef = 75;
			atkSA = 60;
			atkSD = 75;
		break;
		case "meditite": //Meditite
			atkAtk = 40;
			atkDef = 55;
			atkSA = 40;
			atkSD = 55;
		break;
		case "mefflora": //Mefflora
			atkAtk = 20;
			atkDef = 40;
			atkSA = 55;
			atkSD = 45;
		break;
		case "meowstic": //Meowstic
            atkAtk = 48;
            atkDef = 76;
            atkSA = 83;
            atkSD = 81;
        break;
        case "mephodil": //Mephodil
            atkAtk = 40;
            atkDef = 55;
            atkSA = 85;
            atkSD = 65;
        break;
		case "milotic": //Milotic
			atkAtk = 60;
			atkDef = 79;
			atkSA = 100;
			atkSD = 125;
		break;
		case "minccino": //Minccino
			atkAtk = 50;
			atkDef = 40;
			atkSA = 40;
			atkSD = 40;
		break;
		case "minijina": //Minijina
			atkAtk = 70;
			atkDef = 40;
			atkSA = 20;
			atkSD = 45;
		break;
		case "misdreavus": //Misdreavus
			atkAtk = 60;
			atkDef = 60;
			atkSA = 85;
			atkSD = 85;
		break;
		case "mismagius": //Mismagius
			atkAtk = 60;
			atkDef = 60;
			atkSA = 105;
			atkSD = 105;
		break;
		case "mortarat": //Mortarat
			atkAtk = 95;
			atkDef = 50;
			atkSA = 95;
			atkSD = 50;
		break;
		case "murgaz": //Murgaz
			atkAtk = 55;
			atkDef = 40;
			atkSA = 35;
			atkSD = 35;
		break;
		case "murkrow": //Murkrow
			atkAtk = 85;
			atkDef = 42;
			atkSA = 85;
			atkSD = 42;
		break;
		case "nahualatu": //Nahualatu
			atkAtk = 100;
			atkDef = 80;
			atkSA = 125;
			atkSD = 80;
		break;
		case "natu": //Natu
			atkAtk = 50;
			atkDef = 45;
			atkSA = 70;
			atkSD = 45;
		break;
		case "nekhetura": //Nekhetura
			atkAtk = 106;
			atkDef = 70;
			atkSA = 85;
			atkSD = 65;
		break;
		case "nincada": //Nincada
			atkAtk = 45;
			atkDef = 90;
			atkSA = 30;
			atkSD = 30;
		break;
		case "ninjask": //Ninjask
			atkAtk = 90;
			atkDef = 45;
			atkSA = 50;
			atkSD = 50;
		break;
		case "noperajina": //Noperajina
			atkAtk = 120;
			atkDef = 80;
			atkSA = 60;
			atkSD = 85;
		break;
		case "nulohm": //Nulohm
			atkAtk = 118;
			atkDef = 86;
			atkSA = 65;
			atkSD = 74;
		break;
		case "numel": //Numel
			atkAtk = 60;
			atkDef = 40;
			atkSA = 65;
			atkSD = 45;
		break;
		case "nuwill": //Nuwill
			atkAtk = 78;
			atkDef = 66;
			atkSA = 45;
			atkSD = 54;
		break;
		case "octillery": //Octillery
			atkAtk = 105;
			atkDef = 75;
			atkSA = 105;
			atkSD = 75;
		break;
		case "onzarudo": //Onzarudo
            atkAtk = 118;
            atkDef = 92;
            atkSA = 63;
            atkSD = 75;
        break;
		case "osgrave": //Osgrave
			atkAtk = 112;
			atkDef = 70;
			atkSA = 80;
			atkSD = 81;
		break;
		case "ostento": //Ostento
            atkAtk = 115;
            atkDef = 90;
            atkSA = 70;
            atkSD = 70;
        break;
		case "pachirisu": //Pachirisu
			atkAtk = 45;
			atkDef = 70;
			atkSA = 45;
			atkSD = 90;
		break;
		case "pandive": //Pandive
			atkAtk = 82;
			atkDef = 50;
			atkSA = 63;
			atkSD = 66;
		break;
		case "paracordis": //Paracordis
			atkAtk = 115;
			atkDef = 90;
			atkSA = 75;
			atkSD = 90;
		break;
		case "paras": //Paras
			atkAtk = 70;
			atkDef = 55;
			atkSA = 45;
			atkSD = 55;
		break;
		case "parasect": //Parasect
			atkAtk = 95;
			atkDef = 80;
			atkSA = 60;
			atkSD = 80;
		break;
		case "petilil": //Petilil
			atkAtk = 30;
			atkDef = 50;
			atkSA = 70;
			atkSD = 50;
		break;
		case "petrocka": //Petrocka
			atkAtk = 120;
			atkDef = 85;
			atkSA = 40;
			atkSD = 75;
		break;
		case "phanpy": //Phanpy
			atkAtk = 60;
			atkDef = 60;
			atkSA = 40;
			atkSD = 40;
		break;
		case "pindillo": //Pindillo
            atkAtk = 68;
            atkDef = 72;
            atkSA = 45;
            atkSD = 38;
        break;
		case "quarendou": //Quarendou
			atkAtk = 105;
			atkDef = 150;
			atkSA = 45;
			atkSD = 82;
		break;
		case "quimpy": //Quimpy
			atkAtk = 55;
			atkDef = 20;
			atkSA = 10;
			atkSD = 10;
		break;
		case "raidnarr": //Raidnarr
			atkAtk = 90;
			atkDef = 55;
			atkSA = 40;
			atkSD = 50;
		break;
		case "rakateis": //Rakateis
			atkAtk = 114;
			atkDef = 52;
			atkSA = 80;
			atkSD = 78;
		break;
		case "ramfere": //Ramfere
			atkAtk = 115;
			atkDef = 90;
			atkSA = 55;
			atkSD = 85;
		break;
		case "rapscalion": //Rapscalion
			atkAtk = 115;
			atkDef = 70;
			atkSA = 78;
			atkSD = 85;
		break;
		case "rasqueon": //Rasqueon
			atkAtk = 90;
			atkDef = 115;
			atkSA = 60;
			atkSD = 80;
		break;
		case "razelodon": //Razelodon
			atkAtk = 130;
			atkDef = 130;
			atkSA = 40;
			atkSD = 60;
		break;
		case "remoraid": //Remoraid
			atkAtk = 65;
			atkDef = 35;
			atkSA = 65;
			atkSD = 35;
		break;
		//case "rotoma": //Rotom-A
			//atkAtk = 65;
			//atkDef = 107;
			//atkSA = 105;
			//atkSD = 107;
		break;
		case "sableye": //Sableye
			atkAtk = 75;
			atkDef = 75;
			atkSA = 65;
			atkSD = 65;
		break;
		case "sandile": //Sandile
			atkAtk = 72;
			atkDef = 35;
			atkSA = 35;
			atkSD = 35;
		break;
		case "scrafty": //Scrafty
			atkAtk = 90;
			atkDef = 115;
			atkSA = 45;
			atkSD = 115;
		break;
		case "scraggy": //Scraggy
			atkAtk = 75;
			atkDef = 70;
			atkSA = 35;
			atkSD = 70;
		break;
		case "seviper": //Seviper
			atkAtk = 100;
			atkDef = 60;
			atkSA = 100;
			atkSD = 60;
		break;
		case "seviron": //Seviron
			atkAtk = 85;
			atkDef = 105;
			atkSA = 85;
			atkSD = 105;
		break;
		case "sharpedo": //Sharpedo
			atkAtk = 120;
			atkDef = 40;
			atkSA = 95;
			atkSD = 40;
		break;
		case "shedinja": //Shedinja
			atkAtk = 90;
			atkDef = 45;
			atkSA = 30;
			atkSD = 30;
		break;
		case "shuckle": //Shuckle
			atkAtk = 10;
			atkDef = 230;
			atkSA = 10;
			atkSD = 230;
		break;
		case "siamacho": //Siamacho
            atkAtk = 104;
            atkDef = 70;
            atkSA = 89;
            atkSD = 60;
        break;
		case "sigilyph": //Sigilyph
			atkAtk = 58;
			atkDef = 80;
			atkSA = 103;
			atkSD = 80;
		break;
		case "skrelp": //Skrelp
            atkAtk = 60;
            atkDef = 60;
            atkSA = 60;
            atkSD = 60;
        break;
		case "slugma": //Slugma
			atkAtk = 40;
			atkDef = 40;
			atkSA = 70;
			atkSD = 40;
		break;
		case "smeargle": //Smeargle
			atkAtk = 20;
			atkDef = 35;
			atkSA = 20;
			atkSD = 45;
		break;
		case "snorunt": //Snorunt
			atkAtk = 50;
			atkDef = 50;
			atkSA = 50;
			atkSD = 50;
		break;
		case "sparcoil": //Sparcoil
			atkAtk = 105;
			atkDef = 60;
			atkSA = 75;
			atkSD = 80;
		break;
		case "spilotalis": //Spilotalis
            atkAtk = 55;
            atkDef = 70;
            atkSA = 115;
            atkSD = 85;
        break;
		case "spraylet": //Spraylet
			atkAtk = 64;
			atkDef = 41;
			atkSA = 49;
			atkSD = 51;
		break;
		case "stantler": //Stantler
			atkAtk = 95;
			atkDef = 62;
			atkSA = 85;
			atkSD = 65;
		break;
		case "swablu": //Swablu
            atkAtk = 40;
            atkDef = 60;
            atkSA = 40;
            atkSD = 75;
        break;
		case "termelc": //Termelc
			atkAtk = 70;
			atkDef = 60;
			atkSA = 90;
			atkSD = 60;
		break;
		case "thunderma": //Thunderma
			atkAtk = 90;
			atkDef = 70;
			atkSA = 45;
			atkSD = 65;
		break;
		case "tianglis": //Tianglis
			atkAtk = 90;
			atkDef = 75;
			atkSA = 75;
			atkSD = 60;
		break;
		case "tinimer": //Tinimer
            atkAtk = 45;
            atkDef = 45;
            atkSA = 50;
            atkSD = 45;
        break;
		case "torranel": //Torranel
			atkAtk = 80;
			atkDef = 90;
			atkSA = 120;
			atkSD = 75;
		break;
		case "transmite": //Transmite
			atkAtk = 75;
			atkDef = 60;
			atkSA = 80;
			atkSD = 75;
		break;
		case "turatal": //Turatal
			atkAtk = 85;
			atkDef = 60;
			atkSA = 95;
			atkSD = 60;
		break;
		case "turistar": //Turistar
			atkAtk = 70;
			atkDef = 50;
			atkSA = 35;
			atkSD = 50;
		break;
		case "turumaken": //Turumaken
			atkAtk = 100;
			atkDef = 90;
			atkSA = 65;
			atkSD = 85;
		break;
		case "unown": //Unown
			atkAtk = 72;
			atkDef = 48;
			atkSA = 72;
			atkSD = 48;
		break;
		case "vaering": //Vaering
			atkAtk = 65;
			atkDef = 40;
			atkSA = 30;
			atkSD = 35;
		break;
		case "valazman": //Valazman
			atkAtk = 120;
			atkDef = 101;
			atkSA = 60;
			atkSD = 80;
		break;
		case "vaquerado": //Vaquerado
            atkAtk = 80;
            atkDef = 65;
            atkSA = 100;
            atkSD = 50;
        break;
		case "ventorm": //Ventorm
			atkAtk = 60;
			atkDef = 110;
			atkSA = 120;
			atkSD = 100;
		break;
		case "virlich": //Virlich
            atkAtk = 50;
            atkDef = 35;
            atkSA = 78;
            atkSD = 66;
        break;
		case "volstarite": //Volstarite
			atkAtk = 120;
			atkDef = 135;
			atkSA = 95;
			atkSD = 70;
		break;
		case "vulkhet": //Vulkhet
			atkAtk = 76;
			atkDef = 40;
			atkSA = 35;
			atkSD = 35;
		break;
		case "wyrmal": //Wyrmal
			atkAtk = 30;
			atkDef = 50;
			atkSA = 60;
			atkSD = 45;
		break;
		case "xatu": //Xatu
			atkAtk = 75;
			atkDef = 70;
			atkSA = 95;
			atkSD = 70;
		break;
		case "zangoose": //Zangoose
			atkAtk = 115;
			atkDef = 60;
			atkSA = 60;
			atkSD = 60;
		break;
		case "zanthera": //Zanthera
			atkAtk = 125;
			atkDef = 80;
			atkSA = 70;
			atkSD = 80;
		break;
		default:
			atkAtk = 0;
			atkDef = 0;
			atkSA = 0;
			atkSD = 0;
	} //end attacker switch

	//choose the right stat...
	if (moveclass=="Physical") {
		atkused = atkAtk;
	} else if (moveclass=="Special") {
		atkused = atkSA;
	} else {
		atkused = atkAtk;
	}

	//choose the right stat (remembering to check for foul play et al)...
	/*if (chosenmove=="foulplay") {
		atkused = targetAtk;
	} else if (moveclass=="Physical") {
		atkused = atkAtk;
	} else if (moveclass=="Special") {
		atkused = atkSA;
	} else {
		atkused = atkAtk;
	}*/

	//...calculate it...
	if (chosenmove=="foulplay") {
		finalatk = targetAtk;
	} else {
		finalatk = (Math.floor(Math.floor((2 * atkused) * document.getElementById('userlevel').value / 100 + 5)));
		//old version using max IVs/EVs
		//finalatk = (Math.floor(Math.floor((2 * atkused + 31 + 63) * document.getElementById('userlevel').value / 100 + 5)));
	}


	//and set useratk to the calculated value
	document.getElementById('useratk').value = finalatk;
}
