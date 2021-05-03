import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FcClock, FcMoneyTransfer } from "react-icons/fc";

import { getCollection, listFromDb } from '../../services';
import { saveStoreToDetail } from '../../redux/actions/storesActions';

import { storesCatBBDD } from "../../bbddFake/storesCategoriesBBDD";

import "./StoreCard.scss";

const StoreCard = (store) => {

  const storeToPrint = store.store;
  const history = useHistory();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  // const [storeToPrint, setStoreToPrint] = useState([]);
  // const [idsToSearch, setIdsToSearch] = useState([]);
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
    console.log(categories);
    categoriesArr.forEach((idToFind) => {
      const filteredByCat = categories.filter(
        (category) => category.id === idToFind.toString()
      );
      console.log(filteredByCat);
      filteredByCat.forEach((categoryObj) => {
        // console.log(categoryObj);
        categoriesName.push(categoryObj.name);
      });
    });

    setCatNames( categoriesName.join(" "));
  };

  return (
    <div className="storeCard-container">
      <div className="store-img container">
        <img src="assets/img/stores/1.jpg" alt="store-logo" />
      </div>
      <div className="store-basic-data container">
        <p className="store-name">{storeToPrint.name}</p>
        <div className="category-names">{catNames}</div>
      </div>
      <div className="store-other-details container">
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
