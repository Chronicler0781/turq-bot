import React from 'react';
import { MongoClient } from "mongodb"
import './index.css';

const conf = {
	"uri": "mongodb+srv://turqbot:turquoise2007@turqdb-30xsx.gcp.mongodb.net/turqdb?retryWrites=true&w=majority"
}


class Profile extends React.Component {

	async componentDidMount(){
		const response = await fetch(`http://localhost:3001/profile/${"129072955929001984"}`);
		const { data } = await response.json();
		this.setState({data})
		console.log(data);
	}

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}

	render () {
		const { data } = this.state;
		const { rival, party } = data;
		const inventory = data; // temp, todo: move inventory info to data.inventory in db
		const imgUrl = name => `http://turquoise.alteredorigin.net/images/pseudosprites/${name.toLocaleLowerCase()}.png`;
		const dexUrl = name =>`http://turquoise.alteredorigin.net/pokemon/${name.toLocaleLowerCase()}/`;

		if (!data.username){
			return <>loading</>;
		}

		return (<div className="Profile">
			<h1 className="Profile-title">{`${data.username}'s Profile`}</h1>
			<hr/>
			<div className="Profile-panel1">
				<div className="Profile-basicInfo component">
					<h2>Basic Info:</h2><hr />
					<ul>
						<li>Name: {data.firstName} {data.lastName}</li>
						<li>Age: {data.age}</li>
						<li>Gender: {data.gender}</li>
						<li>Self Intro: {data.bio}</li>
					</ul>
				</div>
				<div className="Profile-rivalInfo component">
					<h2>Rival Info:</h2><hr />
					<ul>
						<li>Name: {rival.name}</li>
						<li>Age: {rival.age}</li>
						<li>Gender: {rival.gender}</li>
						{rival.team.map(name=><img src={imgUrl(name)} alt={name} style={{width: 60}}/>)}
					</ul>
				</div>
			</div>
			<hr/>
			<div className="Profile-panel2">
				<div className="Profile-inventory component">
					<h2>Inventory</h2><hr />
					<h3>Money: {data.money}P</h3>
					<h3>Badges: {data.badges.join(', ') || "None"}</h3>
					<h3>Key Items: {data.keyItems.join(', ') || "None"}</h3>
					<h3>TMs: {data.tms.join(', ') || "None"}</h3>
					<h3>TMs: {data.hms.join(', ') || "None"}</h3>
					<h3>General Items</h3>
						<ul>
							{data.generalItems.map(item => 
								<li key={item.name}>{`${item.name} (x${item.quantity})`}</li>)}
						</ul>
					<h3>Pokeballs</h3>
						<ul>
							{inventory.pokeBalls.map(item => 
								<li key={item.name}>{`${item.name} (x${item.quantity})`}</li>)}
						</ul>
				</div>
			<hr/>
				<div className="Profile-party component">
					<h2>Party</h2><hr />
					<ul>
						{party.map(pkmn => <li key={pkmn._id}>
							<ul>
								<a href={dexUrl(pkmn.pokemon.name)}>
								<img alt={pkmn.pokemon.name} title={pkmn.pokemon.name}
									src={imgUrl(pkmn.pokemon.name)}/></a>
								<li>Name: <a href={dexUrl(pkmn.pokemon.name)}>{pkmn.pokemon.name}</a></li>
								<li>Nickname: {pkmn.nickname}</li>
								<li>Gender: {pkmn.gender}</li>
								<li>Lv: {pkmn.level}</li>
								<li>HP: {pkmn.currentHP}/{pkmn.maxHP}</li>
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
