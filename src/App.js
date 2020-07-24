import React from 'react';
import './App.scss';

import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <div className="col6">
        <Slider/>
      </div>
      <div className="col6">
        <Header/>
        <Login/>
      </div>
    </div>
  );
}

export default App;
