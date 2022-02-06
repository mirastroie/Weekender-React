import {auth} from '../components/Firestore/firestore';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {addUser} from './user';
import {ACTION_TYPES} from '../utils/constants/actionTypes';
import {googleProvider} from '../components/Firestore/firestore';


/**
 * Sign up the user
 *
 * @param {string} username the user's name
 * @param {string} email the user's email
 * @param {string} password the user's password
 * @param {function} callback a function to be called afterwards
 * @return {function}
 */
const signUp = ( username: string, email: string, password:string, callback:Function) =>
  async (dispatch: any) => {
    createUserWithEmailAndPassword(
        auth,
        email,
        password,
    ).then((user) => {
      dispatch({
        type: ACTION_TYPES.SIGN_UP_SUCCESS,
        payload: user.user,
      });
      dispatch(addUser({email: user.user.email, username, uid: user.user.uid}));
      callback();
    }).catch((e) => {
      dispatch({
        type: ACTION_TYPES.SIGN_UP_ERROR,
        payload: 'Something went wrong, we couldn\'t create your account. Please try again.',
      });
    });
  };

/**
 * Sign in the user
 *
 * @param {string} email the user's email
 * @param {string} password the user's password
 * @param {function} callback a function to be called afterwards
 * @return {function}
 */
const signIn = ( email: string, password:string, callback:Function) =>
  (dispatch: any) => {
    signInWithEmailAndPassword(
        auth,
        email,
        password,
    ).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      dispatch({
        type: ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: user,
      });
      callback();
    })
        .catch((error) => {
          dispatch({
            type: ACTION_TYPES.SIGN_IN_ERROR,
            payload: 'Something went wrong, we couldn\'t create your account. Please try again.',
          });
        });
  };

/**
 * Sign out a user
 *
 * @param {function} callback  a function to be called afterwards
 * @return {function}
 */
const signOut = (callback:Function) => async (dispatch:any) => {
  firebaseSignOut(auth).then(() => {
    dispatch({
      type: ACTION_TYPES.SIGN_OUT_SUCCESS,
      payload: '',
    });
    callback();
  });
};
/**
 * Sign up a user with Google
 *
 * @param {function} callback  a function to be called afterwards
 * @return {function}
 */
const signUpWithGoogle = (callback:Function) => (dispatch: any) => {
  signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        dispatch(addUser({email: result.user.email, username: result.user.displayName, uid: result.user.uid}));
        callback();
      });
};

/**
 * Sign in with Google
 *
 * @param {function} callback  a function to be called afterwards
 * @return {function}
 */
const signInWithGoogle = (callback:Function) => (dispatch: any) => {
  signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(signInSuccess(result));
        callback();
      });
};


const verifyAuth = () => (dispatch:any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(signInSuccess(user));
    }
  });
};
/**
 * Sign in with success
 *
 * @param {object} payload the action's payload
 * @return {function}
 */
const signInSuccess = (payload:any) => {
  return {
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: payload.user,
  };
};

export {
  signUp,
  signIn,
  signInWithGoogle,
  signUpWithGoogle,
  signOut,
  verifyAuth,
};
