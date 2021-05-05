import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../../logic';

import './CatsList.scss';

const CatsList = ({list}) => {
  const [listToPrint, setListToPrint] = useState([]);
  
  useEffect(() => {
    getList();
  }, []);

  const handleClick = (e, category) => {
    console.log(category);
  } 

  const getList = async() => {
    const listIds = Object.keys(list).map(id => id);
    const listToUpdate = await getNames(listIds, 'products_categories');
    const formatedList = listToUpdate.map(category => {
      return (<div key={Math.random()*Date.now()} onClick={(e) => handleClick(e, category)}>{category}</div>)
    })
    setListToPrint(formatedList);
  }

  
  
  
  return (
    <div className="categories-to-print">
      {listToPrint}
    </div>
  );
};

// CatsList.propTypes = {
  
// };

export default CatsList;