import { STORES_TO_PRINT, STORES_SELECTED } from '../types';

const defaultList = [];

function storesReducer(state = defaultList, action) {
  switch(action.type) {
    case STORES_TO_PRINT:
    case STORES_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default storesReducer;