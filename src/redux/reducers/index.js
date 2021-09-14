import { combineReducers } from 'redux';
import wallsReducer from './wallsReducer';
import doorsAndWindowsReducer from './doorsAndWindowsReducer';
import selectedPaintReducer from './selectedPaintReducer';
import isValidAreaReducer from './isValidAreaReducer';

const rootReducer = combineReducers({
  wallsReducer,
  doorsAndWindowsReducer,
  selectedPaintReducer,
  isValidAreaReducer,
});

export default rootReducer;
