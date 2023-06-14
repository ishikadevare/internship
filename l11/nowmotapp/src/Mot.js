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
	//Lifecycle method
	componentDidMount(){
		setInterval(this.getquote,2000);
	}
	getquote = () => {
		axios.get("https://api.quotable.io/random?tags=wisdom")
		.then(res => this.setState({msg: res.data.content}))
		.catch(err => console.log(err))
	}
	
	render(){
		return(
			<>
				<h1 class="h"> Motivational App </h1>
				<br/><br/>
				<h1> {this.state.msg} </h1>
			</>
		)
	}

}
	export default Mot;

