// import firebase from 'firebase/app'

// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBaNsjQJXkEUNmkjqfUTsxwUMhY9kAMv6E",
  authDomain: "clone3-c481a.firebaseapp.com",
  projectId: "clone3-c481a",
  storageBucket: "clone3-c481a.appspot.com",
  messagingSenderId: "149604983173",
  appId: "1:149604983173:web:1223b35ddacdb207a6e4ec"
};

  firebase.initializeApp(firebaseConfig)

export default firebase.auth()