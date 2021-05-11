import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import StoreBasicInfo from '../Components/ContainerStoreDetails/StoreBasicInfo';
import CatsList from '../Components/ContainerStoreDetails/CatsList';
import ProductsList from '../Components/ProductsList/ProductsList';

import { Order } from '../Components/Order';
import Navbar from '../Components/Navbar/Navbar';

import './StoreDetail.scss';

const StoreDetails = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  return (
    <div>
      <Navbar />
      <div className="store-detail container">
        <StoreBasicInfo className="basic-info"/>      
        <div className="products-list-container">
          <ProductsList  />
        </div>
      </div>
      
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;