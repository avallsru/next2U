import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import coordsReducer from './coordsReducer';
import storesReducer from './storesReducer';
import orderReducer from './orderReducer';
import lastConfirmationReducer from './lastConfirmationReducer';

const reducers = combineReducers({
  addressReducer,
  coordsReducer,
  storesReducer,
  orderReducer,
  lastConfirmationReducer
})

export default reducers;