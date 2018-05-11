import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoadingBar from 'react-redux-loading-bar'
import '../../node_modules/reset-css/reset.css'

import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Admin from './Admin/Admin';
import Clients from './Client/Clients';
import ClientPage from './SingleClient/ClientPage';
import NewsEdit from './Admin/newsEdit/NewsEdit';
import ClientEdit from './Admin/clientEdit/ClientEdit';
import Login from './Auth/Login';
import News from './News/News';

export const history = createHistory();

const muiTheme = getMuiTheme({
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary1Color: '#2196F3',
    accent1Color: '#000'
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <LoadingBar 
          updateTime={100} 
          style={{ background: '#000' }} 
        />
        <ConnectedRouter history={history}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Switch>
              <Route path="/admin/client-edit" component={ClientEdit} />
              <Route path="/admin/news-edit" component={NewsEdit} />
              <Route path="/client/:client" component={ClientPage} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/clients" component={Clients} />
              <Route path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={News}/>
              <Route path="/" component={Landing} />
            </Switch>
          </MuiThemeProvider>
        </ConnectedRouter>
      </div>
    );
  }
}

export default App;
