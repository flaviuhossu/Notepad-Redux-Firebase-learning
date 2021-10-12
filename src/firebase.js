import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyApOd-L90_phnWk9YGxzTfxg7aoVq8Y4Ug',
  authDomain: 'note-app-c2da2.firebaseapp.com',
  projectId: 'note-app-c2da2',
  storageBucket: 'note-app-c2da2.appspot.com',
  messagingSenderId: '857778084891',
  appId: '1:857778084891:web:b6c970ccc7dfb3437e2cbe',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
