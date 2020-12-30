import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {

    apiKey: "AIzaSyCXljxepCSj1wHYHJR9XEaE5g9OjUXjHmY",
    authDomain: "wily-21792.firebaseapp.com",
    databaseURL: "https://wily-21792.firebaseio.com",
    projectId: "wily-21792",
    storageBucket: "wily-21792.appspot.com",
    messagingSenderId: "11303635375",
    appId: "1:11303635375:web:d6e3b805256c0b07d2c75a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
