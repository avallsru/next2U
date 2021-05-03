import React from 'react';

import StoreInfo from '../Components/ContainerStoreDetails/StoreInfo';
import Menu from '../Components/ContainerStoreDetails/Menu';

const withSelector = (Component, kind) => {
  console.log(Component)
  return () => {
    <div>hello</div>
    // kind === 'menu' ? <Menu /> : <StoreInfo />
  }
};

export default withSelector;