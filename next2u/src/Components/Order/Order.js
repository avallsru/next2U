import React, { useEffect, useState } from 'react';

import './Order.scss'

const Order = () => {
  const order = useState(store => store.orderReducer);
  
  useEffect(() => {
    console.log(order)
  }, [order])
  return (
    <div>
      
    </div>
  );
};

export default Order;