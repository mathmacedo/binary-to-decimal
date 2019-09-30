import React from "react";
import "./Screen.css";
import propTypes from "prop-types";

import Input from "../Input/Input";
import Result from "../Result/Result";
/**
 * This is the component screen
 * @class Screen
 * @constructor
 */
class Screen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			convertedNumber: 0
		};

		// bind functions
		this.setConvertedNumber = this.setConvertedNumber.bind(this);
	}

	/**
	 * Metodo para setar estado convertedNumber com resultado que vem do componente input
	 * @method setConvertedNumber
	 */
	setConvertedNumber(converted) {
		this.setState({
			convertedNumber: converted
		});
	}

	render() {
		return (
			<div>
				<Input convertedNumber={this.setConvertedNumber}></Input>
				<Result result={this.state.convertedNumber}></Result>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
