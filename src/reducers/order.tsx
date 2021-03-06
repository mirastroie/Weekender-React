import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {ORDER_STATUS} from '../utils/constants/general';
import {TicketType} from '../utils/constants/types';

export const OrderState = {
  basket: [],
  orders: [],
  status: ORDER_STATUS.INITIAL,
};

const orderReducer = (state = OrderState, action: any) => {
  if (action.type === ACTION_TYPES.READ_ORDERS_BY_USER) {
    return {...state, orders: action.payload};
  } else if (action.type == ACTION_TYPES.ADD_ITEM) {
    return {...state, basket: [...state.basket, action.payload]};
  } else if (action.type == ACTION_TYPES.ORDER_SUCCESS) {
    return {...state, status: ORDER_STATUS.SUCCESS};
  } else if (action.type == ACTION_TYPES.EMPTY_BASKET) {
    return {...state, basket: [], status: ORDER_STATUS.INITIAL};
  } else if (action.type == ACTION_TYPES.REMOVE_ITEM) {
    return {...state, basket: state.basket.filter((item:TicketType) => item.ticketId != action.payload)};
  } else return state;
};
export default orderReducer;
