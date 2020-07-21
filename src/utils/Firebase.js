import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyALVhksC5gWbXlbCh-G_x0biWQxuBBn30g",
  authDomain: "tenisdb-63790.firebaseapp.com",
  databaseURL: "https://tenisdb-63790.firebaseio.com",
  projectId: "tenisdb-63790",
  storageBucket: "tenisdb-63790.appspot.com",
  messagingSenderId: "661066111790",
  appId: "1:661066111790:web:6aed04acaffcad5ca3f8bf"
};

firebase.initializeApp(config);

export default firebase;
