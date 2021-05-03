import { useSelector } from 'react-redux';
import React from 'react';
// import PropTypes from 'prop-types';

import './StoreBasicInfo.scss';

const StoreBasicInfo = props => {
  const { deliver_price, location, url, minimum_price_order, name, opening_hours, phone_contact } = useSelector(store => store.storesReducer.storeToDetail); 
  return (
    <div>
      <div className="basic-info">
        <p className="store-name title">{name}</p>
        <p className="store-location">{location}</p>
      </div>
      <div className="cost-info">
        <div className="delivery-cost"><b>{deliver_price} €</b> gastos de envío</div>
        <div className="min-order"><b>{minimum_price_order} €</b> pedido mín.</div>
      </div>
    </div>
  );
};

StoreBasicInfo.propTypes = {
  
};

export default StoreBasicInfo;