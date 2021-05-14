import React from 'react';

import { HiShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderActivation } from '../../../redux/actions/hocsActions';

import {Order} from '../../Order';
import ItemsOrdered from '../ItemsOrdered/ItemsOrdered';

import './OrderButton.scss';

const OrderButton = () => {
  const dispatch = useDispatch();
  const {orderActivation, page} = useSelector(store => store.hocsReducer);

  const handleClick = () => {
    dispatch(updateOrderActivation(!orderActivation));
  }

  return (
    <div>
      {page === "store_details" ? 
        <div className="order navbar container">
          <button className="order-option button" onClick={handleClick}>
            <HiShoppingCart className="shopping-cart navbar icon"/> 
            <ItemsOrdered />
          </button>
          
        </div>
      : <div />}
      <Order />
      {/* { orderActivation ? <Order /> : <div />} */}
    </div>
      
  );
};

export default OrderButton;