import firebase from "firebase";


import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyAiFr8S7k97U0uSucrWLxpNyurbXEV9444",
  authDomain: "olx-clone-b637f.firebaseapp.com",
  projectId: "olx-clone-b637f",
  storageBucket: "olx-clone-b637f.appspot.com",
  messagingSenderId: "799162897123",
  appId: "1:799162897123:web:02c46347cca963c3316bd6"
};

// Initialize Firebase


export default firebase.initializeApp(firebaseConfig);