import {ACTION_TYPES} from '../utils/constants/actionTypes';

export const TicketState = {
  tickets: [],
  ticket: undefined,
  eventId: undefined,
};

const ticketReducer = (state = TicketState, action: any) => {
  if (action.type === ACTION_TYPES.BULK_READ_SUCCESS) {
    return {...state, tickets: action.payload};
  } else if (action.type === ACTION_TYPES.READ_SUCCESS) {
    return {...state, ticket: action.payload};
  } else if (action.type == ACTION_TYPES.READ_TICKETS_BY_EVENT) {
    return {...state, tickets: action.payload.tickets, eventId: action.payload.eventId};
  } else return state;
};
export default ticketReducer;
