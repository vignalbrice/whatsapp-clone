import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1383pDbZgxeAhaiKMfYPhUfke9esMPa0",
  authDomain: "whatsapp-clone-15beb.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-15beb.firebaseio.com",
  projectId: "whatsapp-clone-15beb",
  storageBucket: "whatsapp-clone-15beb.appspot.com",
  messagingSenderId: "577179593597",
  appId: "1:577179593597:web:20a81e45ecfd4a7eb6fa14",
  measurementId: "G-P2X1NBDGT8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
