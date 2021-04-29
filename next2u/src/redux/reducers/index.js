import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import coordsReducer from './coordsReducer';
import storesReducer from './storesReducer';

const reducers = combineReducers({
  addressReducer,
  coordsReducer,
   storesReducer
})

export default reducers;