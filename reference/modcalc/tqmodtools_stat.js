/*
* tqmodtools_stat.js
* A series of JavaScript tools, functions, etc. for running the Pokémon Turquoise moderator tools (calculators, RNGs, etc.) - stat calculation
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on Pokémon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 100613
*** Added stats for Daphne's drapion and Voltaire's eelektross; commented out stats for rotom/rotom-a and ferrothorn
*** Changed damage formula to use min IVs/EVs; note that older code for additional stat-checking functions was left alone because it's not being used, can alter these as well if necessary
* 051412
*** Splitting into separate files for now (one for each thing, e.g. tqmodtools_wild, tqmodtools_catch, etc.); this is now specifically for the stat calculators
* 041412
*** Started compiling/writing scripts for the tools
*** Started adding the RNG and generic stat calcs from pokecalc.html/AMF's calculator
*** Added modified Cherubi stat calc (hiding nature, EV and IV fields; ugly and still leaves the HTML/JS full of cruft, but it works for now)
*/

/*
* TO-DO LIST
*** Later: try and add a residual damage/restoration calculator for HP (input max HP value and select fraction from dropdown; mod can then add to/subtract from HP depending on move) (note: toxic goes from 1/16 to 15/16)
*** Try to clean out all of the EV, IV and nature-related cruft from the main stat calc, and just have it do the calculations based on 252/31/1x in the formula itself
*** Figure out best way to implement moves and pokémon into damage calc (probably break moves out into a separate step to check for accuracy and crit chance; then, if it hits, proceed to check the damage, and tick the crit box if needed)
*/

/*
* BASIC, GENERAL FUNCTIONS, TOOLS, ETC.
*/

//main id helper function, originally for AMF's calc
function _amf(id) {
	return document.getElementById(id);
}


/*
* STAT CALCULATORS - MAIN STAT CALCULATOR
* calcStats(); and related functions, arrays, etc.
*/

//main stat calculator (select a pokémon and a level)
//most of the original functions + pokémon format from Libelldra/Cherubi (cherubi.com; site no longer active)
var BaseStats = new Array();
BaseStats[BaseStats.length] = new Array('-','-','-','-','-','-','-','-','-');
BaseStats[BaseStats.length] = new Array('Acafia','62','68','56','41','48','43','000','Acafia');
BaseStats[BaseStats.length] = new Array('Aculago','90','70','95','50','55','60','000','Aculago');
BaseStats[BaseStats.length] = new Array('Aeolagio','120','40','65','110','110','70','000','Aeolagio');
BaseStats[BaseStats.length] = new Array('Aerodactyl','80','105','65','60','75','130','142','Aerodactyl');
BaseStats[BaseStats.length] = new Array('Aggron','70','110','180','60','60','50','306','Aggron');
BaseStats[BaseStats.length] = new Array('Altaria','75','70','90','70','105','80','334','Altaria');
BaseStats[BaseStats.length] = new Array('Altavault','65','110','70','100','50','80','000','Altavault');
BaseStats[BaseStats.length] = new Array('Ampharos','90','75','85','115','90','55','181','Ampharos');
BaseStats[BaseStats.length] = new Array('Arctangel','75','60','85','109','91','120','000','Arctangel');
BaseStats[BaseStats.length] = new Array('Aron','50','70','100','40','40','30','304','Aron');
BaseStats[BaseStats.length] = new Array('Auriole','40','60','45','20','45','60','000','Auriole');
BaseStats[BaseStats.length] = new Array('Basculin','70','92','65','98','80','55','550','Basculin');
BaseStats[BaseStats.length] = new Array('Bearbegazi','80','50','65','80','90','65','000','Bearbegazi');
BaseStats[BaseStats.length] = new Array('Beddybite','70','40','45','60','65','30','000','Beddybite');
BaseStats[BaseStats.length] = new Array('Belmarine','110','70','50','100','80','65','000','Belmarine');
BaseStats[BaseStats.length] = new Array('Bitemare','110','70','80','95','100','60','000','Bitemare');
BaseStats[BaseStats.length] = new Array('Bojina','80','90','60','40','65','65','000','Bojina');
BaseStats[BaseStats.length] = new Array('Bossorna','105','115','90','70','80','75','000','Bossorna');
BaseStats[BaseStats.length] = new Array('Bucarat','35','60','30','60','30','60','000','Bucarat');
BaseStats[BaseStats.length] = new Array('Buneary','55','66','44','44','56','85','427','Buneary');
BaseStats[BaseStats.length] = new Array('Burungin','84','85','74','121','70','101','000','Burungin');
BaseStats[BaseStats.length] = new Array('Camerupt','70','100','70','105','75','40','323','Camerupt');
BaseStats[BaseStats.length] = new Array('Carvanha','45','90','20','65','20','65','318','Carvanha');
BaseStats[BaseStats.length] = new Array('Caslot','70','77','80','77','80','113','000','Caslot');
BaseStats[BaseStats.length] = new Array('Catalcia','80','85','70','54','60','56','000','Catalcia');
BaseStats[BaseStats.length] = new Array('Cerisol','75','80','80','117','80','93','000','Cerisol');
BaseStats[BaseStats.length] = new Array('Chantirrus','80','60','125','70','130','70','000','Chantirrus');
BaseStats[BaseStats.length] = new Array('Charandillo','62','103','107','80','68','70','000','Charandillo');
BaseStats[BaseStats.length] = new Array('Chaszin','60','85','60','55','55','100','000','Chaszin');
BaseStats[BaseStats.length] = new Array('Chatot','76','65','45','92','42','91','441','Chatot');
BaseStats[BaseStats.length] = new Array('Cherrim','70','60','70','87','78','85','421','Cherrim');
BaseStats[BaseStats.length] = new Array('Cherubi','45','35','45','62','53','35','420','Cherubi');
BaseStats[BaseStats.length] = new Array('Cinccino','75','95','60','65','60','115','573','Cinccino');
BaseStats[BaseStats.length] = new Array('Clauncher','50','53','62','58','63','44','692','Clauncher');
BaseStats[BaseStats.length] = new Array('Clawitzer','71','73','78','120','89','59','693','Clawitzer');
BaseStats[BaseStats.length] = new Array('Coiffaire','75','75','70','60','60','50','000','Coiffaire');
BaseStats[BaseStats.length] = new Array('Cragendou','68','75','100','35','62','35','000','Cragendou');
BaseStats[BaseStats.length] = new Array('Crocoal','52','55','43','70','40','58','000','Crocoal');
BaseStats[BaseStats.length] = new Array('Cryogonal','70','50','30','95','135','105','615','Cryogonal');
BaseStats[BaseStats.length] = new Array('Cubly','10','10','20','45','35','80','000','Cubly');
BaseStats[BaseStats.length] = new Array('Curlsa','60','60','50','40','40','35','000','Curlsa');
BaseStats[BaseStats.length] = new Array('Dartizel-R','70','80','60','80','60','130','000','Dartizel-R');
BaseStats[BaseStats.length] = new Array('Dasfix','45','55','40','60','70','30','000','Dasfix');
BaseStats[BaseStats.length] = new Array('Delibird','45','55','45','65','45','75','225','Delibird');
BaseStats[BaseStats.length] = new Array('Derfin','45','10','10','80','20','35','000','Derfin');
BaseStats[BaseStats.length] = new Array('Distrike','85','100','80','135','80','120','000','Distrike');
BaseStats[BaseStats.length] = new Array('Donarith','75','108','70','85','60','102','000','Donarith');
BaseStats[BaseStats.length] = new Array('Donphan','90','120','120','60','60','50','232','Donphan');
BaseStats[BaseStats.length] = new Array('Dragalge','65','75','90','97','123','44','691','Dragalge');
BaseStats[BaseStats.length] = new Array('Drakella','81','64','60','112','113','80','000','Drakella');
BaseStats[BaseStats.length] = new Array('Drapion','70','90','110','60','75','95','452','Drapion');
BaseStats[BaseStats.length] = new Array('Drasarkr','115','110','75','50','70','100','000','Drasarkr');
BaseStats[BaseStats.length] = new Array('Drilbur','60','85','40','30','45','68','529','Drilbur');
BaseStats[BaseStats.length] = new Array('Durant','58','109','112','48','48','109','632','Durant');
BaseStats[BaseStats.length] = new Array('Dusclops','40','70','130','60','130','25','356','Dusclops');
BaseStats[BaseStats.length] = new Array('Dusknoir','45','100','135','65','135','45','477','Dusknoir');
BaseStats[BaseStats.length] = new Array('Duskull','20','40','90','30','90','25','355','Duskull');
BaseStats[BaseStats.length] = new Array('Dustley','50','45','55','25','35','40','000','Dustley');
BaseStats[BaseStats.length] = new Array('Dybelial','90','95','80','130','110','95','000','Dybelial');
BaseStats[BaseStats.length] = new Array('Dyferal','65','55','50','95','80','75','000','Dyferal');
BaseStats[BaseStats.length] = new Array('Dyrascal','45','40','40','65','60','50','000','Dyrascal');
BaseStats[BaseStats.length] = new Array('Eelektross','85','115','80','105','80','50','604','Eelektross');
BaseStats[BaseStats.length] = new Array('Emperobe','70','50','65','100','110','80','000','Emperobe');
BaseStats[BaseStats.length] = new Array('Encanoto','105','80','70','125','85','75','000','Encanoto');
BaseStats[BaseStats.length] = new Array('Espurr','62','48','54','63','60','68','677','Espurr');
BaseStats[BaseStats.length] = new Array('Excadrill','110','135','60','50','65','88','530','Excadrill');
BaseStats[BaseStats.length] = new Array('Exeggcute','60','40','80','60','45','40','102','Exeggcute');
BaseStats[BaseStats.length] = new Array('Exeggutor','95','95','85','125','65','55','103','Exeggutor');
BaseStats[BaseStats.length] = new Array('Fallorite','45','70','85','55','50','30','000','Fallorite');
BaseStats[BaseStats.length] = new Array('Farfetch\'d','52','65','55','58','62','60','083','Farfetch\'d');
BaseStats[BaseStats.length] = new Array('Feebas','20','15','20','10','55','80','349','Feebas');
//BaseStats[BaseStats.length] = new Array('Ferrothorn','74','94','131','54','116','20','598','Ferrothorn');
BaseStats[BaseStats.length] = new Array('Feucrota','66','69','54','90','50','76','000','Feucrota');
BaseStats[BaseStats.length] = new Array('Finnial','50','50','35','75','35','55','000','Finnial');
BaseStats[BaseStats.length] = new Array('Flaaffy','70','55','55','80','60','45','180','Flaaffy');
BaseStats[BaseStats.length] = new Array('Floundirt','105','50','80','65','60','35','000','Floundirt');
BaseStats[BaseStats.length] = new Array('Freye','85','30','60','45','40','15','000','Freye');
BaseStats[BaseStats.length] = new Array('Froslass','70','80','70','80','70','110','478','Froslass');
BaseStats[BaseStats.length] = new Array('Galaraud','60','85','70','95','70','105','000','Galaraud');
BaseStats[BaseStats.length] = new Array('Galorindle','50','50','50','60','50','50','000','Galorindle');
BaseStats[BaseStats.length] = new Array('Galoryph','105','70','70','95','85','60','000','Galoryph');
BaseStats[BaseStats.length] = new Array('Garapaima','85','120','90','60','55','80','000','Garapaima');
BaseStats[BaseStats.length] = new Array('Gasvirlich','55','70','55','128','96','96','000','Gasvirlich');
BaseStats[BaseStats.length] = new Array('Glalie','80','80','80','80','80','80','362','Glalie');
BaseStats[BaseStats.length] = new Array('Gowatu','40','55','35','60','35','50','000','Gowatu');
BaseStats[BaseStats.length] = new Array('Gravendou','48','60','85','15','42','15','000','Gravendou');
BaseStats[BaseStats.length] = new Array('Halberax-R','70','140','70','40','90','70','000','Halberax-R');
BaseStats[BaseStats.length] = new Array('Halirth','125','70','100','85','80','55','000','Halirth');
BaseStats[BaseStats.length] = new Array('Hawlucha','78','92','77','74','63','118','701','Hawlucha');
BaseStats[BaseStats.length] = new Array('Heatmor','85','97','66','105','66','65','631','Heatmor');
BaseStats[BaseStats.length] = new Array('Heladalca','95','115','100','50','100','60','000','Heladalca');
BaseStats[BaseStats.length] = new Array('Heliolisk','62','55','52','109','94','109','695','Heliolisk');
BaseStats[BaseStats.length] = new Array('Helioptile','44','38','33','61','43','70','694','Helioptile');
BaseStats[BaseStats.length] = new Array('Hollimin','40','60','50','45','50','85','000','Hollimin');
BaseStats[BaseStats.length] = new Array('Honchkrow','100','125','52','105','52','71','430','Honchkrow');
BaseStats[BaseStats.length] = new Array('Humbuzz','30','10','10','60','50','120','000','Humbuzz');
BaseStats[BaseStats.length] = new Array('Ibazel','55','80','50','122','113','80','000','Ibazel');
BaseStats[BaseStats.length] = new Array('Icauriole','60','110','60','50','60','110','000','Icauriole');
BaseStats[BaseStats.length] = new Array('Invicunya','65','60','70','60','70','40','000','Invicunya');
BaseStats[BaseStats.length] = new Array('Ignelix','70','75','130','105','105','30','000','Ignelix');
BaseStats[BaseStats.length] = new Array('Jackravage','65','96','84','54','76','105','000','Jackravage');
BaseStats[BaseStats.length] = new Array('Josuche','65','95','60','95','65','110','000','Josuche');
BaseStats[BaseStats.length] = new Array('Kangaskhan','105','95','80','40','80','90','115','Kangaskhan');
BaseStats[BaseStats.length] = new Array('Kelfee','51','34','30','62','63','50','000','Kelfee');
BaseStats[BaseStats.length] = new Array('Khargonaut','85','130','100','80','90','70','000','Khargonaut');
BaseStats[BaseStats.length] = new Array('Kiblis','35','50','30','82','73','50','000','Kiblis');
BaseStats[BaseStats.length] = new Array('Kingdra','75','95','95','95','95','85','230','Kingdra');
BaseStats[BaseStats.length] = new Array('Kizziff','25','45','30','20','20','50','000','Kizziff');
BaseStats[BaseStats.length] = new Array('Klaitning','50','30','30','100','90','160','000','Klaitning');
BaseStats[BaseStats.length] = new Array('Kraitra','80','95','85','85','95','85','000','Kraitra');
BaseStats[BaseStats.length] = new Array('Krokorok','60','82','45','45','45','74','552','Krokorok');
BaseStats[BaseStats.length] = new Array('Krookodile','95','117','80','65','70','92','553','Krookodile');
BaseStats[BaseStats.length] = new Array('Lairon','60','90','140','50','50','40','305','Lairon');
BaseStats[BaseStats.length] = new Array('Lamanda','10','70','10','45','35','30','000','Lamanda');
BaseStats[BaseStats.length] = new Array('Lamlie','45','70','50','30','35','50','000','Lamlie');
BaseStats[BaseStats.length] = new Array('Lapras','130','85','80','85','95','60','131','Lapras');
BaseStats[BaseStats.length] = new Array('Latikrai','45','60','55','55','65','50','000','Latikrai');
BaseStats[BaseStats.length] = new Array('Lilligant','70','60','75','110','75','90','549','Lilligant');
BaseStats[BaseStats.length] = new Array('Lobovo','60','80','65','45','50','65','000','Lobovo');
BaseStats[BaseStats.length] = new Array('Loftitan-R','80','100','105','50','105','40','000','Loftitan-R');
BaseStats[BaseStats.length] = new Array('Lopunny','65','76','84','54','96','105','428','Lopunny');
BaseStats[BaseStats.length] = new Array('Luvaris','80','100','90','65','75','90','000','Luvaris');
BaseStats[BaseStats.length] = new Array('Lyrissimo','81','70','67','122','65','121','000','Lyrissimo');
BaseStats[BaseStats.length] = new Array('Magcargo','50','50','120','80','80','30','219','Magcargo');
BaseStats[BaseStats.length] = new Array('Makima','40','10','55','55','55','40','000','Makima');
BaseStats[BaseStats.length] = new Array('Makitaku','70','30','105','105','105','70','000','Makitaku');
BaseStats[BaseStats.length] = new Array('Malraja','80','90','75','95','120','65','000','Malraja');
BaseStats[BaseStats.length] = new Array('Mandicore','75','100','100','40','75','110','000','Mandicore');
BaseStats[BaseStats.length] = new Array('Marazuma','85','55','105','75','120','75','000','Marazuma');
BaseStats[BaseStats.length] = new Array('Mareep','55','40','40','65','45','35','179','Mareep');
BaseStats[BaseStats.length] = new Array('Marvelisk','71','115','70','105','99','80','000','Marvelisk');
BaseStats[BaseStats.length] = new Array('Mawile','50','85','85','55','55','50','303','Mawile');
BaseStats[BaseStats.length] = new Array('Medicham','60','60','75','60','75','80','308','Medicham');
BaseStats[BaseStats.length] = new Array('Meditite','30','40','55','40','55','60','307','Meditite');
BaseStats[BaseStats.length] = new Array('Mefflora','50','20','40','55','40','50','000','Mefflora');
BaseStats[BaseStats.length] = new Array('Meowstic','74','48','76','83','81','104','678','Meowstic');
BaseStats[BaseStats.length] = new Array('Mephodil','70','40','55','85','65','80','000','Mephodil');
BaseStats[BaseStats.length] = new Array('Milotic','95','60','79','100','125','81','350','Milotic');
BaseStats[BaseStats.length] = new Array('Minccino','55','50','40','40','40','75','572','Minccino');
BaseStats[BaseStats.length] = new Array('Minijina','60','70','40','20','45','45','000','Minijina');
BaseStats[BaseStats.length] = new Array('Misdreavus','60','60','60','85','85','85','200','Misdreavus');
BaseStats[BaseStats.length] = new Array('Mismagius','60','60','60','105','105','105','429','Mismagius');
BaseStats[BaseStats.length] = new Array('Mortarat','55','95','50','95','50','95','000','Mortarat');
BaseStats[BaseStats.length] = new Array('Murkrow','60','85','42','85','42','91','198','Murkrow');
BaseStats[BaseStats.length] = new Array('Murgaz','40','55','40','35','35','65','000','Murgaz');
BaseStats[BaseStats.length] = new Array('Nahualatu','70','100','80','125','80','95','000','Nahualatu');
BaseStats[BaseStats.length] = new Array('Natu','40','50','45','70','45','70','177','Natu');
BaseStats[BaseStats.length] = new Array('Nekhetura','97','106','70','85','65','86','000','Nekhetura');
BaseStats[BaseStats.length] = new Array('Nincada','31','45','90','30','30','40','290','Nincada');
BaseStats[BaseStats.length] = new Array('Ninjask','61','90','45','50','50','160','291','Ninjask');
BaseStats[BaseStats.length] = new Array('Noperajina','100','120','80','60','85','80','000','Noperajina');
BaseStats[BaseStats.length] = new Array('Nulohm','80','118','86','65','74','82','000','Nulohm');
BaseStats[BaseStats.length] = new Array('Numel','60','60','40','65','45','35','322','Numel');
BaseStats[BaseStats.length] = new Array('Nuwill','60','78','66','45','54','62','000','Nuwill');
BaseStats[BaseStats.length] = new Array('Octillery','75','105','75','105','75','45','224','Octillery');
BaseStats[BaseStats.length] = new Array('Onzarudo','78','118','92','63','75','74','000','Onzarudo');
BaseStats[BaseStats.length] = new Array('Osgrave','80','112','70','80','81','112','000','Osgrave');
BaseStats[BaseStats.length] = new Array('Ostento','115','115','90','70','70','65','000','Ostento');
BaseStats[BaseStats.length] = new Array('Pachirisu','60','45','70','45','90','95','417','Pachirisu');
BaseStats[BaseStats.length] = new Array('Pandive','62','82','50','63','66','82','000','Pandive');
BaseStats[BaseStats.length] = new Array('Paracordis','70','115','90','75','90','65','000','Paracordis');
BaseStats[BaseStats.length] = new Array('Paras','35','70','55','45','55','25','046','Paras');
BaseStats[BaseStats.length] = new Array('Parasect','60','95','80','60','80','30','047','Parasect');
BaseStats[BaseStats.length] = new Array('Petilil','45','35','50','70','50','30','548','Petilil');
BaseStats[BaseStats.length] = new Array('Petrocka','60','120','85','40','75','95','000','Petrocka');
BaseStats[BaseStats.length] = new Array('Phanpy','90','60','60','40','40','40','231','Phanpy');
BaseStats[BaseStats.length] = new Array('Pindillo','32','68','72','45','38','40','000','Pindillo');
BaseStats[BaseStats.length] = new Array('Quarendou','98','105','150','45','82','45','000','Quarendou');
BaseStats[BaseStats.length] = new Array('Quimpy','25','55','20','10','10','80','000','Quimpy');
BaseStats[BaseStats.length] = new Array('Raidnarr','95','90','55','40','50','85','000','Raidnarr');
BaseStats[BaseStats.length] = new Array('Rakateis','70','114','52','80','78','91','000','Rakateis');
BaseStats[BaseStats.length] = new Array('Ramfere','90','115','90','55','85','75','000','Ramfere');
BaseStats[BaseStats.length] = new Array('Rapscalion','72','115','70','78','85','102','000','Rapscalion');
BaseStats[BaseStats.length] = new Array('Rasqueon','100','90','115','60','80','60','000','Rasqueon');
BaseStats[BaseStats.length] = new Array('Razelodon','80','130','130','40','60','65','000','Razelodon');
BaseStats[BaseStats.length] = new Array('Remoraid','35','65','35','65','35','65','223','Remoraid');
//BaseStats[BaseStats.length] = new Array('Rotom','50','50','77','95','77','91','479','Rotom');
//BaseStats[BaseStats.length] = new Array('Rotom (Appliance)','50','65','107','105','107','86','479','Rotom_(Appliance)');
BaseStats[BaseStats.length] = new Array('Sableye','50','75','75','65','65','50','302','Sableye');
BaseStats[BaseStats.length] = new Array('Sandile','50','72','35','35','35','65','551','Sandile');
BaseStats[BaseStats.length] = new Array('Scrafty','65','90','115','45','115','58','560','Scrafty');
BaseStats[BaseStats.length] = new Array('Scraggy','50','75','70','35','70','48','559','Scraggy');
BaseStats[BaseStats.length] = new Array('Seviper','73','100','60','100','60','65','336','Seviper');
BaseStats[BaseStats.length] = new Array('Seviron','83','85','105','85','105','75','000','Seviron');
BaseStats[BaseStats.length] = new Array('Sharpedo','70','120','40','95','40','95','319','Sharpedo');
BaseStats[BaseStats.length] = new Array('Shedinja','1','90','45','30','30','40','292','Shedinja');
BaseStats[BaseStats.length] = new Array('Shuckle','20','10','230','10','230','5','213','Shuckle');
BaseStats[BaseStats.length] = new Array('Siamacho','75','104','70','89','60','112','000','Siamacho');
BaseStats[BaseStats.length] = new Array('Sigilyph','72','58','80','103','80','97','561','Sigilyph');
BaseStats[BaseStats.length] = new Array('Skrelp','50','60','60','60','60','30','690','Skrelp');
BaseStats[BaseStats.length] = new Array('Slugma','40','40','40','70','40','20','218','Slugma');
BaseStats[BaseStats.length] = new Array('Smeargle','55','20','35','20','45','75','235','Smeargle');
BaseStats[BaseStats.length] = new Array('Snorunt','50','50','50','50','50','50','361','Snorunt');
BaseStats[BaseStats.length] = new Array('Sparcoil','75','105','60','75','80','85','000','Sparcoil');
BaseStats[BaseStats.length] = new Array('Spilotalis','90','55','70','115','85','110','000','Spilotalis');
BaseStats[BaseStats.length] = new Array('Spraylet','49','64','41','49','51','64','000','Spraylet');
BaseStats[BaseStats.length] = new Array('Stantler','73','95','62','85','65','85','234','Stantler');
BaseStats[BaseStats.length] = new Array('Swablu','45','40','60','40','75','50','333','Swablu');
BaseStats[BaseStats.length] = new Array('Termelc','60','70','60','90','60','80','000','Termelc');
BaseStats[BaseStats.length] = new Array('Thunderma','105','90','70','45','65','50','000','Thunderma');
BaseStats[BaseStats.length] = new Array('Tianglis','55','90','75','75','60','80','000','Tianglis');
BaseStats[BaseStats.length] = new Array('Tinimer','45','45','45','50','45','45','000','Tinimer');
BaseStats[BaseStats.length] = new Array('Torranel','70','80','90','120','75','80','000','Torranel');
BaseStats[BaseStats.length] = new Array('Transmite','55','75','60','80','75','90','000','Transmite');
BaseStats[BaseStats.length] = new Array('Turatal','70','85','60','95','60','80','000','Turatal');
BaseStats[BaseStats.length] = new Array('Turistar','30','70','50','35','50','85','000','Turistar');
BaseStats[BaseStats.length] = new Array('Turumaken','60','100','90','65','85','115','000','Turumaken');
BaseStats[BaseStats.length] = new Array('Unown','48','72','48','72','48','48','201','Unown');
BaseStats[BaseStats.length] = new Array('Vaering','75','65','40','30','35','60','000','Vaering');
BaseStats[BaseStats.length] = new Array('Valazman','80','120','101','60','80','99','000','Valazman');
BaseStats[BaseStats.length] = new Array('Vaquerado','70','80','65','100','50','110','000','Vaquerado');
BaseStats[BaseStats.length] = new Array('Ventorm','80','60','110','120','100','50','000','Ventorm');
BaseStats[BaseStats.length] = new Array('Virlich','35','50','35','78','66','66','000','Virlich');
BaseStats[BaseStats.length] = new Array('Volstarite','65','120','135','95','70','50','000','Volstarite');
BaseStats[BaseStats.length] = new Array('Vulkhet','67','76','40','35','35','46','000','Vulkhet');
BaseStats[BaseStats.length] = new Array('Wyrmal','40','30','50','60','45','50','000','Wyrmal');
BaseStats[BaseStats.length] = new Array('Xatu','65','75','70','95','70','70','178','Xatu');
BaseStats[BaseStats.length] = new Array('Zangoose','73','115','60','60','60','90','335','Zangoose');
BaseStats[BaseStats.length] = new Array('Zanthera','83','125','80','70','80','100','000','Zanthera');

Nature = new Array();
Nature[Nature.length] = new Array('0_0','-');
Nature[Nature.length] = new Array('1_4','Adamant');
Nature[Nature.length] = new Array('1_1','Bashful');
Nature[Nature.length] = new Array('2_1','Bold');
Nature[Nature.length] = new Array('1_3','Brave');
Nature[Nature.length] = new Array('5_1','Calm');
Nature[Nature.length] = new Array('5_4','Careful');
Nature[Nature.length] = new Array('2_2','Docile');
Nature[Nature.length] = new Array('5_2','Gentle');
Nature[Nature.length] = new Array('3_3','Hardy');
Nature[Nature.length] = new Array('3_2','Hasty');
Nature[Nature.length] = new Array('2_4','Impish');
Nature[Nature.length] = new Array('3_4','Jolly');
Nature[Nature.length] = new Array('2_5','Lax');
Nature[Nature.length] = new Array('1_2','Lonely');
Nature[Nature.length] = new Array('4_2','Mild');
Nature[Nature.length] = new Array('4_1','Modest');
Nature[Nature.length] = new Array('3_5','Naive');
Nature[Nature.length] = new Array('1_5','Naughty');
Nature[Nature.length] = new Array('4_3','Quiet');
Nature[Nature.length] = new Array('4_4','Quirky');
Nature[Nature.length] = new Array('4_5','Rash');
Nature[Nature.length] = new Array('2_3','Relaxed');
Nature[Nature.length] = new Array('5_3','Sassy');
Nature[Nature.length] = new Array('5_5','Serious');
Nature[Nature.length] = new Array('3_1','Timid');
Nature[Nature.length] = new Array('all_pos','All positive');
Nature[Nature.length] = new Array('all_neg','All negative');

function writePokemonDropdown() {
  options = '<option value="' + BaseStats[0][1]+' '+BaseStats[0][2]+' '+BaseStats[0][3]+' '+BaseStats[0][4]+' '+BaseStats[0][5]+' '+BaseStats[0][6]+' '+BaseStats[0][7]+' '+BaseStats[0][8] + '" selected="selected">' + BaseStats[0][0] + '</option>';
  for (var i = 1; i < BaseStats.length; i++) {
    options += '<option value="' + BaseStats[i][1]+' '+BaseStats[i][2]+' '+BaseStats[i][3]+' '+BaseStats[i][4]+' '+BaseStats[i][5]+' '+BaseStats[i][6]+' '+BaseStats[i][7]+' '+BaseStats[i][8] + '">' + BaseStats[i][0] + '</option>';
  }
  $('select#stat_pokemon_dropdown').html(options);
  $('option:first', 'select#subcat_id').attr('selected','selected');
}

function writeNatures() {
  options = '<option value="' + Nature[0][0] + '" selected="selected">' + Nature[0][1] + '</option>';
  for (var i = 1; i < Nature.length; i++) {
  	options += '<option value="'+Nature[i][0]+'">'+Nature[i][1]+'</option>';
  }
  $('select#nature_dropdown').html(options);
  $('option:first', 'select#subcat_id').attr('selected','selected');
}

var stats = new Array('statx_hp', 'statx_atk', 'statx_def', 'spatk', 'spdef', 'speed');

//var "hpTyping" was here

function resetInput() {
	for (var i = 0; i < 6; i++) {
		$('#'+stats[i]+'_evs').val('0');
		$('#'+stats[i]+'_ivs').val('0');
		//old version using max IVs/EVs
		//$('#'+stats[i]+'_evs').val('252');
		//$('#'+stats[i]+'_ivs').val('31');
	}
	$('#stat_pokemon_dropdown').val('- - - - - - - -');
	$('#nature_dropdown').val('0_0');
	writeBaseStats();
	changeNatureComponents();
}

function onRefresh(){
  writePokemonDropdown();
  writeNatures();
	//getEVinfo();
	//getIVinfo();
	writeBaseStats();
	calcStats();
}

//function "getEVinfo" was here

//function "getIVinfo" was here

function writeBaseStats() {
	var pokemonBaseStats = $('#stat_pokemon_dropdown').val().split(' ');
	for (i = 0; i < 6; i++) {
    $('#base_'+stats[i]+'_stat').val(pokemonBaseStats[i]);
	}
	if (pokemonBaseStats[7] == '-') { $('#leftovers-info').hide(); }
	else {
		$('#pokemon_name').html(pokemonBaseStats[7]);
		//$('#leftovers-info').show();
	}
	calcStats();
}

function changeNature() {
  $('#nature_dropdown').val($('#pos_nat').val() + '_' + $('#neg_nat').val());
  calcStats();
}

function changeNatureComponents() {
	if ($('#nature_dropdown').val() == 'all_neg' || $('#nature_dropdown').val() == 'all_pos') {
		$('#pos_nat').val(0);
		$('#neg_nat').val(0);
	}	else {
		$('#pos_nat').val($('#nature_dropdown').val().charAt(0));
		$('#neg_nat').val($('#nature_dropdown').val().charAt(2));
	}
	calcStats();
}

function maxEVs() {
	for (var i = 0; i < 6; i++) { $('#'+stats[i]+'_evs').val('252'); }
	calcStats();
	getEVinfo();
}

function minEVs() {
	for (var i = 0; i < 6; i++) { $('#'+stats[i]+'_evs').val('0'); }
	calcStats();
	getEVinfo();
}
function maxIVs() {
	for (var i = 0; i < 6; i++) { $('#'+stats[i]+'_ivs').val('31'); }
	calcStats();
	getEVinfo();
}
function minIVs() {
	for (var i = 0; i < 6; i++) { $('#'+stats[i]+'_ivs').val('0'); }
	calcStats();
	getEVinfo();
}

function allMin() {
	$('#nature_dropdown').val('all_neg');
	changeNatureComponents();
	for (var i = 0; i < 6; i++) {
    $('#'+stats[i]+'_evs').val('0');
    $('#'+stats[i]+'_ivs').val('31');
  }
}

//function "minimax" was here

function calcStats(){
	var pokemonBaseStats = $('#stat_pokemon_dropdown').val().split(' ');
	if (pokemonBaseStats[0] == '-') {
		for (var i = 0; i < 6; i++) {
			$('#'+stats[i]+'_stat').val('');
		}
	} else {
		var pokemonStats = new Array();
		var pokemonEVs = new Array();
		var pokemonIVs = new Array();
		var pokemonStats = new Array();
		if ($('#statx_level').val() == 0 || !$('#statx_level').val()) { var pokemonLevel = 1; }
		else { var pokemonLevel = $('#statx_level').val(); }
		if (pokemonLevel < 1) {
  		for (var i = 0; i < 6; i++) {
  			$('#'+stats[i]+'_stat').val(0);
  		}
			$('#minimum_hp').html(0);
			$('#maximum_hp').html(0);
			return;
		}
		var positiveNature = $('#pos_nat').val();
		var negativeNature = $('#neg_nat').val();

		for (var i = 0; i < 6; i++) {
      pokemonEVs[pokemonEVs.length] = $('#'+stats[i]+'_evs').val();
      pokemonIVs[pokemonIVs.length] = $('#'+stats[i]+'_ivs').val();
    }

		if (pokemonBaseStats[7] == 'Shedinja') {
			$('#statx_hp_stat').val(1);
			pokemonStats[0] = 1;
			$('#minimum_hp').html(1);
			$('#maximum_hp').html(1);
		} else {
			$('#statx_hp_stat').val(Math.floor((Math.floor(pokemonBaseStats[0]) * 2 + Math.floor(pokemonIVs[0]) + Math.floor(Math.floor(pokemonEVs[0]) / 4)) * Math.floor(pokemonLevel) / 100) + (Math.floor(pokemonLevel) + 10));
			pokemonStats[0] = $('#statx_hp_stat').val();
			$('#minimum_hp').html(Math.floor((Math.floor(pokemonBaseStats[0]) * 2) * Math.floor(pokemonLevel) / 100) + (Math.floor(pokemonLevel) + 10));
			$('#maximum_hp').html(Math.floor((Math.floor(pokemonBaseStats[0]) * 2 + 94) * Math.floor(pokemonLevel) / 100) + (Math.floor(pokemonLevel) + 10));
			minimumHP = Math.floor((Math.floor(pokemonBaseStats[0]) * 2 + 31) * Math.floor(pokemonLevel) / 100) + (Math.floor(pokemonLevel) + 10);
			var lowestLeftovers = Math.ceil($('#minimum_hp').html() / 16) * 16;
			var requiredIVs = Math.floor(lowestLeftovers - $('#minimum_hp').html());
			var listLeftovers = '<ul>';
			while (lowestLeftovers <= minimumHP) {
				listLeftovers = listLeftovers+'<li>'+lowestLeftovers+' (0 EVs & '+requiredIVs+' IVs)</li>';
				requiredIVs = requiredIVs+16;
				lowestLeftovers = lowestLeftovers+16;
			}
			var requiredEVs = Math.floor(lowestLeftovers - minimumHP) * 4;
			while (lowestLeftovers <= $('#maximum_hp').html()) {
				listLeftovers = listLeftovers+'<li>'+lowestLeftovers+' ('+requiredEVs+' EVs & 31 IVs)</li>';
				requiredEVs = requiredEVs+64;
				lowestLeftovers = lowestLeftovers+16;
			}
			if (listLeftovers != '<ul>') { $('#leftovers').html(listLeftovers+'</ul>'); }
			else { $('#leftovers').html('None'); }
		}

		for (var i = 1; i < 6; i++) { pokemonStats[pokemonStats.length] = Math.floor((Math.floor(pokemonBaseStats[i]) * 2 + Math.floor(pokemonIVs[i]) + Math.floor(Math.floor(pokemonEVs[i]) / 4)) * Math.floor(pokemonLevel) / 100) + 5; }

		if ($('#nature_dropdown').val().length > 3) {
			if ($('#nature_dropdown').val() == 'all_pos') {
				for (var i = 1; i < 6; i++) { pokemonStats[i] = Math.floor(pokemonStats[i] * 1.1); }
			}	else {
				if ($('#nature_dropdown').val() == 'all_neg') {
					for (var i = 1; i < 6; i++) { pokemonStats[i] = Math.floor(pokemonStats[i] * 0.9); }
				}
			}
		} else if (positiveNature != negativeNature) {
			pokemonStats[positiveNature] = Math.floor(pokemonStats[positiveNature] * 1.1);
			pokemonStats[negativeNature] = Math.floor(pokemonStats[negativeNature] * 0.9);
		}

		for (i = 0; i < 6; i++) {
			$('#'+stats[i]+'_stat').val(pokemonStats[i]);
		}
	}
}

//function "convert" was here
//function "calcHiddenPower" was here


/*
* STAT CALCULATORS - GENERIC STAT CALCULATOR
* statcalc();
*/


//basic stat calculator (enter base stat, level, ev/iv/nature and HP checkbox)
function statcalc() {
	var PokeLevel = _amf('pokelevel').value;
	var PokeStat = _amf('pokestat').value;
	var StatIV = _amf('stativ').value;
	var StatEV = _amf('statev').value;
	var PokeNature = _amf('pokenature').value;
	var StatResult = _amf('hpcheck').checked ? (Math.floor((2 * PokeStat + (StatIV - 0) + StatEV/4) * PokeLevel / 100 + (PokeLevel - 0) + 10)) : (Math.floor(Math.floor((2 * PokeStat + (StatIV - 0) + StatEV/4) * PokeLevel / 100 + 5) * PokeNature));
	//var AtkDefStat = Math.floor(Math.floor((2 * PokeStat + 31 + 252/4) * PokeLevel / 100 + 5) * 1);
	//var HPStat = Math.floor((2 * _amf('pokehp').value + 31 + 252/4) * PokeLevel / 100 + (PokeLevel - 0) + 10);
	/*"(PokeLevel - 0)": JS keeps interpreting that second "PokeLevel" variable as a string and concatenating it and what follows it; subtracting 0 from it forces it to be seen as a number */

	_amf('finalstat').innerHTML = 'Stat: <strong>' + StatResult + '</strong>';
}
