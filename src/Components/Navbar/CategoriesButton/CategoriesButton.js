import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GiHamburgerMenu } from 'react-icons/gi';
import { prepareSimpleList, updateCategoriesActivation } from '../../../redux/actions/hocsActions';
import StoreCatList from '../../StoreCatList';
import CatsList from '../../ContainerStoreDetails/CatsList/CatsList';

import './CategoriesButton.scss';

const CategoriesButton = () => {
  const dispatch = useDispatch();

  const { page,  categoriesActivation} = useSelector(store => store.hocsReducer);


  const handleClick = () => {
    dispatch(updateCategoriesActivation(!categoriesActivation));

  }
  
  return (
    <div>
      <button className="categories-option button" onClick={handleClick}>
        <GiHamburgerMenu className="categories navbar icon"/>
      </button>
      <CatsList className={categoriesActivation ? "categories-component" : "categories-component hidden"} />
    </div>
  );
};

export default CategoriesButton;