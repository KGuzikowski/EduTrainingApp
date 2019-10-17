import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import HeaderLoginSignup from './HeaderLoginSignup';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  componentWillMount() {
    if (Meteor.userId())
      this.props.history.replace('/');
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let password2 = this.refs.password2.value.trim();

    if (password.length < 8) {
      return this.setState({error: 'Hasło musi mieć co najmniej 8 znaków.'});
    } else if(password !== password2){
      return this.setState({error: 'Hasła muszą być takie same.'});
    }

    Accounts.createUser({email, password}, (err) => {
      //Shows error to screen
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
        Meteor.call('users.addRole');
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <HeaderLoginSignup />
        <div className="z-depth-3 boxed-view__box container">
          <h2 className="center-align">Zarejestruj się</h2>

          {this.state.error ? <p className="boxed-view__error center-align pink-text text-darken-4">{this.state.error}</p> : null}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form container">
            <div className="input-field">
              <input type="email" ref="email" name="email" id="signUpEmail" className="validate"/>
              <label htmlFor="signUpEmail">Email</label>
            </div>
            <div className="input-field">
              <input type="password" id="signUpPassword" ref="password" name="password" className="validate"/>
              <label htmlFor="signUpPassword">Hasło</label>
            </div>
            <div className="input-field">
              <input type="password" id="signUpPassword2" ref="password2" name="password2" className="validate"/>
              <label htmlFor="signUpPassword2">Hasło</label>
            </div>
            <button className="waves-effect waves-light btn pink darken-4">Stwórz konto</button>
            <div className="divider"></div>
            <Link to="/login" className="boxed-view__link"><h6>Masz już konto? Zaloguj się!</h6></Link>
          </form>
        </div>
      </div>
    );
  }
};
