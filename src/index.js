import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';

import './normalize.css';
import Landing from './components/Landing_News/Landing';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Clients from './components/Client/Clients';
import ClientPage from './components/SingleClient/ClientPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Switch>
            <Route path="/clients/pete-tong" component={ClientPage} />
            <Route path="/services" component={About} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={About} />
            <Route path="/clients" component={Clients} />
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  ,document.querySelector('.container')
);
