/*
* tqmodtools_wild.js
* A series of JavaScript tools, functions, etc. for running the PokÃ©mon Turquoise moderator tools (calculators, RNGs, etc.) - wild pokÃ©mon generation
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on PokÃ©mon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 02242015
*** fixed a few level range errors
* some point prior to the start of 2015
*** major overhaul for Gen VI changes/other fixes
* 120113
*** Route 604 had nincada and ninjask switched
*** Route 606's encounter list was out of date and missing pokÃ©mon
* 020713
*** Added held item tooltips for pokÃ©mon that should hold them; there's a second copy that has no items
* 102812
*** Made some edits a few days ago to remove the 2 badge requirement (and therefore the related wild lists) from the contestmon
*** Made smeargle a wild again, added to 615
* 051412
*** Started compiling/writing the generator scripts
*/

/*
* TO-DO LIST
*** Make the HTML and comments prettier
*/


/*
* WILD POKÃ‰MON GENERATOR - WILD SLOT
* wildcalc();
*/


//generates a wild pokemon slot based on a random roll and the given location
function wildcalc() {
    //choose a number between 1-100 to determine the wild slot
    var WildResult = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
    //choose the correct wild list
    wildloc = document.getElementById('location').value;

    //switch-case statement for determining which wild list to use and picking a pokÃ©mon based on its rarity
    switch (wildloc) {
        case "route600_grass": //Route 600 / Dingbat Cave (Grass): auriole line 40, dustley line 30, kizziff line 20, tinimer 10
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (2-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 40 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (2-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 70 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Kizziff (2-9) / Murgaz (10-19) / <span class='item' title='Poison Barb 5%'>Chaszin</span> (20+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "Tinimer (3+)";
            }
        break;
        case "route600_caveup": //Route 600 / Dingbat Cave (Upper Caverns): bucarat line 30, paras line 30, dustley line 25, gravendou line 15
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Black Sludge 5%'>Bucarat</span> (3-21) / <span class='item' title='Black Sludge 5%'>Mortarat</span> (22+)";
            } else if (WildResult > 30 && WildResult < 61) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Tinymushroom 50% / Big Mushroom 5%'>Paras</span> (3-23) / <span class='item' title='Tinymushroom 50% / Big Mushroom 5%'>Parasect</span> (24+)";
            } else if (WildResult > 60 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (3-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 85) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Sticky Barb 5%'>Gravendou</span> (3-17) / <span class='item' title='Sticky Barb 5%'>Cragendou</span> (18-35) / <span class='item' title='Sticky Barb 5%'>Quarendou</span> (36+)";
            }
        break;
        case "route600_cavelow": //Route 600 / Dingbat Cave (Lower Caverns): bucarat line 30, aron line 20, beddybite line 20, dasfix line 10, misdreavus 10, sableye/petrocka 5, derfin 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Black Sludge 5%'>Bucarat</span> (18-21) / <span class='item' title='Black Sludge 5%'>Mortarat</span> (22+)";
            } else if (WildResult > 30 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Hard Stone 5%'>Aron</span> (18-31) / <span class='item' title='Hard Stone 5%'>Lairon</span> (32-41) / <span class='item' title='Hard Stone 5%'>Aggron</span> (42+)";
            } else if (WildResult > 50 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "Beddybite (18-31) / Bitemare (32+)";
            } else if (WildResult > 70 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Dasfix (18-35) / Malraja (36+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Misdreavus (20+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Dark Gem 5%'>Sableye</span> (20-24) / Petrocka (25+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Derfin (15-20)";
            }
        break;
        case "route601_surf": //Route 601 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            }
        break;
        case "route601_fish": //Route 601 (Fishing): latikrai/basculin-red 75, kelfee line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Red-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Kelfee</span> (10-30) / <span class='item' title='Absorb Bulb 5%'>Drakella</span> (31+)";
            }
        break;
        case "route602_grass": //Route 602 (Grass): gowatu line 25, auriole line 20, dustley line 20, espurr line 15, petilil 10, buneary 10
            if (WildResult > 0 && WildResult < 26) {
                document.getElementById('wildslot').innerHTML = "Gowatu (5-24) / Turatal (25+)";
            } else if (WildResult > 25 && WildResult < 46) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (5-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 45 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (5-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 65 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Espurr (5-24) / Meowstic (25+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Petilil (5+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chople Berry 5%'>Buneary</span> (5+)";
            }
        break;
        case "route602_fish": //Route 602 (Fishing): carvanha 40, carvanha/basculin-blue 40, carvanha/garapaima 15, feebas 5
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10+)";
            } else if (WildResult > 40 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10-19) / Basculin (Blue-striped) (20+)";
            } else if (WildResult > 80 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10-24) / Garapaima (25+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Feebas (15-20)";
            }
        break;
        case "route603": //Route 603 / Denath Plains: gowatu line 30, mefflora line 24, espurr line 15, natu line 10, petilil 10, buneary/kangaskhan 10, cherubi line 1
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Gowatu (8-24) / Turatal (25+)";
            } else if (WildResult > 30 && WildResult < 55) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Pecha Berry 5%'>Mefflora</span> (8-19) / <span class='item' title='Pecha Berry 5%'>Mephodil</span> (20-30) / <span class='item' title='Pecha Berry 5%'>Spilotalis</span> (31+)";
            } else if (WildResult > 54 && WildResult < 70) {
                document.getElementById('wildslot').innerHTML = "Espurr (8-24) / Meowstic (25+)";
            } else if (WildResult > 69 && WildResult < 80) {
                document.getElementById('wildslot').innerHTML = "Natu (8-24) / Xatu (25+)";
            } else if (WildResult > 79 && WildResult < 90) {
                document.getElementById('wildslot').innerHTML = "Petilil (8+)";
            } else if (WildResult > 89 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chople Berry 5%'>Buneary</span> (8-24) / Kangaskhan (25+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Miracle Seed 5%'>Cherubi</span> (8-24) / <span class='item' title='Miracle Seed 5%'>Cherrim</span> (25+)";
            }
        break;
        case "ambalchi_gardens": //Ambalchi Gardens (Gardens): gowatu line 30, mefflora line 25, exeggcute 20, petilil 15, cherubi line 10
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Gowatu (12-24) / Turatal (25+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Pecha Berry 5%'>Mefflora</span> (12-19) / <span class='item' title='Pecha Berry 5%'>Mephodil</span> (20-30) / <span class='item' title='Pecha Berry 5%'>Spilotalis</span> (31+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Exeggcute (12+)";
            } else if (WildResult > 75 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Petilil (12+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Miracle Seed 5%'>Cherubi</span> (12-24) / <span class='item' title='Miracle Seed 5%'>Cherrim</span> (25+)";
            }
        break;
        case "ambalchi_ruins": //Ambalchi Gardens (Ruins): parasect 40, turatal 35, mephodil line 20, unown dghvwy 5
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Tinymushroom 50% / Big Mushroom 5%'>Parasect</span> (28+)";
            } else if (WildResult > 40 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Turatal (28+)";
            } else if (WildResult > 75 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Pecha Berry 5%'>Mephodil</span> (25-30) / <span class='item' title='Pecha Berry 5%'>Spilotalis</span> (31+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown D, G, H, V, W, Y (25+)";
            }
        break;
        case "ambalchi_shrine": //Ambalchi Gardens (Shrine): unown dghvwy 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown D, G, H, V, W, Y (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        case "route604": //Route 604: gowatu line 30, auriole line 25, dustley line 20, natu line 10, nincada line 10, pachirisu 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Gowatu (5-24) / Turatal (25+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (5-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (5-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Natu (5-24) / Xatu (25+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Nincada (5-19) / Ninjask (20+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Pachirisu (7+)";
            }
        break;
        case "route605_surf": //Route 605 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            }
        break;
        case "route605_fish": //Route 605 (Fishing): latikrai/basculin-blue 75, clauncher line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Blue-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "Clauncher (10-36) / Clawitzer (37+)";
            }
        break;
        case "route606": //Route 606: auriole line 30, paras line 20, gowatu line/josuche 15, curlsa line 10, nincada line 10, pachirisu 10, minijina line 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (5-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 30 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Tinymushroom 50% / Big Mushroom 5%'>Paras</span> (5-23) / <span class='item' title='Tinymushroom 50% / Big Mushroom 5%'>Parasect</span> (24+)";
            } else if (WildResult > 50 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "Gowatu (5-24) / Turatal (25-29) / <span class='item' title='Pretty Wing 50% / Silverpowder 5%'>Josuche</span> (30+)";
            } else if (WildResult > 65 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Curlsa (5-21) / Coiffaire (21-37) / Ostento (38+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Nincada (5-19) / Ninjask (20+)";
            } else if (WildResult > 65 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Pachirisu (7+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Spell Tag 5%'>Minijina</span> (5-24) / <span class='item' title='Spell Tag 5%'>Bojina</span> (25-39) / <span class='item' title='Spell Tag 5%'>Noperajina</span> (40+)";
            }
        break;
        case "acoatyl_lower": //Acoatyl Tower (Lower Floors): auriole line 30, natu line 20, transmite 15, tianglis 15, farfetch'd line 10, chatot line 10
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (12-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 30 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Natu (12-24) / Xatu (25+)";
            } else if (WildResult > 50 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "Transmite (13+)";
            } else if (WildResult > 65 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Tianglis (13+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stick 5%'>Farfetch'd</span> (12-36) / <span class='item' title='Stick 5%'>Rapscalion</span> (37+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Metronome 5%'>Chatot</span> (12-36) / <span class='item' title='Metronome 5%'>Lyrissimo</span> (37+)";
            }
        break;
        case "acoatyl_upper": //Acoatyl Tower (Upper Floors): icauriole 25, murkrow 20, sigilyph 20, swablu line 20, vulkhet line 10, unown imrt 5
            if (WildResult > 0 && WildResult < 26) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Icauriole</span> (28+)";
            } else if (WildResult > 25 && WildResult < 46) {
                document.getElementById('wildslot').innerHTML = "Murkrow (25+)";
            } else if (WildResult > 45 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "Sigilyph (28+)";
            } else if (WildResult > 65 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Swablu (25-34) / Altaria (35+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Vulkhet (25-31) / Nekhetura (32+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown I, M, R, T  (25+)";
            }
        break;
        case "acoatyl_shrine": //Acoatyl Tower (Shrine): unown imrt 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown I, M, R, T (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        case "route607": //Route 607: mareep line 30, swablu line 25, humbuzz line 20, lamlie line 10, phanpy line 10, thunderma 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Mareep (8-14) / Flaaffy (15-29) / Ampharos (30+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "Swablu (8-34) / Altaria (25+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Cheri Berry 5%'>Humbuzz</span> (8-24) / <span class='item' title='Cheri Berry 5%'>Klaitning</span> (25+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Lamlie (8-19) / Lobovo (20-34) / Luvaris (35+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Passho Berry 5%'>Phanpy</span> (8-24) / <span class='item' title='Passho Berry 5%'>Donphan</span> (25+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shuca Berry 5%'>Thunderma</span> (9+)";
            }
        break;
        case "fulgurok_mtnside": //Fulgurok Mountains (Mountainside): mareep line 30, nuwill 25, helioptile 15, humbuzz line 15, thunderma 14, finnial 1
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Mareep (12-14) / Flaaffy (15-29) / Ampharos (30+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "Nuwill (12+)";
            } else if (WildResult > 55 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "Helioptile (12+)";
            } else if (WildResult > 70 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Cheri Berry 5%'>Humbuzz</span> (12-24) / <span class='item' title='Cheri Berry 5%'>Klaitning</span> (25+)";
            } else if (WildResult > 85 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shuca Berry 5%'>Thunderma</span> (14+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Finnial (12-20)";
            }
        break;
        case "fulgurok_caves": //Fulgurok Mountains (Caves): transmite 40, pachirisu 35, donarith 20, unown cjpu 5
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "Transmite (28+)";
            } else if (WildResult > 40 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Pachirisu (25+)";
            } else if (WildResult > 75 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Donarith (28+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown C, J, P, U (25+)";
            }
        break;
        case "fulgurok_shrine": //Fulgurok Mountains (Shrine): unown cjpu 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown C, J, P, U (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        case "fulgurok_peaks": //Fulgurok Mountains (Low Peaks): invicunya line 30, meditite line 30, snorunt line 25, snorunt/cryogonal 5, invicunya/rakateis 5, cubly 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Aspear Berry 100%'>Invicunya</span> (13-37) / <span class='item' title='Aspear Berry 100%'>Heladalca</span> (38+)";
            } else if (WildResult > 30 && WildResult < 61) {
                document.getElementById('wildslot').innerHTML = "Meditite (13-36) / Medicham (37+)";
            } else if (WildResult > 60 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Babiri Berry 5%'>Snorunt</span> (13-41) / <span class='item' title='Babiri Berry 5%'>Glalie</span> (42+)";
            } else if (WildResult > 85 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Aspear Berry 100%'>Invicunya</span> (13-19) / <span class='item' title='Sharp Beak 5% / Never Melt Ice 1%'>Rakateis</span> (20+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Babiri Berry 5%'>Snorunt</span> (13-24) / <span class='item' title='Never Melt Ice 5%'>Cryogonal</span> (25+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Cubly (15-20)";
            }
        break;
        case "route608_grass": //Route 608 (Grass): mareep line 30, auriole line 25, nuwill 20, lamlie line 10, phanpy line 10, thunderma/rasqueon 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Mareep (8-14) / Flaaffy (15-29) / Ampharos (30+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (8-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Nuwill (8+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Lamlie (8-19) / Lobovo (20-34) / Luvaris (35+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Passho Berry 5%'>Phanpy</span> (8-24) / <span class='item' title='Passho Berry 5%'>Donphan</span> (25+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shuca Berry 5%'>Thunderma</span> (10-29) / Rasqueon (30+)";
            }
        break;
        case "route608_fish": //Route 608 (Fishing): carvanha 40, carvanha/basculin-red 30, remoraid 20, carvanha/garapaima 10
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10+)";
            } else if (WildResult > 40 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10-19) / Basculin (Red-striped) (20+)";
            } else if (WildResult > 70 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Remoraid (10+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "Carvanha (10-24) / Garapaima (25+)";
            }
        break;
        case "fulcaves": //Fulgurok Caves / Fulgurok Island (Caves): bucarat line 30, aron line 25, drilbur line 25, dasfix line 10, aron/durant 5, mawile/petrocka 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Black Sludge 5%'>Bucarat</span> (12-21) / <span class='item' title='Black Sludge 5%'>Mortarat</span> (22+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Hard Stone 5%'>Aron</span> (12-31) / <span class='item' title='Hard Stone 5%'>Lairon</span> (32-41) / <span class='item' title='Hard Stone 5%'>Aggron</span> (42+)";
            } else if (WildResult > 55 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Drilbur (12-30) / Excadrill (31+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Dasfix (12-35) / Malraja (36+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Hard Stone 5%'>Aron</span> (12-19) / Durant (20+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Occa Berry 5%'>Mawile</span> (14-24) / Petrocka (25+)";
            }
        break;
        case "fulisland": //Fulgurok Caves / Fulgurok Island (Island): bucarat line 40, kiblis line 35, gravendou line 20, gravendou/cragendou/shuckle 4, kiblis/caslot 1
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Black Sludge 5%'>Bucarat</span> (16-21) / <span class='item' title='Black Sludge 5%'>Mortarat</span> (22+)";
            } else if (WildResult > 40 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Kiblis (16-38) / Ibazel (39+)";
            } else if (WildResult > 75 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Sticky Barb 5%'>Gravendou</span> (16-17) / <span class='item' title='Sticky Barb 5%'>Cragendou</span> (18-35) / <span class='item' title='Sticky Barb 5%'>Quarendou</span> (36+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Sticky Barb 5%'>Gravendou</span> (16-17) / <span class='item' title='Sticky Barb 5%'>Cragendou</span> (18-19) / <span class='item' title='Berry Juice 100%'>Shuckle</span> (20+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Kiblis (16-19) / <span class='item' title='Persim Berry 5%'>Caslot</span> (20+)";
            }
        break;
        case "route609": //Route 609: mareep line 25, humbuzz line 25, meditite line 20, lamlie line 10, phanpy line 10, duskull line 10
            if (WildResult > 0 && WildResult < 26) {
                document.getElementById('wildslot').innerHTML = "Mareep (5-14) / Flaaffy (15-29) / Ampharos (30+)";
            } else if (WildResult > 25 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Cheri Berry 5%'>Humbuzz</span> (5-24) / <span class='item' title='Cheri Berry 5%'>Klaitning</span> (25+)";
            } else if (WildResult > 50 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "Meditite (5-36) / Medicham (37+)";
            } else if (WildResult > 70 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Lamlie (5-19) / Lobovo (20-34) / Luvaris (35+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Passho Berry 5%'>Phanpy</span> (5-24) / <span class='item' title='Passho Berry 5%'>Donphan</span> (25+)";
            } else if (WildResult > 90) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Kasib Berry 5%'>Duskull</span> (5-36) / <span class='item' title='Kasib Berry 5%'>Dusclops</span> (37+)";
            }
        break;
        case "route610_surf": //Route 610 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            }
        break;
        case "route610_fish": //Route 610 (Fishing): latikrai/basculin-red 75, skrelp line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Red-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "Skrelp (10-47) / Dragalge (48+)";
            }
        break;
        case "route611": //Route 611: dustley line 35, kizziff line 25, farfetch'd line 15, duskull line 10, minccino/zangoose 10, farfetch'd/hawlucha 4, turistar line 1
            if (WildResult > 0 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (5-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 35 && WildResult < 61) {
                document.getElementById('wildslot').innerHTML = "Kizziff (5-9) / Murgaz (10-19) / <span class='item' title='Poison Barb 5%'>Chaszin</span> (20+)";
            } else if (WildResult > 60 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stick 5%'>Farfetch'd</span> (6-36) / <span class='item' title='Stick 5%'>Rapscalion</span> (37+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Kasib Berry 5%'>Duskull</span> (5-36) / <span class='item' title='Kasib Berry 5%'>Dusclops</span> (37+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chesto Berry 50%'>Minccino</span> (5-19) / <span class='item' title='Quick Claw 5%'>Zangoose</span> (20+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stick 5%'>Farfetch'd</span> (6-24) / <span class='item' title='Kings Rock 5%'>Hawlucha</span> (25+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Turistar (5-31) / Turumaken (32+)";
            }
        break;
        case "route612": //Route 612 / Xybryle Bridge: turistar line 30, minccino/zangoose 20, minccino/seviper 20, farfetch'd/hawlucha 10, chatot/onzarudo 10, quimpy 5, minccino/rasqueon 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Turistar (8-31) / Turumaken (32+)";
            } else if (WildResult > 30 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chesto Berry 50%'>Minccino</span> (8-19) / <span class='item' title='Quick Claw 5%'>Zangoose</span> (20+)";
            } else if (WildResult > 50 && WildResult < 71) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chesto Berry 50%'>Minccino</span> (8-19) / Seviper (20+)";
            } else if (WildResult > 70 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stick 5%'>Farfetch'd</span> (9-24) / <span class='item' title='Kings Rock 5%'>Hawlucha</span> (25+)";
            } else if (WildResult > 80 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Metronome 5%'>Chatot</span> (9-24) / <span class='item' title='Bright Powder 5%'>Onzarudo</span> (25+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chesto Berry 50%'>Minccino</span> (8-29) / Rasqueon (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Quimpy (15-20)";
            }
        break;
        case "route613": //Route 613: auriole line 35, kizziff line 25, chatot line 15, scraggy line 10, minccino/seviper 10, chatot/onzarudo 4, turistar line 1
            if (WildResult > 0 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (5-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 35 && WildResult < 61) {
                document.getElementById('wildslot').innerHTML = "Kizziff (5-9) / Murgaz (10-19) / <span class='item' title='Poison Barb 5%'>Chaszin</span> (20+)";
            } else if (WildResult > 60 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Metronome 5%'>Chatot</span> (6-36) / <span class='item' title='Metronome 5%'>Lyrissimo</span> (37+)";
            } else if (WildResult > 76 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shed Shell 5%'>Scraggy</span> (5-38) / <span class='item' title='Shed Shell 5%'>Scrafty</span> (39+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Chesto Berry 50%'>Minccino</span> (5-19) / Seviper (20+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Metronome 5%'>Chatot</span> (6-24) / <span class='item' title='Bright Powder 5%'>Onzarudo</span> (25+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Turistar (5-31) / Turumaken (32+)";
            }
        break;
        case "bay_surf": //Xybryle Bay (Surfing): latikrai line 45, turistar line 35, latikrai/sharpedo 15, aeolagio 4, vaering line 1
            if (WildResult > 0 && WildResult < 46) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 45 && WildResult < 81) {
                document.getElementById('wildslot').innerHTML = "Turistar (18-31) / Turumaken (32+)";
            } else if (WildResult > 80 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Dragon Fang 5%'>Vaering</span> (15-27) / <span class='item' title='Dragon Fang 5%'>Raidnarr</span> (28-41) / <span class='item' title='Dragon Fang 5%'>Drasarkr</span> (42+)";
            }
        break;
        case "bay_fish": //Xybryle Bay (Fishing): kelfee line 34, clauncher line 33, skrelp 33
            if (WildResult > 0 && WildResult < 35) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Kelfee</span> (10-30) / <span class='item' title='Absorb Bulb 5%'>Drakella</span> (31+)";
            } else if (WildResult > 34 && WildResult < 68) {
                document.getElementById('wildslot').innerHTML = "Clauncher (10-36) / Clawitzer (37+)";
            } else if (WildResult > 67) {
                document.getElementById('wildslot').innerHTML = "Skrelp (10-47) / Dragalge (48+)";
            }
        break;
        case "bay_safari": //Xybryle Bay (Submarine Safari): sharpedo 30, kelfee line 15, clauncher line 15, skrelp line 15, freye line 10, octillery 10, raidnarr line 4, wyrmal line 1
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "Sharpedo (30+)";
            } else if (WildResult > 30 && WildResult < 46) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Kelfee</span> (25-30) / <span class='item' title='Absorb Bulb 5%'>Drakella</span> (31+)";
            } else if (WildResult > 45 && WildResult < 61) {
                document.getElementById('wildslot').innerHTML = "Clauncher (25-36) / Clawitzer (37+)";
            } else if (WildResult > 60 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Skrelp (25-47) / Dragalge (48+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Freye (25-26) / Floundirt (27+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Octillery (25+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Dragon Fang 5%'>Raidnarr</span> (28-41) / <span class='item' title='Dragon Fang 5%'>Drasarkr</span> (42+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Wyrmal (25-34) / Ventorm (35+)";
            }
        break;
        case "tonkura_seabed": //Ton-Kura (Seabed): kelfee line 50, sharpedo 25, freye line 25
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Kelfee</span> (25-30) / <span class='item' title='Absorb Bulb 5%'>Drakella</span> (31+)";
            } else if (WildResult > 50 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Sharpedo (30+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "Freye (25-26) / Floundirt (27+)";
            }
        break;
        case "tonkura_caves": //Ton-Kura (Caves): drakella 40, sharpedo 35, octillery 20, unown befsx 5
            if (WildResult > 0 && WildResult < 41) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Drakella</span> (30+)";
            } else if (WildResult > 40 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Sharpedo (30+)";
            } else if (WildResult > 75 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Octillery (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown B, E, F, S, X (25+)";
            }
        break;
        case "tonkura_shrine": //Ton-Kura (Shrine): unown befsx 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown B, E, F, S, X (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        case "route614_surf": //Route 614 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            }
        break;
        case "route614_fish": //Route 614 (Fishing): latikrai/basculin-blue 75, kelfee line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Blue-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Absorb Bulb 5%'>Kelfee</span> (10-30) / <span class='item' title='Absorb Bulb 5%'>Drakella</span> (31+)";
            }
        break;
        case "route615": //Route 615: auriole line 35, dustley line 30, scraggy line 20, numel line 10, thunderma/razelodon 4, smeargle 1
            if (WildResult > 0 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Wacan Berry 5%'>Auriole</span> (5-23) / <span class='item' title='Wacan Berry 5%'>Icauriole</span> (24+)";
            } else if (WildResult > 35 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (5-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 65 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shed Shell 5%'>Scraggy</span> (5-38) / <span class='item' title='Shed Shell 5%'>Scrafty</span> (38+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (5-33) / <span class='item' title='Rawst Berry 100%'>Camerupt</span> (34+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Shuca Berry 5%'>Thunderma</span> (7-29) / Razelodon (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Smeargle (7+)";
            }
        break;
        case "route616": //Route 616: dustley line 25, sandile line 25, numel line 15, pindillo line 10, murkrow 10, misdreavus 10, lamanda 5
            if (WildResult > 0 && WildResult < 26) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Oran Berry 5%'>Dustley</span> (8-19) / <span class='item' title='Oran Berry 50% / Sitrus Berry 5%'>Aculago</span> (20+)";
            } else if (WildResult > 25 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Sandile (8-28) / Krokorok (29-39) / Krookodile (40+)";
            } else if (WildResult > 50 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (8-33) / <span class='item' title='Rawst Berry 100%'>Camerupt</span> (34+)";
            } else if (WildResult > 65 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Kebia Berry 5%'>Pindillo</span> (8-28) / <span class='item' title='Kebia Berry 5%'>Charandillo</span> (29+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Murkrow (10+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Misdreavus (10+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Lamanda (15-20)";
            }
        break;
        case "route617": //Route 617: numel line 30, sandile line 25, pindillo line 20, galorindle line 15, numel/heatmor 5, slugma/durant 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (12-33) / <span class='item' title='Rawst Berry 100%'>Camerupt</span> (34+)";
            } else if (WildResult > 31 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "Sandile (12-28) / Krokorok (29-39) / Krookodile (40+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Kebia Berry 5%'>Pindillo</span> (8-28) / <span class='item' title='Kebia Berry 5%'>Charandillo</span> (29+)";
            } else if (WildResult > 75 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Light Clay 5%'>Galorindle</span> (12-36) / <span class='item' title='Light Clay 5%'>Galaraud</span> (37+)";
            } else if (WildResult > 91 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (12-19) / <span class='item' title='Flame Orb 1%'>Heatmor</span> (20+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Slugma (12-19) / Durant (20+)";
            }
        break;
        case "jarovesu_flat": //Jarovesu Badlands (Flatlands): numel line 30, vulkhet 25, slugma 20, virlich 15, fallorite 5, virlich/sparcoil 5
            if (WildResult > 0 && WildResult < 31) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (12-33) / <span class='item' title='Rawst Berry 100%'>Camerupt</span> (34+)";
            } else if (WildResult > 30 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "Vulkhet (12+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Slugma (12-37) / Magcargo (38+)";
            } else if (WildResult > 75 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Virlich (12+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stardust 5%'>Fallorite</span> (12+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Virlich (12-19) / Sparcoil (20+)";
            }
        break;
        case "jarovesu_high": //Jarovesu Badlands (Heights): slugma line 35, fallorite 30, heatmor 20, torranel 10, unown klnoq 5
            if (WildResult > 0 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "Slugma (25-37) / Magcargo (38+)";
            } else if (WildResult > 35 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Stardust 5%'>Fallorite</span> (25+)";
            } else if (WildResult > 65 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Flame Orb 1%'>Heatmor</span> (28+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Torranel (28+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown K, L, N, O, Q (25+)";
            }
        break;
        case "jarovesu_shrine": //Jarovesu Badlands (Shrine): unown klnoq 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown K, L, N, O, Q (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        case "route618": //Route 618: sandile line 35, numel line 20, galorindle 20, drilbur line 10, slugma line 10, tianglis/mandicore 5
            if (WildResult > 0 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "Sandile (5-28) / Krokorok (29-39) / Krookodile (40+)";
            } else if (WildResult > 35 && WildResult < 56) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Rawst Berry 100%'>Numel</span> (5-33) / <span class='item' title='Rawst Berry 100%'>Camerupt</span> (34+)";
            } else if (WildResult > 55 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Light Clay 5%'>Galorindle</span> (5-36) / <span class='item' title='Light Clay 5%'>Galaraud</span> (37+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Drilbur (5-30) / Excadrill (31+)";
            } else if (WildResult > 85 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Slugma (5-37) / Magcargo (38+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Tianglis (7-24) / Mandicore (25+)";
            }
        break;
        case "route619_surf": //Route 619 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 5
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            }
        break;
        case "route619_fish": //Route 619 (Fishing): latikrai/basculin-red 75, clauncher line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Red-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "Clauncher (10-36) / Clawitzer (37+)";
            }
        break;
        case "route620_surf": //Route 620 (Surfing): latikrai line 50, latikrai/sharpedo 45, aeolagio 4, lapras 1
            if (WildResult > 0 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-33) / Kraitra (34+)";
            } else if (WildResult > 50 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Latikrai (18-29) / Sharpedo (30+)";
            } else if (WildResult > 95 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Poison Barb 5%'>Aeolagio</span> (20+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Lapras (20+)";
            }
        break;
        case "route620_fish": //Route 620 (Fishing): latikrai/basculin-blue 75, skrelp line 25
            if (WildResult > 0 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Latikrai (10-19) / Basculin (Blue-striped) (20+)";
            } else if (WildResult > 75) {
                document.getElementById('wildslot').innerHTML = "Skrelp (10-47) / Dragalge (48+)";
            }
        break;
        case "vr_streets": //Alniraz Ruins / Victory Road (Streets): donphan 20, xatu 15, hawlucha 15, onzarudo 15, ibazel 10, petrocka 10, sigilyph 5, quarendou 5, mandicore 5
            if (WildResult > 0 && WildResult < 21) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Passho Berry 5%'>Donphan</span> (40+)";
            } else if (WildResult > 20 && WildResult < 36) {
                document.getElementById('wildslot').innerHTML = "Xatu (38+)";
            } else if (WildResult > 35 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Kings Rock 5%'>Hawlucha</span> (38+)";
            } else if (WildResult > 50 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Bright Powder 5%'>Onzarudo</span> (38+)";
            } else if (WildResult > 65 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Ibazel (40+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Petrocka (38+)";
            } else if (WildResult > 85 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Sigilyph (38+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Sticky Barb 5%'>Quarendou</span> (40+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Mandicore (40+)";
            }
        break;
        case "vr_buildings": //Alniraz Ruins / Victory Road (Buildings/Alleys): transmite 25, tianglis 25, galaraud 15, malraja 10, bitemare 10, ostento 5, sigilyph 5, unown az 5
            if (WildResult > 0 && WildResult < 26) {
                document.getElementById('wildslot').innerHTML = "Transmite (38+)";
            } else if (WildResult > 25 && WildResult < 51) {
                document.getElementById('wildslot').innerHTML = "Tianglis (38+)";
            } else if (WildResult > 50 && WildResult < 66) {
                document.getElementById('wildslot').innerHTML = "<span class='item' title='Light Clay 5%'>Galaraud</span> (40+)";
            } else if (WildResult > 65 && WildResult < 76) {
                document.getElementById('wildslot').innerHTML = "Malraja (40+)";
            } else if (WildResult > 75 && WildResult < 86) {
                document.getElementById('wildslot').innerHTML = "Bitemare (40+)";
            } else if (WildResult > 85 && WildResult < 91) {
                document.getElementById('wildslot').innerHTML = "Ostento (40+)";
            } else if (WildResult > 90 && WildResult < 96) {
                document.getElementById('wildslot').innerHTML = "Sigilyph (38+)";
            } else if (WildResult > 95) {
                document.getElementById('wildslot').innerHTML = "Unown A, Z (30+)";
            }
        break;
        case "vr_shrine": //Alniraz Ruins / Victory Road (Shrine): unown az 99, unown !? 1
            if (WildResult > 0 && WildResult < 100) {
                document.getElementById('wildslot').innerHTML = "Unown A, Z (30+)";
            } else if (WildResult > 99) {
                document.getElementById('wildslot').innerHTML = "Unown !, ? (30+)";
            }
        break;
        //just in case someone manages to not select anything even though that's technically impossible
        default:
            alert("Please choose a location.");
    }
}


/*
* WILD POKÃ‰MON GENERATOR - LEVEL RANGE
* levelcalc();
*/


//generates the level of the wild pokemon in a range based on the input level
function levelcalc() {
    var levelbase = document.getElementById('levelbase').value - 0; //subtract 0 because otherwise JS reads as a string
    //var LevelResult = Math.floor(Math.random() * ((levelbase+2) - (levelbase-4) + 1)) + ((levelbase-4) - 0); //old version that allowed wilds slightly stronger than the player's pokemon
    var LevelResult = Math.floor(Math.random() * ((levelbase-1) - (levelbase-7) + 1)) + ((levelbase-7) - 0);
    //wild levels can't go below 2
    if (LevelResult < 2) {
        LevelResult = 2;
    }

    document.getElementById('levelslot').innerHTML = LevelResult;
}

/*
* WILD POKÃ‰MON GENERATOR - SHININESS
* shinyroll();
*/


//determines whether the wild pokemon is shiny or not
function shinyroll() {
    //choose a number between 1-500 to determine shininess
    var ShinyResult = Math.floor(Math.random() * (500 - 1 + 1)) + (1 - 0);
    //console.log(ShinyResult);
    //if result is 500, add a note saying the wild is shiny
    if (ShinyResult > 0 && ShinyResult < 500) {
        document.getElementById('isshiny').innerHTML = " ";
    } else {
        document.getElementById('isshiny').innerHTML = "<strong>**SHINY**</strong>";
    }
}


/*
* WILD POKÃ‰MON GENERATOR - GET WILD SLOT, LEVEL AND SHININESS
levelwildcalc();
*/


//generate a wild slot and level
function levelwildcalc() {
    wildcalc();
    levelcalc();
    shinyroll();
}


/*
* WILD POKÃ‰MON GENERATOR - GENDER GENERATOR
* genderroll();
*/


//chooses a wild pokÃ©mon gender given the correct ratio
function genderroll() {
    //choose a number between 1-100 to determine the gender
    var GenderResult = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);
    //choose the correct gender ratio
    gratio = document.getElementById('gender').value;

    switch (gratio) {
        case "male50":
            if (GenderResult > 0 && GenderResult < 51) {
                document.getElementById('chosengender').innerHTML = "Male";
            } else {
                document.getElementById('chosengender').innerHTML = "Female";
            }
        break;
        case "male88":
            if (GenderResult > 0 && GenderResult < 89) {
                document.getElementById('chosengender').innerHTML = "Male";
            } else {
                document.getElementById('chosengender').innerHTML = "Female";
            }
        break;
        case "male75":
            if (GenderResult > 0 && GenderResult < 76) {
                document.getElementById('chosengender').innerHTML = "Male";
            } else {
                document.getElementById('chosengender').innerHTML = "Female";
            }
        break;
        case "male25":
            if (GenderResult > 0 && GenderResult < 26) {
                document.getElementById('chosengender').innerHTML = "Male";
            } else {
                document.getElementById('chosengender').innerHTML = "Female";
            }
        break;
        default:
            alert("Please choose a gender ratio.");
    }
}


/*
* WILD POKÃ‰MON GENERATOR - ABILITY CHOOSER
* abilityflip();
*/


//coin flip for an ability
function abilityflip() {
    var abilitycoin = Math.floor(Math.random() * (100 - 1 + 1)) + (1 - 0);

    if (abilitycoin < 51) {
        document.getElementById('chosenability').innerHTML = "Ability 1";
    } else if (abilitycoin > 50) {
        document.getElementById('chosenability').innerHTML = "Ability 2";
    }
}
