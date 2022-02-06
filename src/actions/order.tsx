import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {db} from '../components/Firestore/firestore';
import {addDoc, collection, where, query, onSnapshot, updateDoc} from 'firebase/firestore';
import {purchaseTicket} from './ticket';

/**
 * Add order to the the database
 *
 * @param {any} cartItems The items in the cart
 * @param {event} event the event for which we place the order
 * @param {userId} userId the id of the user
 * @return {Promise}
 */
const addOrder = (cartItems:any, event:any, userId:string) =>
  async (dispatch: any) => {
    const commitedOrder:any = {
      customerId: userId,
      eventId: event.eventId,
      price: event.ticketPrice,
      tickets: cartItems.map((ticket:any) => ticket.ticketId),
    };
    const docRef:any = await addDoc(collection(db, 'orders'), commitedOrder);
    const orderId = docRef.id;
    await updateDoc(docRef, {
      orderId: orderId,
    });
    const promises:any = cartItems.map((ticket:any) => {
      dispatch(purchaseTicket(ticket.ticketId));
    });
    Promise.all(promises).then(() =>
      dispatch({
        type: ACTION_TYPES.ORDER_SUCCESS,
        payload: {},
      }));
  };

/**
 * Add ticket to basket
 *
 * @param {object} ticket the ticket object
 * @return {object}
 */
const addToBasket = (ticket:object) => ({
  type: ACTION_TYPES.ADD_ITEM,
  payload: ticket,
});

/**
 * Remove ticket from basket
 *
 * @param {string} ticketId the id of ticket
 * @return {object}
 */
const removeFromBasket = (ticketId:string) => ({
  type: ACTION_TYPES.REMOVE_ITEM,
  payload: ticketId,
});

/**
 * Empty basket
 *
 * @return {object}
 */
const emptyBasket = () => ({
  type: ACTION_TYPES.EMPTY_BASKET,
  payload: {},
});

/**
 * Read orders by user
 *
 * @param {string} userId the id of the user
 * @return {Promise}
 */
const readOrdersByUser = (userId:string) =>
  async (dispatch:any) => {
    const q = query(collection(db, 'orders'), where('userId', '==', userId));
    onSnapshot(q, (snapshot:any) => {
      const orders:any = [];
      snapshot.forEach((doc:any) => {
        orders.push(doc.data());
      });
      dispatch({
        type: ACTION_TYPES.READ_ORDERS_BY_USER,
        payload: orders,
      });
    });
  };

export {
  addOrder,
  readOrdersByUser,
  addToBasket,
  emptyBasket,
  removeFromBasket,
};