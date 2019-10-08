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

		this.state = {
			inputValue: 0
		};

		// Bind functions
		this.changeInputValueState = this.changeInputValueState.bind(this);
		this.convertToBinary = this.convertToBinary.bind(this);
		this.defineConverter = this.defineConverter.bind(this);
	}

	/**
	 * Metodo invocado imediatamente após alguma atualização ocorrer
	 * @method componentDidUpdate
	 * @param {Object} prevProps objeto props antigo
	 * @return
	 */
	componentDidUpdate(prevProps) {
		if (this.props.typeConverter != prevProps.typeConverter) {
			this.setState({
				inputValue: 0
			});
		}
	}

	/**
	 * Metodo para atualizar state inputValue com o valor digitado
	 * @method changeInputValueState
	 * @param {Object} evt objeto evento
	 * @return
	 */
	changeInputValueState(evt) {
		var regExp = new RegExp("[^0-1]", "g");
		if (this.props.typeConverter === "binToDec") {
			if (regExp.test(evt.target.value)) {
				var str = evt.target.value.substr(
					0,
					evt.target.value.length - 1
				);
				alert("Digite apenas números binários");
				this.setState({
					inputValue: str
				});
			} else {
				this.setState({
					inputValue: evt.target.value
				});
			}
		} else {
			this.setState({
				inputValue: evt.target.value
			});
		}
	}

	/**
	 * Metodo para definir qual tipo converter
	 * @method defineConverter
	 * @return
	 */
	defineConverter() {
		if (this.props.typeConverter === "binToDec") {
			this.convertToBinary();
		} else {
			this.convertToDecimal();
		}
	}

	/**
	 * Metodo para converter o número binário inputado para decimal
	 * @method convertToDecimal
	 * @return
	 */
	convertToDecimal() {
		let convertedNumber = parseInt(this.state.inputValue, 10).toString(2);
		this.props.convertedNumber(convertedNumber);
	}

	/**
	 * Metodo para converter o número decimal inputado para binario
	 * @method convertToBinary
	 * @return
	 */
	convertToBinary() {
		let convertedNumber = parseInt(this.state.inputValue, 2).toString();
		this.props.convertedNumber(convertedNumber);
	}

	render() {
		return (
			<div
				style={{
					display: "inline-flex",
					height: "100px",
					backgroundColor: "#1db3ac",
					alignItems: "center",
					padding: "0 10px",
					margin: "30px 0",
					width: "30%"
				}}
			>
				<span>Digite o número a ser convertido: </span>
				<div style={{ margin: "0 10px" }}>
					<input
						min={0}
						onChange={this.changeInputValueState}
						type="number"
						value={this.state.inputValue}
					></input>
				</div>
				<div style={{ margin: "0 10px" }}>
					<button onClick={this.defineConverter}>Converter</button>
				</div>
			</div>
		);
	}
}

Input.propTypes = {
	convertedNumber: propTypes.func.isRequired,
	typeConverter: propTypes.string.isRequired
};

export default Input;
