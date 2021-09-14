import { combineReducers } from 'redux';
import wallsReducer from './wallsReducer';
import doorsAndWindowsReducer from './doorsAndWindowsReducer';
import selectedPaintReducer from './selectedPaintReducer';

const rootReducer = combineReducers({
  wallsReducer,
  doorsAndWindowsReducer,
  selectedPaintReducer,
});

export default rootReducer;
