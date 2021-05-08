import {ADD_PRODUCT} from '../types';

const defaultOrder = {
  storeKey: 0,
  products: {
      // id1: {
      //   name,
      //   price
      // },
      // id2: {
      //   name,
      //   price
      // }
  },
    totalPrice: 0
}


function orderReducer(state= defaultOrder, action) {
  // const { orderItem, newTotalPrice } = action.payload;
  // const {orderItem} = action.payload;
  switch(action.type) {
    case ADD_PRODUCT:{
      debugger;
      // const objectWithoutKey = (object, key) => {
      //   const {[key]: deletedKey, ...otherKeys} = object;
      //   return otherKeys;
      // }
      // const objectToUpdate = action.payload;
      const indexToFind = Object.keys(action.payload)[0];
      
      console.log(indexToFind);
      const findIfProductExists = state.products.hasOwnProperty(indexToFind);
      
      if(findIfProductExists === true) {
        for (let key in state.products) {
          if(key === indexToFind) {
            state.products[indexToFind] = Object.values(action.payload);
          }
        }

        return {
          ...state, 
          products:{
            ...state.products, 
            [state.products[indexToFind]]:action.payload}}
      }
      return {...state, products:{...state.products, ...action.payload}};
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;