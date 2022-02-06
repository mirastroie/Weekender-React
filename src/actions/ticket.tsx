import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {db} from '../components/Firestore/firestore';
import {doc, getDocs, collection, getDoc, where, query, onSnapshot, updateDoc} from 'firebase/firestore';


/**
 * Load a ticket from the database
 *
 * @param {string} ticketId The id of the ticket
 * @return {function}
 */
const readTicket = (ticketId:string) =>
  async (dispatch: any) => {
    const docRef = doc(db, 'tickets', ticketId);
    getDoc(docRef).then((docSnap) => {
      dispatch({
        type: ACTION_TYPES.READ_SUCCESS,
        payload: docSnap.data(),
      });
    });
  };

/**
 * Read all tickets from the database
 *
 *  @return {function}
 */
const bulkReadTickets = () =>
  async (dispatch:any) => {
    const events:any = [];
    const querySnapshot = await getDocs(collection(db, 'tickets'));
    querySnapshot.forEach((doc) => events.push(doc.data()));
    dispatch({
      type: ACTION_TYPES.BULK_READ_SUCCESS,
      payload: events,
    });
  };


/**
 * Read all tickets for a given event
 *
 * @param {string} eventId the id of the event
 * @return {function}
 */
const readTicketsByEvent = (eventId:string) =>
  async (dispatch:any) => {
    const q = query(collection(db, 'tickets'), where('eventId', '==', eventId), where('purchased', '==', false));
    onSnapshot(q, (snapshot:any) => {
      const tickets:any = [];
      snapshot.forEach((doc:any) => {
        tickets.push(doc.data());
      });
      dispatch({
        type: ACTION_TYPES.READ_TICKETS_BY_EVENT,
        payload: {
          tickets,
          eventId,
        },
      });
    });
  };

/**
 * Set a ticket as purchased
 *
 * @param {string} ticketId the id of the ticket
 * @return {function}
 */
const purchaseTicket = (ticketId:string) =>
  async (dispatch: any) => {
    const docRef = doc(db, 'tickets', ticketId);
    await updateDoc(docRef, {
      purchased: true,
    });
    dispatch({
      type: ACTION_TYPES.BOUGHT_TICKET,
      payload: {},
    });
  };

export {
  readTicket,
  bulkReadTickets,
  readTicketsByEvent,
  purchaseTicket,
};
