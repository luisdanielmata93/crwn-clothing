import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCdvDcDpwiK4MlhRhcv5YW6OrtHYnYOMRA",
    authDomain: "onlinestorelddm.firebaseapp.com",
    databaseURL: "https://onlinestorelddm.firebaseio.com",
    projectId: "onlinestorelddm",
    storageBucket: "onlinestorelddm.appspot.com",
    messagingSenderId: "637393942889",
    appId: "1:637393942889:web:ae1fa278c7ae9db31765f8",
    measurementId: "G-79FSQHW725"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
