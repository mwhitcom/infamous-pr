import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './clientGrid.css'
import SingleClient from './singleClient/SingleClient'

const styles = theme => ({
  button: {
    width: '100%'
  },
  textField: {
    width: '100%'
  }
})

class ClientGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ search: value })
  }

  renderClients = () => {
    const { clients } = this.props
    clients.sort((a, b) => (
      (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0)))
    return clients.map((client, index) => <SingleClient client={client} key={client} />)
  }

  renderSearch = () => {
    const { clients } = this.props
    const { search } = this.state
    const searched = clients.filter((client) => {
      const { name } = client.data
      return name.toLowerCase().search(search.toLowerCase()) !== -1
    })
    return searched.map((client, index) => <SingleClient client={client} key={client} />)
  }

  render () {
    const { classes } = this.props
    const { search } = this.state

    return (
      <div styleName="container">
        <div styleName="title-box">
          <h1 styleName="title">CLIENTS</h1>
          <div styleName="search-box">
            <TextField
              id="search"
              label="Search"
              type="search"
              value={search}
              className={classes.textField}
              onChange={this.handleSearch}
              margin="normal"
            />
          </div>
          <div styleName="button-box">
            <Link to="/admin/client-edit">
              <Button variant="raised" color="primary" className={classes.button}>
                CREATE NEW
              </Button>
            </Link>
          </div>
        </div>
        <div styleName="client-box">
          {this.state.search ? this.renderSearch() : this.renderClients()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ClientGrid)
