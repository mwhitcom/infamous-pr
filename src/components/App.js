import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as newsActionCreators from '../actions/newsActions';
import * as clientActionCreators from '../actions/clientActions';
import * as infoActionCreators from '../actions/infoActions';

import '../../node_modules/reset-css/reset.css'

import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Admin from './Admin/Admin';
import Clients from './Client/Clients';
import ClientPage from './SingleClient/ClientPage';
import NewsEdit from './Admin/NewsEdit';
import ClientEdit from './Admin/ClientEdit';
import Login from './Auth/Login';
import News from './News/News';

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const muiTheme = getMuiTheme({
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary1Color: '#2196F3',
    accent1Color: '#000'
  }
});

class App extends Component {
  componentWillMount() {
    const { newsActions, clientActions, infoActions } = this.props;
    newsActions.fetchAllNews();
    clientActions.fetchAllClients();
    infoActions.fetchAllPageInfo();
  }

  componentWillReceiveProps(next_props) {
    return this.props !== next_props ? this.setState({ ...next_props }) : null;
  }
  
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Switch>
              <Route path="/admin/client-edit" component={ClientEdit} />
              <Route path="/admin/news-edit" component={NewsEdit} />
              <Route path="/client" component={ClientPage} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/clients" component={Clients} />
              <Route path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={News}/>
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch),
  clientActions: bindActionCreators(clientActionCreators, dispatch),
  infoActions: bindActionCreators(infoActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
