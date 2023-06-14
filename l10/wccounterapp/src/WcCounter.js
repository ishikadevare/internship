import React from "react";
import './WcCounter.css';

class WcCounter extends React.Component
{
	constructor() {
		super();
		this.state = {
			text: "",
			count: ""
		}
	}
	hText = (event) => {
		this.setState({text:event.target.value}, ()=> { this.find()});
	}

	find = () => {
		let cc = this.state.text.length;
		let wc = this.state.text.split(" ").length;
		//if (this.state.text.length == 0)
		// wc=0;
		if (cc == 0)
			wc = 0;
		let ans = "CC= " + cc + " WC= " + wc;
		this.setState({count:ans});
	}
		
	render(){
		return(
			<>
				<h1> Word Char Counter App by Ishika </h1>
				<textarea placeholder="Enter Text" rows={5} cols={50}
				onChange={this.hText }/>
				<br/><br/>
				<h1> {this.state.count } </h1>
			</>
		);
		}
}
export default WcCounter;