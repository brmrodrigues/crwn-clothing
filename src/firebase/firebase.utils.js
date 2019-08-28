import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA0GlBC5Jed0qL-QdL-kYzHQ0nR-VfLzz0",
  authDomain: "crwn-db-197b9.firebaseapp.com",
  databaseURL: "https://crwn-db-197b9.firebaseio.com",
  projectId: "crwn-db-197b9",
  storageBucket: "",
  messagingSenderId: "612841955702",
  appId: "1:612841955702:web:5f09c7fdedf08b22"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;