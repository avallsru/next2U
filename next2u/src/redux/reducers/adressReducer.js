import { SET_COORDINATES } from '../types';

const defaultCoords = {lat: 41.0003, lon: 24.0005};


function adressReducer(state = defaultCoords, action) {
  switch(action.type) {
    case SET_COORDINATES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default adressReducer;