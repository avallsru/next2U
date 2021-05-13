import {
  SET_PAGE, 
  UPDATE_CATEGORIES_ACTIVATION,
  UPDATE_ORDER_ACTIVATION,
  SIMPLE_CATEGORIES_LIST
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

function prepareSimpleList(state) {
  return { type: SIMPLE_CATEGORIES_LIST, payload: state};
}

export {
  setPage,
  updateCategoriesActivation,
  updateOrderActivation,
  prepareSimpleList
}

