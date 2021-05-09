import {UPDATE_ORDER, UPDATE_TOTAL_PRICE} from '../types';

const defaultOrder = {
  storeKey: 0,
  products: {},
      // id1: {
      //   name,
      //   price
      // },
      // id2: {
      //   name,
      //   price
      // }
    totalPrice: 0
}


function orderReducer(state= defaultOrder, action) {
  switch(action.type) {
    case UPDATE_ORDER:{
      return {...state, products:{...action.payload}}
    }
    case UPDATE_TOTAL_PRICE: {
      return{...state, totalPrice: action.payload}
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;