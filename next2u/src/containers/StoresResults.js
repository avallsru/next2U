import React from 'react';
// import PropTypes from 'prop-types';


import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreCard from '../Components/StoreCard/StoreCard';

import { storesCatBBDD } from '../bbddFake/storesCategoriesBBDD';

const StoresResults = props => {
  const storeToPrint = storesCatBBDD[0];
  return (
    <div>
      <StoreCatList />
      <InputRestName />
      <StoreCard />
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;