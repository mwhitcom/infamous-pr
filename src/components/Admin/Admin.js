import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchNews } from '../../actions/newsActions'
import { fetchClient } from '../../actions/clientActions'
import { fetchInfo } from '../../actions/infoActions'

import './admin.css'
import colors from '../../styles/colors'
import NewsGrid from './newsGrid/NewsGrid'
// import ClientGrid from './clientGrid/ClientGrid'
import InfoGrid from './infoGrid/InfoGrid'

function TabContainer (props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: colors.neutral.white
  }
})

class Admin extends Component {
  state = {
    value: 0
  };

  componentDidMount () {
    const {
      push, fetchNews, fetchClient, fetchInfo
    } = this.props
    const token = sessionStorage.getItem('token')
    !token && push('/login')
    window.scrollTo(0, 0)
    fetchNews()
    fetchClient()
    fetchInfo()
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render () {
    // const {
    //   news, clients, info, classes
    // } = this.props

    const { news, info, classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label={<span style={{ color: 'white' }}>News</span>} />
            <Tab label={<span style={{ color: 'white' }}>Clients</span>} />
            <Tab label={<span style={{ color: 'white' }}>Site Info</span>} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><NewsGrid news={news} /></TabContainer>}
        {/* {value === 1 && <TabContainer><ClientGrid clients={clients} /></TabContainer>} */}
        {value === 2 && <TabContainer><InfoGrid info={info} /></TabContainer>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  clients: state.clients,
  info: state.info.data
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient,
  fetchInfo,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Admin))
