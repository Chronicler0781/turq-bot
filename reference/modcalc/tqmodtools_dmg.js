/*
* tqmodtools_dmg.js
* A series of JavaScript tools, functions, etc. for running the PokÃ©mon Turquoise moderator tools (calculators, RNGs, etc.) - damage calculation
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on PokÃ©mon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 052914
*** Made a few other changes prior to this date to account for various Gen VI/Turquoise changes; don't remember what they were, unfortunately
*** Changed critical hit multipliers to 1.5x for normal and 2.25x for sniper, as per Gen VI
* 060812
*** Moved attacker/defender lists/functions into their own files
*** Added lucky shot to user abilities; logos stone, black jewel and white jewel to user items; and logos stone to target items
*** Added infiltrator to user abilities; added "ally's flower gift" checkboxes to both sides; and added a checkbox for moves with effects that double their BP
* 060712
*** Started main damage calc
*** Added dropdown to select a pokÃ©mon and got it to calculate atk/def based on the selected pokÃ©mon's base stats
*** Got the calculator reading the move's power and class from the move checker, and got it to choose the correct base stats for the move's class (psyshock et all implemented properly as well)
*/

/*
* TO-DO LIST
*** Go over moves and identify anything at all that is an exception to the base power or damage calculation formulas; asterisk means it isn't accounted for yet
****** BP exceptions: luck blast?*, crush grip*, flail*, fling*, frustration*, gyro ball*, heat crash*, heavy slam*, low kick*, magnitude?*, natural gift?*, present?*, punishment?*, return*, reversal*, triple kick?*, electro ball*, eruption*, flame burst (splash damage)*, grass knot*, spit up*, stored power*, trump card* (count number of uses?), water spout*, wring out*, contest moves*,
****** Formula exceptions: psyshock, psystrike, radiant claw, secret sword, foul play*?,
*** remind people of override for things like fury cutter, plague, rollout, etc. for increasing bp
*/

function _dmg(id) {
	return document.getElementById(id);
}

//chooseattacker function goes here if it needs to be moved out of atkpkmn.js

//choosedefender function goes here if it needs to be moved out of defpkmn.js

function dmgcalc() {

	if (_dmg('userlevel').value != '') _dmg('userlevel').value = Math.min(100, _dmg('userlevel').value);
	if (_dmg('userlevel').value != '') _dmg('userlevel').value = Math.max(  1, _dmg('userlevel').value);

	if (_dmg('movepwr').value != '') _dmg('movepwr').value = Math.max(0, _dmg('movepwr').value);

	if (_dmg('useratk').value != '') _dmg('useratk').value = Math.max(1, _dmg('useratk').value);
	if (_dmg('useratkstage').value != '' && _dmg('useratkstage').value != '-') _dmg('useratkstage').value = Math.max(-6, _dmg('useratkstage').value);
	if (_dmg('useratkstage').value != '' && _dmg('useratkstage').value != '-') _dmg('useratkstage').value = Math.min( 6, _dmg('useratkstage').value);
	if (_dmg('oppdef').value != '') _dmg('oppdef').value = Math.max(1, _dmg('oppdef').value);
	if (_dmg('oppdefstage').value != '' && _dmg('oppdefstage').value != '-') _dmg('oppdefstage').value = Math.max(-6, _dmg('oppdefstage').value);
	if (_dmg('oppdefstage').value != '' && _dmg('oppdefstage').value != '-') _dmg('oppdefstage').value = Math.min( 6, _dmg('oppdefstage').value);


	var Type1 = _dmg('type1').value;
	var Type2 = _dmg('type2').value;
	var Level = _dmg('userlevel').value;
	var BasePower = _dmg('movepwr').value; //can be populated by the move checker dropdown or manually overridden
	var Atk = _dmg('useratk').value;
	var AtkMod = _dmg('useratkstage').value == '-' ? 0 : _dmg('useratkstage').value;
	var Def = _dmg('oppdef').value;
	var DefMod = _dmg('oppdefstage').value == '-' ? 0 : _dmg('oppdefstage').value;
	var BRN = _dmg('burn').checked && _dmg('userabil').selectedIndex != 9 ? 0.5 : 1; //ABILITY: Guts (i9) (ignoring burn)
	//var TVT = _dmg('tvt').checked && _dmg('double').checked ? 0.75 : 1; //commented out because requiring 2 boxes is silly
	var TVT = _dmg('multi').checked ? 0.75 : 1;
	var SR = _dmg('weather').value;
	var FF = _dmg('userabil').selectedIndex == 6 ? 1.5 : 1; //ABILITY: Flash Fire (i6)
	var CH = _dmg('critical').checked ? (_dmg('userabil').selectedIndex == 26 ? 2.25 : 1.5) : 1; //ABILITY: Sniper (i26)
	//var RL = _dmg('barr').checked && CH == 1 ? (_dmg('double').checked ? 2/3 : 0.5) : 1; //cleaning up above multibattle thing
	//var RL = _dmg('barr').checked && CH == 1 ? (_dmg('multi').checked ? 2/3 : 0.5) : 1;
	var RL = _dmg('barr').checked && CH == 1 && _dmg('userabil').selectedIndex != 12 ? (_dmg('multi').checked ? 2/3 : 0.5) : 1; //ABILITY: Infiltrator (i12)
	switch (_dmg('useritem').selectedIndex) {
		case 9: //ITEM: Life Orb (i9)
			var ITM = 1.3;
			break;
		default:
			if (_dmg('useritem').selectedIndex >= 13 && _dmg('useritem').selectedIndex <= 23) //ITEM: Metronome & multipliers (i13-i23)
				var ITM = (_dmg('useritem').selectedIndex - 10) / 10 + 1; //this may need to be 11; seems fine for now
			else var ITM = 1;
	}
	var TT = _dmg('userabil').selectedIndex == 30 && Type1 * Type2 < 1 ? 2 : 1; //ABILITY: Tinted Lens (i30)
	var MF = _dmg('me1st').checked ? 1.5 : 1;
	var STAB = _dmg('stab').checked ? (_dmg('userabil').selectedIndex == 1 ? 2 : 1.5) : 1; //ABILITY: Adaptability (i1)
	var FLT = (_dmg('oppabil').selectedIndex == 2 || _dmg('oppabil').selectedIndex == 8) && Type1 * Type2 > 1 ? 0.75 : 1;
	//ABILITY: Filter (i2) and Solid Rock (i8) (line above)
	var FCT = _dmg('oppabil').selectedIndex == 11 ? 0.5 : 1; //ABILITY: Fur Coat (i11)
	var EB = _dmg('useritem').selectedIndex == 6 ? 1.2 : 1; //ITEM: Expert Belt (i6)
	var BRR = _dmg('oppitem').selectedIndex == 2 || (_dmg('oppitem').selectedIndex == 8 && Type1 * Type2 > 1) ? 0.5 : 1;
	//ITEM: Chilan Berry (i2) and Type-Resist Berry (i8) (line above)



	var HH = _dmg('hhand').checked ? 1.5 : 1;
	var ZN = _dmg('zone').checked ? 1.5 : 1;
	switch (_dmg('useritem').selectedIndex) {
		case 24: //ITEM: Muscle Band (i24)
		case 30: //ITEM: Wise Glasses (i30)
			var IT = 1.1;
			break;
		case 1: //ITEM: Adamant Orb (i1)
		case 8: //ITEM: Griseous Orb (i8)
		case 12: //ITEM: Lustrous Orb (i12)
		case 28: //ITEM: Type-Boosting Item/Plate (i28)
			var IT = 1.2;
			break;
		case 2: //ITEM: Black Jewel (i2)
		case 29: //ITEM: White Jewel (i29)
			var IT = 1.3;
			break;
		case 27: //ITEM: Type Gem (i27)
			var IT = 1.5;
			break;
		case 7: //ITEM: Grandil Berry (i7)
			var IT = 3;
			break;
		default:
			var IT = 1;
	}
	var BPD = _dmg('bpdouble').checked ? 2 : 1; //added check for bp-doubling effects like retaliate
	var CHG = _dmg('charge').checked ? 2 : 1;
	var MS = _dmg('msport').checked ? 0.5 : 1;
	var WS = _dmg('wsport').checked ? 0.5 : 1;
	var AB = _dmg('auraboost').checked ? 1.33 : 1;
	var AN = _dmg('auranerf').checked ? 0.67 : 1;
	switch (_dmg('userabil').selectedIndex) {
		case 2: //ABILITY: Analytic (i2)
		case 22: //ABILITY: Sand Force (i22)
		case 24: //ABILITY: Sheer Force (i24)
		case 34: //ABILITY: Aerilate (i34)
		case 35: //ABILITY: Pixilate (i35)
		case 36: //ABILITY: Refrigerate (i36)
		case 40: //ABILITY: Tough Claws (i40) (not sure if 30% or 33.3%, leave here for now)
			var UA = 1.3;
			break;
		case 3: //ABILITY: Blaze (i3)
		case 16: //ABILITY: Overgrow (i16)
		case 28: //ABILITY: Swarm (i28)
		case 31: //ABILITY: Torrent (i31)
		case 37: //ABILITY: Mega Launcher (i37)
		case 39: //ABILITY: Strong Jaw (i39)
			var UA = 1.5;
			break;
		case 13: //ABILITY: Iron Fist (i13)
		case 19: //ABILITY: Reckless (i19)
			var UA = 1.2;
			break;
		case 20: //ABILITY: Rivalry+ (i20)
			var UA = 1.25;
			break;
		case 21: //ABILITY: Rivalry- (i21)
			var UA = 0.75;
			break;
		case 29: //ABILITY: Technician (i29)
			var UA = BasePower > 60 ? 1 : 1.5;
			break;
		case 38: //ABILITY: Parental Bond, 2nd hit (i38)
			var UA = 0.5;
			break;
		default:
			var UA = 1;
	}
	switch (_dmg('oppabil').selectedIndex) {
		case 4: //ABILITY: Heatproof (i4)
		case 9: //ABILITY: Thick Fat (i9)
			var FA = 0.5;
			break;
		case 1: //ABILITY: Dry Skin (i1)
			var FA = 1.25;
			break;
		default:
			var FA = 1;
	}
	//BasePower = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(BasePower * HH) * IT) * CHG * MS) * WS) * UA) * FA);
	BasePower = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(BasePower * BPD) * HH) * ZN) * IT) * CHG * MS) * WS) * AB) * AN) * UA) * FA); //added BPD and an extra math.floor around it + base power; later added AB and AN for aura abilities; added ZN for battle zone and energy zone



	switch (_dmg('userabil').selectedIndex) {
		case 23: //ABILITY: Simple (i23)
			AtkMod *= 2;
			break;
		case 33: //ABILITY: Unaware (i33)
			DefMod = 0;
	}
	switch (_dmg('oppabil').selectedIndex) {
		case 10: //ABILITY: Unaware (i10)
			AtkMod = 0;
			break;
		case 7: //ABILITY: Simple (i7)
			DefMod *= 2;
	}
	AtkMod = Math.min(6, AtkMod);
	AtkMod = Math.max(-6, AtkMod);
	DefMod = Math.min(6, DefMod);
	DefMod = Math.max(-6, DefMod);

	if (CH > 1) {
		AtkMod = Math.max(0, AtkMod);
		DefMod = Math.min(0, DefMod);
	}
	if (AtkMod == 0) AtkMod = 1;
	else AtkMod = Math.pow(1 + Math.abs(AtkMod) / 2, Math.abs(AtkMod) / AtkMod);
	if (DefMod == 0) DefMod = 1;
	else DefMod = Math.pow(1 + Math.abs(DefMod) / 2, Math.abs(DefMod) / DefMod);
	switch (_dmg('userabil').selectedIndex) {
		case 10: //ABILITY: Huge Power (i10)
		case 18: //ABILITY: Pure Power (i18)
			var AtkAbil = 2;
			break;
		case 5: //ABILITY: Flare Boost (i5)
		case 7: //ABILITY: Flower Gift (i7)
		case 9: //ABILITY: Guts (i9)
		case 11: //ABILITY: Hustle (i11)
		case 15: //ABILITY: Minus (i15)
		case 17: //ABILITY: Plus (i17)
		case 27: //ABILITY: Solar Power (i27)
		case 32: //ABILITY: Toxic Boost (i32)
			var AtkAbil = 1.5;
			break;
		case 14: //ABILITY: Lucky Shot (i14)
			var AtkAbil = 1.3;
			break;
		case 8: //ABILITY: Friend Guard (i8) //oh my god really not sure if this is where this goes aaaaa
			var AtkAbil = 0.75;
			break;
		case 4: //ABILITY: Defeatist (i4)
		case 25: //ABILITY: Slow Start (i25)
			var AtkAbil = 0.5;
			break;
		default:
			var AtkAbil = 1;
	}
	switch (_dmg('useritem').selectedIndex) {
		case 5: //ITEM: DeepSeaTooth (i5)
		case 10: //ITEM: Light Ball (i10)
		case 26: //ITEM: Thick Club (i26)
			var AtkItem = 2;
			break;
		case 3: //ITEM: Choice Band (i3)
		case 4: //ITEM: Choice Specs (i4)
		case 25: //ITEM: Soul Dew (i25)
			var AtkItem = 1.5;
			break;
		case 11: //ITEM: Logos Stone (i11)
			var AtkItem = 1.3;
			break;
		default:
			var AtkItem = 1;
	}
	switch (_dmg('oppabil').selectedIndex) {
		case 3: //ABILITY: Flower Gift (i3)
		case 5: //ABILITY: Marvel Scale (i5)
		case 12: //ABILITY: Grass Pelt (i12)
			var DefAbil = 1.5;
			break;
		case 6: //ABILITY: Multiscale (i6) //oh my god really not sure if this is where this goes aaaaa
			var DefAbil = 2;
			break;
		default:
			var DefAbil = 1;
	}
	switch (_dmg('oppitem').selectedIndex) {
		case 3: //ITEM: DeepSeaScale (i3)
			var DefItem = 2;
			break;
		case 1: //ITEM: Assault Vest (i1)
		case 4: //ITEM: Eviolite (i4)
		case 6: //ITEM: Metal Powder (i6)
		case 7: //ITEM: Soul Dew (i7)
			var DefItem = 1.5;
			break;
		case 5: //ITEM: Logos Stone (i5)
			var DefItem = 1.3;
			break;
		default:
			var DefItem = 1;
	}
	var SX = 1; //used instead of the line below because TQ should only be using Gen V mechanics; left it in just in case
	//var SX = _dmg('sx').checked ? 0.5 : 1;
	var SST = _dmg('storm').checked ? 1.5 : 1;
	//added variable for flower gift on user's ally
	if (_dmg('uallygift').checked && _dmg('userabil').selectedIndex != 7) {
		var UFG = 1.5;
	} else {
		var UFG = 1;
	}
	//added variable for flower gift on target's ally
	if (_dmg('oallygift').checked && _dmg('oppabil').selectedIndex != 3) {
		var OFG = 1.5;
	} else {
		var OFG = 1;
	}
	//Atk = Math.floor(Math.floor(Math.floor(Atk * AtkMod) * AtkAbil) * AtkItem);
	Atk = Math.floor(Math.floor(Math.floor(Math.floor(Atk * AtkMod) * AtkAbil) * UFG) * AtkItem);
	//Def = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Def * DefMod) * DefAbil) * DefItem) * SST) * SX);
	Def = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Def * DefMod) * DefAbil) * OFG) * DefItem) * SST) * SX);
	// TODO: Qual a ordem certa? O multiplicador de Sandstorm entra depois de onde?
	// translation: What is the right order? Where does the Sandstorm multiplier go?
	Atk = Math.max(1, Atk);
	Def = Math.max(1, Def);



	var basedamage =


Math.floor(Math.floor((Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor((Math.floor(Level * 2 / 5) + 2) * BasePower * Atk / 50) / Def) * BRN) * RL) * TVT) * SR) * FF) + 2) * CH * ITM) * TT * MF);
	// TODO: O que vem primeiro: Tinted Lens (TT) ou Me First (MF)?
	// translation: Which comes first: Tinted Lens (TT) or Me First (MF)?
	var damage = new Array();
	for (var i = 0; i < 16; i++)
		damage[i] = Math.max(1, Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(basedamage * (85 + i) / 100) * STAB) * Type1) * Type2) * FLT) * FCT) * EB) * BRR));


//var RandomDamage = Math.floor(Math.random() * (damage[15] - damage[0] + 1)) + damage[0];

var RandomDamage = (Math.floor(Math.random() * 16 - 0)); //pick a number between 1 and 16
//console.log(RandomDamage);

var DamageFinal = damage[RandomDamage];

	_dmg('damageroll').innerHTML = 'Damage: <strong>' + DamageFinal + '</strong> (range ' + damage[0] + '-' + damage[15] + ')';
	//_dmg('damageroll').innerHTML = 'Damage: <strong>' + RandomDamage + '</strong> (range ' + damage[0] + '-' + damage[15] + ')';
}
