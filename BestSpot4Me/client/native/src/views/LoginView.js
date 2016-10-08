'use strict'

import React, { Component } from 'react';
import AppContainer from '../containers/AppContainer.js';
import SignInFormContainer from '../containers/SignInFormContainer.js';
import SignUpFormContainer from '../containers/SignUpFormContainer.js';

class LoginView extends Component {
  render() {
    return (
    	<AppContainer>
    	  <SignInFormContainer/>
    	</AppContainer>
    );
  }
}


export default LoginView;
