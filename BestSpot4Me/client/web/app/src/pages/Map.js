import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import MapContainer from '../containers/MapContainer.js';

class Map extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <MapContainer/>
      </div>
    );
  }
}


export default Map;
