import React from 'react';
// import PropTypes from 'prop-types';

import { storesCatBBDD } from '../../bbddFake/storesCategoriesBBDD';
import StoreCatCard from '../StoreCatCard';

import './StoreCatList.scss';

const StoreCatList = props => {
  // const listToPrint = storesCatBBDD;

  const listToPrint = storesCatBBDD.map((category) => {
    return <StoreCatCard cat={category} 
    key={Math.random() * Date.now()} />
  })
  return (
    <div className="categories-list">
      {listToPrint}
    </div>
  );
};

// StoreCatList.propTypes = {
  
// };

export default StoreCatList;