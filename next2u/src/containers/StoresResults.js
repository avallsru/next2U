import React from 'react';
// import PropTypes from 'prop-types';


import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';

import { storesCatBBDD } from '../bbddFake/storesCategoriesBBDD';

const StoresResults = props => {
  const storeToPrint = storesCatBBDD[0];
  return (
    <div>
      <StoreCatList />
      <InputRestName />
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;