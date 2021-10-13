// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: 'AIzaSyApOd-L90_phnWk9YGxzTfxg7aoVq8Y4Ug',
//   authDomain: 'note-app-c2da2.firebaseapp.com',
//   projectId: 'note-app-c2da2',
//   storageBucket: 'note-app-c2da2.appspot.com',
//   messagingSenderId: '857778084891',
//   appId: '1:857778084891:web:b6c970ccc7dfb3437e2cbe',
// }

// firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()
/////////////////////////////////////////
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyApOd-L90_phnWk9YGxzTfxg7aoVq8Y4Ug',
  authDomain: 'note-app-c2da2.firebaseapp.com',
  projectId: 'note-app-c2da2',
  storageBucket: 'note-app-c2da2.appspot.com',
  messagingSenderId: '857778084891',
  appId: '1:857778084891:web:b6c970ccc7dfb3437e2cbe',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
