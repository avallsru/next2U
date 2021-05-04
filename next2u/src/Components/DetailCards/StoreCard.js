import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FcClock, FcMoneyTransfer } from "react-icons/fc";

import { getCollection, listFromDb } from '../../services';
import { saveStoreToDetail } from '../../redux/actions/storesActions';

import "./StoreCard.scss";

const StoreCard = ({store}) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [catNames, setCatNames] = useState('');
 
  const handleClick = () => {
    dispatch(saveStoreToDetail(store));
    history.push('store_details');
  } 
  
  return (
    <div className="detailsCard-container" onClick={handleClick}>
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      <div className="detail-basic-data container">
        <p className="detail-name">{store.name}</p>
        
        <div className="category-names">{store['store_categories_names']}</div>
      </div>
      <div className="detail-other-info container">
        <div className="opening-hours">
          <FcClock />
          {store["opening_hours"]}
        </div>
        <div className="paying-info">
          <FcMoneyTransfer />
          <div className="delivery-price">
            <span>
              <b>Entrega:</b>
            </span>
            <span>{`${store["deliver_price"]}€`}</span>
          </div>
          <div className="minimum-order">
            <span>
              <b>Pedido mín:</b>
            </span>
            <span>{`${store["minimum_price_order"]}€`}</span>
          </div>
        </div>
      </div>
    </div>
  )
  }
  
 
  
// StoreCard.propTypes = {

// };

export default StoreCard;
