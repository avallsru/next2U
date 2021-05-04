import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../logic';

const ProductCard = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  const [keyName, setKeyName] = useState('');
  const[productNames, setProductNames] = useState([]);
  const [preparedList, setPreparedList] = useState({});
  
  const listWithNames = Object.create({});
  
  useEffect(() => {
    modifyList();
  }, []);
  
  const modifyList = async() => {
    for (const [key, value] of Object.entries(product_list) ) {
      const catName = await getNames([key], 'products_categories');
      setKeyName(catName);
      const arrsNames = await getNames(value, 'products');
      setProductNames(arrsNames);
      console.log(arrsNames);
      Object.defineProperties(listWithNames, {keyName: productNames});
      // const returnedList = Object.assign(listWithNames, listWithNames);
      console.log(listWithNames);
      // setPreparedList(returnedList);
    }
    console.log(keyName);
  }

  
  
  return (
    <div className="detailsCard-container" >
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      <div className="detail-basic-data container">
        <p className="detail-name">{}</p>
        
        <div className="category-names">{}</div>
      </div>
      <div className="detail-other-info container">
        <div className="opening-hours">
        </div>
        <div className="paying-info">
          <div className="delivery-price">
            <span>
              <b>Entrega:</b>
            </span>
            <span>{}</span>
          </div>
          <div className="minimum-order">
            <span>
              <b>Pedido mín:</b>
            </span>
            <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

// ProductCard.propTypes = {
  
// };

export default ProductCard;