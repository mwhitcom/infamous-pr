import firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyBm0KU-X1f_k34cYEJQOw_ty8u-RkaDOIw',
  authDomain: 'infamous-pr.firebaseapp.com',
  databaseURL: 'https://infamous-pr.firebaseio.com',
  projectId: 'infamous-pr',
  storageBucket: 'infamous-pr.appspot.com',
  messagingSenderId: '338775613201',
};

const fire = firebase.initializeApp(config);
fire.firestore().settings({ timestampsInSnapshots: true });

export default fire;
