import React from "react";
import "./Screen.css";
import propTypes from "prop-types";

import Input from "../Input/Input";
/**
 * This is the component screen
 * @class Screen
 * @constructor
 */
class Screen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Input></Input>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
