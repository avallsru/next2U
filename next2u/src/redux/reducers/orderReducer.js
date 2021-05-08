import {UPDATE_ORDER} from '../types';

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
    default: {
      return state;
    }
  }
}

export default orderReducer;