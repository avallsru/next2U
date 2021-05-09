import { 
  EDIT_ADDRESS, 
  EDIT_CONTACT,
  SAVE_CONTACT
} from '../types';

function changeEditAddressStatus(editingValue) {
  return {type: EDIT_ADDRESS, payload: editingValue}
}

function changeEditContactInfo(editingValue) {
  return {type: EDIT_CONTACT, payload: editingValue}
}

function saveContactInfo(contactInfoObj) {
  return {type: SAVE_CONTACT, payload: contactInfoObj}
}
export {
  changeEditAddressStatus,
  changeEditContactInfo,
  saveContactInfo
}