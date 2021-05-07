import {ADD_PRODUCT} from '../types';

function addProduct(orderItem) {
  return {type: ADD_PRODUCT, payload: orderItem}
}

export {
  addProduct
}