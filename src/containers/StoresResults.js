import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import SkeletonGeneralContainer from '../Components/SkeletonsStoresResults';
import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreList from '../Components/StoreList';
import Navbar from '../Components/Navbar';

import './StoresResults.scss';

const StoresResults = props => {
  
  const { storesToPrint } = useSelector(store => store.storesReducer);

  useEffect(() => {
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