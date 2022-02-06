import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {db} from '../components/Firestore/firestore';
import {doc, getDocs, collection, setDoc, getDoc} from 'firebase/firestore';


/**
 * Load a user from the database
 *
 * @param {string} userId The id of the user
 * @return {function}
 */
const loadUser = (userId:any) =>
  async (dispatch: any) => {
    const docRef = doc(db, 'users', userId);
    getDoc(docRef).then((docSnap) => {
      dispatch({
        type: ACTION_TYPES.LOAD_USER_SUCCESS,
        payload: docSnap.data(),
      });
    });
  };

/**
 * Read all users from the database
 *
 *  @return {function}
 */
const loadUsers = () =>
  async (dispatch:any) => {
    const users:any = [];
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => users.push(doc.data()));
    dispatch({
      type: ACTION_TYPES.READ_USERS_SUCCESS,
      payload: users,
    });
  };

/**
 * Add a user to the database
 *
 * @param {any} user The user object we want to store
 * @return {function}
 */
const addUser = (user:any) =>
  async (dispatch:any) => {
    await setDoc(doc(db, 'users', user.uid), {
      username: user.username,
      email: user.email,
    });
    dispatch({
      type: ACTION_TYPES.ADD_USER_SUCCESS,
      payload: 'User added successfully!',
    });
  };

export {addUser,
  loadUser,
  loadUsers,
};
