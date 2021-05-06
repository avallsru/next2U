import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../../logic';

import './CatsList.scss';

const CatsList = ({list}) => {
  const [listToPrint, setListToPrint] = useState([]);
  const {productsToPrint} = useSelector(store => store.storesReducer);
  debugger;
  
  useEffect(() => {
    getList();
  }, [listToPrint]);

  const handleClick = (e, category) => {
    console.log(category);
  } 

  const getList = () => {
    setListToPrint([]);
    debugger;
    const catsArr = productsToPrint.map(group => {
      const catName = Object.keys(group).join();
      return(
        <div onClick={e => handleClick(e, catName)}>{catName}</div>
      )
    });
    setListToPrint(catsArr);
  }

  
  if (listToPrint !== []) {
    return (
      <div className="categories-to-print">
        {listToPrint}
      </div>
    );
  } 
  
  return (
    <div className="categories-to-print">
      Loading...
    </div>
  );
};

// CatsList.propTypes = {
  
// };

export default CatsList;