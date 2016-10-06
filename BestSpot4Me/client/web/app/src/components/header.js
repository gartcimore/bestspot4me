import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


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

  renderSignInLinks(authenticatedUser) {
    if(authenticatedUser) {
      return (
        <ul className="nav  nav-pills navbar-right">
            <li style={{paddingRight: '10px'}} role="presentation">      
              <Link role="presentation" style={{color:'#996633',  fontSize: '17px'}} to="/profile">
              {authenticatedUser.name}
              </Link>
            </li>
            <li style={{paddingRight: '10px'}} role="presentation">      
              <Link style={{color:'#996633',  fontSize: '17px'}} to="/map">
              Carte
              </Link>
            </li>
            <li style={{paddingRight: '10px'}} role="presentation">      
              <a style={{color:'#996633',  fontSize: '17px'}}  onClick={this.props.logout} href="javascript:void(0)">
              Se Deconnecter
              </a>
            </li>
        </ul>
      );
    }

    return (
      <ul className="nav  nav-pills navbar-right">
          <li style={{paddingRight: '10px'}} role="presentation">      
            <Link  role="presentation" style={{color:'#996633',  fontSize: '17px'}} to="/signup">
            S'inscrire
            </Link>
          </li>
          <li style={{paddingRight: '10px'}} role="presentation">      
            <Link style={{color:'#996633',  fontSize: '17px'}} to="/signin">
            Se loguer
            </Link>
          </li>
      </ul>
   );
  }
  
	renderLinks() {
		const { type, authenticatedUser } = this.props
     return (
      <div className="container">
        <ul className="nav  nav-pills navbar-right">
  			</ul>
       {this.renderSignInLinks(authenticatedUser)}
      </div>
		 );
	};

	render() {
			return (
			 <nav className="navbar navbar-default navbar-static-top">
			      <div id="navbar" className="navbar-collapse collapse">
			      {this.renderLinks()}
	      		</div>     
			 </nav>				
			);
	}
}

export default Header