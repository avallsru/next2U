import {ADD_PRODUCT} from '../types';

const defaultOrder = {
  storeKey: {
    productId: {
      name: '',
      quantity: 0,
      productPrice: 0,
    },
    totalPrice: 0
  }
}

function updateOrder(state= defaultOrder, action) {
  const { orderItem, newTotalPrice } = action.payload;
  switch(action.type) {
    case ADD_PRODUCT:{
      return(storeKey: orderItem, newTotalPrice: newTotalPrice)
    }
  }
}