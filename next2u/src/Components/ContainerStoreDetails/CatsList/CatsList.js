import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../../logic';

import './CatsList.scss';

const CatsList = ({list}) => {
  const [listToPrint, setListToPrint] = useState([]);
  
  const getList = async() => {
    const listIds = Object.keys(list).map(id => id);

    const listToUpdate = await getNames(listIds, 'products');

    console.log(listToUpdate);
    setListToPrint(listToUpdate);
  }

  getList();
  
  
  return (
    <div>
      {listToPrint}
    </div>
  );
};

// CatsList.propTypes = {
  
// };

export default CatsList;