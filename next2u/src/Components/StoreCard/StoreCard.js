import React from 'react';
// import PropTypes from 'prop-types';


import { useSelector } from "react-redux";

import { storesCatBBDD } from '../../bbddFake/storesCategoriesBBDD';

const StoreCard = store => {

  //to delete after the storecardlist is implemented
  const storesSelected = useSelector((store) => store.storesReducer.storesNearAddress);
  const temporalStore = storesSelected[0]
  ////

  //to change when firebase bbdd where implemented
  const categories = storesCatBBDD;
  const idsToSearch = temporalStore.store_categories_id;
  /////

  const getCatNames = (categoriesArr) => {
    const categoriesName = []
    categoriesArr.forEach(idToFind => {
      const filteredByCat = categories.filter(category => category.id === idToFind)
      filteredByCat.forEach(categoryObj => {
        categoriesName.push(categoryObj.name);
      })
    })

    return categoriesName.join(' ')

  }
  return (
    <div className="storeCard-container">
      <div className="img-container">
        <img src="assets/img/stores/1.jpg" alt="store-logo"/>
      </div>
      <div className="store-basic-data">
        <p className="store-name">{temporalStore.name}</p>
        <div className="category-names">
          {getCatNames(idsToSearch)}
        </div>
      </div>
      <div className="store-other-details">
        <div className="opening-hours">
          {temporalStore['opening_hours']}
        </div>
        <div className="delivery-price">
          {`Delivery price: ${temporalStore["deliver_price"]}€`}
        </div>
        <div className="minimum-order">
          {`Min. order: ${temporalStore["minimum_price_order"]}€`}
        </div>
      </div>
    </div>
  );
};

// StoreCard.propTypes = {
  
// };

export default StoreCard;