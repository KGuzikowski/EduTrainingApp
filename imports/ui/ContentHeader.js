import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="main-content__header grey-text text-lighten-5">
        <h4 className="center-align main-content__header-text1">Jedyne miejsce, aby nauczyć się wszystkiego!</h4>
        <Link to="/signup" className="center-align"><span class="main-content__header-btn1">Dołącz do nas</span></Link>
        <form noValidate className="main-content__header-form">
          <input type="text" placeholder="Czego chcesz się dziś nauczyć?"/>
        </form>
    </div>
  );
};