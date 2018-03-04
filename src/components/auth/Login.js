import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAfBI291SgU9ZCO8OgHxpE7YiPNw3BjMME",
  authDomain: "infamous-pr.firebaseapp.com",
  databaseURL: "https://infamous-pr.firebaseio.com",
  projectId: "infamous-pr",
  storageBucket: "infamous-pr.appspot.com",
  messagingSenderId: "338775613201"
};

firebase.initializeApp(config);

const uiConfig = {
  signInSuccessUrl: '/admin',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      sessionStorage.setItem('token', credential.accessToken);
      return true;
    },
  }
};

class Login extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default Login;
