import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './src/actions/index'

import reducers from './reducers';
import Landing from './components/Landing_News/Landing';
import Clients from './components/Client_List/Clients';
import About from './components/About/About';
import DSP from './components/DSP/DSP';
import ClientPage from './components/Client/ClientPage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  constructor(props){

  }
  componentWillMount(){
    this.props.actions.fetch_dynamic_info()
    this.props.actions.fetch_all_news()
    this.props.actions.fetch_all_artists()
  }
  componentWillReceiveProps(next_props){
    this.props != next_props ? this.setState({...next_props}) : null
  }
  render(){
    return(
      <Switch>
        <Route path="/clients/pete-tong" component={ClientPage} />
        <Route path="/services" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={About} />
        <Route path="/clients" component={Clients} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Landing} />
    </Switch>
    )
  }
}

function map_dispatch_to_props(dispatch){
    return{
      actions : bindActionCreators(actions, dispatch)
    }
}

connect(null, map_dispatch_to_props)(App)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
