import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IoMdOptions } from 'react-icons/io';
import { updateCategoriesActivation } from '../../../redux/actions/hocsActions';
import StoreCatList from '../../StoreCatList';
import CatsList from '../../ContainerStoreDetails/CatsList/CatsList';

import './CategoriesButton.scss';

const CategoriesButton = () => {
  const dispatch = useDispatch();

  const { page,  categoriesActivation} = useSelector(store => store.hocsReducer);


  const handleClick = () => {
    dispatch(updateCategoriesActivation(!categoriesActivation));

  }

  const showCategories = () => {
    if (categoriesActivation === true && page === 'stores_results') {
      return <StoreCatList className="categories-component" />
    } else if (categoriesActivation === true && page === 'store_details') {
      return <CatsList className="categories-component" />
    }
  }
  return (
    <div>
      <button className="categories-option button" onClick={handleClick}>
        <IoMdOptions className="categories navbar icon"/>
      </button>
      {showCategories()}
    </div>
  );
};

export default CategoriesButton;