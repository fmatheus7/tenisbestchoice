import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA-RpzOoKuIex1-JK2Mda3aX6NDOntz6oI',
  authDomain: 'high-age-233414.firebaseapp.com',
  databaseURL: 'https://high-age-233414.firebaseio.com',
  projectId: 'high-age-233414',
  storageBucket: 'high-age-233414.appspot.com',
  messagingSenderId: '122990979022',
  appId: '1:122990979022:web:c107c97091f46a8f64ad9f',
  measurementId: 'G-MHD2NCYCBW'
};

firebase.initializeApp(config);

export default firebase;
