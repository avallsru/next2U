import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CategoriesButton from './CategoriesButton';

import './Navbar.scss';
import OrderButton from './OrderButton/OrderButton';

const Navbar = ({refToAssign}) => {
  debugger;
  const {page} = useSelector(store => store.hocsReducer);

  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
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
    debugger;
    if(refToAssign) {
      refToAssign.current.scrollIntoView({behaviour: 'smooth', block:"center"});
    }
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
    <div className={scrolling ? "navbar general container active" : "navbar general container"}>
      <div className="navbar logo container">
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