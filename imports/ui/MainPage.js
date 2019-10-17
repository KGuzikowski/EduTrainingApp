import React from 'react';

import Header from './Header';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main-content">
        <ContentHeader />
        <ContentBody />
      </div>
    </React.Fragment>
  );
};
