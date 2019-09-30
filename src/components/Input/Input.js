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
	}

	/**
	 * Metodo para atualizar state inputValue com o valor digitado
	 * @method changeInputValueState
	 * @return
	 */
	changeInputValueState(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	/**
	 * Metodo para converter o número decimal inputado para binario
	 * @method convertToBinary
	 */
	convertToBinary() {
		let convertedNumber = parseInt(this.state.inputValue, 10).toString(2);
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
				<span>Digite o número em decimal a ser convertido: </span>
				<div style={{ margin: "0 10px" }}>
					<input
						type="number"
						defaultValue={this.state.inputValue}
						onChange={this.changeInputValueState}
						min="0"
					></input>
				</div>
				<div style={{ margin: "0 10px" }}>
					<button onClick={this.convertToBinary}>Converter</button>
				</div>
			</div>
		);
	}
}

Input.propTypes = {
	convertedNumber: propTypes.func.isRequired
};

export default Input;
