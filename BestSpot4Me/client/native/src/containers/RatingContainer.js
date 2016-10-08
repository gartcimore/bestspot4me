'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mapbox from 'react-native-mapbox-gl';
import Rating from '../components/Rating.js';


function mapStateToProps(state) {
  return {    
  };
}

export default connect(mapStateToProps)(Rating);
