import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('0QniVUea6AB0B6ZLjA9p').collection('carItems').doc('wqIAUczDQ2m9JCpu4rzl');
firestore.doc('/users/0QniVUea6AB0B6ZLjA9p/carItems/wqIAUczDQ2m9JCpu4rzl');
firestore.collection('/users/0QniVUea6AB0B6ZLjA9p/carItems');