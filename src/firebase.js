import  firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAvTjlQo7wZqc0jcizXF8KVaXnxW-zJuRE",
    authDomain: "mojojoonlinebookstore.firebaseapp.com",
    projectId: "mojojoonlinebookstore",
    storageBucket: "mojojoonlinebookstore.appspot.com",
    messagingSenderId: "463817783084",
    appId: "1:463817783084:web:d6e626d14e095b722f5e89",
    measurementId: "G-WW5RGSPHRQ"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;