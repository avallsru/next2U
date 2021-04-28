import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import coordsReducer from './coordsReducer';

const reducers = combineReducers({
  addressReducer,
  coordsReducer
})

export default reducers;