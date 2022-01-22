import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import * as SECRETS from './secrets';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: SECRETS.API_KEY,
  authDomain: SECRETS.AUTH_DOMAIN,
  projectId: SECRETS.PROJECT_ID,
  storageBucket: SECRETS.STORAGE_BUCKET,
  messagingSenderId: SECRETS.MESSAGING_SENDER_ID,
  appId: SECRETS.APP_ID,
  measurementId: SECRETS.MEASUREMENT_ID,
};

const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
