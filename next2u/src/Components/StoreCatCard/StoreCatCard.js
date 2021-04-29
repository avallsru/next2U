import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { listStores } from '../../services';

import { listToPrint } from '../../redux/actions/storesActions';

import './StoreCatCard.scss';

const StoreCatCard = ({cat}) => {
  const dispatch = useDispatch();

  const [storesList, setStoresList] = useState([]);

  useEffect(() => {
    dispatch(listToPrint(storesList));
  }, [storesList, dispatch])

  const {name, img, id} = cat;
  const imgRoute = `assets/img/${img}`;


  const handleClick = async (e) => {
    const storesToPrint = await listStores('stores', id);
    console.log(storesToPrint);
    setStoresList(storesToPrint);
  }

  const handleHover = (e) => {
    e.target.style='cursor: pointer';
  }

  const altText = `${name} icon`;
  return (
    <div className="container card-store-cat" name={name} onClick={handleClick} onMouseOver={handleHover}>
      <img src={imgRoute} alt={altText} className="img card-store-cat"/>
      <div className="name card-store-cat">
        {name}
      </div>

    </div>
  );
};

// StoreCatCard.propTypes = {
  
// };

export default StoreCatCard;