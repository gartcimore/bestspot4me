'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';

const accessToken = 'pk.eyJ1IjoiY3JoeXMiLCJhIjoiY2l0eWVrd2FqMDdzeTJ6cWVpbHVsdDIzYiJ9.ZP4H9eMHeB9t1iFmBOQCKQ';
Mapbox.setAccessToken(accessToken);

class Map extends Component {
  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
  };

  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
  };

  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }
  render() {
    StatusBar.setHidden(true);
    return (
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.props.center}
          initialZoomLevel={this.props.zoom}
          initialDirection={0}
          attributionButtonIsHidden={true}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={false}//mapbox://styles/crhys/ciu1d861300i02iolcrdewtrs
          styleURL={"mapbox://styles/crhys/ciu1hdz8z00ja2iqgbigozihf"}
          userTrackingMode={this.props.userTrackingMode}
          annotations={this.props.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  }
});

export default Map;
