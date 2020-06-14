import React, {Component} from "react";

import AppContainer from './src/components/Navigation';

export default class App extends Component {

	constructor(properties) {
		super(properties);
	}

	render() {
		return <AppContainer />;
	}
	
}
