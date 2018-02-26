import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as actionCreators from './actions/index';
import './normalize.css';
import Landing from './components/Landing_News/Landing';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Clients from './components/Client/Clients';
import ClientPage from './components/SingleClient/ClientPage';
import NewsEdit from './components/Admin/NewsEdit';
import ClientEdit from './components/Admin/ClientEdit';
import Login from './components/auth/Login';

const muiTheme = getMuiTheme({
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary1Color: '#2196F3',
    accent1Color: '#000'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.actions.fetch_dynamic_info();
    this.props.actions.fetch_all_news();
    this.props.actions.fetch_all_artists();
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
              <Route path="/services" component={About} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={About} />
              <Route path="/clients" component={Clients} />
              <Route path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(null, mapDispatchToProps)(App);
