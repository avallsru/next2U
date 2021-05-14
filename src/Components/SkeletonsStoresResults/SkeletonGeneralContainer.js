import React from 'react';
import SkeletonSearchInput from './SkeletonSearchInput';
import SkeletonStoresCard from './SkeletonStoresCard';

import SkeletonStoresCats from './SkeletonStoresCats';

import './SkeletonGeneralContainer.scss';

const SkeletonGeneralContainer = () => {
  return (
    <div className="test">
      <SkeletonStoresCats />
      <SkeletonSearchInput />
      <SkeletonStoresCard />
    </div>
  );
};

export default SkeletonGeneralContainer;