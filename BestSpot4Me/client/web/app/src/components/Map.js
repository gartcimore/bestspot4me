import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import ReactMapboxGl, { ScaleControl, ZoomControl, Layer } from "react-mapbox-gl";
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import { SchemaForm } from 'react-schema-form';

import MapboxGl from 'mapbox-gl'
class MapComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  state = {
    popup: null,
    center: [ -4.48705, 48.38927 ]
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
    return (<Map center={position} zoom={11}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/crhys/ciu1hdz8z00ja2iqgbigozihf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3JoeXMiLCJhIjoiY2l0eWVpNHV3MDc1ajJ0bzgyeDM1MnYwNyJ9.27UXGXXXRi06Dn5x_HDhYg'
        attribution=''
      />
      <TileLayer
        url='https://api.mapbox.com/styles/v1/crhys/ciu1d861300i02iolcrdewtrs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3JoeXMiLCJhIjoiY2l0eWVpNHV3MDc1ajJ0bzgyeDM1MnYwNyJ9.27UXGXXXRi06Dn5x_HDhYg'
        attribution=''
      />
    </Map>);
  }
}

export default MapComponent;