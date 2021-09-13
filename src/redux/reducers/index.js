import { combineReducers } from 'redux';
import wallsReducer from './wallsReducer';

const rootReducer = combineReducers({
  wallsReducer,
});

export default rootReducer;
