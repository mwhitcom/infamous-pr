import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { unregister } from './registerServiceWorker'
import store from './store'

import App from './components/App'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container')
)

// unregister service worker to prevent caching
unregister()
