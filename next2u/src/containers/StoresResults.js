import React from 'react';
// import PropTypes from 'prop-types';

import StoreCatCard from '../Components/StoreCatCard';
import { storesCatBBDD } from '../bbddFake/storesCategoriesBBDD';
import StoreCatList from '../Components/StoreCatList';

const StoresResults = props => {
  const storeToPrint = storesCatBBDD[0];
  return (
    <div>
      <StoreCatList />
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;