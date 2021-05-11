import React from 'react';
// import PropTypes from 'prop-types';
import { IoFish } from 'react-icons/io5';
import { GiClothes } from 'react-icons/gi';
import { FaCandyCane }from 'react-icons/fa';
import { IoFlower } from 'react-icons/io5';
import { FaChild } from 'react-icons/fa';

import InputAddress from '../Components/InputAddress';

import './Home.scss';

const Home = props => {
 
  return (
    <div className="principal home container">
      <div className="background-container">
        <img 
          className="background img"
          src="./assets/img/logo/background-icons-top.png" 
          alt="map with icons"
        />
        <img 
        className="background img second"
        src="./assets/img/logo/bckground-icons-bottom.png" 
        alt="map with icons"
      />
      </div>
      
      <img 
        className="logo home"      
        src="./assets/img/logo/logo_white_bckground.png" 
        alt="next2U logo" 
      />
      <div className="input-address container home">
        <InputAddress className="input-address component"/>
      </div>
      
    </div>
  );
};

// Home.propTypes = {
  
// };

export default Home;



{/* <IoFish className="icons-test"/>
<GiClothes className ="icons-test" />
<FaCandyCane className ="icons-test" />
<IoFlower className ="icons-test" />
<FaChild className ="icons-test" /> */}
