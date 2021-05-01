import React from 'react';
// import PropTypes from 'prop-types';

import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreList from '../Components/StoreList';

import './StoresResults.scss';

const StoresResults = props => {
  return (
    <div>
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

// StoresResults.propTypes = {
  
// };

export default StoresResults;