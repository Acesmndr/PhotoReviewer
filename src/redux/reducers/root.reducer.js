import { combineReducers } from 'redux';
import approverReducer from './approver.reducer';

const rootReducer = combineReducers({
  approver: approverReducer,
});

export default rootReducer;
