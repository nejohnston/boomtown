import * as firebase from "firebase";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDze6bVW_t7sZE5gJnlLPo2rRYKQeIp9go",
  authDomain: "boomtown-1622f.firebaseapp.com",
  databaseURL: "https://boomtown-1622f.firebaseio.com",
  projectId: "boomtown-1622f",
  storageBucket: "boomtown-1622f.appspot.com",
  messagingSenderId: "763880817478"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();

export { firebaseApp, firebaseAuth };
