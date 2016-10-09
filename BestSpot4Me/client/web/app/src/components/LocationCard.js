import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  content: {
    margin: 5
  },

  image: {
    width: "100%"
  }
};

class LocationCard extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

	render() {
      const {station} = this.props;
      return (
        <div>
          <center>
            <FontIcon className="material-icons" style={{fontSize: '48px', color: 'green'}}>check_circle</FontIcon>
            <img src={'/img/blc.png'} alt="boohoo" style={styles.image}/>
            <h3>{station.name} (Surf spot)</h3>
          </center>
          

          <Tabs>
            <Tab label="Actuellement" >
              <div style={styles.content}>
                <h2 style={styles.headline}>Actuellement</h2>
                <p>
                  Les conditions sont idéales pour vous
                </p>
                <p>
                  Preparez votre matos, ce spot est tout proche de vous!
                </p>
              </div>
            </Tab>
            <Tab label="Demain" >
              <div>
                <h2 style={styles.headline}>Demain</h2>
                <p>
                  Nous ne vous recommandons pas ce spot
                </p>
              </div>
            </Tab>
          </Tabs>
          <br/><br/>
          <center>
          <RaisedButton 
            label="Ok"  
            primary={true} 
            onClick={this.props.handleSubmit}
          />
          </center>
          </div>
      );
	}
}

export default LocationCard