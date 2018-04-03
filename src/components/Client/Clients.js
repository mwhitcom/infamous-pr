import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';

import * as newsActionCreators from '../../actions/newsActions';
import * as clientActionCreators from '../../actions/clientActions';

import './Clients.css';
import Navbar from '../Navigation/Navbar';
import ClientContainer from './ClientContainer';

const types = ['artists', 'labels', 'festivals & events', 'brands', 'technology', 'film & tv'];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    }
  }

  componentWillMount(){
    const { news, clients, clientActions, newsActions } = this.props;
    !clients ? clientActions.fetchAllClients() : '';
    !news ? newsActions.fetchAllNews(): '';
  }

  handleUpdate = (type) => {
    const { clients } = this.props;
    return clients.filter(client => client.data.type.replace(/~/g, '&') === type);
  }

  handleClick = (event) => {
    this.setState({ filter: event.target.id });
  }

  style = (filter) => {
    return {
      textDecorationLine: this.state.filter === filter ? 'underline' : 'none',
      color: this.state.filter === filter ? '#000' : '#aaaaaa'
    }
  }

  render() {
    const { clients, news } = this.props;
    const sections = types.map(type => {
      const style = this.state.filter === 'all' 
        ? {} 
        : this.state.filter === type 
          ? {} 
          : {display: 'none'}; 
      return (<ClientContainer type={type.toUpperCase()} style={style} list={this.handleUpdate(type)} />);
    });

    const nav = types.map(type => {
      return (<li styleName={'item'} id={type} style={this.style(type)} onClick={this.handleClick}>{type.toUpperCase()}</li>);
    });

    const content = () => {
      if (!clients || !news || Object.keys(clients).length === 0 || Object.keys(news).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return (
          <div styleName={'grid-container'}>
            <ul styleName={'nav-list'}>
              <li styleName={'sort'}>SORT:</li>
              <li styleName={'item'} id="all" style={this.style('all')} onClick={this.handleClick}>ALL</li>
              {nav}
            </ul>
            {sections}
          </div>
        )
      }
    }

    return (
      <div styleName={'container'}>
        <Helmet>
          <title>INFAMOUS - Clients</title>
        </Helmet>
        <div styleName={'content'}>
          <Navbar />
          {content()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    news: state.news
  };
};

const mapDispatchToProps = dispatch => ({
  clientActions: bindActionCreators(clientActionCreators, dispatch),
  newsActions: bindActionCreators(newsActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

