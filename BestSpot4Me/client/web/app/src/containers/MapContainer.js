import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../components/Map.js';


function mapStateToProps(state) {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps)(Map);
