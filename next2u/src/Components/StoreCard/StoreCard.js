import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import { FcClock, FcMoneyTransfer } from "react-icons/fc";

import { getCollection, listFromDb } from '../../services';

import "./StoreCard.scss";

const StoreCard = (store) => {
  // //to delete after the storecardlist is implemented
  // const storesSelected = useSelector(
  //   (store) => store.storesReducer.storesNearAddress
  // );
  // const temporalStore = storesSelected[0];
  // ////

  //to change when firebase bbdd where implemented
  // const categories = storesCatBBDD;
  // const idsToSearch = temporalStore.store_categories_id;
  /////
  const [categories, setCategories] = useState([]);
  const [storeToPrint, setStoreToPrint] = useState([]);
  // const [idsToSearch, setIdsToSearch] = useState([]);
  const [catNames, setCatNames] = useState('');
  useEffect(() => {
    
    getStoreList();
  }, []);
  const getStoreList = async() => {
    await getCategories();

    const storeFromPromise = await listFromDb('stores_categories');
    console.log(storeFromPromise);
    setStoreToPrint(storeFromPromise);
  }

  const getCategories = async () => {
    const categoriesFromPromise = await listFromDb('stores_categories');
    setCategories(categoriesFromPromise);

    getCatNames(categories);
  }



  const getCatNames = (categoriesArr) => {
    const categoriesName = [];
    categoriesArr.forEach((idToFind) => {
      const filteredByCat = categories.filter(
        (category) => category.id === idToFind
      );
      filteredByCat.forEach((categoryObj) => {
        categoriesName.push(categoryObj.name);
      });
    });

    setCatNames( categoriesName.join(" "));
  };

  
  
  if (storeToPrint) {
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
              <div className="delivery-price">
                <span>
                  <b>Entrega:</b>
                </span>
                <span>{`${storeToPrint["deliver_price"]}€`}</span>
              </div>
            </div>
            <div className="minimum-order">
              <div className="minimum-order">
                <span>
                  <b>Pedido mín:</b>
                </span>
                <span>{`${storeToPrint["minimum_price_order"]}€`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (<div>Loading...</div>)
  }
  
 
  
// StoreCard.propTypes = {

// };

export default StoreCard;
