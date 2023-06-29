import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices

import systemReducer from './slices/system';
import stringReducer from './slices/string';
import moduleReducer from './slices/module';

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  system: systemReducer,
  string: stringReducer,
  module: moduleReducer,
});

export default rootReducer;