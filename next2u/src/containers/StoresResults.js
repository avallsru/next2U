import React from 'react';
// import PropTypes from 'prop-types';

import StoreCatList from '../Components/StoreCatList';
import InputRestName from '../Components/InputRestName';
import StoreList from '../Components/StoreList';

import './StoresResults.scss';
import { useSelector } from 'react-redux';

const StoresResults = props => {
  const {ref} = useSelector(store => store.storesReducer);

  const handleClick = (e) => {
    e.preventDefault();
    if(ref) {
      ref.current.scrollIntoView({behaviour: 'smooth'});
    }
  }
  return (
    <div>
      <div className="filters-container">
        <button onClick={handleClick}>test</button>
        <StoreCatList className="filter-by-cat" />
        <InputRestName className="filter-by-name" />
      </div>
      <div className="stores-container">
        <StoreList />
      </div>
      <div ref={ref}>aquí</div>
      
    </div>
  );
};

// StoresResults.propTypes = {
  
// };

export default StoresResults;