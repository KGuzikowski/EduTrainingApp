import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div>
        <h1>Strona nie została znaleziona</h1>
        <p>Hmmm, nie jesteśmy w stanie znaleść takiej strony.</p>
        <Link to="/">Wróc na stronę główną</Link>
      </div>
    </div>
  );
};
