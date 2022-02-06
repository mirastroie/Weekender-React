import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {db} from '../components/Firestore/firestore';
import {doc, getDocs, collection, getDoc, where, query} from 'firebase/firestore';

/**
 * Load an event from the database
 *
 * @param {string} eventId The id of the event
 * @return {function}
 */
const readEvent = (eventId:string) =>
  async (dispatch: any) => {
    dispatch({
      type: ACTION_TYPES.LOADING,
      payload: {},
    });
    const docRef = doc(db, 'events', eventId);
    getDoc(docRef).then((docSnap) => {
      dispatch({
        type: ACTION_TYPES.READ_SUCCESS,
        payload: docSnap.data(),
      });
    });
  };

/**
 * Read all events from the database
 *
 *  @return {function}
 */
const bulkReadEvents = () =>
  async (dispatch:any) => {
    const events:any = [];
    const querySnapshot = await getDocs(collection(db, 'events'));
    querySnapshot.forEach((doc) => events.push(doc.data()));
    dispatch({
      type: ACTION_TYPES.BULK_READ_SUCCESS,
      payload: events,
    });
  };

/**
 * Read the lineup (artists) by given ids
 *
 * @param {Array<String>}lineUpIds the artists ids
 * @return {function}
 */
const readLineup = (lineUpIds: Array<String>) =>
  async (dispatch:any) => {
    const lineup:Array<any> = [];
    const q = query(collection(db, 'artists'), where('artistId', 'in', lineUpIds));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => lineup.push(doc.data()));
    dispatch({
      type: ACTION_TYPES.READ_LINEUP,
      payload: lineup,
    });
  };

/**
 * Read events by user
 *
 * @param {string} userId the id of the user
 * @return {function} the ids of the events the user will/did attend
 */
const readEventsByUser = (userId:string) =>
  async (dispatch:any) => {
    const eventsId:Array<String> = [];
    const events:any = [];
    let ticketsId:Array<String> = [];
    const q = query(collection(db, 'orders'), where('customerId', '==', userId));
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => ticketsId = ticketsId.concat(doc.data().tickets));
    console.log(ticketsId);
    if (ticketsId.length) {
      const qTickets = query(collection(db, 'tickets'), where('ticketId', 'in', ticketsId));
      querySnapshot = await getDocs(qTickets);
      querySnapshot.forEach((doc) => eventsId.push(doc.data().eventId));
      if (eventsId.length) {
        const qEvents = query(collection(db, 'events'), where('eventId', 'in', eventsId));
        querySnapshot = await getDocs(qEvents);
        querySnapshot.forEach((doc) => events.push(doc.data()));
      }
    }
    dispatch({
      type: ACTION_TYPES.READ_EVENTS_BY_USER,
      payload: {events, userId},
    });
  };

export {
  readEvent,
  bulkReadEvents,
  readLineup,
  readEventsByUser,
};
