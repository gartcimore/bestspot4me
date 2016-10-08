'use strict'

import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer.js';
import AppContainer from '../containers/AppContainer.js';
import FloatingButton from '../components/FloatingButton.js';
import SearchBar from '../components/SearchBar.js';

class MainView extends Component {

  render() {
    return (
    	<AppContainer>
    		<MapContainer/>
    		<FloatingButton/>
        <SearchBar/>
    	</AppContainer>
    );
  }
}


export default MainView;
