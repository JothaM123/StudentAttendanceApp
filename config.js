import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDsoEPDO5mpZKnPdZv9ePcMvDBOmJYKg",
  authDomain: "attendance-c62c7.firebaseapp.com",
  databaseURL: "https://attendance-c62c7-default-rtdb.firebaseio.com",
  projectId: "attendance-c62c7",
  storageBucket: "attendance-c62c7.appspot.com",
  messagingSenderId: "232260756977",
  appId: "1:232260756977:web:7332f013b1b6f098e2d050"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database()
 

  