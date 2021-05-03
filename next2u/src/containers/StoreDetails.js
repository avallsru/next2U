import React from 'react';
// import PropTypes from 'prop-types';

import StoreBasicInfo from '../Components/ContainerStoreDetails/StoreBasicInfo';
import Selector from '../Components/ContainerStoreDetails/Selector';



const StoreDetails = props => {
  
  return (
    <div>
      <StoreBasicInfo />
      <Selector />
    </div>
  );
};

// StoreDetails.propTypes = {
  
// };

export default StoreDetails;