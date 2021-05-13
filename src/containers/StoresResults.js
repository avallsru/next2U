import React, { useEffect } from 'react';
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
import SkeletonGeneralContainer from '../Components/SkeletonsStoresResults';

const StoresResults = props => {
  
  const { storesToPrint } = useSelector(store => store.storesReducer);

  useEffect(() => {
    debugger;
    console.log('');
  }, [storesToPrint]);
  
  
  if(storesToPrint.length === 0) {
    return (
      <div className="principal-container-stores-results" >
        <Navbar />
        <SkeletonGeneralContainer />
      </div>
    );
  }
  return (
    <div className="principal-container-stores-results" >
      <Navbar />
      <div className="filters-container">
        <StoreCatList className="filter-by-cat" />
        <InputRestName className="filter-by-name" />
      </div>
      <div className="stores-container">
        <StoreList />
      </div>
    </div>
  );
};

export default StoresResults;