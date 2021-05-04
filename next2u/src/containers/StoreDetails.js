import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import StoreBasicInfo from '../Components/ContainerStoreDetails/StoreBasicInfo';
import Selector from '../Components/ContainerStoreDetails/Selector';
import { ProductCard } from '../Components/DetailCards';
import CatsList from '../Components/ContainerStoreDetails/CatsList';


const StoreDetails = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  return (
    <div>
      <StoreBasicInfo />
      <ProductCard  />
      <CatsList list={product_list}/>
      {/* <Selector /> */}
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;