import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../logic';

const ProductCard = (something) => {
  console.log(something);
  const category = Object.keys(something);
  
  // const productDetail = Object.values(catList);
  // const productToPrint = productDetail[0].map((product) => {
  //   console.log(product);
  //   return(
  //     <>
  //     <div>{product.name}</div>
  //     <div>{product.price_unit}€</div>
  //     <div>{product.description}</div>
  //     </>
  //   )
  // })

  
  
  return (
    <div className="detailsCard-container" >
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      <div className="detail-basic-data container">
        <p className="detail-name">{category[0]}</p>
        
        <div className="category-names">{
          
        }</div>
      </div>
      <div>
        {/* {productDetail} */}
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