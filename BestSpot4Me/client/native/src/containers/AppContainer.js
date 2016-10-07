'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from 'common/actions/users';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(App);
