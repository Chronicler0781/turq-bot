/*
* tqmodtools_movelist.js
* A series of JavaScript tools, functions, etc. for running the Pokemon Turquoise moderator tools (calculators, RNGs, etc.) - list of moves, used in the various battletab.html scripts
* Written/compiled by Phoenixsong; credits/sources for certain tools/scripts given where appropriate
* Version 1.0
* For use on Pokemon Turquoise (pokemonturquoise.com, s1.zetaboards.com/PokemonTurquoise_RPG) only
* Ask Phoenixsong for permission before using or modifying these tools
*/

/*
* CHANGELOG
* 052914
*** at some point prior, added a few new fake moves (flutter jump, etc.)
*** started adding/edited Turquoise TM revisions
* 031514
*** gen vi: noble roar through water shuriken (all remaining moves); also added hold back and celebrate
* 031314
*** gen vi: geomancy through mystical fire
* 031214
*** added more gen vi moves: electric terrain, electrify, fairy lock, fairy wind, fell stinger, flower shield, flying press, forest's curse, freeze-dry, grassy terrain, misty terrain, destroyer driver, trick-or-treat
* 010814
*** added more gen vi moves: dazzling gleam, disarming voice, draining kiss, eerie impulse
*** note that veekun is starting to get (or at least guess at) flag information, but it may not all be correct, e.g. nothing has the mirror move flag yet even though most probably should, eerie impulse is called sound-based when it isn't, etc.; remember to re-check flags every once in a while
*** added "bypasses substitute" flag to all sound moves
*** confused about crafty shield: veekun, serebii and bulbapedia all disagree about its priority (4, 3 and 0, respectively; currently using serebii's); also, bulbapedia claims it does not cause protect et al's success chances to drop, but find a way to check
*** quick guard and wide guard no longer affect protect et al's success
*** in general, remember to be on the lookout for other moves whose effects have changed
* 102213
*** started gen vi changes, e.g. renamed certain attacks, adjusted BP/accuracy, etc.
*** the [EFFECT TBD] tag is back for several new gen vi attacks; search and destroy as info becomes available
*** there is also a [GEN VI] tag to find all the gen vi moves in general; be sure to check EVERY ATTRIBUTE of the gen vi moves, down to the flags, since we still don't have all info on those yet
*** last gen vi moves added: aromatic mist, baby-doll eyes, belch, boomburst, confide, crafty shield
* 100613
*** fixed dive, which was accidentally marked as special
* 082013
*** added new move mach turn
* 070713
*** added slight clarifications to multi-hit moves wrt accuracy and crit/flinch/effect chances for each hit
* 063013
*** somehow managed to miss pursuit entirely oops
* some point prior to 061613
*** all done for now; light moves commented out until further notice; some additional moves added/commented out
* 010913
*** done for now, with the exception of trump card, grudge and spite
*** all fakemoves added; just need to double-check the descriptions, any special calculations or links, etc.
* 010213
*** Added all of W, D, G, H and I bar fakemoves; all canon moves added, though some will need to be double-checked as per the calc/interaction notes below
* 122812
*** Added all of B bar fakemoves
* 090912
*** Added all of R bar fakemoves
* 082612
*** Added all of E and F at some point prior to this
*** Added all of J, K, M, N, V, Y and Z (bar fakemoves)
* 062712
*** Added all of A, O and X (bar fakemoves)
* 060812
*** Moved the list into its own file
*/

/*
* TO-DO LIST
*** continue to update and check for inaccuracies, errors, etc.
*/

/*
* MOVES TO CHECK FOR TQ-FAKEMOVE/ABILITY/ITEM INTERACTION
* be sure to search for any instances of a tag like [TURQUOISE MOVES HERE]
* check against all these moves whenever new moves are added to the calc
*** assist
*** baton pass
*** camouflage (pending custom list of types; may need a list on wiki)
*** detect/endure/protect/quick guard/magic guard (mostly to add mentions of vanish and similar); feint?
*** fling (also add items to the list on wiki)
*** magic coat
*** metronome (vanish and parodize should not be callable by this or other moves)
*** mimic
*** mirror move
*** natural gift? (I think this is covered, but check again at the end just in case)
*** nature power (pending custom list of callable moves; may need a list on wiki)
*** rapid spin
*** secret power (pending list of status effects based on location)
*** sleep talk
*** substitute (dear god)
*** yawn? (I think this is covered, but check again at the end just in case)
*/

/*
* MOVES IDEK WHAT TO DO ABOUT
* be sure to search for any instances of a tag like [EFFECT TBD]
*** spite (current proposed effect is a little awkward and doesn't account for the original spite's ability to affect moves that don't target, e.g. recover)
*** trump card (just have its power increase with each use? is that fair compared to fury cutter? specify that it can only be used five times each switchin?)
*/

/*
* MOVES TO ADD LINK TO/CALC FOR SPECIAL BP/DAMAGE CALCS
* be sure to search for any instances of a tag like [CALC LINK HERE?]
*** crush grip/wring out
*** dragon dive/prism shower/phantasmata/wave dance/wild maul
*** electro ball/gyro ball
*** eruption/water spout
*** flail/reversal
*** frustration/return
*** grass knot/low kick
*** heat crash/heavy slam
*** psywave
*/

function movedisplay() {
	movedata = document.getElementById('movename').value;
	//console.log(movedata);

	switch(movedata) {
		case "choose": //Select a Move, a.k.a. blank
			movetype = "???";
			moveclass = "???";
			moveBP = 0;
			moveAcc = 0;
			effect = 0;
			flavor = "???";
			movedesc = "???";
			moveflags = "???";
		break;
		case "absorb": //Absorb
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "acid": //Acid
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "The opposing team is attacked with a spray of harsh acid. The acid may also lower the targets' Sp. Def stats.";
			movedesc = "10% chance to lower target's Special Defense by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "acidarmor": //Acid Armor
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.";
			movedesc = "Raises user's Defense by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "acidrain": //Acid Rain
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 70;
			effect = 30;
			flavor = "The opposing team is drenched in a shower of caustic liquid. The acid may also lower the targets' Sp. Def stats.";
			movedesc = "30% chance to lower target's Special Defense by 1. Cannot miss if the active weather is heavy rain or miasma. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "acidspray": //Acid Spray
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 100;
			flavor = "The user spits fluid that works to melt the target. This harshly reduces the target's Sp. Def stat.";
			movedesc = "Lowers target's Special Defense by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "acrobatics": //Acrobatics
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 55;
			moveAcc = 100;
			effect = 0;
			flavor = "The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.";
			movedesc = "Base power doubles if user is not holding an item. Flying Gem activates and is consumed before the base power doubles.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "acupressure": //Acupressure
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user applies pressure to stress points, sharply boosting one of its stats.";
			movedesc = "Chooses a random stat (from Attack, Defense, Special Attack, Special Defense, Speed, Accuracy, Evasion) and raises it by 2. Can target user or an adjacent ally. Can't target an ally's Substitute.";
			moveflags = "None";
		break;
		case "aerialace": //Aerial Ace
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user confounds the target with speed, then slashes. The attack lands without fail.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "aeroblast": //Aeroblast
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 95;
			effect = 0;
			flavor = "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "afteryou": //After You
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user helps the target and makes it use its move right after the user.";
			movedesc = "Target makes its move immediately after this attack, regardless of speed or priority. Fails if target has already acted this turn.";
			moveflags = "Bypasses Substitute";
		break;
		case "aftershock": //Aftershock
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user strikes the ground and causes a series of tremors that shake the target over two turns.";
			movedesc = "Does damage normally on this turn, then again with the same type and base power at the end of the next turn, regardless of whether the user or original target is still on the field. End-of-turn damage is calculated based on user's Attack (ignoring items like Life Orb) and the Defense of the target that is active when the end-of-turn strike hits; it cannot be a critical hit. The second strike ignores Detect, Endure, King's Shield, Mat Block, Protect, Spiky Shield and Wonder Guard due to dealing damage at end-of-turn. The second strike is ignored if there is no target at the end of next turn.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "agility": //Agility
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user relaxes and lightens its body to move faster. It sharply boosts the Speed stat.";
			movedesc = "Raises user's Speed by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "aircutter": //Air Cutter
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 95;
			effect = 0;
			flavor = "The user launches razor-like wind to slash the opposing team. Critical hits land more easily.";
			movedesc = "Crit rate +1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "airslash": //Air Slash
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 95;
			effect = 30;
			flavor = "The user attacks with a blade of air that slices even the sky. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "allyswitch": //Ally Switch
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user teleports using a strange power and switches its place with one of its allies.";
			movedesc = "User switches position on the field with an adjacent ally. Fails if user is in a single battle or if it is in the center position in a triple battle. +1 priority. ";
			moveflags = "None";
		break;
		case "amnesia": //Amnesia
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user temporarily empties its mind to forget its concerns. It sharply raises the user's Sp. Def stat.";
			movedesc = "Raises user's Special Defense by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "ancientpower": //Ancient Power
			movetype = "Rock";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 10;
			flavor = "The user attacks with a prehistoric power. It may also raise all the user's stats at once.";
			movedesc = "10% chance to raise user's Attack, Defense, Special Attack, Special Defense and Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "aquajet": //Aqua Jet
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user lunges at the target at a speed that makes it almost invisible. It is sure to strike first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "aquaring": //Aqua Ring
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user envelops itself in a veil made of water. It regains some HP on every turn.";
			movedesc = "User recovers 1/16 (6.25%) of its max HP at the end of each turn.";
			moveflags = "Stolen by Snatch";
		break;
		case "aquatail": //Aqua Tail
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 90;
			effect = 0;
			flavor = "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "arclightning": //Arclightning
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 18;
			moveAcc = 90;
			effect = 0;
			flavor = "The user fires several lightning bolts that hit instantly, striking 2 to 5 times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit. +1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "arcweld": //Arc Weld
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 10;
			flavor = "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.";
			movedesc = "10% chance to burn target. Always does super-effective (2x) damage to Steel-types, even during Inverse Battles. See <a href='http://turquoise.alteredorigin.net/w/Arc_Weld'>here</a> for type effectiveness details.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "armthrust": //Arm Thrust
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 100;
			effect = 0;
			flavor = "The user looses a flurry of open-palmed arm thrusts that hit two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "aromatherapy": //Aromatherapy
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user releases a soothing scent that heals all status problems affecting the user's party.";
			movedesc = "Heals all status problems and confusion from every Pok&eacute;mon in user's party.";
			moveflags = "Stolen by Snatch";
		break;
		case "aromaticmist": //Aromatic Mist [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user raises the Sp. Def stat of an ally Pok&eacute;mon with a mysterious aroma. ";
			movedesc = "Raises target adjacent ally's Special Defense by 1. Does not affect user's Special Defense.";
			moveflags = "None";
		break;
		case "assist": //Assist
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user hurriedly and randomly uses a move among those known by other Pok&eacute;mon in the party.";
			movedesc = "Selects a random Pok&eacute;mon in user's party (other than user or eggs) and uses a random attack from that Pok&eacute;mon's current moveset. Will not call Assist, any moves on <a href='http://bulbapedia.bulbagarden.net/wiki/Assist_(move)#Generation_V'>this list</a>, or Parodize or Vanish.";
			moveflags = "None";
		break;
		case "assurance": //Assurance
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "If the target has already taken some damage in the same turn, this attack's power is doubled.";
			movedesc = "Base power doubles if target lost HP during this turn (except from Pain Split).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "astonish": //Astonish
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 100;
			effect = 30;
			flavor = "The user attacks the target while shouting in a startling fashion. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "attackorder": //Attack Order
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user calls out its underlings to pummel the target. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "attract": //Attract
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.";
			movedesc = "Infatuates target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "aurasphere": //Aura Sphere
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 101;
			effect = 0;
			flavor = "The user looses a blast of aura power from deep within its body at the target. This move is certain to hit.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "aurorabeam": //Aurora Beam
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.";
			movedesc = "10% chance to lower target's Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "autotomize": //Autotomize
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.";
			movedesc = "Raises user's Speed by 2. User's weight is halved (only on the first use, weight-halving effect does not stack).";
			moveflags = "Stolen by Snatch";
		break;
		case "avalanche": //Avalanche
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that inflicts double the damage if the user has been hurt by the target in the same turn.";
			movedesc = "Base power doubles if target hit the user with a damaging attack this turn. -4 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "babydolleyes": //Baby-Doll Eyes [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user stares at the target with its baby-doll eyes, which lowers its Attack stat. This move always goes first. ";
			movedesc = "Lowers target's Attack by 1. +1 priority.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "backstab": //Backstab
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 90;
			effect = 0;
			flavor = "The user disappears into the shadows and then strikes from behind on the next turn. This attack always results in a critical hit.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. User will not take damage from hail, miasma or sandstorm while in the semi-invulnerable turn of Backstab. Always scores a critical hit unless an effect (e.g. Battle Armor) would prevent critical hits.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "barrage": //Barrage
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 85;
			effect = 0;
			flavor = "Round objects are hurled at the target to strike two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "barrier": //Barrier
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user throws up a sturdy wall that sharply raises its Defense stat.";
			movedesc = "Raises user's Defense by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "batonpass": //Baton Pass
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user switches places with a party Pok&eacute;mon in waiting, passing along any stat changes.";
			movedesc = "User immediately switches out unless it is the last conscious Pok&eacute;mon in its party (in which case Baton Pass fails); user's trainer selects a replacement Pok&eacute;mon from the party. The following effects are transfered from user to replacement: Aqua Ring, confusion, Ghost Curse, Embargo, Focus Energy/other altered critical hit states, Gastro Acid, Ingrain, Leech Seed, Lock-On, Magnet Rise, Mind Reader, Neutral Gin, Perish Song count, Power Trick, Spirit Moon, Substitute (keeps its current HP, type, etc. from original user) and stat boosts/drops. Pursuit will not hit user before it switches out.";
			moveflags = "None";
		break;
		case "battlezone": //Battle Zone
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A mysterious field of amplifying energy is put up to increase damage from physical attacks for five turns.";
			movedesc = "For 5 turns (including this turn), or 8 turns if user holds a Light Clay when this move is used, physical attacks used by any active Pok&eacute;mon on user's side have their damage increased by 1/2 (50%), or 1/4 (25%) in doubles/triples. Battle Zone's effect will immediately end when Brick Break or Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "beatup": //Beat Up
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user gets all party Pok&eacute;mon to attack the target. The more party Pok&eacute;mon, the greater the number of attacks.";
			movedesc = "Base power is equal to (user's base Attack / 10) + 5. Hits 1-6 times, once for each Pok&eacute;mon in user's party (including user) that has not fainted and is not suffering from a major status condition. Damage does not take user's Attack boosts (e.g., from Swords Dance) into account, but does account for user's held item.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "belch": //Belch [GEN VI]
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 90;
			effect = 0;
			flavor = "The user lets out a damaging belch on the target. The user must eat a Berry to use this move.";
			movedesc = "Cannot be selected unless user has already eaten a berry (through the berry's activated effect, an opponent's berry via Pluck, Bug Bite, Fling or Berry Share, etc.; berries used directly from the trainer's bag or berries used to fuel the user's own Natural Gift, Fling or Berry Share do not count) at least once during this battle. Belch may be selected even if the user has switched out since eating the berry.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bellydrum": //Belly Drum
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user maximizes its Attack stat in exchange for HP equal to half its max HP.";
			movedesc = "Raises user's Attack to the maximum (+6). User loses HP equal to half of its max HP; this move fails if user doesn't have enough HP.";
			moveflags = "Stolen by Snatch";
		break;
		case "berryshare": //Berry Share
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user shares its held Berry with the target. The target is placated by the gift and may be easier to catch.";
			movedesc = "Fails if user is not holding a berry or cannot use its held berry due to Klutz, Unnerve or Embargo. Target receives the effect of the user's berry and the berry is consumed. For the next turn only, target's catch rate is quadrupled.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bestow": //Bestow
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user passes its held item to the target when the target isn't holding an item.";
			movedesc = "If user is holding an item and target isn't, takes user's held item and attaches it to the target. Cannot give a Griseous Orb to Giratina, a Plate to a target with Multitype or a Drive to Genesect. Items given away in trainer battles return to their original owners at the end of battle; items given away in wild battles stay with their recipient.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bide": //Bide
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user endures attacks for two turns, then strikes back to cause double the damge taken.";
			movedesc = "User becomes uncontrollable for 2 turns, including this turn. On the third turn user does typeless damage equal to twice the damage it receieved from attacks during those turns. Bide's damage targets the last Pok&eacute;mon to target user. +1 priority.";
			moveflags = "Makes contact, Blocked by Protect";
		break;
		case "bind": //Bind
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 85;
			effect = 100;
			flavor = "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.2%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "bite": //Bite
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The target is bitten with viciously sharp fangs. It may make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "blackice": //Black Ice
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "This move enables the user to attack first. This move fails if the target is not readying an attack.";
			movedesc = "Only works if target is about to use a damaging move (any Physical- or Special-class move) and has not already acted this turn. +1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "blackoutwave": //Blackout Wave
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "A two-turn attack. The user gathers negative thoughts, then releases a wave of darkness and fear on the second turn.";
			movedesc = "User charges this turn, then does damage next turn. The charge turn is skipped if the active weather is total darkness. Base power is halved if the active weather is bright sunlight. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "blastburn": //Blast Burn
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is razed by a fiery explosion. The user must rest on the next turn, however.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "blazekick": //Blaze Kick
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 90;
			effect = 10;
			flavor = "The user launches a kick that lands a critical hit more easily. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target. Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "blindside": //Blindside
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 101;
			effect = 0;
			flavor = "The user attacks last. In return, this ramming move is guaranteed not to miss.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig). -1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "blizzard": //Blizzard
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 70;
			effect = 10;
			flavor = "A howling blizzard is summoned to strike the apposing team. It may also freeze them solid.";
			movedesc = "10% chance to freeze target. Cannot miss if the active weather is hail.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "block": //Block
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 0;
			effect = 0;
			flavor = "The user blocks the target's way with arms spread wide to prevent escape.";
			movedesc = "Target cannot be switched out of or run from battle, unless it is holding Shed Shell or its ability is Run Away, as long as user remains in battle.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "blueflare": //Blue Flare
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 130;
			moveAcc = 85;
			effect = 20;
			flavor = "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. It may leave the target with a burn.";
			movedesc = "20% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bodyslam": //Body Slam
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 100;
			effect = 30;
			flavor = "The user drops onto the target with its full body weight. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target. Base power is doubled and will always hit if target has used Minimize at least once since entering battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "boltstrike": //Bolt Strike
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 85;
			effect = 20;
			flavor = "The user charges its target, surrounding itself with a great amount of electricity. It may leave the target with paralysis.";
			movedesc = "20% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "boneclub": //Bone Club
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 85;
			effect = 10;
			flavor = "The user clubs the target with a bone. It may also make the target flinch.";
			movedesc = "10% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bonerush": //Bone Rush
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 90;
			effect = 0;
			flavor = "The user strikes the target with a hard bone two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bonemerang": //Bonemerang
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 90;
			effect = 0;
			flavor = "The user throws the bone it holds. The bone loops to hit the target twice, coming and going";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "boomburst": //Boomburst [GEN VI]
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 140;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks everything around it with the destructive power of a terrible, explosive sound. ";
			movedesc = "Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "bouldercrash": //Boulder Crash
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is crushed when the user falls on top of it. If it misses, the user is hurt instead.";
			movedesc = "If this move misses, is blocked by Protect or Detect, or has no effect, user takes damage equal to 1/2 (50%) its maximum HP rounded down.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Stopped by Gravity";
		break;
		case "bounce": //Bounce
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 85;
			effect = 30;
			flavor = "The user bounces up high, then drops on the target on the second turn. It may also leave the target with paralysis.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected by Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, Twister and Whirlwind during its semi-invulnerable turn, and Gust and Twister have their base power doubled. User can also still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. 30% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn, Stopped by Gravity, Hits non-adjacent targets";
		break;
		case "bravado": //Bravado
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user boasts about its own abilities and demoralizes the target, raising the user's Attack but lowering the target's Defense.";
			movedesc = "Lowers target's Defense by 1 and raises user's Attack by 1. User's Attack is not raised if this move misses.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bravebird": //Brave Bird
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user tucks in its wings and charges from a low altitude. The user also takes serious damage.";
			movedesc = "User takes recoil equal to 1/3 (33%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "brickbreak": //Brick Break
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks with a swift chop. It can also break any barrier such as Light Screen and Reflect.";
			movedesc = "Immediately ends the effects of Battle Zone, Energy Zone, Light Screen and Reflect on target's side of the field. Ends Battle Zone, Energy Zone, Light Screen and Reflect even if Brick Break misses, but not if target is a Ghost-type. Reflect is removed before damage calculation, so Brick Break's damage is not reduced.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "brine": //Brine
			movetype = "Water";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "If the target's HP is down to about half, this attack will hit with double the power.";
			movedesc = "Base power doubles if target's current HP is equal to half or less its maximum HP.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bubble": //Bubble
			movetype = "Water";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "A spray of countless bubbles is jetted at the opposing team. It may also lower the targets' Speed stats.";
			movedesc = "10% chance to lower target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bubblebeam": //Bubble Beam
			movetype = "Water";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 10;
			flavor = "A spray of bubbles is forcefully ejected at the opposing team. It may also lower their Speed stats.";
			movedesc = "10% chance to lower target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bugbite": //Bug Bite
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.";
			movedesc = "If target is holding a berry, the berry is destroyed and user immediately gains its effect. Jaboca and Tanga berries will activate for the target before user can eat them. Does not consume berries if target is behind a Substitute.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "bugbuzz": //Bug Buzz
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The user vibrates its wings to generate a damaging sound wave. It may also lower the target's Sp. Def stat.";
			movedesc = "10% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "bulkup": //Bulk-up
			movetype = "Fighting";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user tenses its muscles to bulk up its body, boosting both its Attack and Defense stats.";
			movedesc = "Raises user's Attack and Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "bulldoze": //Bulldoze
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 100;
			flavor = "The user stomps down on the ground and attacks everything in the area. Hit Pok&eacute;mon's Speed stat is reduced.";
			movedesc = "100% chance to lower target's Speed by 1. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "bulletpunch": //Bullet Punch
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user strikes the target with tough punches as fast as bullets. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "bulletseed": //Bullet Seed
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 100;
			effect = 0;
			flavor = "The user forcefully shoots seeds at the target. Two to five seeds are shot in rapid succession.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "calmmind": //Calm Mind
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.";
			movedesc = "Raises user's Special Attack and Special Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "calmskies": //Calm Skies
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user clears the skies and calms the wind, returning the weather to normal.";
			movedesc = "Immediately ends the effects of Eclipse, Foul Haze, Hail, Rain Dance, Sandstorm and Sunny Day and removes heavy fog.";
			moveflags = "None";
		break;
		case "camouflage": //Camouflage
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user's type is changed depending on its environment, such as at water's edge, in grass, or in a cave.";
			movedesc = "User's type changes into another type based on the current terrain, determined by the route on which the battle takes place and the active terrain effect. <a href='http://turquoise.alteredorigin.net/w/Guide:Differences_from_Canon#Camouflage'>See here</a> for a list of possible types.";
			moveflags = "Stolen by Snatch";
		break;
		case "captivate": //Captivate
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "If it is the opposite gender of the user, the target is charmed into harshly lowering its Sp. Atk stat.";
			movedesc = "Lowers target's Special Attack by 2. Fails if target is same gender as user, if target has Oblivious, or if either user or target is genderless.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "celebrate": //Celebrate [GEN VI]
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "No effect.";
			moveflags = "None";
		break;
		case "celebratecandycane": //Celebrate (Candy Cane) [GEN VI]
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 90;
			effect = 50;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Candy Cane item. 50% chance to lower target's Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "celebrateconfetti": //Celebrate (Confetti) [GEN VI]
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 90;
			effect = 50;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Confetti item. Has a 50% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "celebrateearthdaycake": //Celebrate (Earthday Cake) [GEN VI]
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 95;
			effect = 0;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Earthday Cake item. Lowers target's Evasion by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "celebratefirework": //Celebrate (Firework) [GEN VI]
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 90;
			effect = 0;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Firework item. +1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "celebratefizzyfunjuice": //Celebrate (Fizzy Fun Juice) [GEN VI]
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 95;
			effect = 0;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Fizzy Fun Juice item. Has a 20% chance to simultaneously poison and confuse the target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "celebratepartyball": //Celebrate (Party Ball) [GEN VI]
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 90;
			effect = 20;
			flavor = "The Pok&eacute;mon celebrates a special day with you!";
			movedesc = "User must hold Party Ball item. 20% chance to confuse target; separate 20% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "charge": //Charge
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user boosts the power of the Electric move it uses on the next turn. It also raises the user's Sp. Def stat.";
			movedesc = "Raises user's Special Defense by 1. If user uses an Electric-type attack on the following turn, that move's base power is doubled.";
			moveflags = "Stolen by Snatch";
		break;
		case "chargebeam": //Charge Beam
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 90;
			effect = 70;
			flavor = "The user attacks with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat.";
			movedesc = "70% chance to raise user's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "charm": //Charm
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user gazes at the target rather charmingly, making it less wary. The target's Attack is harshly lowered.";
			movedesc = "Lowers target's Attack by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "chatter": //Chatter
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 31;
			flavor = "The user attacks using a sound wave based on words it has learned. It may also confuse the target.";
			movedesc = "31% chance to confuse target. Cannot cause confusion if user is not Chatot or Lyrissimo.";
			moveflags = "Blocked by Protect, Sound-based, Bypasses Substitute, Hits non-adjacent targets";
		break;
		case "chipaway": //Chip Away
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "Looking for an opening, the user strikes continually. The target's stat changes don't affect this attack's damage.";
			movedesc = "Ignores target's Defense and Evasion boosts (but does not ignore Reflect).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "circlethrow": //Circle Throw
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 90;
			effect = 0;
			flavor = "The user throws the target and drags out another Pok&eacute;mon in its party. In the wild, the battle ends.";
			movedesc = "Immediately ends wild battles. In trainer battles, forces trainers to switch the target with another randomly-selected Pok&eacute;mon in their party; fails if target's trainer has no Pok&eacute;mon remaining, if target is behind a Substitute, if target is under the effect of Ingrain or if target's ability is Suction Cups. Priority -6.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "clamp": //Clamp
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 35;
			moveAcc = 85;
			effect = 100;
			flavor = "The target is clamped and squeezed by the user's very thick and sturdy shell for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "clearsmog": //Clear Smog
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 101;
			effect = 0;
			flavor = "The user attacks by throwing a clump of special mud. All status changes are returned to normal.";
			movedesc = "Resets all of target's modified stats to 0. Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "closecombat": //Close Combat
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user fights the target up close without guarding itself. It also cuts the user's Defense and Sp. Def.";
			movedesc = "Lowers user's Defense and Special Defense by 1 each.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "coalscatter": //Coal Scatter
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "The user hurls burning coals at the opposing PokÃ©mon. This may also make those PokÃ©mon flinch.";
			movedesc = "10% chance to make target flinch. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "coil": //Coil
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy.";
			movedesc = "Raises user's Accuracy, Attack and Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "cometpunch": //Comet Punch
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 18;
			moveAcc = 85;
			effect = 0;
			flavor = "The target is hit with a flurry of punches that strike two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "confide": //Confide [GEN VI]
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat. ";
			movedesc = "Lowers target's Special Attack by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based";
		break;
		case "confuseray": //Confuse Ray
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is exposed to a sinister ray that triggers confusion.";
			movedesc = "Confuses the target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "confusion": //Confusion
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is hit by a weak telekinetic force. It may also leave the target confused.";
			movedesc = "10% chance to confuse target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "constrict": //Constrict
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 10;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is attacked with long, creeping tentacles or vines. It may also lower the target's Speed stat.";
			movedesc = "10% chance to lower target's Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "conversion": //Conversion
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user changes its type to become the same type as one of its moves.";
			movedesc = "User's type changes to the type of one of its other moves, chosen at random. Conversion cannot change user into a type it already is and will fail if all moves are of the user's type. Hidden Power and Weather Ball are considered Normal-type for the purposes of this move.";
			moveflags = "Stolen by Snatch";
		break;
		case "conversion2": //Conversion 2
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user changes its type to make itself resistant to the type of the attack the opponent used last.";
			movedesc = "User's type changes to a random single type that resists or is immune to target's last move (e.g., changes into a Rock-, Steel- or Ghost-type if target's last move was Normal). Conversion 2 cannot change user into a type it already is and will fail if target's last move is of the user's type.";
			moveflags = "Bypasses Substitute";
		break;
		case "copycat": //Copycat
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user mimics the move used immediately before it. The move fails if no other move has been used yet.";
			movedesc = "User uses the last move that was successfully used in this battle (even if that move was the user's). If Circle Throw or Dragon Tail is the last move used, Copycat attempts to copy the last appropriate move before that move. Fails if no other moves have been used yet, if the opponent switched in during this turn, or if the last move used is Copycat or Mirror Move.";
			moveflags = "None";
		break;
		case "corrode": //Corrode
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Enables a Steel-type target to be hit by Poison-type attacks. It also melts away defenses.";
			movedesc = "Resets target's Defense to 0. Target cannot raise its Defense until it leaves the field. Steel-type targets take normal damage from Poison-type moves (they are still immune to being poisoned, however).";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "cosmicpower": //Cosmic Power
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user absorbs a mystical power from space to raise its Defense and Sp. Def stats.";
			movedesc = "Raises user's Defense and Special Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "cottonguard": //Cotton Guard
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user protects itself by wrapping its body in soft cotton, drastically raising the user's Defense stat.";
			movedesc = "Raises user's Defense by 3.";
			moveflags = "Stolen by Snatch";
		break;
		case "cottonspore": //Cotton Spore
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user releases cotton-like spores that cling to the target, harshly reducing its Speed stat.";
			movedesc = "Lowers target's Speed by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "counter": //Counter
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A retaliation move that counters any physical attack, inflicting double the damage taken.";
			movedesc = "User does damage equal to 2x (200%) the damage dealt by the last Physical-class attack that hit it this turn, unmodified by target's weaknesses or resistances (but does not affect Ghost-types). Counter's target is the last Pok&eacute;mon to damage the user with a Physical-class attack this turn. Fails against Special-class attacks, if the last Pok&eacute;mon to attack user was its ally, or if user took no damage from attacks this turn. -5 priority.";
			moveflags = "Makes contact, Blocked by Protect";
		break;
		case "covet": //Covet
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user endearingly approaches the target, then steals the target's held item.";
			movedesc = "If target is holding an item and user isn't, steals target's held item and attaches it to the user. Cannot steal from targets whose ability is Multitype or Sticky Hold, or if target's item is a Griseous Orb and either user or target is Giratina. Items stolen from trainers (player or opponent) are returned to that trainer at the end of the battle; items stolen from wild Pok&eacute;mon are kept.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "craftyshield": //Crafty Shield [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage.";
			movedesc = "User and its allies cannot be affected by any Other-class move (i.e., non-damaging moves) for the rest of this turn. Fails if user moves last this turn. +3 priority. [EFFECT TBD]";
			moveflags = "Stolen by Snatch";
		break;
		case "crabhammer": //Crabhammer
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is hammered with a large pincer. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crosschop": //Cross Chop
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 80;
			effect = 0;
			flavor = "The user delivers a double chop with its forearms crossed. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crosspoison": //Cross Poison
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 10;
			flavor = "A slashing attack with a poisonous blade that may also leave the target poisoned. Critical hits land more easily.";
			movedesc = "10% chance to poison target. Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crunch": //Crunch
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 20;
			flavor = "The user crunches up the target with sharp fangs. It may also lower the target's Defense stat.";
			movedesc = "20% chance to lower target's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crushclaw": //Crush Claw
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 95;
			effect = 50;
			flavor = "The user slashes the target with hard and sharp claws. It may also lower the target's Defense.";
			movedesc = "50% chance to lower target's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crushgrip": //Crush Grip
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is crushed with great force. The attack is more powerful the more HP the target has left.";
			movedesc = "Has 121 power when target's HP is full and gets lower as target's HP is reduced, to a minimum of 1. Base power = 1 + (120 * target's current HP / target's max HP), rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "crystalsmash": //Crystal Smash
			movetype = "Light";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user shatters a crystal with a powerful strike, showering the target with shards. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "curse": //Curse
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A move that works differently for the Ghost type than for all other types.";
			movedesc = "If user is not a Ghost-type, lowers user's Speed by 1 and raises user's Attack and Defense by 1 each. If user is a Ghost-type, user loses 1/2 (50%) of its maximum HP and inflicts the Curse condition on the target. Cursed Pok&eacute;mon lose 1/4 (25%) of their maximum HP at the end of each turn.";
			moveflags = "Bypasses Substitute";
		break;
		case "cut": //Cut
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 95;
			effect = 0;
			flavor = "The target is cut with a scythe or a claw. Critical hits land more easily. It can also be used to cut down some obstacles.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "daringdash": //Daring Dash
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 95;
			moveAcc = 85;
			effect = 20;
			flavor = "The user makes a brave charge at the target that fills it with courage. It may raise the user's Attack and Speed.";
			movedesc = "20% chance to raise user's Attack and Speed by 1 each.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "darkpulse": //Dark Pulse
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 20;
			flavor = "The user releases a horrible aura imbued with dark thoughts. It may also make the target flinch.";
			movedesc = "20% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "darkvoid": //Dark Void
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 80;
			effect = 0;
			flavor = "Opposing Pok&eacute;mon are dragged into a world of total darkness that makes them sleep.";
			movedesc = "Target falls asleep. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "dazzlinggleam": //Dazzling Gleam [GEN VI]
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user damages opposing Pok&eacute;mon by emitting a powerful flash.";
			movedesc = "Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "defendorder": //Defend Order
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.";
			movedesc = "Raises user's Defense and Special Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "defensecurl": //Defense Curl
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user curls up to conceal weak spots and raise its Defense stat.";
			movedesc = "Raises user's Defense by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "defog": //Defog
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A strong wind blows away obstacles such as Reflect or Light Screen. It also lowers the target's evasiveness.";
			movedesc = "Lowers target's Evasion by 1. Immediately ends the fog weather condition. Immediately ends the effects of Hot Coals, Mist, Light Screen, Reflect, Safeguard, Spikes, Stealth Rock, and Toxic Spikes from both sides of the field. If target is protected by Mist, it will prevent the Evasion change, then be removed by Defog.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "destinybond": //Destiny Bond
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "When this move is used, if the user faints, the Pok&eacute;mon that landed the knockout hit also faints.";
			movedesc = "If user is knocked out before performing its next move, the Pok&eacute;mon that knocked it out will automatically faint. Does not activate if user faints due to end-of-turn damage (e.g., poison damage or weather damage). This move cannot be selected by Assist or Metronome.";
			moveflags = "Bypasses Substitute";
		break;
		case "destroyerdriver": //Destroyer Driver
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 80;
			effect = 10;
			flavor = "The user cruelly slams the target's head into the ground and may stun or paralyze it. This move is Fighting and Dark type simultaneously.";
			movedesc = "10% chance to paralyze target; separate 10% chance to make target flinch. Type effectiveness is calculated as a combination of both Fighting- and Dark-type damage. Only Fighting-type users receive STAB. See <a href='http://turquoise.alteredorigin.net/w/Destroyer_Driver'>here</a> for type effectiveness details.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "detect": //Detect
			movetype = "Fighting";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "It enables the user to evade all attacks. Its chance of failing rises if it is used in succession.";
			movedesc = "User cannot be damaged or affected by any move with the 'Blocked by Protect' flag (essentially almost all moves that target it) for the rest of this turn. Does not block end-of-turn effects or damage like weather damage or status ailments. Fails if user moves last this turn. If the user successfully used Detect, Endure, King's Shield, Protect, Spiky Shield or Vanish last turn, this move has a 50% chance to fail. +4 priority.";
			moveflags = "None";
		break;
		case "dig": //Dig
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user burrows, then attacks on the second turn. It can also be used to exit dungeons.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected by Aftershock, Earthquake, Fissure and Magnitude during its semi-invulnerable turn, and those moves' base power is doubled where appropriate. User can also still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. User will not take damage from hail, miasma or sandstorm while in the semi-invulnerable turn of Dig.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "disable": //Disable
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "For four to seven turns, this move prevents the target from using the move it last used.";
			movedesc = "Disables the target's last used move for 4-7 turns. Fails if target hasn't used a move since entering the field, if its last used move has 0 PP remaining, or if it already has a move disabled.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "disarmingvoice": //Disarming Voice [GEN VI]
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 101;
			effect = 0;
			flavor = "Letting out a charming cry, the user does emotional damage to opposing Pok&eacute;mon. This attack never misses.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig). Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "discharge": //Discharge
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 30;
			flavor = "A flare of electricity is loosed to strike the area around the user. It may also cause paralysis.";
			movedesc = "30% chance to paralyze target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dive": //Dive
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "Diving on the first turn, the user floats up and attacks on the second turn. It can be used to dive deep in the ocean.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected by Surf and Whirlpool during its semi-invulnerable turn, and those moves' base power is doubled. User can also still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. User will not take damage from hail, miasma or sandstorm while in the semi-invulnerable turn of Dive.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "divinearrow": //Divine Arrow
			movetype = "Light";
			moveclass = "Special";
			moveBP = 95;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is seared by an intense, focused beam of pure light. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dizzypunch": //Dizzy Punch
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 20;
			flavor = "The target is hit with rhythmically launched punches that may also leave it confused.";
			movedesc = "20% chance to confuse target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "doomdesire": //Doom Desire
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 140;
			moveAcc = 100;
			effect = 0;
			flavor = "Two turns after this move is used, the user blasts the target with a concentrated bundle of light.";
			movedesc = "User prepares an attack on this turn, then does damage at the end of the turn 2 turns later, regardless of whether the user or original target is still on the field. Damage is calculated based on user's Special Attack and the Special Defense of the target that is active when Doom Desire hits. Ignores Detect, Endure, King's Shield, Mat Block, Protect, Spiky Shield and Wonder Guard due to dealing damage at end-of-turn. Cannot score a critical hit. Does not stack with other uses of Future Sight or Doom Desire.";
			moveflags = "None";
		break;
		case "doublehit": //Double Hit
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 35;
			moveAcc = 90;
			effect = 0;
			flavor = "The user slams the target with a long tail, vines, or tentacle. The target is hit twice in a row.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "doublekick": //Double Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is quickly kicked twice in succession using both feet.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "doubleteam": //Double Team
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.";
			movedesc = "Raises user's Evasion by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "doubleedge": //Double-Edge
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "A reckless, life-risking tackle. It also damages the user by a fairly large amount, however.";
			movedesc = "User takes recoil equal to 1/3 (33%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "doubleslap": //Double Slap
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 85;
			effect = 0;
			flavor = "The target is slapped repeatedly, back and forth, two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "downdraft": //Downdraft
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user creates a blast of wind that rushes straight down. A flying PokÃ©mon will fall to the ground when it's hit.";
			movedesc = "Target loses immunity to Ground-type moves (whether target was a Flying-type, had Levitate or was under the effect of Magnet Rise or Telekinesis) until it switches out. Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move; the strike turns of Bounce and Fly will immediately be canceled upon being hit. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dracometeor": //Draco Meteor
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 130;
			moveAcc = 90;
			effect = 0;
			flavor = "Comets are summoned down from the sky onto the target. The attack's recoil harshly reduces the user's Sp. Atk stat.";
			movedesc = "Lowers user's Special Attack by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragonaura": //Dragon Aura
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "The user startles the target with its fearsome aura. It may also make the target flinch.";
			movedesc = "10% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "dragonbreath": //Dragon Breath
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The user exhales a mighty gust that inflicts damage. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragonclaw": //Dragon Claw
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slashes the target with huge, sharp claws.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragondance": //Dragon Dance
			movetype = "Dragon";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user vigorously performs a mystic, powerful dance that boosts its Attack and Speed stats.";
			movedesc = "Raises user's Attack and Speed by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "dragondive": //Dragon Dive
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user performs a spectacular dive into the foe while cloaked in flames. It grows in power the cooler the user is.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 127 and a minimum BP of 1. Base power = user's happiness / 2, rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragonflare": //Dragon Flare
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 90;
			effect = 0;
			flavor = "The user's gems flash suddenly and release a rush of energy. This attack always results in a critical hit.";
			movedesc = "Always scores a critical hit unless an effect (e.g. Battle Armor) would prevent critical hits.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragonpulse": //Dragon Pulse
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 85;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is attacked with a shock wave generated by the user's gaping mouth.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "dragonrage": //Dragon Rage
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "This attack hits the target with a shock wave of pure rage. This attack always inflicts 40 HP damage.";
			movedesc = "Inflicts exactly 40 points of typeless damage.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragonrush": //Dragon Rush
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 75;
			effect = 20;
			flavor = "The user tackles the target while exhibiting overwhelming menace. It may also make the target flinch.";
			movedesc = "20% chance to make target flinch. Base power is doubled and will always hit if target has used Minimize at least once since entering battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragontail": //Dragon Tail
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 90;
			effect = 0;
			flavor = "The user knocks away the target and drags out another Pok&eacute;mon in its party. In the wild, the battle ends.";
			movedesc = "Immediately ends wild battles. In trainer battles, forces trainers to switch the target with another randomly-selected Pok&eacute;mon in their party; fails if target's trainer has no Pok&eacute;mon remaining, if target is behind a Substitute, if target is under the effect of Ingrain or if target's ability is Suction Cups. Priority -6.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dragunder": //Drag Under
			movetype = "Water";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user drags the foe under the water with it, holding it down until the next turn. The target cannot attack while underwater.";
			movedesc = "User and target become semi-invulnerable and user does damage this turn, then both return to the surface the next turn. Target cannot act while held underwater by Drag Under. Water-type targets take no damage from Drag Under, but the rest of the move's effects behave as normal against them. User and target can still be damaged/affected by Surf and Whirlpool during their semi-invulnerable turn, and both moves have their base power doubled. User and target can also still be damaged/affected during their semi-invulnerable turn if they were targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking them has No Guard.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "drainingkiss": //Draining Kiss [GEN VI]
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user steals the target's energy with a kiss. The user's HP is restored by over half of the damage taken by the target.";
			movedesc = "User recovers HP equal to 3/4 (75%) of the damage dealt. If user is holding Big Root, recovery is increased to 100% of the damage dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "drainlife": //Drain Life
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user drains the target's blood. The user's HP is restored by over half of the damage taken by the target.";
			movedesc = "User recovers HP equal to 3/4 (75%) of the damage dealt. If user is holding Big Root, recovery is increased to 100% of the damage dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "drainpunch": //Drain Punch
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "An energy-draining punch. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "dreameater": //Dream Eater
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user eats the dreams of a sleeping target. It absorbs half the damage caused to heal the user's HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt. Fails if target is not asleep. Does not trigger Liquid Ooze.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "drillpeck": //Drill Peck
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "A corkscrewing attack with the sharp beak acting as a drill.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "drillrun": //Drill Run
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 90;
			effect = 0;
			flavor = "The user crashes into its target while rotating its body like a drill. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dualchop": //Dual Chop
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 90;
			effect = 0;
			flavor = "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "dynamicpunch": //Dynamic Punch
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 50;
			effect = 100;
			flavor = "The user punches the target with full, concentrated power. It confuses the target if it hits.";
			movedesc = "100% chance to confuse target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "dynamize": //Dynamize
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user generates an electromagnetic field to boost its Sp. Attack stat and accuracy.";
			movedesc = "Raises user's Special Attack and Accuracy by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "eagleeye": //Eagle Eye
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user focuses its keen vision on its targets, drastically raising its accuracy.";
			movedesc = "Raises user's Accuracy by 3.";
			moveflags = "Stolen by Snatch";
		break;
		case "earsplitter": //Ear Splitter
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 130;
			moveAcc = 90;
			effect = 0;
			flavor = "The user deafens those around it with an awful, ear-splitting blast of noise.";
			movedesc = "Inflicts the <a href='http://turquoise.alteredorigin.net/w/New_Mechanics#Deafened'>Deafened</a> condition on the target until the end of the next turn. Deafened Pok&eacute;mon are unaffected by moves with the 'Sound-based, Bypasses Substitute' flag (including this one), as though their ability was Cacophony or Soundproof.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "earthpower": //Earth Power
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The user makes the ground under the target erupt with power. It may also lower the target's Sp. Def.";
			movedesc = "10% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "earthquake": //Earthquake
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user sets off an earthquake that strikes those around it.";
			movedesc = "Targets in the semi-invulnerable turn of Dig can be hit with this move; base power is doubled against these targets. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "echoedvoice": //Echoed Voice
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target with an echoing voice. If this move is used every turn, it does greater damage.";
			movedesc = "Base power increases by 40 each consecutive turn it is used, no matter which ally uses it, with maximum 200 power. Power increases even if move is blocked or misses, but only increases once per turn at the end of the turn.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "eclipse": //Eclipse
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user blots out all light for five turns, powering up Dark-type moves.";
			movedesc = "Changes active weather to total darkness for 5 turns (including this turn), or 8 turns if user holds a Gloomy Rock when this move is used. Total darkness weather condition explained further <a href='http://turquoise.alteredorigin.net/w/New_Mechanics#Total_Darkness'>here</a>.";
			moveflags = "None";
		break;
		case "ectoplasm": //Ectoplasm
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "A ghostly shadow drains life from the target. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "eerieimpulse": //Eerie Impulse [GEN VI]
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat.";
			movedesc = "Lowers target's Special Attack by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "eggbomb": //Egg Bomb
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 75;
			effect = 0;
			flavor = "A large egg is hurled at the target with maximum force to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "electricterrain": //Electric Terrain [GEN VI]
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user electrifies the ground under everyone's feet for five turns. Pok&eacute;mon on the ground no longer fall asleep.";
			movedesc = "Changes active terrain to electric for 5 turns (including this turn). Electric terrain explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Electric_Terrain_(move)'>here</a>.";
			moveflags = "None";
		break;
		case "electrify": //Electrify [GEN VI]
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "If the target is electrified before it uses a move during that turn, the target's move becomes Electric type.";
			movedesc = "If target has not already acted this turn, target's next move becomes Electric-type.";
			moveflags = "Blocked by Protect";
		break;
		case "electroball": //Electro Ball
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user hurls an electric orb at the target. The faster the user is than the target, the greater the damage.";
			movedesc = "Power is higher when the user has greater Speed than the target, with a minimum of 60 and up to a maximum of 150. <a href='http://bulbapedia.bulbagarden.net/wiki/Electro_Ball_%28move%29#Effect'>See here</a> for the method used to determine base power.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "electroweb": //Electroweb
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 95;
			effect = 100;
			flavor = "The user captures and attacks opposing Pok&eacute;mon by using an electric net. It reduces the targets' Speed stat.";
			movedesc = "Lowers target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "embargo": //Embargo
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "It prevents the target from using its held item. Its Trainer is also prevented from using items on it.";
			movedesc = "For the next 5 turns, target cannot use held items or have items used on it by its trainer.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "ember": //Ember
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is attacked with small flames. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "encore": //Encore
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user compels the target to keep using only the move it last used for three turns.";
			movedesc = "Forces target to repeat its last used move every turn for 3 turns. If target is unable to use the move that has been Encored (e.g. if the move was subsequently Disabled or target was affected by Torment), target will use Struggle on any turns it cannot use the Encored move until Encore ends or the effect preventing the use of that move ends. Fails if the move to be encored is Encore, Mimic, Mirror Move, Sketch, Struggle or Transform. Encore can be reflected by Magic Coat but will then fail against the original user.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "endeavor": //Endeavor
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that cuts down the target's HP to equal the user's HP.";
			movedesc = "Sets target's current HP equal to user's current HP. Fails if user's HP is higher than target's.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "endure": //Endure
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.";
			movedesc = "User's HP cannot fall below 1 for the rest of this turn. If the user successfully used Detect, Endure, King's Shield, Protect, Spiky Shield, or Vanish last turn, this move has a 50% chance to fail. Priority +3.";
			moveflags = "None";
		break;
		case "energyball": //Energy Ball
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The user draws power from nature and fires it at the target. It may also lower the target's Sp. Def.";
			movedesc = "10% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "energyzone": //Energy Zone
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A mysterious field of amplifying energy is put up to increase damage from special attacks for five turns.";
			movedesc = "For 5 turns (including this turn), or 8 turns if user holds a Light Clay when this move is used, special attacks used by any active Pok&eacute;mon on user's side have their damage increased by 1/2 (50%), or 1/4 (25%) in doubles/triples. Energy Zone's effect will immediately end when Brick Break or Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "entrainment": //Entrainment
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's.";
			movedesc = "Makes target's ability the same as user's.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "eruption": //Eruption
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the opposing team with explosive fury. The lower the user's HP, the less powerful this attack becomes.";
			movedesc = "Has 150 power when user's HP is full and gets lower as user's HP is reduced. Base power = 150 * (user's current HP / user's maximum HP), rounded down to the nearest whole number. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "explosion": //Explosion
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 250;
			moveAcc = 100;
			effect = 0;
			flavor = "The user explodes to inflict damage on those around it. The user faints upon using this move. ";
			movedesc = "User faints. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "extrasensory": //Extrasensory
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 10;
			flavor = "The user attacks with an odd, unseeable power. It may also make the target flinch.";
			movedesc = "10% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "extremespeed": //Extreme Speed
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "he user charges the target at blinding speed. This attack always goes before any other move.";
			movedesc = "+2 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "facade": //Facade
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that doubles its power if the user is poisoned, burned, or has paralysis.";
			movedesc = "Base power doubles if user is paralyzed, poisoned or burned.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "fairydance": //Fairy Dance
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user elegantly performs a mystic, inspiring dance that boosts its Special Attack and Speed stats.";
			movedesc = "Raises user's Special Attack and Speed by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "fairylock": //Fairy Lock [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "By locking down the battlefield, the user keeps all Pok&eacute;mon from fleeing during the next turn.";
			movedesc = "No Pok&eacute;mon can switch out of or flee from battle as long as user is on the field.";
			moveflags = "None";
		break;
		case "fairyring": //Fairy Ring
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 35;
			moveAcc = 85;
			effect = 100;
			flavor = "The target becomes trapped within a ring of light and energy that buffets it for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "fairywind": //Fairy Wind [GEN VI]
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user stirs up a fairy wind and strikes the target with it.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "fakeout": //Fake Out
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 100;
			flavor = "An attack that hits first and makes the target flinch. It only works the first turn the user is in battle.";
			movedesc = "Target flinches. Can only be used on user's first turn after entering the field. Priority +3.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "faketears": //Fake Tears
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user feigns crying to fluster the target, harshly lowering its Sp. Def stat.";
			movedesc = "Lowers target's Special Defense by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "falseswipe": //False Swipe
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.";
			movedesc = "Cannot lower target's HP below 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "featherdance": //Feather Dance
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user covers the target's body with a mass of down that harshly lowers its Attack stat.";
			movedesc = "Lowers target's Attack by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "featherrain": //Feather Rain
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 90;
			effect = 0;
			flavor = "The user strikes the target with flurries of sharp feathers. Two to five flurries are launched in quick succession.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times.  Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "feint": //Feint
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 30;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack that hits a target using Protect or Detect. It also lifts the effects of those moves.";
			movedesc = "Hits through Detect, Protect, Quick Guard, Vanish and Wide Guard and removes their effects for the rest of this turn."
			moveflags = "None";
		break;
		case "feintattack": //Feint Attack
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user approaches the target disarmingly, then throws a sucker punch. It hits without fail.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "fellstinger": //Fell Stinger [GEN VI]
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 100;
			effect = 0;
			flavor = "When the user knocks out a target with this move, the user's Attack stat rises sharply.";
			movedesc = "If target is knocked out by this move, raises user's Attack by 2.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "fierydance": //Fiery Dance
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 50;
			flavor = "Cloaked in flames, the user dances and flaps its wings. It may also raise the user's Sp. Atk stat.";
			movedesc = "50% chance to raise user's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "finalgambit": //Final Gambit
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user risks everything to attack its target. The user faints but does damage equal to the user's HP.";
			movedesc = "Inflicts damage equal to user's remaining HP. User faints.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "fireblast": //Fire Blast
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 85;
			effect = 10;
			flavor = "The target is attacked with an intense blast of all-consuming fire. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "firefang": //Fire Fang
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 95;
			effect = 10;
			flavor = "The user bites with flame-cloaked fangs. It may also make the target flinch or leave it burned.";
			movedesc = "10% chance to burn target; separate 10% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "firepledge": //Fire Pledge
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "A column of fire hits opposing Pok&eacute;mon. When used with its Grass equivalent, its damage increases into a vast sea of fire. ";
			movedesc = "Does not activate Fire Gem. Base power doubles if an ally in doubles/triples uses Grass Pledge or Water Pledge this turn; both this move and the other Pledge move hit the target chosen by the slower Pledge user. If the other Pledge move is Water Pledge, moves used by any friendly Pok&eacute;mon have doubled effect chance for 4 turns (including this one; does not stack with Serene Grace). If the other Pledge move is Grass Pledge, non-Fire-type opponents adjacent to the slower Pledge user take damage equal to 1/8 (12.5%) of their max HP at the end of each turn for 4 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "firepunch": //Fire Punch
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is punched with a fiery fist. It may also leave the target with a burn. ";
			movedesc = "10% chance to burn target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "firespin": //Fire Spin
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 35;
			moveAcc = 85;
			effect = 100;
			flavor = "The target becomes trapped within a fierce vortex of fire that rages for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "fissure": //Fissure
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 30;
			effect = 0;
			flavor = "The user opens up a fissure in the ground and drops the target in. The target instantly faints if it hits.";
			movedesc = "Target faints. Doesn't affect targets of a higher level.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flail": //Flail
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user flails about aimlessly to attack. It becomes more powerful the less HP the user has.";
			movedesc = "The lower the user's HP, the higher this move's base power, with a maximum BP of 200. <a href='http://bulbapedia.bulbagarden.net/wiki/Flail_%28move%29#Generation_V'>See here</a> for the formula and base power table used.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "flameburst": //Flame Burst
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 100;
			flavor = "The user attacks the target with a bursting flame. The bursting flame damages Pok&eacute;mon next to the target as well.";
			movedesc = "Pok&eacute;mon adjacent to the target take damage equal to 1/16 (6.25%) their max HP.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flamecharge": //Flame Charge
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 100;
			flavor = "The user cloaks itself with flame and attacks. Building up more power, it raises the user's Speed stat.";
			movedesc = "Raises user's Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "flamethrower": //Flamethrower
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is scorched with an intense blast of fire. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flamewheel": //Flame Wheel
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 10;
			flavor = "The user cloaks itself in fire and charges at the target. It may also leave the target with a burn.";
			movedesc = "10% chance to burn target. Frozen users will thaw before using this move.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "flareblitz": //Flare Blitz
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 10;
			flavor = "The user cloaks itself in fire and charges at the target. The user sustains serious damage and may leave the target burned.";
			movedesc = "User takes recoil equal to 1/3 (33%) the damage dealt to target. 10% chance to burn target. Frozen users will thaw before using this move.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "flash": //Flash
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user flashes a bright light that cuts the target's accuracy. It can also be used to illuminate caves. ";
			movedesc = "Lowers target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "flashcannon": //Flash Cannon
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 10;
			flavor = "The user gathers all its light energy and releases it at once. It may also lower the target's Sp. Def stat.";
			movedesc = "10% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flashshot": //Flash Shot
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 90;
			effect = 15;
			flavor = "The user blasts the target with harsh reflected light. This may also make the target flinch or lower its accuracy.";
			movedesc = "15% chance to lower target's Accuracy; separate 15% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flatter": //Flatter
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "Flattery is used to confuse the target. However, it also raises the target's Sp. Atk stat.";
			movedesc = "Confuses target. Raises target's Special Attack by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "fling": //Fling
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user flings its held item at the target to attack. Its power and effects depend on the item.";
			movedesc = "Base power and effect depend on user's held item. <a href='http://bulbapedia.bulbagarden.net/wiki/Fling_%28move%29#Effect'>See here</a> for a list of most base powers and effects, and also note the following Turquoise-specific items <a href='http://turquoise.alteredorigin.net/w/Guide:Differences_from_Canon#Fling'>here</a>. User's item is consumed or lost afterward. Fails if user is not holding anything, if user is holding any type of Pok&eacute; Ball, Mail or Mega Stone, if user's ability is Klutz, or if user is under the effect of Embargo.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "flowershield": //Flower Shield [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user raises the Defense stat of all Grass-type Pok&eacute;mon in battle with a mysterious power.";
			movedesc = "Raises the Defense of all Grass-type Pok&eacute;mon on the field by 1.";
			moveflags = "None";
		break;
		case "flutterjump": //Flutter Jump
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 100;
			effect = 30;
			flavor = "The user bounces cutely onto the target's head. This may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "fly": //Fly
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 95;
			effect = 100;
			flavor = "The user soars, then strikes its target on the second turn. It can also be used for flying to any familiar town.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected by Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, Twister and Whirlwind during its semi-invulnerable turn, and Gust and Twister have their base power doubled. User can also still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn, Stopped by Gravity, Hits non-adjacent targets";
		break;
		case "flyingpress": //Flying Press [GEN VI]
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 95;
			effect = 0;
			flavor = "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.";
			movedesc = "Base power is doubled and will always hit if target has used Minimize at least once since entering battle. Type effectiveness is calculated as a combination of both Fighting- and Flying-type damage. Only Fighting-type users receive STAB. See <a href='http://bulbapedia.bulbagarden.net/wiki/Flying_Press_%28move%29#Type_effectiveness'>here</a> for type effectiveness details.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Stopped by Gravity, Hits non-adjacent targets";
		break;
		case "foamgeyser": //Foam Geyser
			movetype = "Water";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 80;
			effect = 30;
			flavor = "The ground beneath the opposing team erupts and douses them with thick foam. It may also lower their Speed stats.";
			movedesc = "30% chance to lower target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "focusblast": //Focus Blast
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 70;
			effect = 10;
			flavor = "The user heightens its mental focus and unleashes its power. It may also lower the target's Sp. Def.";
			movedesc = "10% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "focusenergy": //Focus Energy
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user takes a deep breath and focuses so that critical hits land more easily.";
			movedesc = "Raises user's crit rate by 2 until user leaves battle. Fails if user has already used Focus Energy since entering battle.";
			moveflags = "Stolen by Snatch";
		break;
		case "focuspunch": //Focus Punch
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 150;
			moveAcc = 100;
			effect = 0;
			flavor = "The user focuses its mind before launching a punch. It will fail if the user is hit before it is used.";
			movedesc = "User charges at priority +6 and does damage at priority -3 on the same turn. If user takes direct damage from another Pok&eacute;mon's move before attacking, Focus Punch fails.";
			moveflags = "Makes contact, Blocked by Protect, Punch-based";
			break;
		case "followme": //Follow Me
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user draws attention to itself, making all targets take aim only at the user.";
			movedesc = "All opposing Pok&eacute;mon target the user with their single-target moves until the end of this turn. Redirects attacks even if user's ally has Lightningrod/Storm Drain.";
			moveflags = "None";
		break;
		case "forcepalm": //Force Palm
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The target is attacked with a shock wave. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "foresight": //Foresight
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Enables a Ghost-type target to be hit by Normal- and Fighting-type attacks. It also enables an evasive target to be hit.";
			movedesc = "Resets target's Evasion to 0. Target cannot raise its Evasion until it leaves the field. Ghost-type targets take normal damage from Normal- and Fighting-type moves.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "forestscurse": //Forest's Curse [GENI VI]
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user puts a forest curse on the target. Afflicted targets are now Grass type as well.";
			movedesc = "Adds Grass to target's types; if target is dual-type, target is considered to have three types. If target is under the effect of Trick-or-Treat, target's extra Ghost type changes to Grass. Fails against Grass-types.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "foulhaze": //Foul Haze
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user fills the air with a noxious fog for five turns. It damages all Pok&eacute;mon except Poison- and Steel-types.";
			movedesc = "Changes active weather to miasma for 5 turns (including this turn), or 8 turns if user holds a Tainted Rock when this move is used. Miasma weather condition explained further <a href='http://turquoise.alteredorigin.net/w/New_Mechanics#Miasma'>here</a>.";
			moveflags = "None";
		break;
		case "foulplay": //Foul Play
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 95;
			moveAcc = 100;
			effect = 0;
			flavor = "The user turns the target's power against it. The higher the target's Attack stat, the greater the damage.";
			movedesc = "Uses target's Attack stat instead of user's to calculate damage.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "freezedry": //Freeze-Dry [GEN VI]
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 10;
			flavor = "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.";
			movedesc = "10% chance to freeze target. Always does super-effective (2x) damage to Water-types, even during Inverse Battles. See <a href='http://bulbapedia.bulbagarden.net/wiki/Freeze-Dry_%28move%29#Type_effectiveness'>here</a> for type effectiveness details.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "freezeshock": //Freeze Shock
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 140;
			moveAcc = 90;
			effect = 30;
			flavor = "On the second turn, the user hits the target with electrically charged ice. It may leave the target with paralysis.";
			movedesc = "User charges this turn, then does damage next turn. 30% chance to paralyze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "frenzyplant": //Frenzy Plant
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The user slams the target with an enormous tree. The user can't move on the next turn.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "frenzystrike": //Frenzy Strike
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 85;
			effect = 0;
			flavor = "The target is hit 2 to 5 times in a row and with great speed.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit. +1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "frostbite": //Frostbite
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 90;
			effect = 30;
			flavor = "The user strikes the target with a chillingly cold appendage. It may also freeze the target.";
			movedesc = "30% chance to freeze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "frostbreath": //Frost Breath
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 90;
			effect = 0; //is apparently 100 canonically but wtf, esp since storm throw is 0
			flavor = "The user blows a cold breath on the target. This attack always results in a critical hit.";
			movedesc = "Always scores a critical hit unless an effect (e.g. Battle Armor) would prevent critical hits.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "frozenblade": //Frozen Blade
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user forms a keen blade of ice around its arm or claw and slashes the target. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "frustration": //Frustration
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A full-power attack that grows more powerful the less the user likes its Trainer.";
			movedesc = "The lower the user's happiness, the higher this move's base power, with a maximum BP of 102 and a minimum BP of 1. Base power = (255 - user's happiness) / 2.5, rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "furyattack": //Fury Attack
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 85;
			effect = 0;
			flavor = "The target is jabbed repeatedly with a horn or beak two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "furycutter": //Fury Cutter
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 95;
			effect = 0;
			flavor = "The target is slashed with scythes or claws. Its power increases if it hits in succession. ";
			movedesc = "Base power doubles each time this move is used, with maximum 160 power. Power resets if user misses, if user leaves battle, or if user uses another move.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "furyswipes": //Fury Swipes
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 18;
			moveAcc = 80;
			effect = 0;
			flavor = "The target is raked with sharp claws or scythes for two to five times in quick succession.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "fusionbolt": //Fusion Bolt
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user throws down a giant thunderbolt. This attack does greater damage when influenced by an enormous flame.";
			movedesc = "Base power doubles if an ally used Fusion Flare earlier this turn.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "fusionflare": //Fusion Flare
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user brings down a giant flame. This attack does greater damage when influenced by an enormous thunderbolt.";
			movedesc = "Base power doubles if an ally used Fusion Bolt earlier this turn. Frozen users will thaw before using this move.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "futuresight": //Future Sight
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "Two turns after this move is used, a hunk of psychic energy attacks the target.";
			movedesc = "User prepares an attack on this turn, then does damage at the end of the turn 2 turns later, regardless of whether the user or original target is still on the field. Damage is calculated based on user's Special Attack and the Special Defense of the target that is active when Future Sight hits. Ignores Detect, Endure, King's Shield, Mat Block, Protect, Spiky Shield and Wonder Guard due to dealing damage at end-of-turn. Cannot score a critical hit. Does not stack with other uses of Future Sight or Doom Desire.";
			moveflags = "None";
		break;
		case "galvanize": //Galvanize
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user gives its ally a spark of potent energy, boosting its Special Attack and Speed stats.";
			movedesc = "Raises target adjacent ally's Special Attack and Speed by 1 each. Does not affect Ground-types, but bypasses Lightningrod, Motor Drive and Volt Absorb without triggering their effects.";
			moveflags = "Stolen by Snatch, Bypasses Substitute";
		break;
		case "gamble": //Gamble
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 75;
			flavor = "A bizarre, black substance splashes against the target and also the user, often causing one of several strange side-effects.";
			movedesc = "75% chance to cause one of the effects listed <a href='http://turquoise.alteredorigin.net/w/Gamble#Effect'>here</a>. ";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "gastroacid": //Gastro Acid
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability.";
			movedesc = "Negates the effect of target's Ability for as long as it remains on the field.";
			moveflags = "Blocked by Protect, Refleted by Magic coat, Copied by Mirror Move";
		break;
		case "geargrind": //Gear Grind
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 85;
			effect = 0;
			flavor = "The user attacks by throwing two steel gears at its target.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "geomancy": //Geomancy [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user absorbs energy and sharply raises its Sp. Atk, Sp. Def, and Speed stats on the next turn.";
			movedesc = "User charges this turn, then raises Special Attack, Special Defense and Speed by 2 each next turn.";
			moveflags = "Has charge turn";
		break;
		case "gigadrain": //Giga Drain
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "gigaimpact": //Giga Impact
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The user charges at the target using every bit of its power. The user must rest on the next turn.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "glaciate": //Glaciate
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 95;
			effect = 100;
			flavor = "The user attacks by blowing freezing cold air at opposing Pok&eacute;mon. This attack reduces the targets' Speed stat.";
			movedesc = "100% chance to lower target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "glare": //Glare
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user intimidates the target with the pattern on its belly to cause paralysis.";
			movedesc = "Paralyzes target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "goblinclaw": //Goblin Claw
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 10;
			flavor = "The user slashes the target with cruel, sharp claws. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "goldenflame": //Golden Flame
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "The user exhales golden flames that pass through walls of energy. It can also burn down barriers, such as Light Screen and Reflect.";
			movedesc = "Immediately ends the effects of Battle Zone, Energy Zone, Light Screen and Reflect on target's side of the field. Ends Battle Zone, Energy Zone, Light Screen and Reflect even if Golden Flame misses, but not if target is a Fairy-type. Light Screen is removed before damage calculation, so Golden Flame's damage is not reduced.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "grassknot": //Grass Knot
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user snares the target with grass and trips it. The heavier the target, the greater the damage.";
			movedesc = "Base power increases the heavier target is, with a maximum of 120 power. <a href='http://bulbapedia.bulbagarden.net/wiki/Grass_Knot_%28move%29#Effect'>See here</a> for the method used to determine base power.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "grasspledge": //Grass Pledge
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "A column of grass hits opposing Pok&eacute;mon. When used with its water equivalent, its damage increases into a vast swamp.";
			movedesc = "Does not activate Grass Gem. Base power doubles if an ally in doubles/triples uses Fire Pledge or Water Pledge this turn; both this move and the other Pledge move hit the target chosen by the slower Pledge user. If the other Pledge move is Fire Pledge, non-Fire-type opponents adjacent to the slower Pledge user take damage equal to 1/8 (12.5%) of their max HP at the end of each turn for 4 turns. If the other Pledge move is Water Pledge, opponents adjacent to the slower Pledge user have their Speed reduced by 1/2 (50%) for 4 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "grasswhistle": //Grass Whistle
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 55;
			effect = 0;
			flavor = "The user plays a pleasant melody that lulls the target into a deep sleep.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "grassyterrain": //Grassy Terrain [GEN VI]
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user turns the ground under everyone's feet to grass for five turns. This restores the HP of Pok&eacute;mon on the ground a little every turn.";
			movedesc = "Changes active terrain to grass for 5 turns (including this turn). Grass terrain explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move)'>here</a>.";
			moveflags = "None";
		break;
		case "gravity": //Gravity
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Gravity is intensified for five turns, making moves involving flying unusable and negating Levitate.";
			movedesc = "For the next 5 turns (including this turn), the ability Levitate and the hovering effect of Air Balloon are negated and Flying-types can be affected by Ground-type moves, Arena Trap, Hot Coals, Spikes and Toxic Spikes. Immediately ends the effects of Magnet Rise and Telekinesis, immediately cancels the strike turns of Bounce, Fly and Sky Drop (bringing the affected Pok&eacute;mon back into play), and causes Bounce, Fly, Hi Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash and Telekinesis to fail. Reduces the Evasion of all Pok&eacute;mon in play by 2/5 (40%, equivalent to a 2-stage drop).";
			moveflags = "None";
		break;
		case "growl": //Growl
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user growls in an endearing way, making the opposing team less wary. The foes' Attack stats are lowered.";
			movedesc = "Lowers target's Attack by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Mirror Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "growth": //Growth
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user's body grows all at once, raising the Attack and Sp. Atk stats.";
			movedesc = "Raises user's Attack and Special Attack by 1 each, or by 2 each if the active weather is bright sunlight.";
			moveflags = "Stolen by Snatch";
		break;
		case "grudge": //Grudge
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "If the user faints, the user's grudge fully depletes the PP of the opponent's move that knocked it out.";
			movedesc = "If user is knocked out before performing its next move, the Pok&eacute;mon that knocked it out will have the move in question disabled for the duration of the battle. Moves disabled in this way have the <a href='http://turquoise.alteredorigin.net/w/New_Mechanics#Grudged'>Grudged</a> status, marking them unable to be used even if the affected Pok&eacute;mon switches out. Does not activate if user faints due to end-of-turn damage (e.g., poison damage or weather damage). This move cannot be selected by Assist or Metronome.";
			moveflags = "Bypasses Substitute";
		break;
		case "guardsplit": //Guard Split
			movetype = "Psychic";
			Moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to average its Defense and Sp. Def stats with those of its target's.";
			movedesc = "User's unmodified Defense and target's unmodified Defense (i.e., ignoring stat boosts or effects like Flower Gift or Marvel Scale) are averaged together, followed by the user's unmodified Special Defense and target's unmodified Special Defense. The average Defense becomes the new unmodified Defense for both user and target, and the average Special Defense becomes the new unmodified Special Defense for both user and target. Affected Defense/Special Defense returns to normal upon switching out.";
			moveflags = "Blocked by Protect";
		break;
		case "guardswap": //Guard Swap
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to switch changes to its Defense and Sp. Def with the target.";
			movedesc = "User's Defense and Special Defense modifiers (e.g., +1 Defense, -2 Special Defense) are swapped with the target's Defense and Special Defense modifiers.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "guillotine": //Guillotine
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 30;
			effect = 0;
			flavor = "A vicious, tearing attack with big pincers. The target will faint instantly if this attack hits.";
			movedesc = "Target faints. Doesn't affect targets of a higher level.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "gunkshot": //Gunk Shot
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 80;
			effect = 30;
			flavor = "The user shoots filthy garbage at the target to attack. It may also poison the target.";
			movedesc = "30% chance to poison target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "gust": //Gust
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "A gust of wind is whipped up by wings and launched at the target to inflict damage.";
			movedesc = "Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move; base power is doubled against these targets.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "gyroball": //Gyro Ball
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user tackles the target with a high-speed spin. The slower the user, the greater the damage.";
			movedesc = "Power is higher when the user has less Speed than the target, up to a maximum of 150. Base power = 25 * (target's current Speed / user's current Speed).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move.";
		break;
		case "hail": //Hail
			movetype = "Ice";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user summons a hailstorm lasting five turns. It damages all Pok&eacute;mon except the Ice type.";
			movedesc = "Changes active weather to hail for 5 turns (including this turn), or 8 turns if user holds an Icy Rock when this move is used. Hail weather condition explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Weather_conditions#Hail'>here</a>.";
			moveflags = "None";
		break;
		case "hammerarm": //Hammer Arm
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 90;
			effect = 0;
			flavor = "The user swings and hits with its strong and heavy fist. It lowers the user's Speed, however.";
			movedesc = "Lowers user's Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "happyhour": //Happy Hour [GEN VI]
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Using Happy Hour doubles the amount of prize money received after battle.";
			movedesc = "Player's end-of-battle prize money is doubled. Stacks with Amulet Coin and Lucky Incense; multiple uses of Happy Hour do not stack, however.";
			moveflags = "None";
		break;
		case "harden": //Harden
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user stiffens all the muscles in its body to raise its Defense stat.";
			movedesc = "Raises user's Defense by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "haze": //Haze
			movetype = "Ice";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user creates a haze that eliminates every stat change among all Pok&eacute;mon engaged in battle.";
			movedesc = "Resets all active Pok&eacute;mon's modified stats to 0.";
			moveflags = "None";
		break;
		case "headbutt": //Headbutt
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 30;
			flavor = "The user sticks out its head and attacks by charging straight into the target. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, copied by Mirror Move";
		break;
		case "headcharge": //Head Charge
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user charges its head into its target, using its powerful guard hair. It also damages the user a little.";
			movedesc = "User takes recoil equal to 1/4 (25%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "headsmash": //Head Smash
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 150;
			moveAcc = 80;
			effect = 0;
			flavor = "The user attacks the target with a hazardous, full-power headbutt. The user also takes terrible damage.";
			movedesc = "User takes recoil equal to 1/2 (50%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "healbell": //Heal Bell
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user makes a soothing bell chime to heal the status problems of all the party Pok&eacute;mon.";
			movedesc = "Heals all status problems and confusion from every Pok&eacute;mon in user's party (even Pok&eacute;mon with Cacophony or Soundproof).";
			moveflags = "Stolen by Snatch, Sound-based, Bypasses Substitute";
		break;
		case "healblock": //Heal Block
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "For five turns, the user prevents the opposing team from using any moves, Abilities, or held items that recover HP.";
			movedesc = "For the next 5 turns (including this turn), any attempt to restore target's HP will fail, except for Pain Split, Ice Body, Rain Dish, Dry Skin and items used by the trainer. Pok&eacute;mon with Volt Absorb and Water Absorb will take damage from Electric- and Water-type moves, respectively. Moves that drain HP (e.g., Absorb) will still deal damage as normal but will not restore HP to the user. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "healingwish": //Healing Wish
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user faints. In return, the Pok&eacute;mon taking its place will have its HP restored and status cured.";
			movedesc = "User faints. Its replacement has its HP fully restored and all of its major status conditions cured.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "healorder": //Heal Order
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user calls out its underlings to heal it. The user regains up to half of its max HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "healpulse": //Heal Pulse
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user emits a healing pulse which restores the target's HP by up to half of its max HP.";
			movedesc = "Target recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Hits non-adjacent targets, Heals";
		break;
		case "heartstamp": //Heart Stamp
			movetype = "Psychic";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The user unleashes a vicious blow after its cute act makes the target less wary. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "heartswap": //Heart Swap
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to switch stat changes with the target.";
			movedesc = "User's stat modifiers (e.g., +1 Defense, -2 Special Attack) are swapped with the target's stat modifiers.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "heatcrash": //Heat Crash
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the damage.";
			movedesc = "Base power increases the heavier user is in relation to target, with a maximum of 120 power. <a href='http://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move)#Effect'>See here</a> for the method for determining base power.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "heatwave": //Heat Wave
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 95;
			moveAcc = 90;
			effect = 10;
			flavor = "The user attacks by exhaling hot breath on the opposing team. It may also leave targets with a burn.";
			movedesc = "10% chance to burn target. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "heavyslam": //Heavy Slam
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slams into the target with its heavy body. The more the user outweighs the target, the greater its damage.";
			movedesc = "Base power increases the heavier user is in relation to target, with a maximum of 120 power. <a href='http://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move)#Effect'>See here</a> for the method for determining base power.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "hellfire": //Hellfire
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "The user scorches the target in a sea of dark flames. Its power is doubled if the target is burned.";
			movedesc = "Base power doubles if target is burned.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "helpinghand": //Helping Hand
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user assists an ally by boosting the power of its attack.";
			movedesc = "Target adjacent ally's next move does 1.5x (50%) more damage.";
			moveflags = "Bypasses Substitute";
		break;
		case "hex": //Hex
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "This relentless attack does massive damage to a target affected by status problems.";
			movedesc = "Base power doubles if target is asleep, burned, frozen, paralyzed or poisoned.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "hiddenpower": //Hidden Power
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "A unique attack that varies in type and intensity depending on the Pok&eacute;mon using it.";
			Movedesc = "User's Hidden Power type is randomly determined (any type except Normal) when user first learns the move; from then on, whenever that user uses Hidden Power it will be that type.";
			moveflags = "Blocked by Protect, Coied by Mirror Move";
		break;
		case "highjumpkick": //High Jump Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.";
			movedesc = "If this move misses, is blocked by Protect or Detect, or has no effect, user takes damage equal to 1/2 (50%) its maximum HP rounded down.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Stopped by Gravity";
		break;
		case "holdback": //Hold Back [GEN VI]
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user holds back when it attacks and the target is left with at least 1 HP.";
			movedesc = "Cannot lower target's HP below 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "honeclaws": //Hone Claws
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user sharpens its claws to boost its Attack stat and accuracy.";
			movedesc = "Raises user's Attack and Accuracy by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "hornattack": //Horn Attack
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is jabbed with a sharply pointed horn to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, blocked by Protect, copied by Mirror Move";
		break;
		case "horndrill": //Horn Drill
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 30;
			effect = 0;
			flavor = "The user stabs the target with a horn that rotates like a drill. If it hits, the target faints instantly.";
			movedesc = "Target faints. Doesn't affect targets of a higher level.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "hornleech": //Horn Leech
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "The user drains the target's energy with its horns. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "hotcoals": //Hot Coals
			movetype = "Fire";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lays a trap of searing coals at the opponent's feet. They burn opponents that switch into battle.";
			movedesc = "Sets an entry hazard on the opponent's side. Opponents who switch into battle are burned. Does not affect Flying-types or Pok&eacute;mon with Levitate (unless they are holding Iron Ball, they are under the effect of Ingrain or Gravity is in effect). Fire-type Pok&eacute;mon who switch in and are not Flying-types or levitating remove Hot Coals from their side of the field.";
			moveflags = "Reflected by Magic Coat";
		break;
		case "howl": //Howl
			movetype = "Normal";
			moveclass = "other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user howls loudly to raise its spirit, boosting its Attack stat.";
			movedesc = "Raises user's Attack by 1."
			moveflags = "Stolen by Snatch";
			break;
		case "hurricane": //Hurricane
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 70;
			flavor = "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. It may also confuse the target.";
			movedesc = "30% chance to confuse target. Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move. Cannot miss if the active weather is heavy rain.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "hydrocannon": //Hydro Cannon
			movetype = "Water";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is hit with a watery blast. The user must rest on the next turn, however.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "hydrolash": //Hydro Lash
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 10;
			flavor = "The user attacks with a stinging water whip. This may also lower all the target's stats at once.";
			movedesc = "10% chance to lower target's Attack, Defense, Special Attack, Special Defense and Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "hydropump": //Hydro Pump
			movetype = "Water";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 80;
			effect = 0;
			flavor = "The target is blasted by a huge volume of water launched under great pressure.";
			movedesc = "No additional effect."
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "hyperbeam": //Hyper Beam
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is attacked with a powerful beam. The user must rest on the next turn to regain its energy.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "hyperfang": //Hyper Fang
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 90;
			effect = 10;
			flavor = "The user bites hard on the target with its sharp front fangs. It may also make the target flinch.";
			movedesc = "10% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "hypervoice": //Hyper Voice
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user lets loose a horribly echoing shout with the power to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "hypnosis": //Hypnosis
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 60;
			effect = 0;
			flavor = "The user employs hypnotic suggestion to make the target fall into a deep sleep.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic coat, Copied by Mirror Move";
		break;
		case "iceball": //Ice Ball
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 90;
			effect = 0;
			flavor = "The user continually rolls into the target over five turns. It becomes stronger each time it hits.";
			movedesc = "User becomes uncontrollable for 5 turns or until this attack misses, whichever comes first. User automatically uses Ice Ball on each turn, base power doubling with each hit up to a maximum of 480 on the fifth turn. If user has used Defense Curl at least once while in battle Ice Ball's base power is doubled, starting at 60 and reaching a maximum of 960 on the fifth turn.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "icebeam": //Ice Beam
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is struck with an icy-cold beam of energy. It may also freeze the target solid.";
			movedesc = "10% chance to freeze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "iceburn": //Ice Burn
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 140;
			moveAcc = 90;
			effect = 30;
			flavor = "On the second turn, an ultracold, freezing wind surrounds the target. This may leave the target with a burn.";
			movedesc = "User charges this turn, then does damage next turn. 30% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "icedrill": //Ice Drill
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "This attack inflicts double damage on a frozen foe. It also defrosts the foe, however.";
			movedesc = "Base power doubles against frozen targets. If target is frozen, it is defrosted after damage is dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "icefang": //Ice Fang
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 95;
			effect = 10;
			flavor = "The user bites with cold-infused fangs. It may also make the target flinch or leave it frozen.";
			movedesc = "10% chance to freeze target; separate 10% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "icepunch": //Ice Punch
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is punched with an icy fist. It may also leave the target frozen.";
			movedesc = "10% chance to freeze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "iceshard": //Ice Shard
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user flash freezes chunks of ice and hurls them at the target. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "icewater": //Ice Water
			movetype = "Water";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 10;
			flavor = "The user shoots painfully cold water at its target. This may also freeze the target.";
			movedesc = "10% chance to freeze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "iciclecrash": //Icicle Crash
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 90;
			effect = 30;
			flavor = "The user attacks by harshly dropping an icicle onto the target. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "iciclespear": //Icicle Spear
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 100;
			effect = 0;
			flavor = "The user launches sharp icicles at the target. It strikes two to five times in a row";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "icywind": //Icy Wind
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 95;
			effect = 100;
			flavor = "The user attacks with a gust of chilled air. It also reduces the targets' Speed stat.";
			movedesc = "100% chance to lower target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "impale": //Impale
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 90;
			effect = 100;
			flavor = "The user jabs its stinger, pincer or claw into the target without regard for its own safety.";
			movedesc = "Lowers user's Attack by 2.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "imperialcharge": //Imperial Charge
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 80;
			effect = 0;
			flavor = "The user gallantly charges down the target, demoralizing it. All of the target's raised stats are returned to normal.";
			movedesc = "All of the target's positive stat changes are reset to 0. Negative stat changes are not affected.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "imprison": //Imprison
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "If the opponents know any move also known by the user, the opponents are prevented from using it.";
			movedesc = "Prevents any Pok&eacute;mon on the opposing side of the field from using any move user knows until user leaves the field. If user obtains new moves while on the field, these moves also become restricted. Fails if no opposing Pok&eacute;mon knows any of user's moves when this move is used.";
			moveflags = "Stolen by Snatch, Bypasses Substitute";
		break;
		case "incinerate": //Incinerate
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target with fire. If the target is holding a Berry, the Berry becomes burnt up and unusable.";
			movedesc = "If target is holding a berry, the berry is destroyed. Destroys Occa and Rowap Berries before they activate. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "inferno": //Inferno
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 50;
			effect = 100;
			flavor = "The user attacks by engulfing the target in an intense fire. It leaves the target with a burn.";
			movedesc = "100% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "infestation": //Infestation [GEN VI]
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is infested and attacked for four to five turns. The target can't flee during this time.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "ingrain": //Ingrain
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lays roots that restore its HP on every turn. Because it is rooted, it can't switch out.";
			movedesc = "User recovers 1/16 (6.25%) of its max HP at the end of each turn. Prevents user from switching out. If user was immune to Ground-type attacks, it will now take normal damage from them. Circle Throw, Dragon Tail, Roar and Whirlwind will not force user to switch or flee. User cannot use Magnet Rise and opponents cannot use Telekinesis on user. User may still use Baton Pass, U-turn or Volt Switch to leave the field; Ingrain's effect will be transferred via Baton Pass.";
			moveflags = "Stolen by Snatch";
		break;
		case "invigorate": //Invigorate
			movetype = "Dragon";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user inspires an ally and fills it with energy, boosting its Attack and Speed stats.";
			movedesc = "Raises target adjacent ally's Attack and Speed by 1 each.";
			moveflags = "Stolen by Snatch, Bypasses Substitute";
		break;
		case "iondeluge": //Ion Deluge [GEN VI]
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user disperses electrically charged particles, which changes Normal-type moves to Electric-type moves.";
			movedesc = "+1 priority. For the duration of this turn, all Normal-type moves (including Other-class moves) are treated as Electric-type. Moves altered in this way will activate Lightning Rod, Motor Drive and Volt Absorb.";
			moveflags = "None";
		break;
		case "irondefense": //Iron Defense
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user hardens its body's surface like iron, sharply raising its Defense stat.";
			movedesc = "Raises user's Defense by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "ironhead": //Iron Head
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 30;
			flavor = "The user slams the target with its steel-hard head. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "irontail": //Iron Tail
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 75;
			effect = 30;
			flavor = "The target is slammed with a steel-hard tail. It may also lower the target's Defense stat.";
			movedesc = "30% chance to lower target's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "ivyscourge": //Ivy Scourge
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 95;
			moveAcc = 100;
			effect = 20;
			flavor = "The user lashes the target with an itchy vine. It may also poison the target.";
			movedesc = "20% chance to poison target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "jaggededge": //Jagged Edge
			movetype = "Rock";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user protects itself with armor made of sharp, jagged rocks that are painful to the touch.";
			movedesc = "As long as user remains in play, any contact attacks used against it cause the user of that attack to take typeless damage equal to 1/4 (25%) of its maximum HP.";
			moveflags = "Stolen by Snatch";
		break;
		case "jawthrash": //Jaw Thrash
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 90;
			effect = 0;
			flavor = "The user traps the target by biting with powerful jaws and shakes it relentlessly for two to three turns.";
			movedesc = "User becomes uncontrollable for 2 or 3 turns and automatically attacks the selected target on each of those turns. Traps target for the duration of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "judgment": //Judgment
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user releases countless shots of light at the target. Its type varies with the kind of Plate the user is holding.";
			movedesc = "Judgment's damage type matches the type of the Plate user is holding. If user is not holding a Plate, Judgment's damage is Normal-type.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "jumpkick": //Jump Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 95;
			effect = 0;
			flavor = "The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.";
			movedesc = "If this move misses, is blocked by Protect or Detect, or has no effect, user takes damage equal to 1/2 (50%) its maximum HP rounded down.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Stopped by Gravity";
		break;
		case "karatechop": //Karate Chop
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is attacked with a sharp chop. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "kinesis": //Kinesis
			movetype = "Pyschic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 80;
			effect = 0;
			flavor = "The user distracts the target by bending a spoon. It lowers the target's accuracy.";
			movedesc = "Lowers target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "kingsshield": //King's Shield [GEN VI]
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user takes a defensive stance while it protects itself from damage. It also harshly lowers the Attack stat of any attacker who makes direct contact.";
			movedesc = "User cannot be damaged or affected by any Physical- or Special-class (i.e. damaging) move with the 'Blocked by Protect' flag for the rest of this turn; users of any moves with the 'Makes contact' flag that are blocked in this way have their Attack lowered by 2. Sucker Punch fails against this move without triggering the Attack drop. Does not block end-of-turn effects or damage like weather damage or status ailments. Fails if user moves last this turn. If the user successfully used Detect, Endure, King's Shield, Protect, Spiky Shield, or Vanish last turn, this move has a 50% chance to fail. +4 priority.<br /><br />If user is Aegislash with the ability Stance Change, changes user to Shield Forme even if King's Shield would otherwise be unsuccessful.";
			moveflags = "None";
		break;
		case "knockoff": //Knock Off
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 100;
			flavor = "The user slaps down the target's held item, preventing that item from being used in the battle.";
			movedesc = "Target loses its held item. Neither user nor target can recover the item with Recycle. Items that would be triggered by Knock Off (e.g., Focus Sash, Colbur Berry) will activate before being removed. If target has Sticky Hold, if it is behind a Substitute, if it is Giratina holding a Griseous Orb, if it has Multitype and is holding a Plate, or if it is holding Mail or a Mega Stone, it will take damage but not lose its item. Target regains lost item at the end of the battle. If a held item was removed in this way, Knock Off's base power increases by 50%.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "landswrath": //Land's Wrath [GEN VI]
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user gathers the energy of the land and focuses that power on opposing Pok&eacute;mon to damage them.";
			movedesc = "Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "lariat": //Lariat
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user knocks the opponent down hard with a mighty swing of its arm, startling it out of any attacks it might have been preparing.";
			movedesc = "If target was in the charging turn of any attack with the 'Has charge turn' flag (e.g. Razor Wind or Solar Beam) or an attack that lasts for multiple turns (e.g. Thrash), the strike turn and any subsequent turns of that attack are immediately canceled. User still cannot hit semi-invulnerable targets (e.g. targets using Dig or Fly) and cannot cancel their moves unless it has No Guard or some other means of reaching them.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "lastresort": //Last Resort
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 140;
			moveAcc = 100;
			effect = 0;
			flavor = "This move can be used only after the user has used all the other moves it knows in the battle.";
			movedesc = "User must use at least three other moves without switching out before Last Resort can be selected. User does not have to use every other move it knows first, but it also cannot use the move without knowing at least four moves including Last Resort.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "lavaplume": //Lava Plume
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 30;
			flavor = "An inferno of scarlet flames torches everything around the user. It may leave targets with a burn.";
			movedesc = "30% chance to burn target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "leafblade": //Leaf Blade
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "leafstorm": //Leaf Storm
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 130;
			moveAcc = 90;
			effect = 0;
			flavor = "The user whips up a storm of leaves around the target. The attack's recoil harshly reduces the user's Sp. Atk stat.";
			movedesc = "Lowers user's Special Attack by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "leaftornado": //Leaf Tornado
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 90;
			effect = 50;
			flavor = "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy.";
			movedesc = "50% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "leechlife": //Leech Life
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "leechseed": //Leech Seed
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "A seed is planted on the target. It steals some HP from the target every turn.";
			movedesc = "Plants a seed on the target that drains 1/8 of its maximum HP at the end of each turn, then user recovers HP equal to the same amount. Fails against Grass-type Pok&eacute;mon. The seed remains until target leaves the field. User takes damage instead of being healed if the target has Liquid Ooze. Rapid Spin removes this effect. This effect is passed on by Baton Pass.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "leer": //Leer
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user gains an intimidating leer with sharp eyes. The opposing team's Defense stats are reduced.";
			movedesc = "Lowers target's Defense by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "leycross": //Ley Cross
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user summons burning earth energy from the ley lines beneath the target. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "lick": //Lick
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 100;
			effect = 30;
			flavor = "The target is licked with a long tongue, causing damage. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "lightscreen": //Light Screen
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A wondrous wall of light is put up to suppress damage from special attacks for five turns.";
			movedesc = "For 5 turns (including this turn), or 8 turns if user holds a Light Clay when this move is used, special attacks that target any active Pok&eacute;mon on user's side have their damage reduced by 1/2 (50%), or 1/3 (33%) in doubles/triples. Golden Flame's damage is not reduced when used against a target behind Light Screen, and Light Screen's effect will immediately end when Brick Break or Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "linkpulse": //Link Pulse
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user locks onto the target's mind and blasts it with psychic energy. This attack never misses.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "lockjaw": //Lockjaw
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 75;
			effect = 0;
			flavor = "The user traps the target by biting with powerful, steely jaws and holds it in place for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "lockon": //Lock-On
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user takes sure aim at the target. It ensures the next attack does not fail to hit the target.";
			movedesc = "On the next turn, user's next move is guaranteed to hit the target of Mind Reader, including semi-invulnerable targets, e.g. using Dig, and ignoring Accuracy and Evasion modifiers. Effect is cancelled if the target switches out or if user attacks a different target in doubles/triples. Does not allow user to hit through Detect or Protect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "lovelykiss": //Lovely Kiss
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "lowkick": //Low Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A powerful low kick that makes the target fall over. It inflicts greater damage on heavier targets.";
			movedesc = "Base power increases the heavier target is, with a maximum of 120 power. <a href='http://bulbapedia.bulbagarden.net/wiki/Low_Kick_%28move%29#Generation_III_and_on'>See here</a> for the method used to determine base power.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "lowsweep": //Low Sweep
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 100;
			flavor = "The user attacks the target's legs swiftly, reducing the target's Speed stat.";
			movedesc = "Lowers target's Speed by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "luckblast": //Luck Blast
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 90;
			effect = 0;
			flavor = "A normally weak move, if it lands a critical hit it deals immense damage.";
			movedesc = "Base power becomes 200 if this move is a critical hit. ";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "luckychant": //Lucky Chant
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user chants an incantation toward the sky, preventing opposing Pok&eacute;mon from landing critical hits.";
			movedesc = "For 5 turns (including this turn), attacks that target any active Pok&eacute;mon on user's side cannot score critical hits. Lucky Chant's effect will immediately end when Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "luminouswave": //Luminous Wave
			movetype = "Water";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 20;
			flavor = "The user washes the targets away with a wave full of shimmering lights. It may also lower the target's Sp. Def.";
			movedesc = "20% chance to lower target's Special Defense by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "lunarbeam": //Lunar Beam
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "A two-turn attack. The user gathers light, then blasts a bundled beam on the second turn.";
			movedesc = "User charges this turn, then does damage next turn. The charge turn is skipped if the active weather is bright sunlight. Base power is halved if the active weather is total darkness, hail, heavy rain or sandstorm.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "lunardance": //Lunar Dance
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user faints. In return, the Pok&eacute;mon taking its place will have its status and HP fully restored.";
			movedesc = "User faints. Its replacement has its HP and PP fully restored and all of its major status conditions cured.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "lusterpurge": //Luster Purge
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 50;
			flavor = "The user lets loose a damaging burst of light. It may also reduce the target's Sp. Def stat.";
			movedesc = "50% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "machpunch": //Mach Punch
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user throws a punch at blinding speed. It is certain to strike first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "machturn": //Mach Turn
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 35;
			moveAcc = 95;
			effect = 0;
			flavor = "The user zooms past the target with a loud sonic boom, then causes another as it doubles back.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit. +1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "maelstrom": //Maelstrom
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 110;
			moveAcc = 80;
			effect = 0;
			flavor = "The user charges forward with water swirling around it like an intense storm and slams into the target.";
			movedesc = "No additional effect."
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "magiccoat": //Magic Coat
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A barrier reflects back to the target moves like Leech Seed and moves that damage status.";
			movedesc = "Reflects back the first effect move (all moves on <a href='http://www.smogon.com/bw/moves/magic_coat'>this list</a>, plus Corrode, Hot Coals, Pepper Powder, Puzzle Powder, Quicksand, Serene Wind and Spirit Moon; in short, any move with the 'Reflected by Magic Coat' flag) used on the user this turn. User is unaffected by the reflected move. +4 priority.";
			moveflags = "None";
		break;
		case "magicroom": //Magic Room
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user creates a bizarre area in which Pok&eacute;mon's held items lose their effects for five turns.";
			movedesc = "For the next 5 turns (including this turn), negates the effects of all held items. Using Magic Room while Magic Room is currently active will immediately end its effect, allowing item use again. -7 priority.";
			moveflags = "Copied by Mirror Move";
		break;
		case "magicalleaf": //Magical Leaf
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user scatters curious leaves that chase the target. This attack will not miss.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "magmastorm": //Magma Storm
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 75;
			effect = 100;
			flavor = "The target becomes trapped within a maelstrom of fire that rages for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "magnetbomb": //Magnet Bomb
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user launches steel bombs that stick to the target. This attack will not miss.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "magneticflux": //Magnetic Flux [GEN VI]
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user manipulates magnetic fields which raises the Defense and Sp. Def stats of ally Pok&eacute;mon with the Plus or Minus Ability.";
			movedesc = "Raises the Defense and Special Defense of all allies with Plus or Minus by 1 each.";
			moveflags = "None";
		break;
		case "magnetrise": //Magnet Rise
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user levitates using electrically generated magnetism for five turns.";
			movedesc = "For the next 5 turns (including this turn), user is immune to Ground-type moves, Hot Coals, Quicksand, Spikes, Toxic Spikes and the effect of Arena Trap. Fails if the user has Levitate, if Gravity is in effect, if user is holding an Iron Ball or if it is under the effect of Ingrain; Magnet Rise's effect will end if any of these conditions occur during its duration or if user is hit by Smack Down.";
			moveflags = "Stolen by Snatch, Stopped by Gravity";
		break;
		case "magnitude": //Magnitude
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user looses a ground-shaking quake affecting everyone around the user. Its power varies.";
			movedesc = "Power varies randomly from 10 to 150; see <a href='http://bulbapedia.bulbagarden.net/wiki/Magnitude'>this list</a> to determine the base power. Targets in the semi-invulnerable turn of Dig can be hit with this move; base power is doubled against these targets. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "matblock": //Mat Block [GEN VI]
			movetype = "Fighting";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves.";
			movedesc = "User and its allies cannot be damaged or affected by any Physical- or Special-class move (i.e. damaging moves), except Phantom Force and Shadow Force, for the rest of this turn; Phantom Force and Shadow Force cancel Mat Block's effect. Fails if user moves last this turn. Can only be used on user's first turn after entering the field.";
			moveflags = "None";
		break;
		case "mefirst": //Me First
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user tries to cut ahead of the target to steal and use the target's intended move with greater power.";
			movedesc = "Uses the target's move against it before it attacks and with the attack's base power multiplied by 1.5 (150%). Fails if the target's selected move is non-damaging or if the target moves before the user.";
			moveflags = "Blocked by Protect, Bypasses Substitute";
		break;
		case "meanlook": //Mean Look
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user pins the target with a dark, arresting look. The target becomes unable to flee.";
			movedesc = "Target cannot be switched out of or run from battle, unless it is holding Shed Shell or its ability is Run Away, as long as user remains in battle.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "meditate": //Meditate
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user meditates to awaken the power deep within its body and raise its Attack stat.";
			movedesc = "Raises user's Attack by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "megadrain": //Mega Drain
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "megakick": //Mega Kick
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 75;
			effect = 0;
			flavor = "The target is attacked by a kick launched with muscle-packed power.";
			movedesc = "No additional effect.";
			moveflags = "Makes Contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "megapunch": //Mega Punch
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 85;
			effect = 0;
			flavor = "The target is slugged by a punch thrown with muscle-packed power.";
			movedesc = "No additional effect.";
			moveflags = "Makes Contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "megahorn": //Megahorn
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 85;
			effect = 0;
			flavor = "Using its tough and impressive horn, the user rams into the target with no letup.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "memento": //Memento
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user faints when using this move. In return, it harshly lowers the target's Attack and Sp. Atk.";
			movedesc = "Lowers target's Attack and Special Attack by 2. User faints.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mercurywave": //Mercury Wave
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 30;
			flavor = "The user sends a wave of liquid metal crashing into everything around it. This may also poison those hit.";
			movedesc = "30% chance to poison target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "metalburst": //Metal Burst
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user retaliates with much greater power against the target that last inflicted damage on it.";
			movedesc = "User does damage equal to 1.5x (150%) the damage dealt by the last damaging attack that hit it this turn, unmodified by target's weaknesses or resistances. Metal Burst's target is the last Pok&eacute;mon to damage the user with a damaging attack this turn. Fails if the last Pok&eacute;mon to attack user was its ally, or if user took no damage from attacks this turn.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "metalclaw": //Metal Claw
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 95;
			effect = 10;
			flavor = "The target is raked with steel claws. It may also raise the user's Attack stat.";
			movedesc = "10% chance to raise user's Attack by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "metalsound": //Metal Sound
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "A horrible sound like scraping metal harshly reduces the target's Sp. Def stat.";
			movedesc = "Lowers target's Special Defense by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "meteormash": //Meteor Mash
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 90;
			effect = 20;
			flavor = "The target is hit with a hard punch fired like a meteor. It may also raise the user's Attack.";
			movedesc = "20% chance to raise user's Attack by 1.";
			moveflags = "Makes Contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "metronome": //Metronome
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user waggles a finger and stimulates its brain into randomly using nearly any move.";
			movedesc = "Randomly selects and uses any move in the game, with the exception of any move in the user's current moveset, any move on <a href='http://bulbapedia.bulbagarden.net/wiki/Metronome_%28move%29#Generation_V'>this list</a>, Parodize and Vanish. Use the Mod Tools' Metronome generator to help choose the selected move.";
			moveflags = "None";
		break;
		case "milkdrink": //Milk Drink
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user restores its own HP by up to half of its maximum HP. May also be used in the field to heal HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "mimic": //Mimic
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user copies the target's last move. The move can be used during battle until the Pok&eacute;mon is switched out.";
			movedesc = "Overwrites Mimic in user's movepool with target's last used move; a move copied in this way is retained until user leaves battle, at which point it becomes Mimic again. Fails if target's last used move is Mimic, Metronome, Parodize, Sketch or Struggle.";
			moveflags = "Blocked by Protect, Bypasses Substitute";
		break;
		case "mindreader": //Mind Reader
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user senses the target's movements with its mind to ensure its next attack does not miss the target.";
			movedesc = "On the next turn, user's next move is guaranteed to hit the target of Mind Reader, including semi-invulnerable targets, e.g. using Dig, and ignoring Accuracy and Evasion modifiers. Effect is cancelled if the target switches out or if user attacks a different target in doubles/triples. Does not allow user to hit through Detect or Protect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "minimize": //Minimize
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user compresses its body to make itself look smaller, which sharply raises its evasiveness.";
			movedesc = "Raises user's Evasion by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "miracleeye": //Miracle Eye
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Enables a Dark-type target to be hit by Psychic-type attacks. It also enables an evasive target to be hit.";
			movedesc = "Resets target's Evasion to 0. Target cannot raise its Evasion until it leaves the field. Dark-type targets take normal damage from Psychic-type moves.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "mirrorcoat": //Mirror Coat
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A retaliation move that counters any special attack, inflicting double the damage taken.";
			movedesc = "User does damage equal to 2x (200%) the damage dealt by the last Special-class attack that hit it this turn, unmodified by target's weaknesses or resistances (but does not affect Dark-types). Mirror Coat's target is the last Pok&eacute;mon to damage the user with a Special-class attack this turn. Fails against Physical-class attacks, if the last Pok&eacute;mon to attack user was its ally, or if user took no damage from attacks this turn. -5 priority.";
			moveflags = "Blocked by Protect";
		break;
		case "mirrormove": //Mirror Move
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user counters the target by mimicking the target's last move.";
			movedesc = "User immediately uses the last move that successfully targeted it. Fails if user's opponents failed to select a move on their last turn, if the opponent switches out, or if the last move successfully used was Mirror Move. If the last successfully used move is on <a href='http://veekun.com/dex/moves/mirror%20move'>this list</a> or is Parodize, the move is ignored and the previous successful move to target the user is copied instead.";
			moveflags = "None";
		break;
		case "mirrorshot": //Mirror Shot
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 85;
			effect = 30;
			flavor = "The user looses a flash of energy at the target from its polished body. It may also lower the target's accuracy.";
			movedesc = "0% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mirrorspiral": //Mirror Spiral
			movetype = "Steel";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 20;
			flavor = "The user dazzles the target with a whirling display of reflected light. This may also confuse the target.";
			movedesc = "20% chance to confuse target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mischief": //Mischief
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user plays a funny trick on the target, raising the user's Sp. Atk but lowering the target's Sp. Def.";
			movedesc = "Lowers target's Special Defense by 1 and raises user's Special Attack by 1. User's Special Attack is not raised if this move misses.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mist": //Mist
			movetype = "Ice";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user cloaks its body with a white mist that prevents any of its stats from being cut for five turns.";
			movedesc = "User and allies cannot have their stats lowered by opponents' moves for 5 turns.";
			moveflags = "Stolen by Snatch";
		break;
		case "mistball": //Mist Ball
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 50;
			flavor = "A mistlike flurry of down envelops and damages the target. It may also lower the target's Sp. Atk.";
			movedesc = "50% chance to lower target's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mistyterrain": //Misty Terrain [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user covers the ground under everyone's feet with mist for five turns. This protects Pok&eacute;mon on the ground from status conditions.";
			movedesc = "Changes active terrain to misty for 5 turns (including this turn). Misty terrain explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Misty_Terrain_(move)'>here</a>.";
			moveflags = "None";
		break;
		case "moonblast": //Moonblast [GEN VI]
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 30;
			flavor = "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.";
			movedesc = "30% chance to lower target's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "moonlight": //Moonlight
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user restores its own HP. The amount of HP regained varies with the weather.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP if the active weather is normal, 2/3 (67%) of its maximum HP if the active weather is bright sunlight, or 1/4 (25%) of its maximum HP if the active weather is heavy rain, hail, sandstorm or total darkness.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "morningsun": //Morning Sun
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user restores its own HP. The amount of HP regained varies with the weather.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP if the active weather is normal, 2/3 (67%) of its maximum HP if the active weather is bright sunlight, or 1/4 (25%) of its maximum HP if the active weather is heavy rain, hail, sandstorm or total darkness.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "mowdown": //Mow Down
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 150;
			moveAcc = 75;
			effect = 30;
			flavor = "The target is charged with staggering force, injuring the user and possibly stunning the target.";
			movedesc = "User takes recoil equal to 1/2 (50%) the damage dealt to target. 30% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "mudbomb": //Mud Bomb
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 85;
			effect = 30;
			flavor = "The user launches a hard-packed mud ball to attack. It may also lower the target's accuracy.";
			movedesc = "30% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mudshot": //Mud Shot
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 95;
			effect = 100;
			flavor = "The user attacks by hurling a blob of mud at the target. It also reduces the target's Speed.";
			movedesc = "100% chance to lower target's Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mudsport": //Mud Sport
			movetype = "Ground";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.";
			movedesc = "As long as user remains in battle, all Electric-type damage dealt to any Pok&eacute;mon does 1/2 (50%) its normal damage.";
			moveflags = "None";
		break;
		case "mud-slap": //Mud-Slap
			movetype = "Ground";
			moveclass = "Special";
			moveBP = 20;
			moveAcc = 100;
			effect = 100;
			flavor = "The user hurls mud in the target's face to inflict damage and lower its accuracy.";
			movedesc = "100% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "muddywater": //Muddy Water
			movetype = "Water";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 85;
			effect = 30;
			flavor = "The user attacks by shooting muddy water at the opposing team. It may also lower the targets' accuracy.";
			movedesc = "30% chance to lower target's Accuracy by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "mysticalfire": //Mystical Fire [GEN VI]
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 100;
			flavor = "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.";
			movedesc = "100% chance to lower target's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "nastyplot": //Nasty Plot
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user stimulates its brain by thinking bad thoughts. It sharply raises the user's Sp. Atk.";
			movedesc = "Raises user's Special Attack by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "naturalgift": //Natural Gift
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user draws power to attack by using its held Berry. The Berry determines its type and power.";
			movedesc = "Base power and type depend on user's held berry. The berry is consumed afterward. <a href='http://bulbapedia.bulbagarden.net/wiki/Natural_Gift#Effect'>See here</a> for a list of most possible types and base powers, and also note the following: if user holds a Nonni Berry, type is Light and base power is 60; if user holds a Lyngan Berry, type is Light and base power is 70; if user holds a Grandil Berry, type is Light and base power is 80. Fails if user is not holding a berry.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "naturepower": //Nature Power
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "An attack that makes use of nature's power. Its effects vary depending on the user's environment.";
			movedesc = "User selects and uses a specific move based on the current terrain, determined by the route on which the battle takes place and the active terrain effect. <a href='http://turquoise.alteredorigin.net/w/Guide:Differences_from_Canon#Nature_Power'>See here</a> for a list of potential moves.";
			moveflags = "None";
		break;
		case "needlearm": //Needle Arm
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The user attacks by wildly swinging its thorny arms. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "nightdaze": //Night Daze
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 85;
			moveAcc = 95;
			effect = 40;
			flavor = "The user lets loose a pitch-black shock wave at its target. It may also lower the target's accuracy.";
			movedesc = "40% chance to lower target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "nightmare": //Nightmare
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A sleeping target sees a nightmare that inflicts some damage every turn.";
			movedesc = "Fails unless target is asleep. Target loses 1/4 (25%) of its maximum HP at the end of every turn as long as it remains asleep; effect ends when target wakes up (unless it falls asleep again during the same turn) or leaves battle.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "nightshade": //Night Shade
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user makes the target see a frightening mirage. It inflicts damage matching the user's level.";
			movedesc = "User does damage equal to its level, unmodified by target's weaknesses or resistances (but does not affect Normal-types).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "nightslash": //Night Slash
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slashes the target the instant an opportunity arises. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "nobleroar": //Noble Roar [GEN VI]
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk stats.";
			movedesc = "Lowers target's Attack and Special Attack by 1 each.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "noxiousacid": //Noxious Acid
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 90;
			effect = 30;
			flavor = "The user sprays a foul-smelling liquid at the opposing PokÃ©mon. This may also lower their accuracy.";
			movedesc = "30% chance to lower target's accuracy by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "nuzzle": //Nuzzle [GEN VI]
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 100;
			effect = 100;
			flavor = "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.";
			movedesc = "Paralyzes the target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "oblivionwing": //Oblivion Wing [GEN VI]
			movetype = "Flying";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user absorbs its target's HP. The user's HP is restored by over half of the damage taken by the target.";
			movedesc = "User recovers HP equal to 3/4 (75%) of the damage dealt. If user is holding Big Root, recovery is increased to 100% of the damage dealt.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "octazooka": //Octazooka
			movetype = "Water";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 85;
			effect = 50;
			flavor = "The user attacks by spraying ink in the target's face or eyes. It may also lower the target's accuracy.";
			movedesc = "50% chance to lower target's accuracy by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "odorsleuth": //Odor Sleuth
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Enables a Ghost-type target to be hit with Normal- and Fighting-type attacks. It also enables an evasive target to be hit.";
			movedesc = "Resets target's Evasion to 0. Target cannot raise its Evasion until it leaves the field. Ghost-type targets take normal damage from Normal- and Fighting-type moves.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "ominouswind": //Ominous Wind
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 10;
			flavor = "The user blasts the target with a gust of repulsive wind. It may also raise all the user's stats at once.";
			movedesc = "10% chance to raise user's Attack, Defense, Special Attack, Special Defense and Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "orewave": //Ore Wave
			movetype = "Rock";
			moveclass = "Special";
			moveBP = 85;
			moveAcc = 100;
			effect = 0;
			flavor = "The user summons a wave of glittering ore from the earth and crashes it against the opposing team.";
			movedesc = "No additional effect. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "outrage": //Outrage
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user rampages and attacks for two to three turns. It then becomes confused, however.";
			movedesc = "User becomes uncontrollable for 2 or 3 turns and automatically targets a random opponent with this attack each of those turns. User becomes confused after Outrage ends.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "overheat": //Overheat
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 130;
			moveAcc = 90;
			effect = 100;
			flavor = "The user attacks the target at full power. The attack's recoil harshly reduces the user's Sp. Atk stat.";
			movedesc = "Lowers user's Special Attack by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "painsplit": //Pain Split
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user adds its HP to the target's HP, then equally shares the combined HP with the target.";
			movedesc = "User's current HP and target's current HP are averaged together; the two battlers' current HP is set to that new number (or to the maximum if the new current HP would exceed that Pok&eacute;mon's maximum HP). Does not count as 'inflicting damage' for effects relying on damage taken, e.g. Bide. Fails if target is behind a Substitute.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "paraboliccharge": //Parabolic Charge [GEN VI]
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit.";
			movedesc = "User recovers HP equal to 1/2 (50%) of the damage dealt. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "parodize": //Parodize
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user mocks the target by using one of its moves at random.";
			movedesc = "Selects and uses a random attack from target Pok&eacute;mon's current moveset (target is chosen at random in doubles/triples). Will not call Parodize or any moves on <a href='http://turquoise.alteredorigin.net/w/Parodize'>this list</a>.";
			moveflags = "None";
		break;
		case "partingshot": //Parting Shot [GEN VI]
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pok&eacute;mon.";
			movedesc = "Lowers target's Attack and Special Attack by 1 each. User immediately switches out unless it is the last conscious Pok&eacute;mon in its party; user's trainer selects a replacement Pok&eacute;mon from the party. Pursuit will hit the user before switching out. Ends the effect of Ingrain before switching out. If target has Magic Bounce, user's Attack and Special Attack are lowered instead and target immediately switches out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "payback": //Payback
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user stores power, then attacks. If the user can use this attack after the target, its power is doubled.";
			movedesc = "Base power doubles if user moves after target this turn.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "payday": //Pay Day
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.";
			movedesc = "For each use of Pay Day during this battle, if user's trainer wins the battle then they receive money equal to 5 times each Pay Day user's level.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "peck": //Peck
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 35;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is jabbed with a sharply pointed beak or horn.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pepperpowder": //Pepper Powder
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user scatters a cloud of spicy, stinging dust around the target that burns its skin.";
			movedesc = "Burns target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "perishsong": //Perish Song
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Any Pok&eacute;mon that hears this song faints in three turns, unless it switches out of battle.";
			movedesc = "All Pok&eacute;mon currently in battle (except those with Cacophony or Soundproof) receieve a Perish Count of 3. At the end of each turn (including this one) the Perish Count goes down by 1. When a Pok&eacute;mon's Perish Count reaches 0, that Pok&eacute;mon faints immediately. Switching out removes a Pok&eacute;mon's Perish Count.";
			moveflags = "Sound-based, Bypasses Substitute, Hits non-adjacent targets, Bypasses Substitute";
		break;
		case "petalblizzard": //Petal Blizzard [GEN VI]
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user stirs up a violent petal blizzard and attacks everything around it.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "petaldance": //Petal Dance
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.";
			movedesc = "User becomes uncontrollable for 2 or 3 turns and automatically targets a random opponent with this attack each of those turns. User becomes confused after Petal Dance ends.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "phantasmata": //Phantasmata
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user surrounds the target with wild hallucinations that cause it great mental anguish. It grows in power the smarter the user is.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 127 and a minimum BP of 1. Base power = user's happiness / 2, rounded down to the nearest whole number.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "phantomforce": //Phantom Force [GEN VI]
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. Hits through Crafty Shield, Detect, Protect, King's Shield, Mat Block, Quick Guard, Spiky Shield and Wide Guard and cancels their effects. Base power is doubled and will always hit if target has used Minimize at least once since entering battle.";
			moveflags = "Makes contact, Copied by Mirror Move, Has charge turn";
		break;
		case "phoenixfire": //Phoenix Fire
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user breathes a stream of mystic flames fueled by its fallen friends. The more party PokÃ©mon that have fainted or are ailing, the greater the damage.";
			movedesc = "Base power is equal to 60 + (20 * number of non-user Pok&eacute;mon in user's trainer's party that have fainted or are asleep/burned/frozen/paralyzed/poisoned), to a max of 160. Only counts fainted party members, not empty party slots.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "pinmissile": //Pin Missile
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 95;
			effect = 0;
			flavor = "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pistonkick": //Piston Kick
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 0;
			flavor = "The user throws a fast, chambered kick or stomp with a steel-hard leg.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pixiepunch": //Pixie Punch
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 20;
			flavor = "The user punches the target with a fist full of sparkling powder. This may also confuse the target.";
			movedesc = "20% chance to confuse target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "playnice": //Play Nice [GEN VI]
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat.";
			movedesc = "Lowers target's Attack by 1. Ignores Detect, King's Shield, Protect and Spiky Shield.";
			moveflags = "Blocked by Protect, Reflected by Mirror Coat, Copied by Mirror Move";
		break;
		case "playrough": //Play Rough [GEN VI]
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 90;
			effect = 30;
			flavor = "The user plays rough with the target and attacks it. This may also lower the target's Attack stat.";
			movedesc = "30% chance to lower target's Attack by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pluck": //Pluck
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user pecks the target. If the target is holding a Berry, the user eats it and gains its effect.";
			movedesc = "If target is holding a berry, the berry is destroyed and user immediately gains its effect. Jaboca and Coba berries will activate for the target before user can eat them. Does not consume berries if target is behind a Substitute.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "poisonfang": //Poison Fang
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 30;
			flavor = "The user bites the target with toxic fangs. It may also leave the target badly poisoned.";
			movedesc = "30% chance to badly poison target. Badly poisoned Pok&eacute;mon lose HP each turn, starting at 1/16th of their maximum HP and increasing by an additional 1/16th each turn (so 1/16th, then 2/16ths, then 3/16ths,  then 4/16th, etc.).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "poisongas": //Poison Gas
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "A cloud of poison gas is sprayed in the face of opposing Pok&eacute;mon. It may poison those hit.";
			movedesc = "Poisons target. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "poisonjab": //Poison Jab
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 30;
			flavor = "The target is stabbed with a tentacle or arm steeped in poison. It may also poison the target.";
			movedesc = "30% chance to poison target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "poisonpowder": //Poison Powder
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user scatters a cloud of poisonous dust on the target. It may poison the target.";
			movedesc = "Poisons target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "poisonsting": //Poison Sting
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 100;
			effect = 30;
			flavor = "The user stabs the target with a poisonous stinger. This may also poison the target.";
			movedesc = "30% chance to poison target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "poisontail": //Poison Tail
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 10;
			flavor = "The user hits the target with its tail. It may also poison the target. Critical hits land more easily.";
			movedesc = "10% chance to poison target. Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pounce": //Pounce
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "A two-turn attack. The user braces itself and watches the target closely, then pounces on the second turn.";
			movedesc = "User charges this turn at priority +1, then does damage next turn with priority +1. Skipping the charge turn with Power Herb or Power Garden causes Pounce to attack at +1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "pound": //Pound
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is physically pounded with a long tail or a foreleg, etc.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "powder": //Powder [GEN VI]
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 10;
			flavor = "The user covers the target in a powder that explodes and damages the target if it uses a Fire-type move.";
			movedesc = "If target uses a Fire-type move this turn, that move fails and target takes typeless damage equal to 25% its maximum HP. Does not prevent moves with the 'Defrosts user' flag from thawing target if it is frozen. +1 priority.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "powdersnow": //Powder Snow
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "The user attacks with a chilling gust of powdery snow. It may also freeze the targets.";
			movedesc = "10% chance to freeze target. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "powergarden": //Power Garden
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A garden of plants with spicy, invigorating aromas grows for five turns. Charging up and recovering from powerful moves happens quickly.";
			movedesc = "For the next 5 turns (including this turn), Pok&eacute;mon can strike with moves with the 'Has charge turn' flag (e.g. Dig and Solar Beam) on the same turn that they are used, and can skip the recharge turn of moves with the 'Has recharge turn' flag (e.g. Hyper Beam and Roar of Time). Effects that would happen during the moves' charge turns (e.g. Skull Bash's Defense boost) still occur. Pok&eacute;mon holding a Power Herb while Power Garden is in effect will not consume that Power Herb on using these moves.";
			moveflags = "None";
		break;
		case "powergem": //Power Gem
			movetype = "Rock";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks with a ray of light that sparkles as if it were made of gemstones.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "powersplit": //Power Split
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target's.";
			movedesc = "User's unmodified Attack and target's unmodified Attack (i.e., ignoring stat boosts or effects like Flower Gift or Huge Power) are averaged together, followed by the user's unmodified Special Attack and target's unmodified Special Attack. The average Attack becomes the new unmodified Attack for both user and target, and the average Special Attack becomes the new unmodified Special Attack for both user and target. Affected Attack/Special Attack returns to normal upon switching out.";
			moveflags = "Blocked by Protect";
		break;
		case "powerswap": //Power Swap
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to switch changes to its Attack and Sp. Atk with the target.";
			movedesc = "User's Attack and Special Attack modifiers (e.g., +1 Attack, -2 Special Attack) are swapped with the target's Attack and Special Attack modifiers.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "powertrick": //Power Trick
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to switch its Attack with its Defense stat.";
			movedesc = "User's unmodified Attack and unmodified Defense (i.e., ignoring stat boosts or effects like Flower Gift or Huge Power) are swapped. Power Trick's effect can be Baton Passed.";
			moveflags = "Stolen by Snatch";
		break;
		case "poweruppunch": //Power-Up Punch [GEN VI]
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 100;
			flavor = "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat.";
			movedesc = "100% chance to raise user's Attack by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "powerwhip": //Power Whip
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 85;
			effect = 0;
			flavor = "The user violently whirls its vines or tentacles to harshly lash the target.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "present": //Present
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however.";
			movedesc = "Has a 40% chance to deal damage with a base power of 40, a 30% chance to deal damage with a base power of 80, a 10% chance to deal damage with a base power of 120, and a 20% chance to heal the target by 80 HP. Consumes a target's held Normal Gem even if it heals the target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "pressurewave": //Pressure Wave
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user sends a pressure wave through the ground that strikes with lightning speed. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "prismshower": //Prism Shower
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user releases a shower of sparkling ice and snow that pelts the opponent. It grows in power the cuter the user is.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 127 and a minimum BP of 1. Base power = user's happiness / 2, rounded down to the nearest whole number.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "protect": //Protect
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "It enables the user to evade all attacks. Its chance of failing rises if it is used in succession.";
			movedesc = "User cannot be damaged or affected by any move with the 'Blocked by Protect' flag (essentially almost all moves that target it) for the rest of this turn. Does not block end-of-turn effects or damage like weather damage or status ailments. Fails if user moves last this turn. If the user successfully used Detect, Endure, King's Shield, Protect, Spiky Shield, or Vanish last turn, this move has a 50% chance to fail. +4 priority.";
			moveflags = "None";
		break;
		case "psybeam": //Psybeam
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is attacked with a peculiar ray. It may also cause confusion.";
			movedesc = "10% chance to confuse target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychic": //Psychic
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is hit by a strong telekinetic force. It may also reduce the target's Sp.Def stat.";
			movedesc = "10% chance to lower target's Special Defense.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychoboost": //Psycho Boost
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 140;
			moveAcc = 90;
			effect = 0;
			flavor = "The user attacks the target at full power. The attack's recoil harshly reduces the user's Sp. Atk stat.";
			movedesc = "Lowers user's Special Attack by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychocut": //Psycho Cut
			movetype = "Psychic";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user tears at the target with blades formed by psychic power. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychoshift": //Psycho Shift
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "Using its psychic power of suggestion, the user transfers its status problems to the target.";
			movedesc = "User's non-volatile status conditions (burn, paralysis, poison, bad poison, sleep) are transfered to target and the user is cured of its condition. Abilities that take effect when the Pok&eacute;mon receives a status effect occur before user is cured (so if Psycho Shift is used on a target with Synchronize, the target will be paralyzed, Synchronize will attempt to paralyze the user and fail, and then the user will be cured of its own paralysis).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychout": //Psych Out
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user boasts about its own abilities and demoralizes the target, raising the user's Sp. Atk but lowering the target's Sp. Def.";
			movedesc = "Lowers target's Special Defense by 1 and raises user's Special Attack by 1. User's Special Attack is not raised if this move misses.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psychup": //Psych Up
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user hypnotizes itself into copying any stat change made by the target.";
			movedesc = "User's current stat modifiers (for Attack, Defense, Special Attack, Special Defense, Speed, Accuracy and Evasion) are discarded and target's current stat modifiers are copied onto the user.";
			moveflags = "Bypasses Substitute";
		break;
		case "psyshock": //Psyshock
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user materializes an odd psychic wave to attack the target. This attack does physical damage.";
			movedesc = "Does damage based on user's Special Attack and target's Defense.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psystrike": //Psystrike
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 100;
			effect = 0;
			flavor = "The user materializes an odd psychic wave to attack the target. This attack does physical damage.";
			movedesc = "Does damage based on user's Special Attack and target's Defense.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "psywave": //Psywave
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 80;
			effect = 0;
			flavor = "The target is attacked with an odd psychic wave. The attack varies in intensity.";
			movedesc = "A random number is chosen between 0 and 10 inclusive. Psywave does a random amount of typeless damage (but still cannot hit Dark-types) equal to (X + 5) * (User's level / 10) where X is the randomly chosen number.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "pulsejet": //Pulse Jet
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user shoots a pulse of intense heat that blasts the target before it can react. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "pulsestorm": //Pulse Storm
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "The user summons a small, localized storm that blasts the target in short bursts, striking 2 to 5 times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "punishment": //Punishment
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "This attack's power increases the more the target has powered up with stat changes.";
			movedesc = "Base power is equal to 60 + (20 * number of target's positive stat modifiers). For example, if target has used Swords Dance twice and Harden once, it has +4 Attack from Swords Dance and +1 Defense from Harden for a total of +5 in positive stat changes. Punishment's base power is 160 against this target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "pursuit": //Pursuit
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that inflicts double damage if used on a target that is switching out of battle.";
			movedesc = "If target is switched out this turn, user attacks before the switch and base power doubles.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "puzzlepowder": //Puzzle Powder
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user scatters a cloud of strange dust around the target that leaves it confused and disoriented.";
			movedesc = "Confuses target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "quash": //Quash
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user suppresses the target and makes its move go last.";
			movedesc = "Target makes its move after all other Pok&eacute;mon this turn, regardless of speed or priority. Fails if target has already acted this turn.";
			moveflags = "Bypasses Substitute";
		break;
		case "quickattack": //Quick Attack
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user lunges at the target at a speed that makes it almost invisible. It is sure to strike first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "quickguard": //Quick Guard
			movetype = "Fighting";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user protects itself and its allies from priority moves.";
			movedesc = "User and its allies cannot be damaged or affected by any move with a positive priority (e.g. Quick Attack or Sucker Punch) for the rest of this turn. Does not block Feint or any moves that only have elevated priority due to Prankster. Fails if user moves last this turn. +3 priority.";
			moveflags = "Stolen by Snatch";
		break;
		case "quicksand": //Quicksand
			movetype = "Ground";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 80;
			effect = 0;
			flavor = "The user creates an area of sinking sands beneath the target. The target is unable to use direct contact attacks until it can climb out of the quicksand.";
			movedesc = "For the next 3 turns (including this turn), target cannot select moves with the 'Makes contact' flag as long as it remains in battle. If target has not yet acted when Quicksand is used and would have used a contact move this turn, target's move will fail. If target is holding a Choice Band/Specs/Scarf and is locked into a contact move, it will use Struggle each turn until Quicksand wears off. Does not affect Flying-types or Pok&eacute;mon with Levitate (unless they are holding Iron Ball, they are under the effect of Ingrain or Gravity is in effect).";
			moveflags = "Reflected by Magic Coat";
		break;
		case "quiverdance": //Quiver Dance
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lightly performs a beautiful, mystic dance. It boosts the user's Sp. Atk, Sp. Def, and Speed stats.";
			movedesc = "Raises user's Special Attack, Special Defense and Speed by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "radiantclaw": //Radiant Claw
			movetype = "Dragon";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slashes with claws glowing with powerful golden energy. This attack does special damage.";
			movedesc = "Does damage based on user's Attack and target's Special Defense.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "rage": //Rage
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "As long as this move is in use, the power of rage raises the Attack stat each time the user is hit in battle.";
			movedesc = "If Rage was the last move selected by user when user is damaged by an attack, raises user's Attack by 1. All attack boosts gained in this manner are removed when user selects any move other than Rage.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "ragepowder": //Rage Powder
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user scatters a cloud of irritating powder to draw attention to itself. Opponents aim only at the user.";
			movedesc = "All opposing Pok&eacute;mon target the user with their single-target moves until the end of this turn. Redirects attacks even if user's ally has Lightningrod/Storm Drain.";
		moveflags = "None";
		break;
		case "raindance": //Rain Dance
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user summons a heavy rain that falls for five turns, powering up Water-type moves.";
			movedesc = "Changes active weather to heavy rain for 5 turns (including this turn), or 8 turns if user holds a Damp Rock when this move is used. Heavy rain weather condition explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Weather_conditions#Heavy_rain'>here</a>.";
			moveflags = "None";
		break;
		case "rapidspin": //Rapid Spin
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes."
			movedesc = "Removes all entry hazards from user's side of the field (Hot Coals, Quicksand, Spikes, Stealth Rock, Toxic Spikes), frees user from all partial-trapping moves (Bind, Clamp, Fire Spin, Magma Storm, Sand Tomb, Whirlpool, Wrap) and frees user from the effect of Leech Seed.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "razorleaf": //Razor Leaf
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 55;
			moveAcc = 95;
			effect = 0;
			flavor = "Sharp-edged leaves are launched to slash at the opposing team. Critical hits land more easily.";
			movedesc = "Crit rate +1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "razorshell": //Razor Shell
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 95;
			effect = 50;
			flavor = "The user cuts its target with sharp shells. This attack may also lower the target's Defense stat.";
			movedesc = "50% chance to lower target's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "razorwind": //Razor Wind
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "A two-turn attack. Blades of wind hit opposing Pok&eacute;mon on the second turn. Critical hits land more easily.";
			movedesc = "User charges this turn, then does damage next turn. Crit rate +1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "recover": //Recover
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Restoring its own cells, the user restores its own HP by half of its max HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "recycle": //Recycle
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user recycles a held item that has been used in battle so it can be used again.";
			movedesc = "User regains the last item it held that was consumed in this battle. Consumed items other than the last are overwritten and cannot be recovered by Recycle. Consumed items are not forgotten when user switches out. Recovers items consumed by Fling and Natural Gift, but not items lost by Bestow, Covet, Switcheroo, Thief or Trick. Fails if the item is collected by a Pok&eacute;mon with Pickup before Recycle is used. Can recover items that were originally another Pok&eacute;mon's but were transferred to user via Bestow, Covet, Pickup, Switcheroo, Thief or Trick. If user obtains a new item after consuming one, it can still use Recycle to restore the old item as long as it currently has no held item and did not consume any other items since consuming the old item.";
			moveflags = "Stolen by Snatch";
		break;
		case "reflect": //Reflect
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A wondrous wall is put up to suppress damage from physical attacks for five turns.";
			movedesc = "For 5 turns (including this turn), or 8 turns if user holds a Light Clay when this move is used, physical attacks that target any active Pok&eacute;mon on user's side have their damage reduced by 1/2 (50%), or 1/3 (33%) in doubles/triples. Brick Break's damage is not reduced when used against a target behind Reflect, and Reflect's effect will immediately end when Brick Break or Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "reflecttype": //Reflect Type
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user reflects the target's type, making it the same type as the target.";
			movedesc = "User's type(s) are changed to match target's type(s). Correctly copies the real type(s) of targets whose ability is Illusion. Fails if user's ability is Multitype.";
			moveflags = "Blocked by Protect";
		break;
		case "refresh": //Refresh
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user rests to cure itself of a poisoning, burn, or paralysis.";
			movedesc = "User recovers from burns, poisoning and paralysis.";
			moveflags = "Stolen by Snatch";
		break;
		case "relicsong": //Relic Somg
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 10;
			flavor = "The user sings an ancient song and attacks by appealing to the hearts of those listening. It may also induce sleep.";
			movedesc = "10% chance to make target fall asleep. When user is Meloetta, changes user between its Aria Forme and Pirouette Forme.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "rest": //Rest
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user goes to sleep for two turns. It fully restores the user's HP and heals any status problem.";
			movedesc = "User recovers HP until it is at its maximum HP (100%), recovers from any major status condition and confusion, and falls asleep for 3 turns (including this turn). If user's ability is Early Bird, user falls asleep for 2 turns (including this turn). Fails if user's ability is Insomnia or Vital Spirit, if Uproar is in effect, if user is already at full health, or if user is already asleep.";
			moveflags = "Stolen by Snatch";
		break;
		case "restrain": //Restrain
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 10;
			moveAcc = 90;
			effect = 100;
			flavor = "The target is grabbed and squeezed for four to five turns. Holding the target in place makes it easier to catch.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns. Target's catch rate is doubled for the duration of Restrain.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "retaliate": //Retaliate
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this attack's damage increases.";
			movedesc = "Base power doubles if user's teammate fainted during the previous turn.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "return": //Return
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A full-power attack that grows more powerful the more the user likes its Trainer.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 102 and a minimum BP of 1. Base power = user's happiness / 2.5, rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "reveldance": //Revel Dance
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks with a frenzied, reckless dance for two to three turns. The user then becomes confused.";
			movedesc = "User becomes uncontrollable for 2 or 3 turns and automatically targets a random opponent with this attack each of those turns. User becomes confused after Revel Dance ends.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "revenge": //Revenge
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that inflicts double the damage if the user has been hurt by the opponent in the same turn.";
			movedesc = "Base power doubles if target hit the user with a damaging attack this turn. -4 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "reversal": //Reversal
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "An all-out attack that becomes more powerful the less HP the user has.";
			movedesc = "The lower the user's HP, the higher this move's base power, with a maximum BP of 200. <a href='http://bulbapedia.bulbagarden.net/wiki/Reversal_%28move%29#Generation_V'>See here</a> for the formula and base power table used.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "ringoffire": //Ring of Fire
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 95;
			effect = 20;
			flavor = "The user surrounds itself with a shield of impenetrable fire, then releases it on the second turn to damage all around it. It may leave its targets with a burn.";
			movedesc = "20% chance to burn target. User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected by Muddy Water and Surf during its semi-invulnerable turn, and those moves will immediately cancel the strike turn of this attack. User can also still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. User will not take damage from hail, miasma or sandstorm while in the semi-invulnerable turn of Ring of Fire. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn, Defrosts user";
		break;
		case "roar": //Roar
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is scared off and replaced by another Pok&eacute;mon in its party. In the wild, the battle ends.";
			movedesc = "Immediately ends wild battles, but fails if target's level is equal to or greater than user's level. In trainer battles, forces trainers to switch the target with another randomly-selected Pok&eacute;mon in their party (regardless of target's level); fails if target's trainer has no Pok&eacute;mon remaining. Priority -5.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute, Bypasses Substitute";
		break;
		case "roaroftime": //Roar of Time
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The user blasts the target with power that distorts even time. The user must rest on the next turn.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "rockblast": //Rock Blast
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 90;
			effect = 0;
			flavor = "The user hurls hard rocks at the target. Two to five rocks are launched in quick succession.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "rockclimb": //Rock Climb
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 85;
			effect = 20;
			flavor = "The user attacks the target by smashing into it with incredible force. It may also confuse the target.";
			movedesc = "20% chance to confuse target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "rocketkick": //Rocket Kick
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 95;
			effect = 0;
			flavor = "The user delivers two high-speed, jet-propelled kicks.";
			movedesc = "Hits 2 times in one turn. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit. +1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "rockpolish": //Rock Polish
			movetype = "Rock";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user polishes its body to reduce drag. It can sharply raise the Speed stat.";
			movedesc = "Raises user's Speed by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "rockslide": //Rock Slide
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 90;
			effect = 30;
			flavor = "Large boulders are hurled at the opposing team to inflict damage. It may also make the targets flinch.";
			movedesc = "30% chance to make target flinch. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "rocksmash": //Rock Smash
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 50;
			flavor = "The user attacks with a punch that can shatter a rock. It may also lower the target's Defense stat.";
			movedesc = "50% chance to lower target's Defense by 1.";
			moveflags = "Makes Contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "rockthrow": //Rock Throw
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 90;
			effect = 0;
			flavor = "The user picks up and throws a small rock at the target to attack.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "rocktomb": //Rock Tomb
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 95;
			effect = 100;
			flavor = "Boulders are hurled at the target. It also lowers the target's Speed by preventing its movement.";
			movedesc = "100% chance to lower target's Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "rockwrecker": //Rock Wrecker
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 150;
			moveAcc = 90;
			effect = 0;
			flavor = "The user launches a huge boulder at the target to attack. It must rest on the next turn, however.";
			movedesc = "User attacks this turn, then recharges next turn and cannot attack or switch out.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has recharge turn";
		break;
		case "roleplay": //Role Play
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user mimics the target completely, copying the target's natural Ability.";
			movedesc = "User's ability is replaced with target's ability. Fails if target's ability is Multitype or Wonder Guard.";
			moveflags = "Bypasses Substitute";
		break;
		case "rollingkick": //Rolling Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 85;
			effect = 30;
			flavor = "The user lashes out with a quick, spinning kick. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "rollout": //Rollout
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 90;
			effect = 0;
			flavor = "The user continually rolls into the target over five turns. It becomes stronger each time it hits.";
			movedesc = "User becomes uncontrollable for 5 turns or until this attack misses, whichever comes first. User automatically uses Rollout on each turn, base power doubling with each hit up to a maximum of 480 on the fifth turn. If user has used Defense Curl at least once while in battle Rollout's base power is doubled, starting at 60 and reaching a maximum of 960 on the fifth turn.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "roost": //Roost
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lands and rests its body. It restores the user's HP by up to half of its max HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP. If user is dual-type and one of its types is Flying, user loses the Flying-type (and is counted as single-type) until the end of this turn. If user is a pure Flying-type, user's type becomes Normal until the end of this turn.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "rototiller": //Rototiller [GEN VI]
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Tilling the soil, the user makes it easier for plants to grow. This raises the Attack and Sp. Atk stats of Grass-type Pok&eacute;mon.";
			movedesc = "Raises the Attack and Special Attack of all Grass-type Pok&eacute;mon on the field by 1 each.";
			moveflags = "None";
		break;
		case "round": //Round
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target with a song. Others can join in the Round and make the attack do greater damage.";
			movedesc = "Base power doubles if at least one ally already used Round this turn. If an ally already used Round this turn, user's Round is used immediately after that ally's Round, regardless of the original speed order.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "sacredfire": //Sacred Fire
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 95;
			effect = 50;
			flavor = "The target is razed with a mystical fire of great intensity. It may also leave the target with a burn.";
			movedesc = "50% chance to burn target. Frozen users will thaw before using this move.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "sacredsword": //Sacred Sword
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks by slicing with its long horns. The target's stat changes don't affect this attack's damage.";
			movedesc = "Ignores target's Defense and Evasion boosts (but does not ignore Reflect).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "safeguard": //Safeguard
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user creates a protective field that prevents status problems for five turns.";
			movedesc = "For 5 turns (including this turn), attacks that target any active Pok&eacute;mon on user's side cannot afflict those Pok&eacute;mon non-volatile status conditions (burn, freeze, paralyze, poison, sleep) or confusion. Safeguard does not prevent self-inflicted status conditions from moves like Rest or Outrage. Safeguard's effect will immediately end when Golden Flame is used against it successfully.";
			moveflags = "Stolen by Snatch";
		break;
		case "salvage": //Salvage
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user gathers metal to repair its body and raise its Defense stat. It restores the user's HP by up to 1/4 of its max HP.";
			movedesc = "Raises user's Defense by 1 and restores HP equal to 1/4 (25%) of user's maximum HP. User's weight is doubled (only on the first use, weight-doubling effect does not stack).";
			moveflags = "Stolen by Snatch";
		break;
		case "sandattack": //Sand Attack
			movetype = "Ground";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "Sand is hurled in the target's face, reducing its accuracy.";
			movedesc = "Lowers target's accuracy by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "sandblast": //Sandblast
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 55;
			moveAcc = 95;
			effect = 20;
			flavor = "The user fires a high-pressure stream of sand at the target. It may also burn the target.";
			movedesc = "20% chance to burn target. Base power doubles if the active weather is sandstorm.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "sandstorm": //Sandstorm
			movetype = "Rock";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A five-turn sandstorm is summoned to hurt all combatants except the Rock, Ground, and Steel types.";
			movedesc = "Changes active weather to sandstorm for 5 turns (including this turn), or 8 turns if user holds a Smooth Rock when this move is used. Sandstorm weather condition explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Weather_conditions#Sandstorm'>here</a>.";
			moveflags = "None";
		break;
		case "sandtomb": //Sand Tomb
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 35;
			moveAcc = 85;
			effect = 100;
			flavor = "The user traps the target inside a harshly raging sandstorm for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "scald": //Scald
			movetype = "Water";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 30;
			flavor = "The user shoots boiling hot water at its target. It may also leave the target with a burn.";
			movedesc = "30% chance to burn target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Defrosts user";
		break;
		case "scaryface": //Scary Face
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user frightens the target with a scary face to harshly reduce its Speed stat.";
			movedesc = "Lowers target's Speed by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "scratch": //Scratch
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "Hard, pointed, and sharp claws rake the target to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "screech": //Screech
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "An earsplitting screech harshly reduces the target's Defense stat.";
			movedesc = "Lowers target's Defense by 2.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "searingshot": //Searing Shot
			movetype = "Fire";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 100;
			effect = 30;
			flavor = "An inferno of scarlet flames torches everything around the user. It may leave targets with a burn.";
			movedesc = "30% chance to burn target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "secretpower": //Secret Power
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 30;
			flavor = "The user attacks the target with a secret power. Its added effects vary depending on the user's environment.";
			movedesc = "30% chance to cause an effect based on the current terrain, determined by the route on which the battle takes place and the active terrain effect. <a href='http://turquoise.alteredorigin.net/w/Guide:Differences_from_Canon#Secret_Power'>See here</a> for a list of potential effects.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "secretsword": //Secret Sword
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 85;
			moveAcc = 100;
			effect = 0;
			flavor = "The user cuts with its long horn. The odd power contained in the horn does physical damage to the target.";
			movedesc = "Does damage based on user's Special Attack and target's Defense.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "seedbomb": //Seed Bomb
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slams a barrage of hard-shelled seeds down on the target from above.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "seedflare": //Seed Flare
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 85;
			effect = 40;
			flavor = "The user emits a shock wave from its body to attack its target. It may harshly lower the target's Sp. Def.";
			movedesc = "40% chance to lower target's Special Defense by 2.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "seismictoss": //Seismic Toss
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.";
			movedesc = "User does damage equal to its level, unmodified by target's weaknesses or resistances (but does not affect Ghost-types).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "selfdestruct": //Self-Destruct
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 200;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks everything around it by causing an explosion. The user faints upon using this move.";
			movedesc = "User faints. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "serenewind": //Serene Wind
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user generates a light breeze that relaxes all battling Pok&eacute;mon, healing status problems and eliminating stat changes.";
			movedesc = "Heals all status problems and confusion from all active Pok&eacute;mon (user's side and opponent's side) and resets any and all of their modified stats to 0.";
			moveflags = "None";
		break;
		case "shadowball": //Shadow Ball
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 20;
			flavor = "The user hurls a shadowy blob at the target. It may also lower the target's Sp. Def stat.";
			movedesc = "20% chance to lower target's Special Defense by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "shadowclaw": //Shadow Claw
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slashes with a sharp claw made from shadows. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "shadowdart": //Shadow Dart
			movetype = "Ghost";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "The user fires a shadowy bolt that follows the target anywhere, even through the earth or the air.";
			movedesc = "Targets in the semi-invulnerable turn of Backstab, Bounce, Dig, Dive, Drag Under, Fly, Phantom Force, Ring of Fire, Shadow Force, Sky Drop and Void Burst can be hit with this move.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "shadowforce": //Shadow Force
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user disappears, then strikes the target on the second turn. It hits even if the target protects itself.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. Hits through Crafty Shield, Detect, Protect, King's Shield, Mat Block, Quick Guard, Spiky Shield and Wide Guard and cancels their effects.";
			moveflags = "Makes contact, Copied by Mirror Move, Has charge turn";
		break;
		case "shadowpunch": //Shadow Punch
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user throws a punch from the shadows. The punch lands without fail.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "shadowsneak": //Shadow Sneak
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user extends its shadow and attacks the target from behind. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "sharpen": //Sharpen
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user reduces its polygon count to make itself more jagged, raising the Attack stat.";
			movedesc = "Raises user's Attack by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "shearwave": //Shear Wave
			movetype = "Ground";
			moveclass = "Physical";
			moveBP = 40;
			moveAcc = 100;
			effect = 30;
			flavor = "The user causes a tiny quake that shakes the ground beneath the target's feet. This may also lower the target's Speed stat.";
			movedesc = "30% chance to lower target's Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "sheercold": //Sheer Cold
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 30;
			effect = 0;
			flavor = "The target is attacked with a blast of absolute-zero cold. The target instantly faints if it hits.";
			movedesc = "Target faints. Doesn't affect targets of a higher level.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "shellsmash": //Shell Smash
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user breaks its shell, lowering its Defense and Sp. Def stats but sharply raising Attack, Sp. Atk, and Speed stats.";
			movedesc = "Raises user's Attack, Special Attack and Speed by 2 each. Lowers user's Defense and Special Defense by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "shiftgear": //Shift Gear
			movetype = "Steel";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user rotates its gears, raising its Attack and sharply raising its Speed.";
			movedesc = "Raises user's Attack by 1 and its Speed by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "shimmershot": //Shimmer Shot
			movetype = "Fairy";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 100;
			flavor = "Shimmering energy gathers around the user with each burst of light. Hitting a target raises the Sp. Attack stat.";
			movedesc = "100% chance to raise user's Special Attack by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "shockwave": //Shock Wave
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "The user strikes the target with a quick jolt of electricity. This attack cannot be evaded.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "signalbeam": //Signal Beam
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 100;
			effect = 10;
			flavor = "The user attacks with a sinister beam of light. It may also confuse the target.";
			movedesc = "10% chance to confuse target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "silverwind": //Silver Wind
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is attacked with powdery scales blown by wind. It may also raise all the user's stats.";
			movedesc = "10% chance to raise user's Attack, Defense, Special Attack, Special Defense and Speed by 1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "simplebeam": //Simple Beam
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user's mysterious psychic wave changes the target's Ability to Simple.";
			movedesc = "Changes target's ability to Simple.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "sing": //Sing
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 55;
			effect = 0;
			flavor = "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "sketch": //Sketch
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "It enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.";
			movedesc = "If successful, Sketch permanently becomes the target's last used move. Fails if that move is Chatter or Struggle.";
			moveflags = "Bypasses Substitute";
		break;
		case "skillswap": //Skill Swap
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user employs its psychic power to exchange Abilities with the target.";
			movedesc = "User and target swap abilities. Fails if either ability is Multitype or Wonder Guard.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "skullbash": //Skull Bash
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 100;
			effect = 0;
			flavor = "The user tucks in its head to raise its Defense in the first turn, then rams the target on the next turn.";
			movedesc = "User charges this turn, then does damage next turn. Raises user's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "skyattack": //Sky Attack
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 140;
			moveAcc = 90;
			effect = 30;
			flavor = "A second-turn attack move. It may also make the target flinch.";
			movedesc = "User charges this turn, then does damage next turn. 30% chance to make target flinch.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn, Hits non-adjacent targets";
		break;
		case "skydrop": //Sky Drop
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user takes the target into the sky, then drops it during the next turn. The target cannot attack while in the sky.";
			movedesc = "User and target become semi-invulnerable this turn, then user does damage and both return to the ground the next turn. Target cannot act while held in the air by Sky Drop. Flying-type targets take no damage from Sky Drop, but the rest of the move's effects behave as normal against them. User and target can still be damaged/affected by Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, Twister and Whirlwind during their semi-invulnerable turn, and Gust and Twister have their base power doubled. User and target can also still be damaged/affected during their semi-invulnerable turn if they were targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking them has No Guard.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Has charge turn, Stopped by Gravity, Hits non-adjacent targets";
		break;
		case "skyuppercut": //Sky Uppercut
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 85;
			moveAcc = 90;
			effect = 0;
			flavor = "The user attacks the target with an uppercut thrown skyward with force.";
			movedesc = "Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "slackoff": //Slack Off
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user slacks off, restoring its own HP by up to half of its maximum HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "slam": //Slam
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 75;
			effect = 0;
			flavor = "The target is slammed with a long tail, vines, etc., to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "slash": //Slash
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is attacked with a slash of claws or blades. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "sleeppowder": //Sleep Powder
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user scatters a big cloud of sleep-inducing dust around the target.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "sleeptalk": //Sleep Talk
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "While it is asleep, the user randomly uses one of the moves it knows.";
			movedesc = "Randomly selects and uses any one of user's other moves, with the exception of any move on <a href='http://bulbapedia.bulbagarden.net/wiki/Sleep_Talk_(move)#Generation_V'>this list</a> and Parodize, Ring of Fire and Void Burst. Fails if user is not asleep.";
			moveflags = "None";
		break;
		case "sludge": //Sludge
		movetype = "Poison";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 30;
			flavor = "Unsanitary sludge is hurled at the target. It may also poison the target.";
			movedesc = "30% chance to poison target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "sludgebomb": //Sludge Bomb
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 30;
			flavor = "Unsanitary sludge is hurled at the target. It may also poison the target.";
			movedesc = "30% chance to poison target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "sludgewave": //Sludge Wave
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 95;
			moveAcc = 100;
			effect = 10;
			flavor = "It swamps the area around the user with a giant sludge wave. It may also poison those hit.";
			movedesc = "10% chance to poison target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "slumberfang": //Slumber Fang
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 90;
			effect = 0;
			flavor = "The user bites the target and injects a venom that causes the target to fall asleep on the next turn.";
			movedesc = "Target falls asleep at the end of the next turn. If target leaves the field Slumber Fang's effect is canceled. Fails if target is protected by Safeguard, if Uproar is in effect, if target is behind a substitute, if target's ability is Insomnia or Vital Spirit, or if target already has a major status condition. Target will not fall asleep at the end of next turn if it gains a major status condition other than sleep, if Uproar comes into effect, or if its ability becomes Insomnia or Vital Spirit. If target falls asleep before the end of next turn, then wakes up again, Slumber Fang will put it back to sleep at the end of the following turn.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "smackdown": //Smack Down
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user throws a stone or projectile to attack an opponent. A flying Pok&eacute;mon will fall to the ground when hit.";
			movedesc = "Target loses immunity to Ground-type moves (whether target was a Flying-type, had Levitate or was under the effect of Magnet Rise or Telekinesis) until it switches out. Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move; the strike turns of Bounce and Fly will immediately be canceled upon being hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "smellingsalts": //Smelling Salts
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "This attack inflicts double damage on a target with paralysis. It also cures the target's paralysis, however.";
			movedesc = "Base power doubles against paralyzed targets. If target is paralyzed, its paralysis is cured after damage is dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "smog": //Smog
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 30;
			moveAcc = 70;
			effect = 40;
			flavor = "The target is attacked with a discharge of filthy gases. It may also poison the target.";
			movedesc = "40% chance to poison target.";
			moveflags = "Blocked by Protect, Copied by Mirror move";
		break;
		case "smokescreen": //Smokescreen
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user releases an obscuring cloud of smoke or ink. It reduces the target's accuracy.";
			movedesc = "Lowers target's Accuracy by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "snarl": //Snarl
			movetype = "Dark";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 95;
			effect = 100;
			flavor = "The user yells as if it is ranting about something, making the target's Sp. Atk stat decrease.";
			movedesc = "100% chance to lower target's Special Attack by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "snatch": //Snatch
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user steals the effects of any healing or stat-changing move the opponent attempts to use.";
			movedesc = "User steals the first self-targeted move (any move with the Stolen by Snatch flag) used on this turn, such that the move's effect is applied to the user of Snatch and not its original user. If two or more Pok&eacute;mon use Snatch on the same turn, the faster Pok&eacute;mon will steal the first beneficial move, and the slower Pok&eacute;mon will then steal it again from the first user of Snatch (i.e., only the slowest Pok&eacute;mon using Snatch this turn gains the stolen move's effect). If user steals Psych Up, it will target the Pok&eacute;mon that used Psych Up.";
			moveflags = "Bypasses Substitute";
		break;
		case "snore": //Snore
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 30;
			flavor = "An attack that can be used only if the user is asleep. The harsh noise may also make the target flinch.";
			movedesc = "30% chance to make target flinch. Fails if user is not asleep.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "snowcannon": //Snow Cannon
			movetype = "Ice";
			moveclass = "Special";
			moveBP = 75;
			moveAcc = 90;
			effect = 30;
			flavor = "A hefty blast of snow is fired at the opposing team to inflict damage. It may also make the targets flinch.";
			movedesc = "30% chance to make target flinch. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "snowpelt": //Snow Pelt
			movetype = "Ice";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 100;
			effect = 20;
			flavor = "The user throws two frigid snowballs at the target in quick succession. This may also freeze the target.";
			movedesc = "Hits 2 times in one turn. Each hit has a 10% chance to freeze the target. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "soak": //Soak
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user shoots a torrent of water at the target and changes the target's type to Water.";
			movedesc = "Changes target's type to Water.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "softboiled": //Soft-Boiled
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user restores its own HP by up to half of its maximum HP. May also be used in the field to heal HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "solarbeam": //Solar Beam
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "A two-turn attack. The user gathers light, then blasts a bundled beam on the second turn.";
			movedesc = "User charges this turn, then does damage next turn. The charge turn is skipped if the active weather is bright sunlight. Base power is halved if the active weather is total darkness, hail, heavy rain or sandstorm.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "sonicboom": //Sonic Boom
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "The target is hit with a destructive shock wave that always inflicts 20 HP damage.";
			movedesc = "Inflicts exactly 20 points of typeless damage (but does not affect Ghost-types).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "spacialrend": //Spacial Rend
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 100;
			moveAcc = 95;
			effect = 0;
			flavor = "The user tears the target along with the space around it. Critical hits land more easily.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "spark": //Spark
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 30;
			flavor = "The user throws an electrically charged tackle at the target. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "specterthrow": //Specter Throw
			movetype = "Ghost";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "The user lobs a blast of solid shadows at the target. The user can throw the target's item for even more damage.";
			movedesc = "Base power doubles if target is holding an item (unless the target is an Arceus holding a Plate, Giratina holding a Griseous Orb or anything holding Mail or a Mega Stone). Target's item is not consumed.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "spiderweb": //Spider Web
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user ensnares the target with thin, gooey silk so it can't flee from battle.";
			movedesc = "Target cannot be switched out of or run from battle, unless it is holding Shed Shell or its ability is Run Away, as long as user remains in battle.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "spikecannon": //Spike Cannon
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "spikes": //Spikes
			movetype = "Ground";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lays a trap of spikes at the opposing team's feet. The trap hurts Pok&eacute;mon that switch into battle.";
			movedesc = "Sets an entry hazard on the opponent's side; can set up to 3 layers of Spikes. Opponents who switch into battle with 1 layer take damage equal to 1/8 of their maximum HP. Opponents who switch into battle with 2 layers take damage equal to 3/16 of their maximum HP. Opponents who switch into battle with 3 layers take damage equal to 1/4 of their maximum HP. Does not affect Flying-types or Pok&eacute;mon with Levitate (unless they are holding Iron Ball, they are under the effect of Ingrain or Gravity is in effect).";
			moveflags = "Reflected by Magic Coat";
		break;
		case "spikyshield": //Spiky Shield [GEN VI]
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "In addition to protecting the user from attacks, this move also damages any attacker who makes direct contact.";
			movedesc = "User cannot be damaged or affected by any move with the 'Blocked by Protect' flag (essentially almost all moves that target it) for the rest of this turn; users of any moves with the 'Makes contact' flag that are blocked in this way receive typeless damage equal to 1/8 of their maximum HP. Sucker Punch fails against this move without triggering the damage (but prevents Iron Barbs, Rocky Helmet and Rough Skin from triggering). Does not block end-of-turn effects or damage like weather damage or status ailments. Fails if user moves last this turn. If the user successfully used Detect, Endure, King's Shield, Protect, Spiky Shield, or Vanish last turn, this move has a 50% chance to fail. +4 priority.";
			moveflags = "None";
		break;
		case "spiritpunch": //Spirit Punch
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 85;
			effect = 10;
			flavor = "The user summons a giant fist made of pure fighting spirit and pummels the target. This may also raise Attack and Special Attack.";
			movedesc = "20% chance to raise user's Attack and Special Attack by 1 each.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Punch-based";
		break;
		case "spitup": //Spit Up
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the damage.";
			movedesc = "Base power equals 100 * X where X is the amount user has stockpiled. After using this move, user's Stockpile count resets to 0 and any Defense/Special Defense boosts gained through use of Stockpile are removed. Fails if user has no energy stockpiled.";
			moveflags = "Blocked by Protect";
		break;
		case "spite": //Spite
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.";
			movedesc = "Lowers target's Attack or Special Attack by 1, depending on the class (physical or special) of the last move target successfully used against the user. Fails if target has not yet used either a physical or special move since being sent out.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "splash": //Splash
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user just flops and splashes around to no effect at all...";
			movedesc = "No effect.";
			moveflags = "Stopped by Gravity";
		break;
		case "spore": //Spore
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user scatters bursts of spores that induce sleep.";
			movedesc = "Target falls asleep.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "stealthrock": //Stealth Rock
			movetype = "Rock";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lays a trap of levitating stones around the opponent's team. The trap hurts opponents that switch into battle.";
			movedesc = "Sets an entry hazard on the opponent's side. Does damage to opponents that switch in based on their interaction with Rock-type attacks. If Rock-type moves are doubly super-effective (4x damage), does damage equal to 1/2 the opponent's maximum HP; if Rock-type moves are super-effective (2x damage), does damage equal to 1/4 the opponent's maximum HP; if Rock-type moves are neutrally effective (1x damage), does damage equal to 1/8 the opponent's maximum HP; if Rock-type moves are not very effective (0.5x damage), does damage equal to 1/16 the opponent's maximum HP; and if Rock-type moves are barely effective (0.25x damage), does damage equal to 1/32 the opponent's maximum HP.";
			moveflags = "Reflected by Magic Coat";
		break;
		case "steambath": //Steam Bath
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user and its allies relax in a soothing curtain of steam. It restores the user's HP by up to half of its max HP.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP. In doubles/triples, user and adjacent allies recover HP equal to 1/4 (25%) of their respective maximum HP.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "steamroller": //Steamroller
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 30;
			flavor = "The user crushes its targets by rolling over them with its rolled-up body. This attack may make the target flinch.";
			movedesc = "30% chance to make target flinch. Base power is doubled and will always hit if target has used Minimize at least once since entering battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "steelwing": //Steel Wing
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 90;
			effect = 10;
			flavor = "The target is hit with wings of steel. It may also raise the user's Defense stat.";
			movedesc = "10% chance to raise user's Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "stickyweb": //Sticky Web
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user weaves a sticky net around the opposing team, which lowers their Speed stat upon switching into battle.";
			movedesc = "Sets an entry hazard on the opponent's side. Lowers the Speed of opponents who switch into battle by 1. Does not affect Flying-types or Pok&eacute;mon with Levitate (unless they are holding Iron Ball, they are under the effect of Ingrain or Gravity is in effect).";
			moveflags = "Reflected by Magic Coat";
		break;
		/*case "stingerlance": //Stinger Lance
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "The user lunges and stabs at the target with a strong, fine-pointed stinger that pierces barriers and defenses with ease.";
			movedesc = "Ignores target's Defense boosts and Light Screen.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;*/
		case "stockpile": //Stockpile
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user charges up power and raises both its Defense and Sp. Def. The move can be used three times.";
			movedesc = "Stockpiles energy up to 3 times for use with Spit Up and Swallow. Raises user's Defense and Special Defense by 1 each. If user uses Baton Pass, the stat boosts are passed as normal, but the stored energy is not.";
			moveflags = "Stolen by Snatch";
		break;
		case "stoke": //Stoke
			movetype = "Fire";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user boosts the power of the Fire move it uses on the next turn. It also raises the user's Sp. Def stat.";
			movedesc = "Raises user's Special Defense by 1. If user uses a Fire-type attack on the following turn, that move's base power is doubled.";
			moveflags = "Stolen by Snatch";
		break;
		case "stomp": //Stomp
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 100;
			effect = 30;
			flavor = "The target is stomped with a big foot. It may also make the target flinch.";
			movedesc = "30% chance to make target flinch. Base power is doubled and will always hit if target has used Minimize at least once since entering battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "stoneedge": //Stone Edge
			movetype = "Rock";
			moveclass = "Physical";
			moveBP = 100;
			moveAcc = 80;
			effect = 0;
			flavor = "The user stabs the foe with sharpened stones from below. It has a high critical-hit ratio.";
			movedesc = "Crit rate +1.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "storedpower": //Stored Power
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 20;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target with stored power. The more the user's stats are raised, the greater the damage.";
			movedesc = "Base power is equal to 20 + (20 * number of user's positive stat modifiers). For example, if user has used Nasty Plot twice and Hone Claws once, it has +4 Attack from Nasty Plot and +1 Attack and Accuracy from Hone Claws for a total of +6 in positive stat changes. Stored Power's base power is 160 for this user.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "stormthrow": //Storm Throw
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user strikes the target with a fierce blow. This attack always results in a critical hit.";
			movedesc = "Always scores a critical hit unless an effect (e.g. Battle Armor) would prevent critical hits.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "strength": //Strength
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is slugged with a punch thrown at maximum power. It can also be used to move heavy boulders.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "stringshot": //String Shot
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 95;
			effect = 0;
			flavor = "The targets are bound with silk blown from the user's mouth. This silk reduces the targets' Speed stat.";
			movedesc = "Lowers target's Speed by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "struggle": //Struggle
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 101;
			effect = 0;
			flavor = "An attack that is used in desperation only if the user has no PP. It also hurts the user slightly.";
			movedesc = "User takes recoil equal to 1/4 (25%) of its maximum HP. Does typeless damage (and so can hit Ghost-types). Never misses (except for semi-invulnerable targets, e.g. using Dig).";
			moveflags = "Makes contact, Blocked by Protect";
		break;
		case "strugglebug": //Struggle Bug
			movetype = "Bug";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 100;
			flavor = "While resisting, the user attacks the opposing Pok&eacute;mon. The targets' Sp. Atk stat is reduced.";
			movedesc = "100% chance to lower target's Special Attack by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "stunspore": //Stun Spore
			movetype = "Grass";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user scatters a cloud of paralyzing powder. It may leave the target with paralysis.";
			movedesc = "Paralyzes target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "submission": //Submission
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 80;
			effect = 0;
			flavor = "The user grabs the target and recklessly dives for the ground. It also hurts the user slightly.";
			movedesc = "User takes recoil equal to 1/4 (25%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "substitute": //Substitute
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user makes a copy of itself using some of its HP. The copy serves as the user's decoy.";
			movedesc = "User creates a substitute by paying 1/4 (25%) of its maximum HP; the substitute's HP is set to the same amount lost by the user. Fails if user does not have enough HP remaining. The substitute shares user's type, current stats (including current modifiers) and weight, and intercepts most damage and other effects from other Pok&eacute;mon's attacks. See <a href='http://www.smogon.com/bw/moves/substitute'>here</a> for more information about what Substitute does and does not affect (though in general, it blocks all moves that target user and do not have the Bypasses Substitute flag).";
			moveflags = "Stolen by Snatch";
		break;
		case "suckerpunch": //Sucker Punch
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "This move enables the user to attack first. It fails if the target is not readying an attack, however.";
			movedesc = "Only works if target is about to use a damaging move (any Physical- or Special-class move) and has not already acted this turn. +1 priority. Sucker Punch is not affected by Iron Fist.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "sunnyday": //Sunny Day
			movetype = "Fire";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user intensifies the sun for five turns, powering up Fire-type moves.";
			movedesc = "Changes active weather to bright sunlight for 5 turns (including this turn), or 8 turns if user holds a Heat Rock when this move is used. Bright sunlight weather condition explained further <a href='http://bulbapedia.bulbagarden.net/wiki/Weather_conditions#Intense_sunlight'>here</a>.";
			moveflags = "None";
		break;
		case "superfang": //Super Fang
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "The user chomps hard on the target with its sharp front fangs. It cuts the target's HP to half.";
			movedesc = "Does typeless damage equal to 1/2 (50%) the target's current HP, but never less than 1. Does not affect Ghost-types.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "superpower": //Superpower
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks the target with great power. However, it also lowers the user's Attack and Defense.";
			movedesc = "Lowers user's Attack and Defense by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "supersonic": //Supersonic
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 55;
			effect = 0;
			flavor = "The user generates odd sound waves from its body. It may confuse the target.";
			movedesc = "Confuses target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "supersting": //Super Sting
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 55;
			moveAcc = 90;
			effect = 20;
			flavor = "The user stings the target, injecting it with a strange venom that may cause harsh status problems.";
			movedesc = "20% chance to either paralyze, burn or poison target or put target to sleep (5% chance each).";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "surf": //Surf
			movetype = "Water";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "It swamps the area around the user with a giant wave. It can also be used for crossing water.";
			movedesc = "Targets in the semi-invulnerable turn of Dive or Drag Under can be hit with this move; base power is doubled against these targets. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "swagger": //Swagger
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "The user enrages and confuses the target. However, it also sharply raises the target's Attack stat.";
			movedesc = "Raises target's Attack by 2 and confuses target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "swallow": //Swallow
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The power stored using the move Stockpile is absorbed by the user to heal its HP. Storing more power heals more HP.";
			movedesc = "User recovers HP equal to 1/4 (25%) of its maximum HP if user has stockpiled 1, 1/2 (50%) of its maximum HP if user has stockpiled 2, or 100% of its maximum HP if user has stockpiled 3. After using this move, user's Stockpile count resets to 0 and any Defense/Special Defense boosts gained through use of Stockpile are removed. Fails if user has no energy stockpiled.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "sweetkiss": //Sweet Kiss
			movetype = "Fairy";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 75;
			effect = 0;
			flavor = "The user kisses the target with a sweet, angelic cuteness that causes confusion.";
			movedesc = "Confuses target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "sweetscent": //Sweet Scent
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A sweet scent that lowers the opposing team's evasiveness. It also lures wild Pok&eacute;mon if used in grass, etc.";
			movedesc = "Lowers target's Evasion by 1.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "swift": //Swift
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 101;
			effect = 0;
			flavor = "Star-shaped rays are shot at the opposing team. This attack never misses.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig). Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "switcheroo": //Switcheroo
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user trades held items with the target faster than the eye can follow.";
			movedesc = "If both user and target are holding an item, the two held items are swapped. Cannot swap items with targets who are behind a substitute, targets whose ability is Multitype or Sticky Hold, if target's item is a Griseous Orb and either user or target is Giratina, or if target's item is a Drive and either user or target is Genesect. Items swapped with trainers (player or opponent) are returned to that trainer at the end of the battle; items stolen with wild Pok&eacute;mon are swapped permanently.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "swordsdance": //Swords Dance
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "A frenetic dance to uplift the fighting spirit. It sharply raises the user's Attack stat.";
			movedesc = "Raises user's Attack by 2.";
			moveflags = "Stolen by Snatch";
		break;
		case "synchronoise": //Synchronoise
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "Using an odd shock wave, the user inflicts damage on any Pok&eacute;mon of the same type in the area around it.";
			movedesc = "Fails against any target that does not share at least 1 type with user. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "synthesis": //Synthesis
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user restores its own HP. The amount of HP regained varies with the weather.";
			movedesc = "User recovers HP equal to 1/2 (50%) of its maximum HP if the active weather is normal, 2/3 (67%) of its maximum HP if the active weather is bright sunlight, or 1/4 (25%) of its maximum HP if the active weather is heavy rain, hail, sandstorm or total darkness.";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "tackle": //Tackle
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "A physical attack in which the user charges and slams into the target with its whole body.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "tailglow": //Tail Glow
			movetype = "Bug";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user stares at flashing lights to focus its mind, drastically raising its Sp. Atk stat.";
			movedesc = "Raises user's Special Attack by 3.";
			moveflags = "Stolen by Snatch";
		break;
		case "tailslap": //Tail Slap
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 85;
			effect = 0;
			flavor = "The user attacks by striking the target with its hard tail. It hits the Pok&eacute;mon two to five times in a row.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "tailwhip": //Tail Whip
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user wags its tail cutely, making opposing Pok&eacute;mon less wary and lowering their Defense stat.";
			movedesc = "Lowers target's Defense by 1. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "tailwind": //Tailwind
			movetype = "Flying";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user whips up a turbulent whirlwind that ups the Speed of all party Pok&eacute;mon for four turns.";
			movedesc = "For the next 4 turns (including this one), the Speed of all active Pok&eacute;mon in user's party is doubled.";
			moveflags = "Stolen by Snatch";
		break;
		case "takedown": //Take Down
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 85;
			effect = 0;
			flavor = "A reckless, full-body charge attack for slamming into the target. It also damages the user a little.";
			movedesc = "User takes recoil equal to 1/4 (25%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "taunt": //Taunt
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The target is taunted into a rage that allows it to use only attack moves for three turns.";
			movedesc = "For the next 3 turns (including this turn), target cannot select non-damaging moves as long as it remains in battle. If target has not yet acted when Taunt is used and would have used a non-damaging move this turn, target's move will fail. If target is holding a Choice Band/Specs/Scarf and is locked into a non-damaging move, it will use Struggle each turn until Taunt wears off.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "technoblast": //Techno Blast
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user fires a beam of light at its target. The type changes depending on the Drive the user holds.";
			movedesc = "Techno Blast's damage type matches the type of the Drive user is holding. If user is not holding a Drive, Techno Blast's damage is Normal-type.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "teeterdance": //Teeter Dance
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user performs a wobbly dance that confuses the Pok&eacute;mon around it.";
			movedesc = "Confuses target. Hits adjacent allies and all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "telekinesis": //Telekinesis
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user makes the target float with its psychic power. The target is easier to hit for three turns.";
			movedesc = "For the next 3 turns (including this turn), target is made to hover above the ground. Target is immune to Ground-type moves, Hot Coals, Spikes, Toxic Spikes and the effect of Arena Trap as long as it remains in the air. All moves directed at target, except OHKOs and moves used while the target is in the semi-invulnerable turn of moves like Dig, are guaranteed to hit it as long as it remains in the air. Fails if Gravity is in effect, if target is holding an Iron Ball or if it is under the effect of Ingrain; Telekinesis's effect will end if any of these conditions occur during its duration or if target is hit by Smack Down.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Stopped by Gravity";
		break;
		case "teleport": //Teleport
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "Use it to flee from any wild Pok&eacute;mon. It can also warp to the last Pok&eacute;mon Center visited.";
			movedesc = "Against wild Pok&eacute;mon, user automatically flees from battle and the battle ends. Fails if an opponent has the ability Arena Trap or Shadow Tag or if user is under the effect of a partial-trapping move like Whirlpool. Always fails in trainer battles.";
			moveflags = "None";
		break;
		case "telestrike": //Telestrike
			movetype = "Psychic";
			moveclass = "Physical";
			moveBP = 30;
			moveAcc = 85;
			effect = 10;
			flavor = "The user disappears and reappears right next to the target for a sudden strike. This move always goes first and may also make the target flinch.";
			movedesc = "10% chance to make target flinch. Priority +1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "terrorveil": //Terror Veil
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user casts a shroud of darkness over the target's side. The trap frightens opponents that switch into battle.";
			movedesc = "Sets an entry hazard on the opponent's side. Lowers the Defense of opponents who switch into battle by 1. Does not affect Ghost-type opponents who switch in.";
			moveflags = "Reflected by Magic Coat";
		break;
		case "thief": //Thief
			movetype = "Dark";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks and steals the target's item simultaneously. It can't steal if the user holds an item.";
			movedesc = "If target is holding an item and user isn't, steals target's held item and attaches it to the user. Cannot steal from targets whose ability is Multitype or Sticky Hold, or if target's item is a Griseous Orb and either user or target is Giratina. Items stolen from trainers (player or opponent) are returned to that trainer at the end of the battle; items stolen from wild Pok&eacute;mon are kept.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "thrash": //Thrash
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user rampages and attacks for two to three turns. It then becomes confused, however.";
			movedesc = "User becomes uncontrollable for 2 or 3 turns and automatically targets a random opponent with this attack each of those turns. User becomes confused after Thrash ends.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "thunder": //Thunder
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 110;
			moveAcc = 70;
			effect = 30;
			flavor = "A wicked thunderbolt is dropped on the target to inflict damage. It may also leave the target with paralysis.";
			movedesc = "30% chance to paralyze target. Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move. Cannot miss if the active weather is heavy rain.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "thunderbolt": //Thunderbolt
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 10;
			flavor = "A strong electric blast is loosed at the target. It may also leave the target with paralysis.";
			movedesc = "10% chance to paralyze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "thundercrash": //Thunder Crash
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 130;
			moveAcc = 90;
			effect = 100;
			flavor = "The user crashes into the target, causing serious injury but also wearing itself down.";
			movedesc = "Lowers user's Attack by 2.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "thunderfang": //Thunder Fang
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 65;
			moveAcc = 95;
			effect = 10;
			flavor = "The user bites with electrified fangs. It may also make the target flinch or leave it with paralysis.";
			movedesc = "10% chance to paralyze target; separate 10% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "thunderpunch": //Thunderpunch
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 75;
			moveAcc = 100;
			effect = 10;
			flavor = "The target is punched with an electrified fist. It may also leave the target with paralysis.";
			movedesc = "10% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "thundershock": //Thundershock
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 10;
			flavor = "A jolt of electricity is hurled at the target to inflict damage. It may also leave the target with paralysis.";
			movedesc = "10% chance to paralyze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "thunderwave": //Thunder Wave
			movetype = "Electric";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A weak electric charge is launched at the target. It causes paralysis if it hits.";
			movedesc = "Paralyzes the target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "tickle": //Tickle
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user tickles the target into laughing, reducing its Attack and Defense stats.";
			movedesc = "Lowers target's Attack and Defense by 1 each.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "topsyturvy": //Topsy-Turvy [GEN VI]
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.";
			movedesc = "Inverts target's stat modifiers (e.g. targets with +1 Attack now have -1 Attack).";
			moveflags = "Blocked by Protect";
		break;
		case "torment": //Torment
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user torments and enrages the target, making it incapable of using the same move twice in a row.";
			movedesc = "Target cannot select the same move twice in a row for as long as it remains in battle (except Struggle). If target is somehow forced to use the same move twice in a row (via Choice Band, Encore, etc.), it will use Struggle instead on every other turn. Multi-turn moves (Outrage, Rollout, etc.) are not interrupted by Torment.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "toxic": //Toxic
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 90;
			effect = 0;
			flavor = "A move that leaves the target badly poisoned. Its poison damage worsens every turn.";
			movedesc = "Badly poisons the target. Badly poisoned Pok&eacute;mon lose HP each turn, starting at 1/16th of their maximum HP and increasing by an additional 1/16th each turn (so 1/16th, then 2/16ths, then 3/16ths,  then 4/16th, etc.).";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "toxicspikes": //Toxic Spikes
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lays a trap of poison spikes at the opponent's feet. They poison opponents that switch into battle.";
			movedesc = "Sets an entry hazard on the opponent's side; can set up to 2 layers of Toxic Spikes. Opponents who switch into battle with 1 layer are poisoned. Opponents who switch into battle with 2 layers are badly poisoned. Badly poisoned Pok&eacute;mon lose HP each turn, starting at 1/16th and increasing by an additional 1/16th each turn (so 1/16th, then 2/16ths, then 3/16ths,  then 4/16th, etc.). Does not affect Flying-types or Pok&eacute;mon with Levitate (unless they are holding Iron Ball, they are under the effect of Ingrain or Gravity is in effect). Poison-type Pok&eacute;mon who switch in and are not Flying-types or levitating remove all layers of Toxic Spikes from their side of the field.";
			moveflags = "Reflected by Magic Coat";
		break;
		case "transform": //Transform
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user transforms into a copy of the target right down to having the same move set.";
			movedesc = "User copies target's species, appearance (form, shininess, etc.), stats (except HP), stat changes and moves (overwriting user's current moveset in the process). Does not copy target's current or maximum HP, ability, status ailments, level or catch rate. If target's form requires a held item, user will copy the current form and keep it even if its held item is incompatible with that form (e.g., if user copies an Origin Forme Giratina, it will remain an Origin Forme Giratina even if it isn't holding a Griseous Orb itself); if user transforms into Arceus and is holding a Plate, however, its Judgment will still match the type of the plate even if the copied Arceus form does not. Fails if target is behind a Substitute, if target has already Transformed, or if target is under the effect of Illusion.";
			moveflags = "None";
		break;
		case "triattack": //Tri Attack
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 20;
			flavor = "The user strikes with a simultaneous three-beam attack. May also burn, freeze, or leave the target with paralysis.";
			movedesc = "20% chance to either paralyze, burn or freeze target (6.67% chance each).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "trick": //Trick
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user catches the target off guard and swaps its held item with its own.";
			movedesc = "If both user and target are holding an item, the two held items are swapped. Cannot swap items with targets who are behind a substitute, targets whose ability is Multitype or Sticky Hold, if target's item is a Griseous Orb and either user or target is Giratina, or if target's item is a Drive and either user or target is Genesect. Items swapped with trainers (player or opponent) are returned to that trainer at the end of the battle; items stolen with wild Pok&eacute;mon are swapped permanently.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "trickortreat": //Trick-or-Treat [GENI VI]
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user takes the target trick-or-treating. This adds Ghost type to the target's type.";
			movedesc = "Adds Ghost to target's types; if target is dual-type, target is considered to have three types. If target is under the effect of Forest's Curse, target's extra Grass type changes to Ghost. Fails against Ghost-types.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "trickroom": //Trick Room
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user creates a bizarre space in which slower Pok&eacute;mon get to move first for five turns.";
			movedesc = "For the next 5 turns (including this turn), the normal speed order in which Pok&eacute;mon take their turns is reversed&mdash;faster Pok&eacute;mon act last within their priority bracket, while slower Pok&eacute;mon move first within their priority bracket. Does not change the order of the priority brackets themselves: a Pok&eacute;mon using Quick Attack will still act before a Pok&eacute;mon using Roar, but if two Pok&eacute;mon use Quick Attack then the slower of the two will act before the faster. The effects of Quick Claw, Lagging Tail and Stall ignore Trick Room, and Pok&eacute;mon with those items/abilities will still move first or last in their priority brackets respectively. Using Trick Room while Trick Room is currently active will immediately end its effect, returning the speed order to normal. -7 priority.";
			moveflags = "None";
		break;
		case "triplekick": //Triple Kick
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 10;
			moveAcc = 90;
			effect = 0;
			flavor = "A consecutive three-kick attack that becomes more powerful with each successive hit.";
			movedesc = "Hits up to 3 times in one turn, with each hit doubling in base power (first 10, then 20, then 40). Each strike has its own accuracy check, and this move stops immediately if any of the strikes miss. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "trumpcard": //Trump Card
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The fewer PP this move has, the greater its attack power.";
			movedesc = "Base power is 40 the first time this move is used after user is sent out, 50 the second time, 60 the third time, 80 the fourth time and 200 the fifth time and beyond. Power resets to 40 if user leaves battle.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "twilightterrain": //Twilight Terrain
			movetype = "Ghost";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user summons spirits from the ground under everyone's feet for five turns. PokÃ©mon on the ground are damaged by the spirits.";
			movedesc = "Changes active terrain to twilight for 5 turns (including this turn). Twilight terrain explained further <a href='http://turquoise.alteredorigin.net/wiki/Twilight_Terrain'>here</a>.";
			moveflags = "None";
		break;
		case "twineedle": //Twineedle
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 25;
			moveAcc = 100;
			effect = 20;
			flavor = "The user damages the target twice in succession by jabbing it with two spikes. It may also poison the target.";
			movedesc = "Hits 2 times in one turn. Each hit has a 20% chance to poison the target. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "twister": //Twister
			movetype = "Dragon";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 20;
			flavor = "The user whips up a vicious tornado to tear at the opposing team. It may also make targets flinch. ";
			movedesc = "20% chance to make target flinch. Targets in the semi-invulnerable turn of Bounce, Fly or Sky Drop can be hit with this move; base power is doubled against these targets. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "uproar": //Uproar
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user attacks in an uproar for three turns. Over that time, no one can fall asleep.";
			movedesc = "User becomes uncontrollable for 3 turns and automatically targets a random opponent with this attack each of those turns. No Pok&eacute;mon can fall asleep for the duration of this move, and any sleeping Pok&eacute;mon will wake up on this move's first turn. Stops immediately if user is unable to damage the chosen target (i.e., if user targets a Ghost-type or a Pok&eacute;mon with Soundproof or Cacophony).";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Sound-based, Bypasses Substitute";
		break;
		case "uturn": //U-turn
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "After making its attack, the user rushes back to switch places with a party Pok&eacute;mon in waiting.";
			movedesc = "User deals damage and immediately switches out unless it is the last conscious Pok&eacute;mon in its party; user's trainer selects a replacement Pok&eacute;mon from the party. If target faints as a result of this attack, user's trainer chooses a replacement first. Pursuit will hit the user before switching out. Ends the effect of Ingrain before switching out.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "vacuumwave": //Vacuum Wave
			movetype = "Fighting";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.";
			movedesc = "+1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "vanish": //Vanish
			movetype = "Dark";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user melts into the shadows and disappears, avoiding all harm.";
			movedesc = "User cannot be damaged or affected by any move with the 'Blocked by Protect' flag (essentially almost all moves that target it) for the rest of this turn, and is unaffected by most end-of-turn field effects or damage, e.g. weather damage or Future Sight; does not protect from user's own status ailments or held items. Fails if selected twice in a row, and causes Crafty Shield, Detect, Endure, King's Shield, Mat Block, Protect, Quick Guard, Spiky Shield or Wide Guard to have a 50% chance to fail if used on the next turn. +4 priority.";
			moveflags = "None";
		break;
		case "vcreate": //V-create
			movetype = "Fire";
			moveclass = "Physical";
			moveBP = 180;
			moveAcc = 95;
			effect = 0;
			flavor = "With a hot flame on its forehead, the user hurls itself at its target. It lowers the user's Defense, Sp. Def, and Speed stats.";
			movedesc = "Lowers user's Defense, Special Defense and Speed by 1 each.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "vectorjab": //Vector Jab
			movetype = "Poison";
			moveclass = "Physical";
			moveBP = 50;
			moveAcc = 90;
			effect = 10;
			flavor = "The user attacks the target with an intensifying pathogen. If this move is used every turn, it has a greater chance of poisoning the target.";
			movedesc = "10% chance to badly poison target. Chance doubles on each consecutive turn it is used, with maximum 100% chance. Chance resets if user misses, if user leaves battle, or if user uses another move.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "venomdrench": //Venom Drench [GEN VI]
			movetype = "Poison";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "Opposing Pok&eacute;mon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target.";
			movedesc = "Lowers target's Attack, Special Attack and Speed by 1 each. Fails if target is not poisoned or badly poisoned. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "venoshock": //Venoshock
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 65;
			moveAcc = 100;
			effect = 0;
			flavor = "The user drenches the target in a special poisonous liquid. Its power is doubled if the target is poisoned.";
			movedesc = "Base power doubles if target is poisoned.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "vicegrip": //Vice Grip
			movetype = "Poison";
			moveclass = "Special";
			moveBP = 55;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is gripped and squeezed from both sides to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "vinewhip": //Vine Whip
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 45;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is struck with slender, whiplike vines to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "vitalthrow": //Vital Throw
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 101;
			effect = 0;
			flavor = "The user attacks last. In return, this throw move is guaranteed not to miss.";
			movedesc = "Never misses (except for semi-invulnerable targets, e.g. using Dig). -1 priority.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "voidburst": //Void Burst
			movetype = "Psychic";
			moveclass = "Special";
			moveBP = 95;
			moveAcc = 100;
			effect = 0;
			flavor = "The user disappears into a void of psychic energy, then releases it on the second turn to damage the targets.";
			movedesc = "User becomes semi-invulnerable this turn, then does damage the next turn. User can still be damaged/affected during its semi-invulnerable turn if it was targeted by Lock-On or Mind Reader on the previous turn, or if the Pok&eacute;mon attacking it has No Guard. User will not take damage from hail, miasma or sandstorm while in the semi-invulnerable turn of Void Burst. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Has charge turn";
		break;
		case "voltswitch": //Volt Switch
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "After making its attack, the user rushes back to switch places with a party Pok&eacute;mon in waiting.";
			movedesc = "User deals damage and immediately switches out unless it is the last conscious Pok&eacute;mon in its party; user's trainer selects a replacement Pok&eacute;mon from the party. If target faints as a result of this attack, user's trainer chooses a replacement first. Pursuit will hit the user before switching out. Ends the effect of Ingrain before switching out.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "volttackle": //Volt Tackle
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 10;
			flavor = "The user electrifies itself, then charges. It causes considerable damage to the user and may leave the target with paralysis.";
			movedesc = "User takes recoil equal to 1/3 (33%) the damage dealt to target. 10% chance to paralyze target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "wakeupslap": //Wake-Up Slap
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 70;
			moveAcc = 100;
			effect = 0;
			flavor = "This attack inflicts big damage on a sleeping target. It also wakes the target up, however.";
			movedesc = "Base power doubles against sleeping targets. If target is asleep, it wakes up after damage is dealt.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "watergun": //Water Gun
			movetype = "Water";
			moveclass = "Special";
			moveBP = 40;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is blasted with a forceful shot of water.";
			movedesc = "No additional effect.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "waterpledge": //Water Pledge
			movetype = "Water";
			moveclass = "Special";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "A column of water strikes the target. When combined with its fire equivalent, the damage increases and a rainbow appears.";
			movedesc = "Does not activate Water Gem. Base power doubles if an ally in doubles/triples uses Fire Pledge or Grass Pledge this turn; both this move and the other Pledge move hit the target chosen by the slower Pledge user. If the other Pledge move is Fire Pledge, moves used by any friendly Pok&eacute;mon have doubled effect chance for 4 turns (including this one; does not stack with Serene Grace). If the other Pledge move is Grass Pledge, opponents adjacent to the slower Pledge user have their Speed reduced by 1/2 (50%) for 4 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "waterpulse": //Water Pulse
			movetype = "Water";
			moveclass = "Special";
			moveBP = 60;
			moveAcc = 100;
			effect = 20;
			flavor = "The user attacks the target with a pulsing blast of water. It may also confuse the target.";
			movedesc = "20% chance to confuse target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "watershuriken": //Water Shuriken [GEN VI]
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 100;
			effect = 0;
			flavor = "The user hits the target with throwing stars two to five times in a row. This move always goes first.";
			movedesc = "Hits 2-5 times in one turn. Has a 2/6 (33.33%) chance each to hit 2 or 3 times, and a 1/6 (16.67%) chance each to hit 4 or 5 times. Accuracy is only calculated for the first hit; subsequent hits cannot miss if the first hit succeeds. Critical hits, flinch chances and effect chances are calculated individually for each hit. +1 priority.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "watersport": //Water Sport
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.";
			movedesc = "As long as user remains in battle, all Fire-type damage dealt to any Pok&eacute;mon does 1/2 (50%) its normal damage.";
			moveflags = "None";
		break;
		case "waterspout": //Water Spout
			movetype = "Water";
			moveclass = "Special";
			moveBP = 150;
			moveAcc = 100;
			effect = 0;
			flavor = "The user spouts water to damage the opposing team. The lower the user's HP, the less powerful it becomes.";
			movedesc = "Has 150 power when user's HP is full and gets lower as user's HP is reduced. Base power = 150 * (user's current HP / user's maximum HP), rounded down to the nearest whole number. Hits all adjacent opponents in doubles/triples.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "waterfall": //Waterfall
			movetype = "Water";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 20;
			flavor = "The user charges at the target and may make it flinch. It can also be used to climb a waterfall.";
			movedesc = "20% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "waterlog": //Waterlog
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user soaks the target with chilly water that harshly lowers its Special Attack stat. Water-type targets receive a boost, however.";
			movedesc = "If target is not a Water-type, lowers target's Special Attack by 2. If target is a Water-type, raises target's Special Attack by 2. Bypasses Storm Drain and Water Absorb.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "wavedance": //Wave Dance
			movetype = "Water";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user attacks with an elegant dance that summons sparkling waves. It grows in power the more beautiful the user is.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 127 and a minimum BP of 1. Base power = user's happiness / 2, rounded down to the nearest whole number.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "weatherball": //Weather Ball
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 50;
			moveAcc = 100;
			effect = 0;
			flavor = "An attack move that varies in power and type depending on the weather.";
			movedesc = "Base power doubles if there is an active weather condition, and Weather Ball's type changes to match that weather condition (bright sunlight = Fire; heavy rain = Water; sandstorm = Rock; hail = Ice; total darkness = Dark; miasma = Poison).";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "weld": //Weld
			movetype = "Steel";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 30;
			flavor = "The user strikes the target with a super-hot limb. It may make the target flinch.";
			movedesc = "30% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "whirlingdance": //Whirling Dance
			movetype = "Fairy";
			moveclass = "Physical";
			moveBP = 55;
			moveAcc = 100;
			effect = 100;
			flavor = "The user yells as if it is ranting about something, making the target's Sp. Atk stat decrease.";
			movedesc = "100% chance to lower target's Attack by 1.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "whirlpool": //Whirlpool
			movetype = "Water";
			moveclass = "Special";
			moveBP = 35;
			moveAcc = 85;
			effect = 0;
			flavor = "Traps foes in a violent swirling whirlpool for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "whirlwind": //Whirlwind
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is blown away, to be replaced by another Pok&eacute;mon in its party. In the wild, the battle ends.";
			movedesc = "Immediately ends wild battles, but fails if target's level is equal to or greater than user's level. In trainer battles, forces trainers to switch the target with another randomly-selected Pok&eacute;mon in their party (regardless of target's level); fails if target's trainer has no Pok&eacute;mon remaining. Priority -5.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move, Bypasses Substitute";
		break;
		case "wideguard": //Wide Guard
			movetype = "Rock";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user and its allies are protected from wide-ranging attacks for one turn.";
			movedesc = "User and its allies cannot be damaged or affected by any move that hits multiple targets (e.g. Earthquake or Heat Wave), except Clear Smog, Haze and Perish Song, for the rest of this turn. Fails if user moves last this turn. +3 priority.";
			moveflags = "Stolen by Snatch";
		break;
		case "wildcharge": //Wild Charge
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 90;
			moveAcc = 100;
			effect = 0;
			flavor = "The user shrouds itself in electricity and smashes into its target. It also damages the user a little.";
			movedesc = "User takes recoil equal to 1/4 (25%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "wildmaul": //Wild Maul
			movetype = "Fighting";
			moveclass = "Physical";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user attacks viciously, savaging its target in a display of dominance. It grows in power the tougher the user is.";
			movedesc = "The higher the user's happiness, the higher this move's base power, with a maximum BP of 127 and a minimum BP of 1. Base power = user's happiness / 2, rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "willowisp": //Will-O-Wisp
			movetype = "Fire";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 85;
			effect = 0;
			flavor = "The user shoots a sinister, bluish-white flame at the target to inflict a burn.";
			movedesc = "Burns target.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "wingattack": //Wing Attack
			movetype = "Flying";
			moveclass = "Physical";
			moveBP = 60;
			moveAcc = 100;
			effect = 0;
			flavor = "The target is struck with large, imposing wings spread wide to inflict damage.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move, Hits non-adjacent targets";
		break;
		case "wish": //Wish
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "One turn after this move is used, the target's HP is restored by half the user's maximum HP.";
			movedesc = "At the end of the turn after this move is used, the active Pok&eacute;mon in the user's place on the field (whether it is the user or a teammate that has switched in) recovers HP equal to 1/2 (50%) of the user's maximum HP. Fails if there is no active Pok&eacute;mon in that place on the field when the healing would occur (e.g., if the recipient has fainted).";
			moveflags = "Stolen by Snatch, Heals";
		break;
		case "withdraw": //Withdraw
			movetype = "Water";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user withdraws its body into its hard shell, raising its Defense stat.";
			movedesc = "Raises user's Defense by 1.";
			moveflags = "Stolen by Snatch";
		break;
		case "wonderroom": //Wonder Room
			movetype = "Psychic";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user creates a bizarre area in which Pok&eacute;mon's Defense and Sp. Def stats are swapped for five turns.";
			movedesc = "For the next 5 turns (including this turn), each Pok&eacute;mon in play has its base Defense and base Special Defense swapped. Using Wonder Room while Wonder Room is currently active will immediately end its effect, restoring all Pok&eacute;mon's defense stats to normal. -7 priority.";
			moveflags = "Copied by Mirror Move";
		break;
		case "woodhammer": //Wood Hammer
			movetype = "Grass";
			moveclass = "Physical";
			moveBP = 120;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slams its rugged body into the target to attack. The user also sustains serious damage.";
			movedesc = "User takes recoil equal to 1/3 (33%) the damage dealt to target.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "workup": //Work Up
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user is roused, and its Attack and Sp. Atk stats increase.";
			movedesc = "Raises user's Attack and Special Attack by 1 each.";
			moveflags = "Stolen by Snatch";
		break;
		case "worryseed": //Worry Seed
			movetype = "Grass";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "A seed that causes worry is planted on the target. It prevents sleep by making its Ability Insomnia.";
			movedesc = "Changes target's ability to Insomnia. Fails if target's ability is Multitype or Truant.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Coat";
		break;
		case "wrap": //Wrap
			movetype = "Normal";
			moveclass = "Physical";
			moveBP = 15;
			moveAcc = 90;
			effect = 0;
			flavor = "A long body or vines are used to wrap and squeeze the target for four to five turns.";
			movedesc = "Traps target for 4 or 5 turns and does damage equal to 1/8 (12.5%) its max HP at the end of each of those turns. Target is freed if it uses Rapid Spin, if it switches/escapes while holding Shed Shell, if it switches/escapes and its ability is Run Away or if the user leaves battle. Has a 1/2 (50%) chance each to trap for 4 or 5 turns.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "wringout": //Wring Out
			movetype = "Normal";
			moveclass = "Special";
			moveBP = 0;
			moveAcc = 100;
			effect = 0;
			flavor = "The user powerfully wrings the target. The more HP the target has, the greater this attack's power.";
			movedesc = "Has 121 power when target's HP is full and gets lower as target's HP is reduced, to a minimum of 1. Base power = 1 + (120 * target's current HP / target's max HP), rounded down to the nearest whole number.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "xscissor": //X-Scissor
			movetype = "Bug";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 100;
			effect = 0;
			flavor = "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.";
			movedesc = "No additional effect.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		case "yawn": //Yawn
			movetype = "Normal";
			moveclass = "Other";
			moveBP = 0;
			moveAcc = 101;
			effect = 0;
			flavor = "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.";
			movedesc = "Target falls asleep at the end of the next turn. Ignores Accuracy and Evasion modifiers. If target leaves the field, Yawn's effect is canceled. Fails if target is protected by Safeguard, if Uproar is in effect, if target is behind a substitute, if target's ability is Insomnia or Vital Spirit, or if target already has a major status condition. Target will not fall asleep at the end of next turn if it gains a major status condition other than sleep, if Uproar comes into effect, or if its ability becomes Insomnia or Vital Spirit. If target falls asleep before the end of next turn, then wakes up again, Yawn will put it back to sleep at the end of the following turn.";
			moveflags = "Blocked by Protect, Reflected by Magic Coat, Copied by Mirror Move";
		break;
		case "zapcannon": //Zap Cannon
			movetype = "Electric";
			moveclass = "Special";
			moveBP = 120;
			moveAcc = 50;
			effect = 100;
			flavor = "The user fires an electric blast like a cannon to inflict damage and cause paralysis.";
			movedesc = "100% chance to paralyze target.";
			moveflags = "Blocked by Protect, Copied by Mirror Move";
		break;
		case "zenheadbutt": //Zen Headbutt
			movetype = "Electric";
			moveclass = "Physical";
			moveBP = 80;
			moveAcc = 90;
			effect = 20;
			flavor = "The user focuses its willpower to its head and attacks the target. It may also make the target flinch.";
			movedesc = "20% chance to make target flinch.";
			moveflags = "Makes contact, Blocked by Protect, Copied by Mirror Move";
		break;
		default:
			alert("Please select a move.");
	} //end movedata switch

	//display the move data
	document.getElementById("typeid").innerHTML = movetype;
	document.getElementById("classid").innerHTML = moveclass;
	document.getElementById("bpid").innerHTML = moveBP;
	document.getElementById("accid").innerHTML = moveAcc;
	document.getElementById("flavorid").innerHTML = flavor;
	document.getElementById("descid").innerHTML = movedesc;
	document.getElementById("flagid").innerHTML = moveflags;
	//this one is to update the damage calc
	document.getElementById("movepwr").value = moveBP;
}
