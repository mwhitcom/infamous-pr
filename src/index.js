import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from './reducers/index.js'

import reducers from './reducers';
import Landing from './components/Landing_News/Landing';
import Clients from './components/Client_List/Clients';
import About from './components/About/About';
import DSP from './components/DSP/DSP';
import ClientPage from './components/Client/ClientPage';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/client/pete-tong" component={ClientPage} />
          <Route path="/about" component={About} />
          <Route path="/dsp" component={DSP} />
          <Route path="/clients" component={Clients} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
