import React from 'react';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// dummy data for now
			name: "Lord Dalmonde",
			age: 37,
			gender: "male",
			bio: "I'm evil.",
			inventory: {
				money: 999999,
				badges: ['fire', 'rainbow', 'boulder'],
				keyItems: ['silph scope'],
				tms: ['flare blitz, fire blast, flamethrower'],
				hms: ['surf, fly, strength'],
				generalItems: [
					{name: "oran berry", quantity: 1},
					{name: "full restore", quantity: 999},
				],
				pokeballs: [
					{name: "master ball", quantity: 5},
					{name: "ultra ball", quantity: 500},
				]
			},
			party: [
				{
					name: "Torranel",
					nickname: "Lu, Destoryer of Light",
					level: 420,
					gender: "male",
					hp: 2000,
					ability: "Mold Breaker",
					nature: "Hasty",
					OT: "Lord Dalmonde",
					moves: ["Tackle", "Pound", "Destroy the entire world"],
					exp: 0,
				}
			]
		};
	}

	render () {
		const { inventory, party } = this.state;
		return (<div className="Profile">
			<h1>{`${this.state.name}'s proifle`}</h1>
			<hr/>
			<h2>Basic Info:</h2>
				<h3>Name: {this.state.name}</h3>
				<h3>Age: {this.state.age}</h3>
				<h3>Gender: {this.state.gender}</h3>
				<h3>Self Info: {this.state.bio}</h3>
			<hr/>
			<h2>Inventory</h2>
				<h3>Money: {inventory.money}</h3>
				<h3>Badges: {inventory.badges.join(', ')}</h3>
				<h3>Key Items: {inventory.keyItems.join(', ')}</h3>
				<h3>TMs: {inventory.tms.join(', ')}</h3>
				<h3>TMs: {inventory.hms.join(', ')}</h3>
				<h3>General Items</h3>
					<ul>
						{inventory.generalItems.map(item => 
							<li>{`${item.name} (x${item.quantity})`}</li>)}
					</ul>
				<h3>Pokeballs</h3>
					<ul>
						{inventory.pokeballs.map(item => 
							<li>{`${item.name} (x${item.quantity})`}</li>)}
					</ul>
			<hr/>
				<h2>Party</h2>
				<ul>
					{party.map(pkmn => <li>
						<ul>
							<li>Name: {pkmn.name}</li>
							<li>Nickname: {pkmn.nickname}</li>
							<li>Gender: {pkmn.gender}</li>
							<li>Lv: {pkmn.level}</li>
							<li>HP: {pkmn.hp}/{pkmn.hp}</li>
							<li>Ability: {pkmn.ability}</li>
							<li>Nature: {pkmn.nature}</li>
							<li>OT: {pkmn.OT}</li>
							<li>Moves: {pkmn.moves.join(', ')}</li>
							<li>EXP: {pkmn.exp}%</li>
						</ul>
					</li>)}
				</ul>
		</div>);
	}
}

export default Profile;
