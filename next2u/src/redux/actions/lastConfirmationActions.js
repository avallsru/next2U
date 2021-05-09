import { EDIT_ADDRESS } from '../types';

function changeEditAddressStatus(editingValue) {
  return {type: EDIT_ADDRESS, payload: editingValue}
}

export {
  changeEditAddressStatus
}