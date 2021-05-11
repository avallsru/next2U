import React, { useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
    <div className={scrolling ? "navbar general container active" : "navbar general container"}>
      <div className="navbar logo container">
        <img className="navbar img"src="./assets/img/logo/logo_green_small.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;