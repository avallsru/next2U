import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './ItemsOrdered.scss';

const ItemsOrdered = () => {
  const { products } = useSelector(store => store.orderReducer);
  const [changing, setChanging] = useState(false);

  const keysArr = Object.keys(products);
  const ref = React.createRef();
  

  useEffect(() => {
    if(keysArr.length !== 0) {
      handleChange();
    }
      
  }, [products]);

  const handleChange = () => {
    ref.current.classList.remove(`${changing}`);
    ref.current.classList.add(`${!changing}`);
    setChanging(!changing);
  }

  return (
    <div 
      className="order navbar number-items"
      ref={ref}
    >
      {keysArr.length}
    </div>
  );
};

export default ItemsOrdered;