import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  projectId: "app-react90",
  appId: "1:847298219736:web:530f7ebea16be5204011ad",
  storageBucket: "app-react90.firebasestorage.app",
  apiKey: "AIzaSyC7lO36WSD56FGcYaNa0NlRXSvabdI1i0Q",
  authDomain: "app-react90.firebaseapp.com",
  messagingSenderId: "847298219736",
  measurementId: "G-2J2EHTJX4L",
});

const auth = app.auth();
const db = app.firestore();

export { auth, db };
export default app;
