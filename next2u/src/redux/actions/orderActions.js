import {UPDATE_ORDER} from '../types';

function updateOrder(orderItem) {
  
  return {type: UPDATE_ORDER, payload: orderItem}
}

export {
  updateOrder
}