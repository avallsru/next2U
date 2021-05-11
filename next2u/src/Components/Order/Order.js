import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "./Order.scss";
import {
  updateOrder,
  updateTotalPrice,
} from "../../redux/actions/orderActions";

import { updateOrderPrice } from "../../logic";
import { setPage } from "../../redux/actions/hocsActions";

const Order = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [orderToPrint, setOrderToPrint] = useState([]);
  const [totalPriceToPrint, setTotalPriceToPrint] = useState(0.0);

  const { products, totalPrice } = useSelector((store) => store.orderReducer);
  const { orderActivation } = useSelector((store) => store.hocsReducer);
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
        Object.assign(newProductsList, { key: value });
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
          <button
            className="delete-button"
            onClick={(e) => deleteProduct(e, key)}
          >
            <RiDeleteBin5Fill className="delete-icon" />
          </button>
        </div>
      );
      formatedList.push(formatedProduct);
    }
    return formatedList;
  };

  const changePage = () => {
    dispatch(setPage("last_confirmation"));
    history.push("/last_confirmation");
  };

  const changePageButton =
    props.page === "store-details" ? (
      <div className="button-container">
        <button className="pre-confirm-order button" onClick={changePage}>
          Pagar
        </button>
      </div>
    ) : (
      <div />
    );

  return (
    <div
      className={
        orderActivation ? "order-container visible" : "order-container hidden"
      }
    >
      <div className="title order">Tu pedido</div>
      <div className="products-list">{orderToPrint}</div>
      <div className="total-price">
        <span className="label total-price">TOTAL: </span>
        {totalPriceToPrint}€
      </div>
      {changePageButton}
    </div>
  );
};

export default Order;
