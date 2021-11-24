import React from "react";

import './navbar.styles.css'

import Search from '../search/search.component'

const Navbar = () => {
  return (
    <div className='navBar'>
      <span className='text'>Weather App</span>
      <Search />
    </div>
  );
};

export default Navbar;
