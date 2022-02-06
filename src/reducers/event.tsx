import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const EventState = {
  events: [],
  event: undefined,
  eventsByUser: {},
  lineup: [],
  isLoading: false,
};

const eventReducer = (state = EventState, action: any) => {
  if (action.type === ACTION_TYPES.BULK_READ_SUCCESS) {
    return {...state, events: action.payload};
  } else if (action.type === ACTION_TYPES.READ_SUCCESS) {
    return {...state, event: action.payload, isLoading: false};
  } else if (action.type === ACTION_TYPES.READ_LINEUP) {
    return {...state, lineup: action.payload};
  } else if (action.type == ACTION_TYPES.LOADING) {
    return {...state, isLoading: true};
  } else if (action.type == ACTION_TYPES.READ_EVENTS_BY_USER) {
    return {...state, eventsByUser: {
      ...state.eventsByUser,
      [`${action.payload.userId}`]: action.payload.events}};
  } else return state;
};
export default eventReducer;
