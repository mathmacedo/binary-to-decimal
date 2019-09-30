import React from "react";
import "./Input.css";
import propTypes from "prop-types";

/**
 * Component input
 * @class Input
 * @constructor
 */
class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<input></input>
			</div>
		);
	}
}

Input.propTypes = {};

export default Input;
