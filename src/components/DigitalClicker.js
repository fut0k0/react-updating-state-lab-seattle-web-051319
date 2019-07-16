import React, { Component } from "react";

class DigitalClicker extends Component {
	
	constructor() {
		super();
		this.state = {
			timesClicked: 0
		};
	}
	
	handleClick = () => {
		const clicks = this.state.timesClicked + 1;
		
		this.setState({
			timesClicked: clicks
		});
	}
	
	render() {
		return(
			<div>
				<button onClick={this.handleClick}>{this.state.timesClicked}</button>
			</div>
		)
	}
	
}

export default DigitalClicker;