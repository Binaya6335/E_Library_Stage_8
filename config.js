import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgBgvrIvTXH54CGOEkyPLhZpXtArUOhPg",
  authDomain: "c-78-e8ef0.firebaseapp.com",
  projectId: "c-78-e8ef0",
  storageBucket: "c-78-e8ef0.appspot.com",
  messagingSenderId: "791109539199",
  appId: "1:791109539199:web:ee230fb83b4b3e54fbf64a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
