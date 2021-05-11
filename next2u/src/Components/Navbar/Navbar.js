import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategoriesButton from './CategoriesButton';

import './Navbar.scss';
import OrderButton from './OrderButton/OrderButton';

const Navbar = () => {
  const {page} = useSelector(store => store.hocsReducer);

  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  const printButton = () => {
    debugger;
    if(page === "stores_results" || page === "store_details") {
      return(<CategoriesButton />)
    }
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
    <div className={scrolling ? "navbar general container active" : "navbar general container"}>
      <div className="navbar logo container">
        <img className="navbar img"src="./assets/img/logo/logo_green_small.png" alt="" />
      </div>
      <div className="navbar buttons-container">
        <div className="order-button container">
          <OrderButton />
        </div>
        
        <div className="categories-button container">
          { printButton() }
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;