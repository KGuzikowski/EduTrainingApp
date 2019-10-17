import React from 'react';
import { Link } from 'react-router-dom';
import { meteor } from 'meteor/meteor';

import HeaderLoginSignup from './HeaderLoginSignup';

export default class Login extends React.Component {
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

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Nie udało sie zalogować. Sprawdź hasło i email.'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderLoginSignup />
        <div className="boxed-view">
          <div className="z-depth-3 boxed-view__box container">
            <h2 className="center-align">Zaloguj się</h2>

            {this.state.error ? <p className="boxed-view__error center-align pink-text text-darken-4">{this.state.error}</p> : null}

            <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form container">
              <div className="input-field">
                <input type="email" ref="email" name="email" id="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" ref="password" name="password" className="validate"/>
                <label htmlFor="password">Hasło</label>
              </div>
              <button className="waves-effect waves-light btn pink darken-4">Zaloguj się</button>
              <div className="divider"></div>
              <Link to="/signup" className="boxed-view__link"><h6>Zarejestruj się!</h6></Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
