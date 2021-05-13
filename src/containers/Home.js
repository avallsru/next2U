import React from 'react';
// import PropTypes from 'prop-types';

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




