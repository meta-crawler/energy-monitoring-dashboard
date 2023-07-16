import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import alarmReducer from './slices/alarm';
import systemReducer from './slices/system';
import stringReducer from './slices/string';
import moduleReducer from './slices/module';
import historyReducer from './slices/history';
import exportReducer from './slices/export';
import dashboardReducer from './slices/dashboard';

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  alarm: alarmReducer,
  system: systemReducer,
  string: stringReducer,
  module: moduleReducer,
  export: exportReducer,
  history: historyReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
