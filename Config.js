import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyDTHxyteJPvPQj1Id2MHaKXfzk7BYho1JA",
    authDomain: "book-santa-bbfeb.firebaseapp.com",
    databaseURL: "https://book-santa-bbfeb.firebaseio.com",
    projectId: "book-santa-bbfeb",
    storageBucket: "book-santa-bbfeb.appspot.com",
    messagingSenderId: "471557114423",
    appId: "1:471557114423:web:5bf17d5c30f67ce1e9cdb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();