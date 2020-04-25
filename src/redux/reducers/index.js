import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { salesReducer } from './salesReducer';

export const Reducers = combineReducers({
  usersState: usersReducer,
  salesState: salesReducer
});
