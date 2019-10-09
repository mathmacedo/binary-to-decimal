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
			convertedNumber: 0,
			optionConverter: ""
		};

		// bind functions
		this.setConvertedNumber = this.setConvertedNumber.bind(this);
		this.setOptionConverter = this.setOptionConverter.bind(this);
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

	/**
	 * Metodo para setar estado optionConverter
	 * @method setOptionConverter
	 * @param {Object} evt objeto evento
	 * @return
	 */
	setOptionConverter(evt) {
		this.setState({
			optionConverter: evt.target.value
		});
	}

	render() {
		return (
			<div
				style={{
					margin: "10px"
				}}
			>
				<h1 style={{ textAlign: "center" }}>
					Convertedor de decimal para binário/binário para decimal
				</h1>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<span>Selecione o modo de conversão</span>
					<select autoFocus={true} onChange={this.setOptionConverter}>
						<option value="decToBin">Decimal para Binário</option>
						<option value="binToDec">Binário para Decimal</option>
					</select>
				</div>
				<Input
					convertedNumber={this.setConvertedNumber}
					typeConverter={this.state.optionConverter}
				></Input>
				<Result result={this.state.convertedNumber}></Result>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
