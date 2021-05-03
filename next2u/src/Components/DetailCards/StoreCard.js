import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FcClock, FcMoneyTransfer } from "react-icons/fc";

import { getCollection, listFromDb } from '../../services';
import { saveStoreToDetail } from '../../redux/actions/storesActions';

import "./StoreCard.scss";

const StoreCard = (store) => {

  const storeToPrint = store.store;
  const history = useHistory();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [catNames, setCatNames] = useState('');
 
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const categoriesFromPromise = await listFromDb('stores_categories');
    setCategories(categoriesFromPromise);

    getCatNames(storeToPrint['store_categories_id']);
  }

  const getCatNames = (categoriesArr) => {
    const categoriesName = [];
    categoriesArr.forEach((idToFind) => {
      const filteredByCat = categories.filter(
        (category) => (parseInt(category.id) + 1) === idToFind
      );
      filteredByCat.forEach((categoryObj) => {
        categoriesName.push(categoryObj.name);
      });
    });

    setCatNames( categoriesName.join(" "));
  };

  const handleClick = () => {
    dispatch(saveStoreToDetail(storeToPrint));
    history.push('store_details');
  } 
  
  return (
    <div className="detailsCard-container" onClick={handleClick}>
      <div className="detail-img container">
        <img src="assets/img/stores/1.jpg" alt="detail-img" />
      </div>
      <div className="detail-basic-data container">
        <p className="detail-name">{storeToPrint.name}</p>
        
        <div className="category-names">{catNames}</div>
      </div>
      <div className="detail-other-info container">
        <div className="opening-hours">
          <FcClock />
          {storeToPrint["opening_hours"]}
        </div>
        <div className="paying-info">
          <FcMoneyTransfer />
          <div className="delivery-price">
            <span>
              <b>Entrega:</b>
            </span>
            <span>{`${storeToPrint["deliver_price"]}€`}</span>
          </div>
          <div className="minimum-order">
            <span>
              <b>Pedido mín:</b>
            </span>
            <span>{`${storeToPrint["minimum_price_order"]}€`}</span>
          </div>
        </div>
      </div>
    </div>
  )
  }
  
 
  
// StoreCard.propTypes = {

// };

export default StoreCard;
