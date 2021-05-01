import React from 'react';
// import PropTypes from 'prop-types';

import { storesCatBBDD } from '../../bbddFake/storesCategoriesBBDD';
import StoreCatCard from '../StoreCatCard';

import { getCollection } from '../../services';

import './StoreCatList.scss';

const StoreCatList = props => {
  // const listToPrint = storesCatBBDD;
  const storesCatList = getCollection('stores_categories');
  console.log(storesCatList);
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