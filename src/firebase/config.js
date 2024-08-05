import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyC_lCPEWD1MsHEAY8Swr5wMVHvKpEKCm8w",
  
    authDomain: "mymoney-3d35d.firebaseapp.com",
  
    projectId: "mymoney-3d35d",
  
    storageBucket: "mymoney-3d35d.appspot.com",
  
    messagingSenderId: "240144474722",
  
    appId: "1:240144474722:web:f358fd3bc0ae588ba4273b"
  
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init service

const projectFirestore = firebase.firestore()


export { projectFirestore }