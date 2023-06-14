import React from "react";
import './Feedback.css';

class Feedback extends React.Component
{
	constructor() {
		super();
		this.state={
			name:"",
			fb:"superb",
			msg:""
		}
		this.rName = React.createRef();
	}
	hName = (event) => {
		this.setState({name:event.target.value})
	}

	hFeedback = (event) => {
		this.setState({fb:event.target.value})
	}
	find = (event) => {
		let na = this.state.name;
		if (na == "")
		{
			alert("empty name");
			this.setState({msg:""});
			this.setState({fb:"superb"})
			this.rName.current.focus();
			return;
		}
		let f = this.state.fb;
		let ans = "name=" + na + " feedback=" + f;
		this.setState({msg:ans})
		}
	render(){
		return(
			<>
				<h1> Feedback Pls </h1>
				<input type="text" placeholder="Enter your name" onChange={this.hName} ref={this.rName}/>
				<br/><br/>
				<input type="radio" name="r1" value="excellent" onChange={this.hFeedback}/>Excellent 
				<input type="radio" name="r1" value="superb" defaultChecked={true} onChange={this.hFeedback}/>Superb 
				<input type="radio" name="r1" value="good" onChange={this.hFeedback}/>Good
<br/><br/>
				<input type="submit" onClick={this.find}/>
<br/><br/>
				<h1> {this.state.msg} </h1>
			</>
		);
}
}

export default Feedback;

