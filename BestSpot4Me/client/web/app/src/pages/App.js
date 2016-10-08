import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AppContainer>
				 {this.props.children}
				</AppContainer>
			 </MuiThemeProvider>
		);
	}
}
