import React from "react";
import "./Result.css";
import propTypes from "prop-types";

/**
 * Result component class
 * @class Result
 * @constructor
 */
class Result extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div
				style={{
					display: "inline-flex",
					height: "100px",
					backgroundColor: "#92e8a9",
					alignItems: "center",
					padding: "0 10px",
					margin: "30px 0",
					width: "30%"
				}}
			>
				<span>{this.props.result}</span>
			</div>
		);
	}
}

Result.propTypes = {
	result: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired
};

export default Result;
