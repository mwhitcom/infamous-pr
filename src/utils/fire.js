import firebase from 'firebase'
import '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyAfBI291SgU9ZCO8OgHxpE7YiPNw3BjMME',
  authDomain: 'infamous-pr.firebaseapp.com',
  databaseURL: 'https://infamous-pr.firebaseio.com',
  projectId: 'infamous-pr',
  storageBucket: 'infamous-pr.appspot.com',
  messagingSenderId: '338775613201'
}

const fire = firebase.initializeApp(config)

export default fire
