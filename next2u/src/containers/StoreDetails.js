import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import StoreBasicInfo from '../Components/ContainerStoreDetails/StoreBasicInfo';
import Selector from '../Components/ContainerStoreDetails/Selector';
import CatsList from '../Components/ContainerStoreDetails/CatsList';
import ProductsList from '../Components/ProductsList/ProductsList';

import './StoreDetail.scss';
import { Order } from '../Components/Order';


const StoreDetails = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  return (
    <div>
      <StoreBasicInfo className="basic-info"/>
      <CatsList list={product_list} className="cats-list"/>
      <div className="products-list">
        <ProductsList  />
      </div>
      <div className="order">
        <Order />
      </div>
      
      {/* <Selector /> */}
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;