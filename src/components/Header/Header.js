import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;