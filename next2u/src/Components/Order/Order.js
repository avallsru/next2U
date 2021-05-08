import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Order.scss'

const Order = () => {
  const [orderToPrint, setOrderToPrint] = useState([]);
  // debugger;
  const {products} = useSelector(store => store.orderReducer);
  
  const prepareOrder = () => {
    for(let productToPrint in products) {
      const formatedProduct = 
        <div className="product-ordered">
          <div className="product-name">{productToPrint.name}</div>
        </div>
    }
  }
  
  // useEffect(() => {
  //   console.log(order)
  // }, [order])
  return (
    <div>
      
    </div>
  );
};

export default Order;