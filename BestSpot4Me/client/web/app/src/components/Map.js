import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
     //this.props.resetMe();
     let userStatus = this.props.user.status;
     if(!userStatus || userStatus !== 'authenticated') {
      this.context.router.push('/');
    }

    
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status !== 'authenticated') {
      this.context.router.push('/');
    }
  }


  render() {
    const position = [48.37877257283894, -4.48333];
    return (
      <div></div>
    );
  }
}

export default MapComponent;