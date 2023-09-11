import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  data: transactionReducer,
});

export default rootReducer;