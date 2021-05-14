import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";

import {
  updateOrder,
  updateTotalPrice
} from "../../redux/actions/orderActions";
import { setPage, updateOrderActivation } from "../../redux/actions/hocsActions";

import { updateOrderPrice } from "../../logic";

import "./Order.scss";


const Order = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [orderToPrint, setOrderToPrint] = useState([]);
  const [totalPriceToPrint, setTotalPriceToPrint] = useState(0.0);

  const { products, totalPrice } = useSelector((store) => store.orderReducer);
  const { orderActivation, page } = useSelector((store) => store.hocsReducer);
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
    for (const [key, value] of Object.entries(products)) {
      if (key !== keyToDelete) {
        Object.assign(newProductsList, { [key]: value });
      }
    }
    const { orderPrice, updatedList } = updateOrderPrice(newProductsList);
    dispatch(updateTotalPrice(orderPrice));
    dispatch(updateOrder(updatedList));
  };

  const prepareOrder = () => {
    const formatedList = [];

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
          {
            page !== "last_pop_up" ?
                <button
                className="delete-button"
                onClick={(e) => deleteProduct(e, key)}
              >
                <RiDeleteBin5Fill className="delete-icon" />
              </button>
            : <div />
          
          }
        </div>
      );
      formatedList.push(formatedProduct);
    }
    return formatedList;
  };

  const changePage = () => {
    dispatch(updateOrderActivation(true));
    dispatch(setPage("last_confirmation"));
    history.push("/last_confirmation");
  };

  const changePageButton =
    page === "store_details" ? (
      <div className="button-container">
        <button className="pre-confirm-order button" onClick={changePage}>
          Pagar
        </button>
      </div>
    ) : (
      <div />
    );

    const defineClassNames = () => {
      let classNames = "";
      if (page === "store_details" && orderActivation) {
        classNames = "order-container store-details visible";
      } else if(page === "store_details" && !orderActivation) {
        classNames = "order-container store-details hidden";
      }
      else {
        classNames = "order-container";
      }
      
      return classNames;
    }

  return (
    <div
      className={defineClassNames()}
    >
      <div className="title order">Tu pedido</div>
      <div className="products-list">{orderToPrint}</div>
      <div className="total-price">
        <span className="label total-price">TOTAL: </span>
        <b>{totalPriceToPrint}€</b>
      </div>
      {changePageButton}
    </div>
  );
};

export default Order;
