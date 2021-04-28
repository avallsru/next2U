import { SAVE_ADDRESS } from '../types';

const defaultAddress = '';


function addressReducer(state = defaultAddress, action) {
  switch(action.type) {
    case SAVE_ADDRESS:   {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default addressReducer;