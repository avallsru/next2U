import {UPDATE_ORDER, UPDATE_TOTAL_PRICE} from '../types';

function updateOrder(orderItem) {
  return {type: UPDATE_ORDER, payload: orderItem}
}

function updateTotalPrice(price) {
  return{type: UPDATE_TOTAL_PRICE, payload: price}
}

export {
  updateOrder,
  updateTotalPrice
}