import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';

import './normalize.css';
import Landing from './components/Landing_News/Landing';
import About from './components/About/About';
import Login from './components/Admin/Login';
import Clients from './components/Client/Clients';
import ClientPage from './components/Client/ClientPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/clients/pete-tong" component={ClientPage} />
          <Route path="/services" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={About} />
          <Route path="/clients" component={Clients} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.querySelector('.container')
);
