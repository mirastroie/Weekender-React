import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const EventState = {
  events: [],
  event: undefined,
  lineup: [],
};

const eventReducer = (state = EventState, action: any) => {
  if (action.type === ACTION_TYPES.BULK_READ_SUCCESS) {
    return {...state, events: action.payload};
  } else if (action.type === ACTION_TYPES.READ_SUCCESS) {
    return {...state, event: action.payload};
  } else if (action.type === ACTION_TYPES.READ_LINEUP) {
    return {...state, lineup: action.payload};
  } else return state;
};
export default eventReducer;
