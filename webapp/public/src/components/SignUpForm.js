import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SignUpForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/');
    }
  }

  render() {
    const {asyncValidating, fields: { name, username, email, password, confirmPassword }, handleSubmit, submitting } = this.props;

    return (
      <div className="container">
      <form onSubmit={handleSubmit(this.props.signUpUser.bind(this))}>
        <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Nom + Prénom*</label>
          <input type="text" className="form-control" {...name} />
          <div className="help-block">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${username.touched && username.invalid ? 'has-error' : ''}`}>
          <label className="control-label">@pseudo*</label>
          <input  placeholder="" type="text" className="form-control" {...username} />
          <div className="help-block">
            {username.touched ? username.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'username' ? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Email*</label>
          <input type="email" className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? email.error : ''}
          </div>
          <div className="help-block">
          {asyncValidating === 'email' ? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Mot de passe*</label>
          <input type="password" className="form-control" {...password} />
          <div className="help-block">
            {password.touched ? password.error : ''}
          </div>
        </div>
        <div className={`form-group ${confirmPassword.touched && confirmPassword.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Retaper votre mot de passe*</label>
          <input type="password" className="form-control" {...confirmPassword} />
          <div className="help-block">
            {confirmPassword.touched ? confirmPassword.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary"  disabled={submitting} >Valider</button>
        <Link to="/" className="btn btn-error">Annuler</Link>
      </form>


      <br/>
      <br/>
      <br/>


      </div>

    );
  }
}

export default SignUpForm;