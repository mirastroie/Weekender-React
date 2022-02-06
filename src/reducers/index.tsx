import {combineReducers} from 'redux';
import authReducer from './auth';
import userReducer from './user';
import eventReducer from './event';
import ticketReducer from './ticket';
import orderReducer from './order';

export default combineReducers({
  authReducer,
  userReducer,
  eventReducer,
  ticketReducer,
  orderReducer,
});
