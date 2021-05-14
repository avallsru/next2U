import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategoriesButton from './CategoriesButton';

import './Navbar.scss';
import OrderButton from './OrderButton/OrderButton';

const Navbar = () => {
  const {page} = useSelector(store => store.hocsReducer);

  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 350) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  const printButtons = () => {
    if(page === "store_details") {
      return(
        <div className="navbar buttons-container">
        <div className="order-button container">
          <OrderButton />
        </div>
          
        <div className="categories-button container">
        <CategoriesButton />
          
        </div>
        
      </div>
      )
    }
  }

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
    <div className={scrolling ? "navbar general container active" : "navbar general container"}>
      <div className={scrolling ? "navbar logo container green" : "navbar logo container"}>
        <img 
          className="navbar img"
          src={scrolling ? `./assets/img/logo/logo_green_small.png` : `./assets/img/logo/logo_white_small.png`} 
          alt="" 
          onClick={scrollTop}
        />
      </div>
      
      { printButtons() }
    </div>
  );
};

export default Navbar;