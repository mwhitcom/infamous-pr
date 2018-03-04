import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import './Login.css';

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
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      sessionStorage.setItem('token', 'true');
      return true;
    },
  }
};

class Login extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <img src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default Login;
