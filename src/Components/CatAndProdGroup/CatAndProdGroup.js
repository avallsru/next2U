import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import PropTypes from 'prop-types';

import { getNames } from "../../logic";

import { ProductCards } from '../DetailCards';

import './CatAndProd.scss';

const ProductCard = () => {
  const { productsToPrint } = useSelector((store) => store.storesReducer);
  const [quantity, setQuantity] = useState(0)

  const arrToPrint = productsToPrint.map((group) => {
    //GET CATEGORY AND PRODUCTS ARR TO PRINT FOR EACH GROUP
    const category = Object.keys(group);
    const productsArr = Object.values(group);

    //TRANSFORM THE PRODUCTS ARR INTO SOMETHING PRINTABLE
    const valuesArr = productsArr[0].map((product) => {
      const { name, description, url, price_unit, kind_of_unit, units_available } = product;
      return (
        <div className="product-detail container" key={Math.random()*Date.now()}>
          <div className="img-container">

          </div>
          <div className="basic-info-container">
            <div>{name}</div>
            <div>{description}</div>
          </div>
          <div className="buy-container">
            <div className="paying-container">
              <div className="quantity">
                <button className="update-quantity button">-</button> 
                <div className="quantity">{quantity}</div>
                <button className="update-quantity button">+</button>
              </div>             
             <div>{price_unit}€/{kind_of_unit}</div>
            </div>
            <button className="update-order button"><AiOutlineShoppingCart /></button>
          </div>  
        </div>
      );
    });

    //RETURN THE COMPLETE GROUP
    return (
      <div className="detail-basic-data container">
        <p className="detail-name">{category}</p>

        <div className="category-names">
          <ProductCards />
        </div>
      </div>
    );
  });

  return <div>{arrToPrint}</div>;
};

// ProductCard.propTypes = {

// };

export default ProductCard;
