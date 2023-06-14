import React from "react";
import axios from "axios";
import './Mot.css';

class Mot extends React.Component
{
	constructor(){
		super();
		this.state={
			msg:""
		}
	}

	getquote = (event) => {
		axios.get("https://api.quotable.io/random?tags=wisdom")
		.then(res => this.setState({msg: res.data.content}))
		.catch(err => console.log(err))
	}
	
	render(){
		return(
			<>
				<h1> Motivational App </h1>
				<input type="submit" value="Get Quote" onClick={this.getquote} />
				<br/><br/>
				<h1> {this.state.msg} </h1>
			</>
		)
}

}
	export default Mot;

