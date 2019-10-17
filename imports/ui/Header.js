import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import { primary } from './variables';

class Header extends React.Component {
  componentDidMount(){
    $(".button-collapse").sideNav();
  }
  render(){
  let buttons, buttonsHidden;
  if(!Meteor.userId()){
    buttons = (
      <ul className="right hide-on-med-and-down">
        <li><Link to="/login">Zaloguj się</Link></li>
        <li><Link to="/signup">Zarejestruj się</Link></li>
      </ul>
    );
    buttonsHidden = (
      <ul className="side-nav" id="mobile-demo">
        <li><Link to="/login">Zaloguj się</Link></li>
        <li><Link to="/signup">Zarejestruj się</Link></li>
      </ul>
    );
  } else {
    buttons = (
      <ul className="right hide-on-med-and-down">
        <li><Link to="/dashboard"><i className="material-icons account-icon">account_circle</i></Link></li>
        <li onClick={()=>Accounts.logout()}><a>Wyloguj się</a></li>
      </ul>
    );
    buttonsHidden = (
      <ul className="side-nav" id="mobile-demo">
        <li><Link to="/dashboard"><i className="material-icons account-icon">account_circle</i></Link></li>
        <li onClick={()=>Accounts.logout()}><a>Wyloguj się</a></li>
      </ul>
    );
  }
  return (
    <React.Fragment>
      <nav className={primary}>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Educational Platform</Link>
          <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          {buttons}
        </div>
      </nav>
      {buttonsHidden}
    </React.Fragment>
  );
}
};

export default Header;