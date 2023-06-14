import React from "react";
import"./evenodd.css";

class EvenOdd extends React.Component
{
	constructor(){
		super();
		this.state = {
			num:" ",
			res:""
		}
		this.rNum=React.createRef();
	}
	
	hNum = (event) => {
		this.setState({num:event.target.value})
	}
	find = (event) => {
		if(this.state.num =="")
		{
			alert("Input is empty");
			this.setState({res:""});
			this.rNum.current.focus();
			return;
		}
		
		if(! this.state.num.match(/^[-0-9]+$/))
		{
			alert("Integers only");
			this.setState({res:""});
			this.setState({num:""});
			this.rNum.current.focus();
			return;
		}
	
		let n = parseInt(this.state.num);
		let r = n % 2 == 0 ? "even" : "odd";
		this.setState({res:"res=" + r});
		}
		render(){
			return(
				<>
					<h1>Even Odd App</h1>
					<input type="number" placeholder="Enter integer" onChange={this.hNum}
					ref={this.rNum} value={this.state.num} />
					<br/><br/>
					<input type="submit" value="Find Even Odd" onClick={this.Find}/>
					<br/><br/>
					<h1> {this.state.res} </h1>
				</>
			);
			}
}
export default EvenOdd;

