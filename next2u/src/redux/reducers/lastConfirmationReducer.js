import {
  EDIT_ADDRESS
} from '../types';

const defaultEdition = {
  editAddress: false,
  editContactInfo: false
}

function lastConfirmationReducer(state=defaultEdition, action) {
  switch(action.type) {
    case EDIT_ADDRESS: {
      return{...state, editAddress: action.payload}
    }
    default: {
      return state;
    }
  }
}

export default lastConfirmationReducer;