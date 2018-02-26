import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAfBI291SgU9ZCO8OgHxpE7YiPNw3BjMME",
  authDomain: "infamous-pr.firebaseapp.com",
  databaseURL: "https://infamous-pr.firebaseio.com",
  projectId: "infamous-pr",
  storageBucket: "infamous-pr.appspot.com",
  messagingSenderId: "338775613201"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
