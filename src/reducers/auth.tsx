import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const AuthState = {
  authenticated: false,
  userId: undefined,
};

const authReducer = (state = AuthState, action: any) => {
  if (action.type === ACTION_TYPES.SIGN_UP_SUCCESS || action.type === ACTION_TYPES.SIGN_IN_SUCCESS) {
    return {...state, authenticated: true, userId: action.payload.uid};
  } else if (action.type === ACTION_TYPES.SIGN_UP_ERROR || action.type === ACTION_TYPES.SIGN_IN_ERROR) {
    return {...state, authenticated: false, userId: undefined};
  } else {
    return state;
  }
};
export default authReducer;
