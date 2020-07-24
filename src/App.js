import React from 'react';
import './App.scss';

import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="col6">
        <Slider/>
      </div>
      <div className="col6">
        <Header/>
        <Route path={["/register"]} exact={true} component={() => 
          <Register/>
        }/>
        <Route path={["/"]} exact={true} component={() =>
          <Login/>
        }/>
        
      </div>
    </div>
  );
}

export default App;
