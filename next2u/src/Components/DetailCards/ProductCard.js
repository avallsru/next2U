import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

import { getNames } from "../../logic";

import './ProductCard.scss';

const ProductCard = () => {
  const { productsToPrint } = useSelector((store) => store.storesReducer);

  const arrToPrint = productsToPrint.map((group) => {
    //GET CATEGORY AND PRODUCTS ARR TO PRINT FOR EACH GROUP
    const category = Object.keys(group);
    const productsArr = Object.values(group);

    //TRANSFORM THE PRODUCTS ARR INTO SOMETHING PRINTABLE
    const valuesArr = productsArr[0].map((product) => {
      return (
        <div className="product-detail container" key={Math.random()*Date.now()}>
          <div>{product.name}</div>
          <div>{product.price_unit}€</div>
          <div>{product.description}</div>
        </div>
      );
    });

    //RETURN THE COMPLETE GROUP
    return (
      <div className="detail-basic-data container">
        <p className="detail-name">{category}</p>

        <div className="category-names">{valuesArr}</div>
      </div>
    );
  });

  return <div>{arrToPrint}</div>;
};

// ProductCard.propTypes = {

// };

export default ProductCard;
