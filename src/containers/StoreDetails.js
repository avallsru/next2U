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
  debugger;
  const topRef = React.createRef();


  return (
    <div >
      <Navbar />
      <div className="reference-top store-detail container" >
        <div className="basic-info store-detail-page">
        <StoreBasicInfo />  
        </div>
            
        <div className="products-list-container">
          <ProductsList  />
        </div>
      </div>
      <div className="go-top button container">
        <img src="./assets/img/logo_background_green.png" alt="our logo" />
      </div>
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;