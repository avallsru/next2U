import React from 'react';
// import PropTypes from 'prop-types';
// import { MdPets, MdPhotoCamera } from 'react-icons/md';
// import { IoFish } from 'react-icons/io5';
// import { GiClothes, GiFruitBowl } from 'react-icons/gi';
// import { FaCandyCane }from 'react-icons/fa';
// import { IoFlower } from 'react-icons/io5';
// import { FaChild } from 'react-icons/fa';

import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreList from '../Components/StoreList';
import Navbar from '../Components/Navbar';

import './StoresResults.scss';
import { useSelector } from 'react-redux';

const StoresResults = props => {
  const topRef = React.createRef();
  debugger;
  return (
    <div className="principal-container-stores-results" ref={topRef}>
      <Navbar refToAssign={topRef}/>
      <div className="filters-container">
        <StoreCatList className="filter-by-cat" />
        <InputRestName className="filter-by-name" />
      </div>
      <div className="stores-container">
        <StoreList />
      </div>
      {/* <MdPets className="icon-test"/>
      <IoFish className="icon-test"/>
      <GiClothes className ="icon-test" />
      <FaCandyCane className ="icon-test" />
      <IoFlower className ="icon-test" />
      <FaChild className ="icon-test" />
      <GiFruitBowl className ="icon-test" />
      <MdPhotoCamera className="icon-test"/> */}
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;