import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import PropTypes from 'prop-types';

import { getNames } from "../../logic";

import "./ProductCards.scss";
import { updateProductsToPrint } from "../../redux/actions/storesActions";
import {addProduct} from "../../redux/actions/orderActions";

const ProductCards = () => {
  const dispatch = useDispatch();
  const { productsToPrint } = useSelector((store) => store.storesReducer);
  const [quantity, setQuantity] = useState(0);
  const [productToOrder, setProductToOrder] = useState({});

  const updateQuantity = ({ target }, unitsAvailable, unitsSelected, ID) => {
    if(target.value === '+' && unitsSelected < unitsAvailable && unitsSelected >= 0) {
      const updatedQuantity = unitsSelected + 1;
      dispatch(updateProductsToPrint(ID, updatedQuantity));
    } else if(target.value === '-' && unitsSelected > 0) {
      const updatedQuantity = unitsSelected - 1;
      dispatch(updateProductsToPrint(ID, updatedQuantity));
    }
  };

  const updateOrderReducer = (e, id, name, unitsSelected, priceUnit) => {
    e.preventDefault();
    
    const productToAdd = {[id]: {
      name,
      unitsSelected,
      priceUnit
    }}
    dispatch(addProduct(productToAdd))
  }

  const arrToPrint = productsToPrint.map((group) => {
    //GET CATEGORY AND PRODUCTS ARR TO PRINT FOR EACH GROUP
    const category = Object.keys(group);
    const productsArr = Object.values(group);

    //TRANSFORM THE PRODUCTS ARR INTO SOMETHING PRINTABLE
    const valuesArr = productsArr[0].map((product) => {
      const {
        ID,
        name,
        description,
        url,
        price_unit,
        kind_of_unit,
        units_available,
        units_selected,
      } = product;
      return (
        <div
          className="product-detail container"
          key={Math.random() * Date.now()}
        >
          <div className="product-img-container">
            <img alt="algo"></img>
          </div>
          <div className="basic-info-container">
            <div className="basic-info first-row">{name}</div>
            <div className="basic-info second-row">{description}</div>
          </div>
          <div className="buy container">
            <div className="paying-container buy first-row">
              <div className="quantity-container">
                <button
                  className="update-quantity button"
                  onClick={(e) => updateQuantity(e, units_available, units_selected, ID)}
                  value="-"
                >
                  -
                </button>
                <div className="quantity">{units_selected}</div>
                <button
                  className="update-quantity button"
                  onClick={(e) => updateQuantity(e, units_available, units_selected, ID)}
                  value="+"
                >
                  +
                </button>
              </div>
              <div>
                {price_unit}€/{kind_of_unit}
              </div>
            </div>

            <button 
            className="update-order button buy second-row" 
            onClick={(e) => updateOrderReducer(e, ID, name, units_selected, price_unit)}
            >
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      );
    });

    //RETURN THE COMPLETE GROUP
    return (
      <div className="detail-basic-data container" key={Math.random() * Date.now()}>
        <p className="detail-name">{category}</p>

        <div className="category-names">{valuesArr}</div>
      </div>
    );
  });

  return <div>{arrToPrint}</div>;
};

// ProductCard.propTypes = {

// };

export default ProductCards;
