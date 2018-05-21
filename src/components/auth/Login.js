import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import '../../utils/fire'

import './login.css'

const uiConfig = {
  signInSuccessUrl: '/admin',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess (currentUser, credential, redirectUrl) {
      sessionStorage.setItem('token', 'true')
      return true
    }
  }
}

const Login = () => (
  <div styleName="container">
    <img src="/assets/images/infamous_logo_black.png" alt="Infamous" />
    <StyledFirebaseAuth
      uiCallback={ui => ui.disableAutoSignIn()}
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default Login
