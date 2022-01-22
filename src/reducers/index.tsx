import {combineReducers} from 'redux';
import authReducer from './auth';
import userReducer from './user';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
  firebaseReducer,
  authReducer,
  userReducer,
});
