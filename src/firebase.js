import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTHDOMAINE_FIREBASE,
  projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
  };

  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider }