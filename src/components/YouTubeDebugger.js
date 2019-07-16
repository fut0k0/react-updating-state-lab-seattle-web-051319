import React, { Component } from "react";

class YouTubeDebugger extends Component {
	
	constructor() {
		super();
		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {
					resolution: "1080p"
				}
			}
		};
	}
	
	handleBitClick = () => {		
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		});
	}
	
	handleResClick = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {resolution: "720p"}
			}
		});
	}
	
	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.handleBitClick}></button>
				<button className="resolution" onClick={this.handleResClick}></button>
			</div>
		);
	}
}

export default YouTubeDebugger;