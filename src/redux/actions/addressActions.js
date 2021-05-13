import { SET_COORDINATES, SAVE_ADDRESS } from '../types';

function setCoordinates(coordinates) {
  return {type: SET_COORDINATES, payload: coordinates}
}

function saveAddress(adress) {
  return { type: SAVE_ADDRESS, payload: adress}
}

export {
  setCoordinates,
  saveAddress
}