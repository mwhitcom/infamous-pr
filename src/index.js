import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers/';
import Landing from './components/Landing';
import Clients from './components/Clients';
import About from './components/About';
import DSP from './components/DSP';
import ClientPage from './components/ClientPage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
