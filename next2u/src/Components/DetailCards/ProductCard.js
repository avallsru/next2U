import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../logic';

const ProductCard = () => {
  const { productsToPrint } = useSelector(store => store.storesReducer)
  ;

  const arrToPrint = productsToPrint.map(group => {
    const category = Object.keys(group)
    const productsArr = Object.values(group);
    // console.log(productsArr[0]);
    console.log(productsArr);
    const valuesArr = productsArr[0].map(product => {
      
      return(
            <>
            <div>{product.name}</div>
            <div>{product.price_unit}€</div>
            <div>{product.description}</div>
            </>
          )
    })
    return (
      <div className="detail-basic-data container">
        <p className="detail-name">{category}</p>
        
        <div className="category-names">{
          valuesArr
        }</div>
      </div>
    )
  })

  
  console.log(arrToPrint);

  
  
  return (
    <div className="detailsCard-container" >
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      
      <div>
        {arrToPrint}
      </div>
      {/* <div className="detail-other-info container">
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
      </div> */}
    </div>
  )
};

// ProductCard.propTypes = {
  
// };

export default ProductCard;