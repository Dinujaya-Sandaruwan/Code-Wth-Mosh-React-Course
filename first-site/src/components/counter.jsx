import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div className="container text-center">
				<div className="row" style={{ width: 300 }}>
					<div className="col" style={{ minWidth: 50 }}>
						<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
					</div>
					<div className="col">
						<button
							onClick={() => this.props.onIncrement(this.props.counter)}
							className="btn btn-secondary btn-sm"
						>
							+
						</button>
					</div>
					<div className="col">
						<button
							className="btn btn-secondary btn-sm"
							onClick={() => this.props.onDecrement(this.props.counter)}
							disabled={this.props.counter.value === 0 ? "disabled" : ""}
						>
							-
						</button>
					</div>
					<div className="col">
						<button
							onClick={() => this.props.onDelete(this.props.counter.id)}
							className="btn btn-danger btn-sm"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
