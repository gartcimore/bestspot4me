'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mapbox from 'react-native-mapbox-gl';
import Map from '../components/Map.js';


function mapStateToProps(state) {
  return {
    center: {
      latitude: 48.38927,
      longitude: -4.48705
    },
    zoom: 7,
    userTrackingMode: Mapbox.userTrackingMode.none,
    annotations: [{
      coordinates: [48.38927, -4.48705],
      type: 'point',
      title: 'Brest Paradise City',
      subtitle: 'The Best Place to be.',
      id: 'marker1'
    }]
  };
}

export default connect(mapStateToProps)(Map);
