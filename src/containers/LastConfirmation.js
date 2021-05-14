import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux'
// import PropTypes from 'prop-types';

import { setPage, updateOrderActivation } from '../redux/actions/hocsActions';

import Navbar from '../Components/Navbar';
import {Order} from '../Components/Order';
import DeliveryAddress from '../Components/DeliveryAddress';
import ContactInfo from '../Components/ContactInfo';
import FinalPopup from '../Components/FinalPopUp';

import './LastConfirmation.scss';

const LastConfirmation = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = e => {
    e.preventDefault();
    dispatch(setPage("store_details"));
    dispatch(updateOrderActivation(false));
    history.push('store_details');
  }

  const throwLastPopUp = (e) => {
    e.preventDefault();
    dispatch(setPage("last_pop_up"));
  }

  return (
    <>
      <Navbar />
      <div className="last-confirmation page container">
        <div className="order-container last-confirmation">
          <Order page="last-confirmation"/>
          <div className="button-container">
            <button className="go-back-button" onClick={handleClick}>Volver a la tienda</button>
          </div>
        </div>      
        <div className="editing-container">
          <DeliveryAddress test="example"/>
          <ContactInfo />
        </div>
        <div className="last-button container">
          <button className="last-button button" onClick={throwLastPopUp}>Confirmar pedido</button>
        </div>
      </div>
      <FinalPopup />
    </>
  );
};

// LastConfirmation.propTypes = {
  
// };

export default LastConfirmation;