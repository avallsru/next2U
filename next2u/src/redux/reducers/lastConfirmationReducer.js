import {
  EDIT_ADDRESS,
  EDIT_CONTACT,
  SAVE_CONTACT
} from '../types';

const defaultEdition = {
  editAddress: false,
  editContactInfo: false,
  contactInfo: {
    name: '',
    phone: '',
    email: ''
  }
}

function lastConfirmationReducer(state=defaultEdition, action) {
  switch(action.type) {
    case EDIT_ADDRESS: {
      return{...state, editAddress: action.payload}
    }
    case EDIT_CONTACT: {
      return{...state, editContactInfo: action.payload}
    }
    case SAVE_CONTACT: {
      return{...state, contactInfo: {...action.payload}}
    }
    default: {
      return state;
    }
  }
}

export default lastConfirmationReducer;