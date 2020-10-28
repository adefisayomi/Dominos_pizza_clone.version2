import * as firebase from "firebase/app"
import firestore from "firebase/firestore"
import Auth from "firebase/auth"
require('dotenv').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPMrz_f78eJkti3I684_qp8IZXryk32t4",
  authDomain: "dominos-pizza-clone.firebaseapp.com",
  databaseURL: "https://dominos-pizza-clone.firebaseio.com",
  projectId: "dominos-pizza-clone",
  storageBucket: "dominos-pizza-clone.appspot.com",
  messagingSenderId: "789144010241",
  appId: "1:789144010241:web:927f58f712385024b3ca00",
  measurementId: "G-4SXEN6L1BK"
};
  
  firebase.initializeApp(firebaseConfig)
  export const db = firebase.firestore()
  export const auth = firebase.auth()