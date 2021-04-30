import { STORES_TO_PRINT, STORES_SELECTED } from '../types';

const defaultList = {
  storesNearAddress: [],
  storesToPrint: []
}

function storesReducer(state = defaultList, action) {
  switch(action.type) {
    case STORES_SELECTED: {
      return { ...state, storesNearAddress: action.payload}
    }
    case STORES_TO_PRINT: {
      return {...state, storesToPrint: action.payload}
    }
    default: {
      return state;
    }
  }
}

export default storesReducer;