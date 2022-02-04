import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const AuthState = {
  authenticated: false,
  userId: undefined,
  error: undefined,
};

const authReducer = (state = AuthState, action: any) => {
  if (action.type === ACTION_TYPES.SIGN_UP_SUCCESS || action.type === ACTION_TYPES.SIGN_IN_SUCCESS) {
    return {...state, authenticated: true, userId: action.payload.uid, error: undefined};
  } else if (action.type === ACTION_TYPES.SIGN_UP_ERROR || action.type === ACTION_TYPES.SIGN_IN_ERROR) {
    return {...state, authenticated: false, userId: undefined, error: action.payload};
  } else if (action.type === ACTION_TYPES.SIGN_OUT_SUCCESS) {
    return {...state, authenticated: false, userId: undefined, error: undefined};
  } else {
    return state;
  }
};
export default authReducer;
