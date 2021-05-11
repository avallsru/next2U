import {
  SET_PAGE, 
  UPDATE_CATEGORIES_ACTIVATION,
  UPDATE_ORDER_ACTIVATION
} from '../types';

function setPage(pageName) {
  return { type: SET_PAGE, payload: pageName}
}

function updateCategoriesActivation(state) {
  return { type: UPDATE_CATEGORIES_ACTIVATION, payload: state}
}

function updateOrderActivation(state) {
  return { type: UPDATE_ORDER_ACTIVATION, payload: state }
}

export {
  setPage,
  updateCategoriesActivation,
  updateOrderActivation
}

