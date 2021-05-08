import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import StoreBasicInfo from '../Components/ContainerStoreDetails/StoreBasicInfo';
import Selector from '../Components/ContainerStoreDetails/Selector';
import { ProductCard } from '../Components/DetailCards';
import CatsList from '../Components/ContainerStoreDetails/CatsList';
import ProductsList from '../Components/ProductsList/ProductsList';

import './StoreDetail.scss';


const StoreDetails = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  return (
    <div>
      <StoreBasicInfo className="basic-info"/>
      <CatsList list={product_list} className="cats-list"/>
      <div className="products-list">
        <ProductsList  />
      </div>
      
      {/* <Selector /> */}
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;