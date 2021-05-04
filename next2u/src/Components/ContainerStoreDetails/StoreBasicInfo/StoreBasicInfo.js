import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import './StoreBasicInfo.scss';

const StoreBasicInfo = props => {
  const { deliver_price, location, url, minimum_price_order, name, stores_categories_names } = useSelector(store => store.storesReducer.storeToDetail); 
  
  
  return (
    <>
    <div className="img-container">
      <img src="/assets/img/stores/1.jpg" alt="store logo" />
    </div>
    <div className="info-container">
      <div className="basic-info">
        <p className="store-name title">{name}</p>
        <p className="store-categories">{stores_categories_names}</p>
        <p className="store-location">{location}</p>
      </div>
      <div className="cost-info">
        <div className="delivery-cost"><b>{deliver_price} €</b> Gastos de envío</div>
        <div className="min-order basic-info"><b>{minimum_price_order} €</b> Pedido mín.</div>
      </div>
    </div>
    </>
  );
};

StoreBasicInfo.propTypes = {
  
};

export default StoreBasicInfo;