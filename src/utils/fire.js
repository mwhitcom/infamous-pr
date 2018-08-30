import firebase from 'firebase'
import '@firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'infamous-pr.firebaseapp.com',
  databaseURL: 'https://infamous-pr.firebaseio.com',
  projectId: 'infamous-pr',
  storageBucket: 'infamous-pr.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

console.log(process.env);
const fire = firebase.initializeApp(config)

export default fire
