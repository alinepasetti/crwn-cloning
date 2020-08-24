import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAFrG9XswZqr1GyKWII477QgnaUCBFRbfI',
  authDomain: 'crwn-db-aea58.firebaseapp.com',
  databaseURL: 'https://crwn-db-aea58.firebaseio.com',
  projectId: 'crwn-db-aea58',
  storageBucket: 'crwn-db-aea58.appspot.com',
  messagingSenderId: '1073205101482',
  appId: '1:1073205101482:web:e065084ffc3329d31c61d3',
  measurementId: 'G-BCVSJ16XKV',
};

export const createUser = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalInfo });
    } catch (error) {
      console.log('error creating user :', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
