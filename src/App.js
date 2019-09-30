import React from "react";
import "./App.css";
import propTypes from "prop-types";

import Screen from "./components/Screen/Screen";

/**
 * App class
 * @class App
 * @constructor
 */
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Screen></Screen>
			</div>
		);
	}
}

App.propTypes = {};

export default App;
