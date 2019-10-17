import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import { primary } from './variables';

const HeaderLoginSignup = () => {
  return (
      <nav className={primary}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">Educational Platform</Link>
        </div>
      </nav>
  );
};

export default HeaderLoginSignup;