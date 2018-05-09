import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { unregister } from './registerServiceWorker';
import store from './store';

import App from './components/App.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector('.container')
);

// unregister service worker to prevent caching
unregister();
