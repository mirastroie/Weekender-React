import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const UserState = {
  users: [],
  profileUser: {},
};

const userReducer = (state = UserState, action: any) => {
  if (action.type === ACTION_TYPES.READ_USERS_SUCCESS) {
    return {...state, users: action.payload};
  } else if (action.type === ACTION_TYPES.LOAD_USER_SUCCESS) {
    return {...state, profileUser: action.payload};
  } else {
    return state;
  }
};
export default userReducer;
