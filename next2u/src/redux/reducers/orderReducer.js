import {ADD_PRODUCT} from '../types';

const defaultOrder = {
  storeKey: {
    products: {
      // name: '',
      // quantity: 0,
      // productPrice: 0,
    },
    totalPrice: 0
  }
}

function orderReducer(state= defaultOrder, action) {
  // const { orderItem, newTotalPrice } = action.payload;
  const orderItem = action.payload;
  switch(action.type) {
    case ADD_PRODUCT:{

      return(action.payload);
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;