import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import StoreCard from '../StoreCard';

const StoreList = props => {
  const { storesToPrint } = useSelector(store => store.storesReducer);

  const listToPrint = storesToPrint.map(store => {
    return <StoreCard store={store}
    key={Math.random() * Date.now()} />
  })
  return (
    <div>
      {listToPrint}
    </div>
  );
};

// StoreList.propTypes = {
  
// };

export default StoreList;