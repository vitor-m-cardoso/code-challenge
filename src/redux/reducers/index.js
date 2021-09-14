import { combineReducers } from 'redux';
import wallsReducer from './wallsReducer';
import doorsAndWindowsReducer from './doorsAndWindowsReducer';

const rootReducer = combineReducers({
  wallsReducer,
  doorsAndWindowsReducer,
});

export default rootReducer;
