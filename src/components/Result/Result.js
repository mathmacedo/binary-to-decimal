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
			<div>
				<div>
					<div>{this.props.result}</div>
				</div>
			</div>
		);
	}
}

Result.propTypes = {
	result: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired
};

export default Result;
