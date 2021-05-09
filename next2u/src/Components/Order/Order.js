import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from 'react-icons/ri';

import "./Order.scss";
import { updateOrder, updateTotalPrice } from "../../redux/actions/orderActions";

import {updateOrderPrice} from '../../logic';
import { useHistory } from "react-router";

const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [orderToPrint, setOrderToPrint] = useState([]);
  const [totalPriceToPrint, setTotalPriceToPrint] = useState(0.0);
  // debugger;
  const { products, totalPrice } = useSelector((store) => store.orderReducer);

  useEffect(() => {
    setTotalPriceToPrint(totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    const formatedProduct = prepareOrder();
    setOrderToPrint(formatedProduct);
  }, [products]);

  const deleteProduct = (e, keyToDelete) => {
    e.preventDefault();
    const newProductsList = {};
    for(const [key, value] of Object.entries(products)) {
      debugger;
      if (key !== keyToDelete) {
        Object.assign(newProductsList, {key: value});
      }
    }
    const {orderPrice, updatedList} = updateOrderPrice(newProductsList);
    dispatch(updateTotalPrice(orderPrice));
    dispatch(updateOrder(updatedList));
  }

  const prepareOrder = () => {
    const formatedList = [];
    debugger;
    for (let key in products) {
      const formatedProduct = (
        <div className="product-ordered" key={Math.random() * Date.now()}>
          <div className="product-basic-information">
            <div className="product-name">{products[key].name}</div>
            <div className="units-selected">
              ({products[key].unitsSelected})
            </div>
          </div>
          <div className="product-price">{products[key].totalPrice}€</div>
          <button className="delete-button" onClick={(e) => deleteProduct(e, key)}><RiDeleteBin5Fill  className="delete-icon"/></button>
        </div>
      );
      formatedList.push(formatedProduct);
    }
    return formatedList;
  };
  
  const changePage = () => {
    history.push("/last_confirmation");
  }
  

  return (
    <div className="order-container">
      <div className="title order">Tu pedido</div>
      <div className="products-list">{orderToPrint}</div>
      <div className="total-price">
        <span className="label total-price">TOTAL: </span>
        {totalPriceToPrint}€
      </div>
      <div className="button-container">
        <button className="pre-confirm-order button" onClick={changePage}>Pagar</button>
      </div>
    </div>
  );
};

export default Order;
