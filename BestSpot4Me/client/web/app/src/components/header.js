import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {AppBar} from 'material-ui';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.user && !nextProps.user.user) {//logout (had user(this.props.user.user) but no loger the case (!nextProps.user.user))
      //this.context.router.push('/');
    } 
  }

	render() {
      const { type, authenticatedUser } = this.props
			if(authenticatedUser) {
        return (
          <AppBar
            title="BestSpot4Me"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        );
      }
      return (
          <div></div>
      );
	}
}

export default Header