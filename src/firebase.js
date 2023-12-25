import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBND9lV___uO8klJ7SpTZQjYxCIlp_xoXk",
    authDomain: "slack-c48cd.firebaseapp.com",
    projectId: "slack-c48cd",
    storageBucket: "slack-c48cd.appspot.com",
    messagingSenderId: "87927531270",
    appId: "1:87927531270:web:14098c9e18d13dd342e087"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db