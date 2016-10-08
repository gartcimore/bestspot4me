'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from 'common/actions/users';
import LoginForm from '../components/LoginForm.js';  	

import jsonForm from 'common/forms/signup.form.json';

const mapDispatchToProps = (dispatch) => {
  return {
  	'jsonForm':jsonForm,
  	'options':{}
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
