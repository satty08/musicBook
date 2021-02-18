import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJ6jBcXu2qx5BMhbRBTmdU2CzDrOZjuMk",
    authDomain: "musicbook-860cd.firebaseapp.com",
    projectId: "musicbook-860cd",
    storageBucket: "musicbook-860cd.appspot.com",
    messagingSenderId: "263606880002",
    appId: "1:263606880002:web:c2f1cd03e7114f7c6da41b",
    measurementId: "G-6RMSZ8QFJN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export {auth};