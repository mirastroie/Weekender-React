import {combineReducers} from 'redux';
import authReducer from './auth';
import userReducer from './user';
import eventReducer from './event';
import ticketReducer from './ticket';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
  firebaseReducer,
  authReducer,
  userReducer,
  eventReducer,
  ticketReducer,
});
