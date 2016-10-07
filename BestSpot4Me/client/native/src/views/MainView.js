'use strict'

import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer.js';
import AppContainer from '../containers/AppContainer.js';

class MainView extends Component {
  render() {
    return (
    	<AppContainer>
    		<MapContainer/>
    	</AppContainer>
    );
  }
}


export default MainView;
