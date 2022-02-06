import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {ORDER_STATUS} from '../utils/constants/general';

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
    return {...state, basket: [], status: ORDER_STATUS.INITIAL};
  } else if (action.type == ACTION_TYPES.CHECKOUT_ORDER) {
    return {...state, status: ORDER_STATUS.PENDING};
  } else if (action.type == ACTION_TYPES.REMOVE_ITEM) {
    return {...state, basket: state.basket.filter((item:any) => item.ticketId != action.payload)};
  } else return state;
};
export default orderReducer;
