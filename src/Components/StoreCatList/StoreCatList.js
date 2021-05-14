import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import StoreCatCard from '../StoreCatCard';

import { listFromDb } from '../../services';

import './StoreCatList.scss';
import { useSelector } from 'react-redux';

const StoreCatList = (props) => {
  const { simpleCategoriesList } = useSelector(store => store.hocsReducer);
  const [categories, setCategories] = useState([]);
  const [listToPrint, setListToPrint] = useState([]);
  const [namesList, setNamesList] = useState([]);
 
  const getList = async() => {
    const categoriesFromPromise = await listFromDb('stores_categories');
    setCategories(categoriesFromPromise);
  }

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if(simpleCategoriesList) {
      defineSimpleList();
    } else {
      defineListToPrint();
    }
    
  }, [categories]);

  const defineListToPrint = () => {
    const temporalList = categories.map((category) => {
      return (
      <StoreCatCard 
        cat={category} 
        key={Math.random() * Date.now()} 
        className="store-category-card container"
      />
      )
    });
    setListToPrint(temporalList);
  }
  
  const defineSimpleList = () => {
    const temporalList = categories.map((category) => {
      return (
        <div>{category.name}</div>
      )
    })
    setListToPrint(temporalList);
  }
  
  return (
    <div className="categories-list">
      {listToPrint}
    </div>
  );
};

// StoreCatList.propTypes = {
  
// };

export default StoreCatList;