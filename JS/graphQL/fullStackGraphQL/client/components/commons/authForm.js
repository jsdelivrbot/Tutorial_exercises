/**
*
*
* @summary: Render Login/signup form
*
*/

import React, { Component } from 'react';

class AuthForm extends Component {

  // in
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  // check input fields are completed and
  _processSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if( !email || !password ) {
      return alert('Both email and password must be filled out');
    }
    this.props.onSubmitCallback({ cbEmail: email, cbPassword: password });
  }

  _handleErrors() {

  }

  // render auth form labels
  render() {
    return(
      <div className="row">
        <form className="col s4" onSubmit={this._processSubmit.bind(this)}>
          <div className="input-field">
            <input placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>
          <div className="input-field">
            <input placeholder="password" type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
          </div>
          <ul>{this.props.errors.map(error => <li key={error}>{error}</li>)}</ul>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }

}

export default AuthForm;
