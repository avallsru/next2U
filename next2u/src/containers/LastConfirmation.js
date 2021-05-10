import React from 'react';
import { useHistory } from "react-router";
// import PropTypes from 'prop-types';

import {Order} from '../Components/Order';
import DeliveryAddress from '../Components/DeliveryAddress';
import ContactInfo from '../Components/ContactInfo';

import './LastConfirmation.scss';

const LastConfirmation = props => {
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    history.push('store_details');
  }
  return (
    <div>
      <div className="order-container last-confirmation">
        <Order page="last-confirmation"/>
        <div className="button-container">
          <button className="go-back-button" onClick={handleClick}>Volver al pedido</button>
        </div>
      </div>      
      <div className="editing-container">
        <DeliveryAddress />
        <ContactInfo />
      </div>
      
    </div>
  );
};

// LastConfirmation.propTypes = {
  
// };

export default LastConfirmation;