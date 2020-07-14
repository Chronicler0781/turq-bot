/*
* tqmodtools_defpkmn.js
* A series of JavaScript tools, functions, etc. for running the Pokémon Turquoise moderator tools (calculators, RNGs, etc.) - list of pokémon w/base stats, used to determine defender stats for battletab.html
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


//base stats for defending pokémon
function choosedefender() {
	defender = document.getElementById('defpokemon').value;
	chosenmove = document.getElementById('movename').value; //get the move name to check for psyshock et al

	switch(defender) {
		case "choose": //Select a Pokémon, a.k.a. blank
			defAtk = 0;
			defDef = 0;
			defSA = 0;
			defSD = 0;
		break;
		case "acafia": //Acafia
			defAtk = 68;
			defDef = 56;
			defSA = 41;
			defSD = 48;
		break;
		case "aculago": //Aculago
			defAtk = 70;
			defDef = 95;
			defSA = 50;
			defSD = 55;
		break;
		case "aeolagio": //Aeolagio
			defAtk = 40;
			defDef = 65;
			defSA = 110;
			defSD = 110;
		break;
		case "aerodactyl": //Aerodactyl
			defAtk = 105;
			defDef = 65;
			defSA = 60;
			defSD = 75;
		break;
		case "aggron": //Aggron
			defAtk = 110;
			defDef = 180;
			defSA = 60;
			defSD = 60;
		break;
		case "altaria": //Altaria
			defAtk = 70;
			defDef = 90;
			defSA = 70;
			defSD = 105;
		break;
		case "altavault": //Altvault
			defAtk = 110;
			defDef = 70;
			defSA = 100;
			defSD = 50;
		break;
		case "ampharos": //Ampharos
			defAtk = 75;
			defDef = 85;
			defSA = 115;
			defSD = 90;
		break;
		case "arctangel": //Arctangel
			defAtk = 60;
			defDef = 85;
			defSA = 109;
			defSD = 91;
		break;
		case "aron": //Aron
			defAtk = 70;
			defDef = 100;
			defSA = 40;
			defSD = 40;
		break;
		case "auriole": //Auriole
			defAtk = 60;
			defDef = 45;
			defSA = 20;
			defSD = 45;
		break;
		case "basculin": //Basculin
			defAtk = 92;
			defDef = 65;
			defSA = 80;
			defSD = 55;
		break;
		case "bearbegazi": //Bearbegazi
			defAtk = 50;
			defDef = 65;
			defSA = 80;
			defSD = 90;
		break;
		case "beddybite": //Beddybite
			defAtk = 40;
			defDef = 45;
			defSA = 60;
			defSD = 65;
		break;
		case "belmarine": //Belmarine
			defAtk = 70;
			defDef = 50;
			defSA = 100;
			defSD = 80;
		break;
		case "bitemare": //Bitemare
			defAtk = 70;
			defDef = 80;
			defSA = 95;
			defSD = 100;
		break;
		case "bojina": //Bojina
			defAtk = 90;
			defDef = 60;
			defSA = 40;
			defSD = 65;
		break;
		case "bossorna": //Bossorna
			defAtk = 115;
			defDef = 90;
			defSA = 70;
			defSD = 80;
		break;
		case "buneary": //Buneary
			defAtk = 66;
			defDef = 44;
			defSA = 44;
			defSD = 56;
		break;
		case "bucarat": //Bucarat
			defAtk = 60;
			defDef = 30;
			defSA = 60;
			defSD = 30;
		break;
		case "burungin": //Burungin
			defAtk = 85;
			defDef = 74;
			defSA = 121;
			defSD = 70;
		break;
		case "camerupt": //Camerupt
			defAtk = 70;
			defDef = 100;
			defSA = 70;
			defSD = 105;
		break;
		case "carvanha": //Carvanha
			defAtk = 90;
			defDef = 20;
			defSA = 65;
			defSD = 20;
		break;
		case "caslot": //Caslot
			defAtk = 77;
			defDef = 80;
			defSA = 77;
			defSD = 80;
		break;
		case "catalcia": //Catalcia
			defAtk = 85;
			defDef = 70;
			defSA = 54;
			defSD = 60;
		break;
		case "cerisol": //Cerisol
			defAtk = 80;
			defDef = 80;
			defSA = 117;
			defSD = 80;
		break;
		case "chantirrus": //Chantirrus
			defAtk = 60;
			defDef = 125;
			defSA = 70;
			defSD = 130;
		break;
		case "charandillo": //Charandillo
			defAtk = 103;
			defDef = 107;
			defSA = 80;
			defSD = 68;
		break;
		case "chaszin": //Chaszin
			defAtk = 85;
			defDef = 60;
			defSA = 55;
			defSD = 55;
		break;
		case "chatot": //Chatot
			defAtk = 65;
			defDef = 44;
			defSA = 92;
			defSD = 42;
		break;
		case "cherrim": //Cherrim
			defAtk = 60;
			defDef = 70;
			defSA = 87;
			defSD = 78;
		break;
		case "cherubi": //Cherubi
			defAtk = 35;
			defDef = 45;
			defSA = 62;
			defSD = 53;
		break;
		case "cinccino": //Cinccino
			defAtk = 95;
			defDef = 60;
			defSA = 65;
			defSD = 60;
		break;
		case "clauncher": //Clauncher
			defAtk = 53;
			defDef = 62;
			defSA = 58;
			defSD = 63;
		break;
		case "clawitzer": //Clawitzer
			defAtk = 73;
			defDef = 78;
			defSA = 120;
			defSD = 89;
		break;
		case "coiffaire": //Coiffaire
		    defAtk = 75;
		    defDef = 70;
		    defSA = 60;
		    defSD = 60;
		break;
		case "cragendou": //Cragendou
			defAtk = 75;
			defDef = 100;
			defSA = 35;
			defSD = 62;
		break;
		case "crocoal": //Crocoal
			defAtk = 55;
			defDef = 43;
			defSA = 70;
			defSD = 40;
		break;
		case "cryogonal": //Cryogonal
            defAtk = 50;
            defDef = 30;
            defSA = 95;
            defSD = 135;
        break;
		case "cubly": //Cubly
			defAtk = 10;
			defDef = 20;
			defSA = 45;
			defSD = 35;
		break;
		case "curlsa": //Curlsa
            defAtk = 60;
            defDef = 50;
            defSA = 40;
            defSD = 40;
        break;
		case "dartizelr": //Dartizel-R
			defAtk = 80;
			defDef = 60;
			defSA = 80;
			defSD = 60;
		break;
		case "dasfix": //Dasfix
            defAtk = 55;
            defDef = 40;
            defSA = 60;
            defSD = 70;
        break;
        case "delibird": //Delibird
			defAtk = 55;
			defDef = 45;
			defSA = 65;
			defSD = 45;
		break;
		case "derfin": //Derfin
			defAtk = 10;
			defDef = 10;
			defSA = 80;
			defSD = 20;
		break;
		case "donarith": //Donarith
			defAtk = 108;
			defDef = 70;
			defSA = 85;
			defSD = 60;
		break;
		case "donphan": //Donphan
			defAtk = 120;
			defDef = 120;
			defSA = 60;
			defSD = 60;
		break;
		case "dragalge": //Dragalge
            defAtk = 75;
            defDef = 90;
            defSA = 97;
            defSD = 123;
        break;
		case "drakella": //Drakella
			defAtk = 64;
			defDef = 60;
			defSA = 112;
			defSD = 113;
		break;
		case "drapion": //Drapion
			defAtk = 90;
			defDef = 110;
			defSA = 60;
			defSD = 75;
		break;
		case "drasarkr": //Drasarkr
			defAtk = 110;
			defDef = 75;
			defSA = 50;
			defSD = 75;
		break;
		case "drilbur": //Drilbur
            defAtk = 85;
            defDef = 40;
            defSA = 30;
            defSD = 45;
        break;
		case "durant": //Durant
			defAtk = 109;
			defDef = 112;
			defSA = 48;
			defSD = 48;
		break;
		case "dusclops": //Dusclops
			defAtk = 70;
			defDef = 130;
			defSA = 60;
			defSD = 130;
		break;
		case "dusknoir": //Dusknoir
			defAtk = 100;
			defDef = 135;
			defSA = 60;
			defSD = 135;
		break;
		case "duskull": //Duskull
			defAtk = 40;
			defDef = 90;
			defSA = 30;
			defSD = 90;
		break;
		case "dustley": //Dustley
			defAtk = 45;
			defDef = 55;
			defSA = 25;
			defSD = 35;
		break;
		case "dybelial": //Dybelial
			defAtk = 95;
			defDef = 80;
			defSA = 130;
			defSD = 110;
		break;
		case "dyferal": //Dyferal
			defAtk = 55;
			defDef = 50;
			defSA = 95;
			defSD = 80;
		break;
		case "dyrascal": //Dyrascal
			defAtk = 40;
			defDef = 40;
			defSA = 65;
			defSD = 60;
		break;
		case "eelektross": //Eelektross
			defAtk = 115;
			defDef = 80;
			defSA = 105;
			defSD = 80;
		break;
		case "emperobe": //Emperobe
            defAtk = 50;
            defDef = 65;
            defSA = 100;
            defSD = 110;
        break;
		case "encanoto": //Encanoto
			defAtk = 80;
			defDef = 70;
			defSA = 125;
			defSD = 85;
		break;
		case "espurr": //Espurr
            defAtk = 48;
            defDef = 54;
            defSA = 63;
            defSD = 60;
        break;
        case "excadrill": //Excadrill
            defAtk = 135;
            defDef = 60;
            defSA = 50;
            defSD = 65;
        break;
		case "exeggcute": //Exeggcute
			defAtk = 40;
			defDef = 80;
			defSA = 60;
			defSD = 45;
		break;
		case "exeggutor": //Exeggutor
			defAtk = 95;
			defDef = 85;
			defSA = 125;
			defSD = 65;
		break;
		case "fallorite": //Fallorite
			defAtk = 70;
			defDef = 85;
			defSA = 55;
			defSD = 50;
		break;
		case "farfetchd": //Farfetch'd
			defAtk = 65;
			defDef = 55;
			defSA = 58;
			defSD = 62;
		break;
		case "feebas": //Feebas
			defAtk = 15;
			defDef = 20;
			defSA = 10;
			defSD = 55;
		break;
		//case "ferrothorn": //Ferrothorn
			//defAtk = 94;
			//defDef = 131;
			//defSA = 54;
			//defSD = 116;
		break;
		case "feucrota": //Feucrota
			defAtk = 69;
			defDef = 54;
			defSA = 90;
			defSD = 50;
		break;
		case "finnial": //Finnial
			defAtk = 50;
			defDef = 35;
			defSA = 75;
			defSD = 35;
		break;
		case "flaaffy": //flaaffy
			defAtk = 55;
			defDef = 55;
			defSA = 80;
			defSD = 60;
		break;
		case "floundirt": //Floundirt
			defAtk = 50;
			defDef = 80;
			defSA = 65;
			defSD = 60;
		break;
		case "freye": //Freye
			defAtk = 30;
			defDef = 60;
			defSA = 45;
			defSD = 40;
		break;
		case "froslass": //Froslass
			defAtk = 80;
			defDef = 70;
			defSA = 80;
			defSD = 70;
		break;
		case "galaraud": //Galaraud
			defAtk = 85;
			defDef = 70;
			defSA = 95;
			defSD = 70;
		break;
		case "galorindle": //Galorindle
			defAtk = 50;
			defDef = 50;
			defSA = 60;
			defSD = 50;
		break;
		case "galoryph": //Galoryph
			defAtk = 70;
			defDef = 70;
			defSA = 95;
			defSD = 85;
		break;
		case "garapaima": //Garapaima
            defAtk = 120;
            defDef = 90;
            defSA = 60;
            defSD = 55;
        break;
        case "gasvirlich": //Gasvirlich
            defAtk = 70;
            defDef = 55;
            defSA = 128;
            defSD = 96;
        break;
		case "glalie": //Glalie
			defAtk = 80;
			defDef = 80;
			defSA = 80;
			defSD = 80;
		break;
		case "gowatu": //Gowatu
			defAtk = 55;
			defDef = 35;
			defSA = 60;
			defSD = 35;
		break;
		case "gravendou": //Gravendou
			defAtk = 60;
			defDef = 85;
			defSA = 15;
			defSD = 42;
		break;
		case "halberaxr": //Halberax-R
			defAtk = 140;
			defDef = 70;
			defSA = 40;
			defSD = 90;
		break;
		case "halirth": //Halirth
			defAtk = 70;
			defDef = 100;
			defSA = 85;
			defSD = 80;
		break;
		case "hawlucha": //Hawlucha
            defAtk = 92;
            defDef = 77;
            defSA = 74;
            defSD = 63;
        break;
		case "heatmor": //Heatmor
			defAtk = 97;
			defDef = 66;
			defSA = 105;
			defSD = 66;
		break;
		case "heladalca": //Heladalca
			defAtk = 115;
			defDef = 100;
			defSA = 50;
			defSD = 100;
		break;
		case "heliolisk": //Heliolisk
            defAtk = 55;
            defDef = 52;
            defSA = 109;
            defSD = 94;
        break;
        case "helioptile": //Helioptile
            defAtk = 38;
            defDef = 33;
            defSA = 61;
            defSD = 43;
        break;
        case "hollimin": //Hollimin
			defAtk = 60;
			defDef = 50;
			defSA = 45;
			defSD = 50;
		break;
		case "honchkrow": //Honchkrow
			defAtk = 125;
			defDef = 52;
			defSA = 105;
			defSD = 52;
		break;
		case "humbuzz": //Humbuzz
			defAtk = 10;
			defDef = 10;
			defSA = 60;
			defSD = 50;
		break;
		case "ibazel": //Ibazel
			defAtk = 80;
			defDef = 50;
			defSA = 122;
			defSD = 113;
		break;
		case "icauriole": //Icauriole
			defAtk = 110;
			defDef = 60;
			defSA = 50;
			defSD = 60;
		break;
		case "ignelix": //Ignelix
            defAtk = 75;
            defDef = 130;
            defSA = 105;
            defSD = 105;
        break;
		case "invicunya": //Jackravage
			defAtk = 60;
			defDef = 70;
			defSA = 60;
			defSD = 70;
		break;
		case "jackravage": //Jackravage
			defAtk = 96;
			defDef = 84;
			defSA = 54;
			defSD = 76;
		break;
		case "josuche": //Josuche
			defAtk = 95;
			defDef = 60;
			defSA = 95;
			defSD = 65;
		break;
		case "kangaskhan": //Kangaskhan
            defAtk = 95;
            defDef = 80;
            defSA = 40;
            defSD = 80;
        break;
		case "kelfee": //Kelfee
			defAtk = 34;
			defDef = 30;
			defSA = 62;
			defSD = 63;
		break;
		case "khargonaut": //Khargonaut
			defAtk = 130;
			defDef = 100;
			defSA = 80;
			defSD = 90;
		break;
		case "kiblis": //Kiblis
			defAtk = 50;
			defDef = 30;
			defSA = 82;
			defSD = 73;
		break;
		case "kingdra": //Kingdra
			defAtk = 95;
			defDef = 95;
			defSA = 95;
			defSD = 95;
		break;
		case "kizziff": //Kizziff
			defAtk = 45;
			defDef = 30;
			defSA = 20;
			defSD = 20;
		break;
		case "klaitning": //Klaitning
			defAtk = 30;
			defDef = 30;
			defSA = 100;
			defSD = 90;
		break;
		case "kraitra": //Kraitra
			defAtk = 95;
			defDef = 85;
			defSA = 85;
			defSD = 95;
		break;
		case "krokorok": //Krokorok
			defAtk = 82;
			defDef = 45;
			defSA = 45;
			defSD = 45;
		break;
		case "krookodile": //Krookodile
			defAtk = 117;
			defDef = 80;
			defSA = 65;
			defSD = 70;
		break;
		case "lairon": //Lairon
			defAtk = 90;
			defDef = 140;
			defSA = 50;
			defSD = 50;
		break;
		case "lamanda": //Lamanda
			defAtk = 70;
			defDef = 10;
			defSA = 45;
			defSD = 35;
		break;
		case "lamlie": //Lamlie
			defAtk = 70;
			defDef = 50;
			defSA = 30;
			defSD = 35;
		break;
		case "lapras": //Lapras
			defAtk = 85;
			defDef = 80;
			defSA = 85;
			defSD = 95;
		break;
		case "latikrai": //Latikrai
			defAtk = 60;
			defDef = 55;
			defSA = 55;
			defSD = 65;
		break;
		case "lilligant": //Lilligant
			defAtk = 60;
			defDef = 75;
			defSA = 110;
			defSD = 75;
		break;
		case "lobovo": //Lobovo
			defAtk = 80;
			defDef = 65;
			defSA = 45;
			defSD = 50;
		break;
		case "loftitanr": //Loftitan-R
			defAtk = 100;
			defDef = 105;
			defSA = 50;
			defSD = 105;
		break;
		case "lopunny": //Lopunny
			defAtk = 76;
			defDef = 84;
			defSA = 54;
			defSD = 96;
		break;
		case "luvaris": //Luvaris
			defAtk = 100;
			defDef = 90;
			defSA = 65;
			defSD = 75;
		break;
		case "lyrissimo": //Lyrissimo
			defAtk = 70;
			defDef = 67;
			defSA = 122;
			defSD = 65;
		break;
		case "magcargo": //Magcargo
			defAtk = 50;
			defDef = 120;
			defSA = 80;
			defSD = 80;
		break;
		case "makima": //Makima
			defAtk = 10;
			defDef = 55;
			defSA = 55;
			defSD = 55;
		break;
		case "makitaku": //Makitaku
			defAtk = 30;
			defDef = 105;
			defSA = 105;
			defSD = 105;
		break;
		case "malraja": //Malraja
            defAtk = 90;
            defDef = 75;
            defSA = 95;
            defSD = 120;
        break;
		case "mandicore": //Mandicore
			defAtk = 100;
			defDef = 100;
			defSA = 40;
			defSD = 75;
		break;
		case "marazuma": //Marazuma
			defAtk = 55;
			defDef = 105;
			defSA = 75;
			defSD = 120;
		break;
		case "mareep": //Mareep
			defAtk = 40;
			defDef = 40;
			defSA = 65;
			defSD = 45;
		break;
		case "marvelisk": //Marvelisk
			defAtk = 115;
			defDef = 70;
			defSA = 105;
			defSD = 99;
		break;
		case "mawile": //Mawile
			defAtk = 85;
			defDef = 85;
			defSA = 55;
			defSD = 55;
		break;
		case "medicham": //Medicham
			defAtk = 60;
			defDef = 75;
			defSA = 60;
			defSD = 75;
		break;
		case "meditite": //Meditite
			defAtk = 40;
			defDef = 55;
			defSA = 40;
			defSD = 55;
		break;
		case "mefflora": //Mefflora
			defAtk = 20;
            defDef = 40;
            defSA = 55;
            defSD = 45;
		break;
		case "meowstic": //Meowstic
            defAtk = 48;
            defDef = 76;
            defSA = 83;
            defSD = 81;
        break;
        case "mephodil": //Mephodil
            defAtk = 40;
            defDef = 55;
            defSA = 85;
            defSD = 65;
        break;
		case "milotic": //Milotic
			defAtk = 60;
			defDef = 79;
			defSA = 100;
			defSD = 125;
		break;
		case "minccino": //Minccino
			defAtk = 50;
			defDef = 40;
			defSA = 40;
			defSD = 40;
		break;
		case "minijina": //Minijina
			defAtk = 70;
			defDef = 40;
			defSA = 20;
			defSD = 45;
		break;
		case "misdreavus": //Misdreavus
			defAtk = 60;
			defDef = 60;
			defSA = 85;
			defSD = 85;
		break;
		case "mismagius": //Mismagius
			defAtk = 60;
			defDef = 60;
			defSA = 105;
			defSD = 105;
		break;
		case "mortarat": //Mortarat
			defAtk = 95;
			defDef = 50;
			defSA = 95;
			defSD = 50;
		break;
		case "murgaz": //Murgaz
			defAtk = 55;
			defDef = 40;
			defSA = 35;
			defSD = 35;
		break;
		case "murkrow": //Murkrow
			defAtk = 85;
			defDef = 42;
			defSA = 85;
			defSD = 42;
		break;
		case "nahualatu": //Nahualatu
			defAtk = 100;
			defDef = 80;
			defSA = 125;
			defSD = 80;
		break;
		case "natu": //Natu
			defAtk = 50;
			defDef = 45;
			defSA = 70;
			defSD = 45;
		break;
		case "nekhetura": //Nekhetura
			defAtk = 106;
			defDef = 70;
			defSA = 85;
			defSD = 65;
		break;
		case "nincada": //Nincada
			defAtk = 45;
			defDef = 90;
			defSA = 30;
			defSD = 30;
		break;
		case "ninjask": //Ninjask
			defAtk = 90;
			defDef = 45;
			defSA = 50;
			defSD = 50;
		break;
		case "noperajina": //Noperajina
			defAtk = 120;
			defDef = 80;
			defSA = 60;
			defSD = 85;
		break;
		case "nulohm": //Nulohm
			defAtk = 118;
			defDef = 86;
			defSA = 65;
			defSD = 74;
		break;
		case "numel": //Numel
			defAtk = 60;
			defDef = 40;
			defSA = 65;
			defSD = 45;
		break;
		case "nuwill": //Nuwill
			defAtk = 78;
			defDef = 66;
			defSA = 45;
			defSD = 54;
		break;
		case "octillery": //Octillery
			defAtk = 105;
			defDef = 75;
			defSA = 105;
			defSD = 75;
		break;
		case "onzarudo": //Onzarudo
            defAtk = 118;
            defDef = 92;
            defSA = 63;
            defSD = 75;
        break;
		case "osgrave": //Osgrave
			defAtk = 112;
			defDef = 70;
			defSA = 80;
			defSD = 81;
		break;
		case "ostento": //Ostento
            defAtk = 115;
            defDef = 90;
            defSA = 70;
            defSD = 70;
        break;
		case "pachirisu": //Pachirisu
			defAtk = 45;
			defDef = 70;
			defSA = 45;
			defSD = 90;
		break;
		case "pandive": //Pandive
			defAtk = 82;
			defDef = 50;
			defSA = 63;
			defSD = 66;
		break;
		case "paracordis": //Paracordis
			defAtk = 115;
			defDef = 90;
			defSA = 75;
			defSD = 90;
		break;
		case "paras": //Paras
			defAtk = 70;
			defDef = 55;
			defSA = 45;
			defSD = 55;
		break;
		case "parasect": //Parasect
			defAtk = 95;
			defDef = 80;
			defSA = 60;
			defSD = 80;
		break;
		case "petilil": //Petilil
			defAtk = 30;
			defDef = 50;
			defSA = 70;
			defSD = 50;
		break;
		case "petrocka": //Petrocka
			defAtk = 120;
			defDef = 85;
			defSA = 40;
			defSD = 75;
		break;
		case "phanpy": //Phanpy
			defAtk = 60;
			defDef = 60;
			defSA = 40;
			defSD = 40;
		break;
		case "pindillo": //Pindillo
            defAtk = 68;
            defDef = 72;
            defSA = 45;
            defSD = 38;
        break;
		case "quarendou": //Quarendou
			defAtk = 105;
			defDef = 150;
			defSA = 45;
			defSD = 82;
		break;
		case "quimpy": //Quimpy
			defAtk = 55;
			defDef = 20;
			defSA = 10;
			defSD = 10;
		break;
		case "raidnarr": //Raidnarr
			defAtk = 90;
			defDef = 55;
			defSA = 40;
			defSD = 50;
		break;
		case "rakateis": //Rakateis
			defAtk = 114;
			defDef = 52;
			defSA = 80;
			defSD = 78;
		break;
		case "ramfere": //Ramfere
			defAtk = 115;
			defDef = 90;
			defSA = 55;
			defSD = 85;
		break;
		case "rapscalion": //Rapscalion
			defAtk = 115;
			defDef = 70;
			defSA = 78;
			defSD = 85;
		break;
		case "rasqueon": //Rasqueon
			defAtk = 90;
			defDef = 115;
			defSA = 60;
			defSD = 80;
		break;
		case "razelodon": //Razelodon
			defAtk = 130;
			defDef = 130;
			defSA = 40;
			defSD = 60;
		break;
		case "remoraid": //Remoraid
			defAtk = 65;
			defDef = 35;
			defSA = 65;
			defSD = 35;
		break;
		//case "rotoma": //Rotom-A
			//defAtk = 65;
			//defDef = 107;
			//defSA = 105;
			//defSD = 107;
		break;
		case "sableye": //Sableye
			defAtk = 75;
			defDef = 75;
			defSA = 65;
			defSD = 65;
		break;
		case "sandile": //Sandile
			defAtk = 72;
			defDef = 35;
			defSA = 35;
			defSD = 35;
		break;
		case "scrafty": //Scrafty
			defAtk = 90;
			defDef = 115;
			defSA = 45;
			defSD = 115;
		break;
		case "scraggy": //Scraggy
			defAtk = 75;
			defDef = 70;
			defSA = 35;
			defSD = 70;
		break;
		case "seviper": //Seviper
			defAtk = 100;
			defDef = 60;
			defSA = 100;
			defSD = 60;
		break;
		case "seviron": //Seviron
			defAtk = 85;
			defDef = 105;
			defSA = 85;
			defSD = 105;
		break;
		case "sharpedo": //Sharpedo
			defAtk = 120;
			defDef = 40;
			defSA = 95;
			defSD = 40;
		break;
		case "shedinja": //Shedinja
			defAtk = 90;
			defDef = 45;
			defSA = 30;
			defSD = 30;
		break;
		case "shuckle": //Shuckle
			defAtk = 10;
			defDef = 230;
			defSA = 10;
			defSD = 230;
		break;
		case "siamacho": //Siamacho
            defAtk = 104;
            defDef = 70;
            defSA = 89;
            defSD = 60;
        break;
		case "sigilyph": //Sigilyph
			defAtk = 58;
			defDef = 80;
			defSA = 103;
			defSD = 80;
		break;
		case "skrelp": //Skrelp
            defAtk = 60;
            defDef = 60;
            defSA = 60;
            defSD = 60;
        break;
		case "slugma": //Slugma
			defAtk = 40;
			defDef = 40;
			defSA = 70;
			defSD = 40;
		break;
		case "smeargle": //Smeargle
			defAtk = 20;
			defDef = 35;
			defSA = 20;
			defSD = 45;
		break;
		case "snorunt": //Snorunt
			defAtk = 50;
			defDef = 50;
			defSA = 50;
			defSD = 50;
		break;
		case "sparcoil": //Sparcoil
			defAtk = 105;
			defDef = 60;
			defSA = 75;
			defSD = 80;
		break;
		case "spilotalis": //Spilotalis
            defAtk = 55;
            defDef = 70;
            defSA = 115;
            defSD = 85;
        break;
		case "spraylet": //Spraylet
			defAtk = 64;
			defDef = 41;
			defSA = 49;
			defSD = 51;
		break;
		case "stantler": //Stantler
			defAtk = 95;
			defDef = 62;
			defSA = 85;
			defSD = 65;
		break;
		case "swablu": //Swablu
            defAtk = 40;
            defDef = 60;
            defSA = 40;
            defSD = 75;
        break;
		case "termelc": //Termelc
			defAtk = 70;
			defDef = 60;
			defSA = 90;
			defSD = 60;
		break;
		case "thunderma": //Thunderma
			defAtk = 90;
			defDef = 70;
			defSA = 45;
			defSD = 65;
		break;
		case "tianglis": //Tianglis
			defAtk = 90;
			defDef = 75;
			defSA = 75;
			defSD = 60;
		break;
		case "tinimer": //Tinimer
            defAtk = 45;
            defDef = 45;
            defSA = 50;
            defSD = 45;
        break;
		case "torranel": //Torranel
			defAtk = 80;
			defDef = 90;
			defSA = 120;
			defSD = 75;
		break;
		case "transmite": //Transmite
			defAtk = 75;
			defDef = 60;
			defSA = 80;
			defSD = 75;
		break;
		case "turatal": //Turatal
			defAtk = 85;
			defDef = 60;
			defSA = 95;
			defSD = 60;
		break;
		case "turistar": //Turistar
			defAtk = 70;
			defDef = 50;
			defSA = 35;
			defSD = 50;
		break;
		case "turumaken": //Turumaken
			defAtk = 100;
			defDef = 90;
			defSA = 65;
			defSD = 85;
		break;
		case "unown": //Unown
			defAtk = 72;
			defDef = 48;
			defSA = 72;
			defSD = 48;
		break;
		case "vaering": //Vaering
			defAtk = 65;
			defDef = 40;
			defSA = 30;
			defSD = 35;
		break;
		case "valazman": //Valazman
			defAtk = 120;
			defDef = 101;
			defSA = 60;
			defSD = 80;
		break;
		case "vaquerado": //Vaquerado
            defAtk = 80;
            defDef = 65;
            defSA = 100;
            defSD = 50;
        break;
		case "ventorm": //Ventorm
			defAtk = 60;
			defDef = 110;
			defSA = 120;
			defSD = 100;
		break;
		case "virlich": //Virlich
            defAtk = 50;
            defDef = 35;
            defSA = 78;
            defSD = 66;
        break;
		case "volstarite": //Volstarite
			defAtk = 120;
			defDef = 135;
			defSA = 95;
			defSD = 70;
		break;
		case "vulkhet": //Vulkhet
			defAtk = 76;
			defDef = 40;
			defSA = 35;
			defSD = 35;
		break;
		case "wyrmal": //Wyrmal
			defAtk = 30;
			defDef = 50;
			defSA = 60;
			defSD = 45;
		break;
		case "xatu": //Xatu
			defAtk = 75;
			defDef = 70;
			defSA = 95;
			defSD = 70;
		break;
		case "zangoose": //Zangoose
			defAtk = 115;
			defDef = 60;
			defSA = 60;
			defSD = 60;
		break;
		case "zanthera": //Zanthera
			defAtk = 125;
			defDef = 80;
			defSA = 70;
			defSD = 80;
		break;
		default:
			defAtk = 0;
			defDef = 0;
			defSA = 0;
			defSD = 0;
	} //end defender switch

	//choose the right stat (remembering to check for psyshock et al)...
	if (chosenmove=="radiantclaw") {
		defused = defSD;
	} else if (chosenmove=="psyshock" || chosenmove=="psystrike" || chosenmove=="secretsword") {
		defused = defDef;
	} else if (moveclass=="Physical") {
		defused = defDef;
	} else if (moveclass=="Special") {
		defused = defSD;
	} else {
		defused = defDef;
	}

	//...and the right attack stat (for foul play et al)...
	if (chosenmove=="foulplay") {
		atkused = defAtk; //duplicate this for special if need be
	} else if (moveclass=="Physical") {
		atkused = defAtk;
	} else if (moveclass=="Special") {
		atkused = defSA;
	} else {
		atkused = defAtk;
	}

	//...calculate them...
	finaldef = (Math.floor(Math.floor((2 * defused) * document.getElementById('opplevel').value / 100 + 5)));
	finalatk = (Math.floor(Math.floor((2 * atkused) * document.getElementById('opplevel').value / 100 + 5)));
	//old version using max IVs/EVs
	//finaldef = (Math.floor(Math.floor((2 * defused + 31 + 63) * document.getElementById('opplevel').value / 100 + 5)));
	//finalatk = (Math.floor(Math.floor((2 * atkused + 31 + 63) * document.getElementById('opplevel').value / 100 + 5)));

	//and set oppdef and oppatk to the calculated values
	document.getElementById('oppdef').value = finaldef;
	document.getElementById('oppatk').value = finalatk;
}
