import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import coordsReducer from './coordsReducer';
import storesReducer from './storesReducer';
import orderReducer from './orderReducer';
import lastConfirmationReducer from './lastConfirmationReducer';
import hocsReducer from './hocsReducer';

const reducers = combineReducers({
  addressReducer,
  coordsReducer,
  storesReducer,
  orderReducer,
  lastConfirmationReducer,
  hocsReducer
})

export default reducers;