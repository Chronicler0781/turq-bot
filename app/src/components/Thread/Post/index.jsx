import React from 'react';
import './index.css';

const url = "https://cdn.discordapp.com/avatars/129072955929001984/ae00142dbcf2eadfe991afdccac111a3.png";

class Post extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render () {
		return (<div className="Post">
            <div className="Post-title">{this.props.title}</div>
            <div className="Post-user">
                <img className="Post-avatar" src={url}/>
                <div className="Post-username">
                    <div>{"Lord Dalmonde"}</div>
                    <div>{"Taav#4683"}</div>
                </div>
            </div>
            <div className="Post-content">{this.props.content}</div>
        </div>)
	}
}

export default Post;
