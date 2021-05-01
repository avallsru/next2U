import React from 'react';
// import PropTypes from 'prop-types';

import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreCard from '../Components/StoreCard/StoreCard';

import './StoresResults.scss';

const StoresResults = props => {
  return (
    <div>
      <div className="filters-container">
        <StoreCatList className="filter-by-cat" />
        <InputRestName className="filter-by-name" />
      </div>
      <div className="stores-container">
        <StoreCard />
      </div>
      
      
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;