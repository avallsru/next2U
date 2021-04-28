import { SET_COORDINATES } from '../types';

function setCoordinates(coordinates) {
  return {type: SET_COORDINATES, payload: coordinates}
}

export {
  SET_COORDINATES,
  setCoordinates
}