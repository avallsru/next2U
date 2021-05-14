import { SET_COORDINATES } from '../types';

const defaultCoords = { lat: 0, lon: 0 }


function coordsReducer(state = defaultCoords, action) {
  switch(action.type) {
    case SET_COORDINATES:  {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default coordsReducer;