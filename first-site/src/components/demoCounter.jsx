import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag01", "tag02", "tag03"],
	};

	renderTags() {
		if (this.state.tags.length === 0) {
			return <p>There are no tags!</p>;
		}

		return (
			<ul>
				{this.state.tags.map((tag, index) => {
					return <li key={index}>{tag}</li>;
				})}
			</ul>
		);
	}

	render() {
		return (
			<div>
				{this.state.tags.length === 0 && "Please Create a new Tag"}
				{this.renderTags()}
			</div>
		);
	}
}

export default Counter;
