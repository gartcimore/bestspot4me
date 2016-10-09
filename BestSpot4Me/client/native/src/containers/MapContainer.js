'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mapbox from 'react-native-mapbox-gl';
import Map from '../components/Map.js';
import Spots from 'common/data/spots.json';


function mapStateToProps(state) {
  var spots_annotations = [];
  var all_annotations = [];
  Spots.features.forEach(feature => {
    var properties = feature.properties;
    var spot = {
      coordinates : [feature.geometry.coordinates[1],feature.geometry.coordinates[0]], // required. 
      type: 'point', // required. One of 'point', 'polyline' or 'polygon'
      title: properties.name, // optional. 
      id: properties.name+feature.geometry.coordinates[1], // required. 
      annotationImage: {
        source: { uri: ((properties.stationnements)?'green_spot_marker':'red_spot_marker')}
      }     
    };
    spots_annotations.push(spot);
    all_annotations.push(spot);
    properties.stationnements.features.forEach(parking => {
      all_annotations.push({
        coordinates : [parking.geometry.coordinates[1],parking.geometry.coordinates[0]], // required. 
        type: 'point', // required. One of 'point', 'polyline' or 'polygon'
        title: parking.properties['lieu-dit'], // optional. 
        id: parking.properties['lieu-dit']+parking.geometry.coordinates[1], // required. 
        annotationImage: {
          source: { uri: 'parking_marker'}
        }     
      });  
     });
    properties.magasin_plaisance.features.forEach(magasin => {
      all_annotations.push({
        coordinates : [magasin.geometry.coordinates[1],magasin.geometry.coordinates[0]], // required. 
        type: 'point', // required. One of 'point', 'polyline' or 'polygon'
        title: magasin.properties.name, // optional. 
        id: magasin.properties.name+magasin.geometry.coordinates[1], // required. 
        annotationImage: {
          source: { uri: 'shopping_marker'}
        }     
      });  
     });
  });
  return {
    center: {
      latitude: 48.38927,
      longitude: -4.48705
    },
    zoom: 7,
    userTrackingMode: Mapbox.userTrackingMode.none,
    spots_annotations: spots_annotations,
    all_annotations: all_annotations
  };
}

export default connect(mapStateToProps)(Map);
