import { combineReducers } from 'redux';
import friendlistReducer from './friendlist';

const rootReducer = combineReducers({
  friendlist: friendlistReducer,
});

export default rootReducer;
