import { 
  SET_PAGE, 
  UPDATE_CATEGORIES_ACTIVATION,
  UPDATE_ORDER_ACTIVATION
 } from '../types';

const defaultParams = {
  page: '',
  categoriesActivation: false,
  orderActivation: false
}

function hocsReducer(state=defaultParams, action) {
  switch(action.type) {
    case SET_PAGE: {
      return {...state, page: action.payload}
    }
    case UPDATE_CATEGORIES_ACTIVATION: {
      return{...state, categoriesActivation: action.payload}
    }
    case UPDATE_ORDER_ACTIVATION: {
      return{...state, orderActivation: action.payload}
    }
    default: {
      return state;
    }
  }
}

export default hocsReducer;