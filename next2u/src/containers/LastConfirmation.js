import React from 'react';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux'
// import PropTypes from 'prop-types';

import Navbar from '../Components/Navbar';
import {Order} from '../Components/Order';
import DeliveryAddress from '../Components/DeliveryAddress';
import ContactInfo from '../Components/ContactInfo';

import './LastConfirmation.scss';import { setPage } from '../redux/actions/hocsActions';
;

const LastConfirmation = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(setPage("store_details"));
    history.push('store_details');
  }
  return (
    <>
      <Navbar />
      <div className="last-confirmation page container">
        <div className="order-container last-confirmation">
          <Order page="last-confirmation"/>
          <div className="button-container">
            <button className="go-back-button" onClick={handleClick}>Volver al pedido</button>
          </div>
        </div>      
        <div className="editing-container">
          <DeliveryAddress test="example"/>
          <ContactInfo />
        </div>
        <div className="last-button container">
          <button className="last-button button">Confirmar pedido</button>
        </div>
      </div>
    </>
  );
};

// LastConfirmation.propTypes = {
  
// };

export default LastConfirmation;