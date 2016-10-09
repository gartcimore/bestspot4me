import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import MapContainer from '../containers/MapContainer.js';
import ProfileCardContainer from '../containers/ProfileCardContainer.js';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

class Map extends Component {

  componentDidMount() {
    this.setState({open: false});
  }

  handleOpen = () => {	
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <HeaderContainer handleProfile={this.handleOpen}/>
        <MapContainer/>
        <Drawer width={400} openSecondary={true} open={this.state.open} >
	        <AppBar title="Mes Préférences" iconElementLeft={<div/>} />
	        <ProfileCardContainer handleSubmit={this.handleClose}/>
	    </Drawer>
      </div>
    );
  }
}


export default Map;
