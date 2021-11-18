import app from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBU7bykj8QKQst4YK-t2oXy9ldJAjFk2hk",
    authDomain: "proyreact-g4.firebaseapp.com",
    projectId: "proyreact-g4",
    storageBucket: "proyreact-g4.appspot.com",
    messagingSenderId: "903953896159",
    appId: "1:903953896159:web:86d395f10bf8aa10d00f6a"
  };


app.initializeApp(firebaseConfig);

export const storage = app.storage();
export const auth = firebase.auth();
export const db = app.firestore();