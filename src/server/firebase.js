import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDDziuL01aW6KzpJi6RQKv5jppt2Z1k288",
  authDomain: "slack-app-89585.firebaseapp.com",
  databaseURL: "https://slack-app-89585-default-rtdb.firebaseio.com",
  projectId: "slack-app-89585",
  storageBucket: "slack-app-89585.appspot.com",
  messagingSenderId: "598818813234",
  appId: "1:598818813234:web:1f028dce11b8deeee3d32b",
  measurementId: "G-HZCDW2NYJL"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;