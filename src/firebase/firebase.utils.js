import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5hexUGeb5CVSkzEiHutpFBnK0hDOwxrw',
  authDomain: 'crwn-db-4acb6.firebaseapp.com',
  databaseURL: 'https://crwn-db-4acb6.firebaseio.com',
  projectId: 'crwn-db-4acb6',
  storageBucket: 'crwn-db-4acb6.appspot.com',
  messagingSenderId: '879392357173',
  appId: '1:879392357173:web:a2026af5e5478d6705ea7c',
  measurementId: 'G-ZTEKK26VFS',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log('Snapshot: ',snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
