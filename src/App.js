import React from 'react';
import FunctionalProps from './functions';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="FunctionalProps">
      <FunctionalProps
        image={logo}
        name="ِa nice one"
        price={9.99}
        cat="Category"
      />
    </div>
  );
}

export default App;