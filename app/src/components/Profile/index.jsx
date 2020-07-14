import React from 'react';
import { MongoClient } from "mongodb"
import './index.css';

const conf = {
	"uri": "mongodb+srv://turqbot:turquoise2007@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority"
}


class Profile extends React.Component {

	async componentDidMount(){
		const response = await fetch(`http://localhost:3001/profile/${"732535399301251082"}`);
		const { data } = await response.json();
		// this.setState({data})
		console.log(data);
	}

	constructor(props) {
		super(props);
		this.state = {}
		this.state.data = {
			// dummy data for now
			name: "Lord Dalmonde",
			age: 37,
			gender: "male",
			bio: "I'm evil.",
			inventory: {
				money: 999999,
				badges: ['fire', 'rainbow', 'boulder'],
				keyItems: ['silph scope', 'soxhlet extractor'],
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
					id: "j3akn#sk3",
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
			],
			rival: {
				name: "Ruceire",
				age: "25",
				gender: "male",
				party: ["thunderma", "thunderma", "thunderma", "thunderma", "thunderma", "thunderma"]
			}
		};
	}

	render () {
		const { data } = this.state;
		const { inventory, rival } = data;
		const imgUrl = name => `http://turquoise.alteredorigin.net/images/pseudosprites/${name.toLocaleLowerCase()}.png`;
		const dexUrl = name =>`http://turquoise.alteredorigin.net/pokemon/${name.toLocaleLowerCase()}/`;
		const party = [] || Array(6).fill(data.party[0])


		return (<div className="Profile">
			<h1 className="Profile-title">{`${data.name}'s Profile`}</h1>
			<hr/>
			<div className="Profile-panel1">
				<div className="Profile-basicInfo component">
					<h2>Basic Info:</h2><hr />
					<ul>
						<li>Name: {data.name}</li>
						<li>Age: {data.age}</li>
						<li>Gender: {data.gender}</li>
						<li>Self Info: {data.bio}</li>
					</ul>
				</div>
				<div className="Profile-rivalInfo component">
					<h2>Rival Info:</h2><hr />
					<ul>
						<li>Name: {rival.name}</li>
						<li>Age: {rival.age}</li>
						<li>Gender: {rival.gender}</li>
						{rival.party.map(name=><img src={imgUrl(name)} alt={name} style={{width: 60}}/>)}
					</ul>
				</div>
			</div>
			<hr/>
			<div className="Profile-panel2">
				<div className="Profile-inventory component">
					<h2>Inventory</h2><hr />
					<h3>Money: {inventory.money}P</h3>
					<h3>Badges: {inventory.badges.join(', ')}</h3>
					<h3>Key Items: {inventory.keyItems.join(', ')}</h3>
					<h3>TMs: {inventory.tms.join(', ')}</h3>
					<h3>TMs: {inventory.hms.join(', ')}</h3>
					<h3>General Items</h3>
						<ul>
							{inventory.generalItems.map(item => 
								<li key={item.name}>{`${item.name} (x${item.quantity})`}</li>)}
						</ul>
					<h3>Pokeballs</h3>
						<ul>
							{inventory.pokeballs.map(item => 
								<li key={item.name}>{`${item.name} (x${item.quantity})`}</li>)}
						</ul>
				</div>
			<hr/>
				<div className="Profile-party component">
					<h2>Party</h2><hr />
					<ul>
						{party.map(pkmn => <li key={pkmn.id}>
							<ul>
								<a href={dexUrl(pkmn.name)}>
								<img alt={pkmn.name} title={pkmn.name}
									src={imgUrl(pkmn.name)}/></a>
								<li>Name: <a href={dexUrl(pkmn.name)}>{pkmn.name}</a></li>
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
				</div>
			</div>
		</div>);
	}
}

export default Profile;
