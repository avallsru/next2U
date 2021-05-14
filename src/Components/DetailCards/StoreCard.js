import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FcClock, FcMoneyTransfer } from "react-icons/fc";

import { getCollection, listFromDb } from '../../services';
import { saveStoreToDetail } from '../../redux/actions/storesActions';
import { setPage } from "../../redux/actions/hocsActions";

import "./StoreCard.scss";

const StoreCard = ({store}) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [catNames, setCatNames] = useState('');
 
  const handleClick = () => {
    dispatch(saveStoreToDetail(store));
    dispatch(setPage('store_details'));
    history.push('store_details');
  } 
  
  
  
  return (
    <div className="detailsCard-container" onClick={handleClick}>
      <div className="detail img container">
        <img src={`assets/img/stores/${store.ID}.jpg`} alt="detail-img" className="logo-store" />
      </div>
      <div className="detail basic-data container">
        <div className="detail-name">{store.name}</div>
        
        <div className="category-names">{store['store_categories_names']}</div>
      </div>
      <div className="detail other-info container">
        <div className="opening-hours">
          <FcClock />
          <div className="opening-hours detail">
           {store["opening_hours"]}
          </div>
        </div>
        <div className="paying-info">
          <FcMoneyTransfer className="money-icon"/>
          
            <div className="delivery first-column">
              Entrega:
            </div>
            <div className="delivery second-column">{`${store["deliver_price"]}€`}</div>
          
          
            <div className="min first-column">
              Pedido mín:
            </div>
            <div className="min second-column">{`${store["minimum_price_order"]}€`}</div>
          </div>
        
      </div>
    </div>
  )
  }
  
 
  
// StoreCard.propTypes = {

// };

export default StoreCard;
