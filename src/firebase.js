import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAocKRwirGphev4pxUaY05VgNkjyK1OOsM",
  authDomain: "clone-786.firebaseapp.com",
  projectId: "clone-786",
  storageBucket: "clone-786.appspot.com",
  messagingSenderId: "284852305642",
  appId: "1:284852305642:web:ff25d3fe77806f3653a193",
  measurementId: "G-T2DQEP2CTV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
