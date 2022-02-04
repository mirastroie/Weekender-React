import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {db} from '../components/Firestore/firestore';
import {doc, getDocs, collection, getDoc, where, query} from 'firebase/firestore';


/**
 * Load an event from the database
 *
 * @param {string} eventId The id of the event
 * @return {Promise}
 */
const readEvent = (eventId:string) =>
  async (dispatch: any) => {
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
 *  @return {Promise}
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
 * @return {Promise}
 */
const readLineup = (lineUpIds: Array<String>) =>
  async (dispatch:any) => {
    const lineup:Array<any> = [];
    const q = query(collection(db, 'artists'), where('uid', 'in', lineUpIds));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => lineup.push(doc.data()));
    dispatch({
      type: ACTION_TYPES.READ_LINEUP,
      payload: lineup,
    });
  };
export {
  readEvent,
  bulkReadEvents,
  readLineup,
};
