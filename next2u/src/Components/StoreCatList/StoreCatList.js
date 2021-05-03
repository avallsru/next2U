import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { storesCatBBDD } from '../../bbddFake/storesCategoriesBBDD';
import StoreCatCard from '../StoreCatCard';

import { getCollection, listFromDb } from '../../services';

import './StoreCatList.scss';

const StoreCatList = (props) => {
  const [categories, setCategories] = useState([]);
  const [listToPrint, setListToPrint] = useState([])
 
  const getList = async() => {
    const categoriesFromPromise = await listFromDb('stores_categories');
    setCategories(categoriesFromPromise);
  }

  useEffect(() => {
    const temporalList = categories.map((category) => {
      return <StoreCatCard cat={category} 
      key={Math.random() * Date.now()} />
    });
    setListToPrint(temporalList);
  }, [categories]);

  useEffect(() => {
    getList();
  }, []);
  
  
  return (
    <div className="categories-list">
      {listToPrint}
    </div>
  );
};

// StoreCatList.propTypes = {
  
// };

export default StoreCatList;