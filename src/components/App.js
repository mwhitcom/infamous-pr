import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LoadingBar from 'react-redux-loading-bar'
import '../../node_modules/reset-css/reset.css'

import Landing from './Landing/Landing'
import About from './About/About'
import Contact from './Contact/Contact'
import Services from './Services/Services'
import Admin from './Admin/Admin'
import Clients from './Client/Clients'
import ClientPage from './SingleClient/ClientPage'
import NewsEdit from './Admin/newsEdit/NewsEdit'
import ClientEdit from './Admin/clientEdit/ClientEdit'
import Login from './Auth/Login'
import News from './News/News'

export const history = createHistory()

const theme = createMuiTheme({
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      paper: '#fff'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Montserrat"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

const App = () => (
  <div>
    <LoadingBar
      updateTime={100}
      style={{ background: '#000' }}
    />
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/admin/client-edit/:client?" component={ClientEdit} />
          <Route path="/admin/news-edit/:id?" component={NewsEdit} />
          <Route path="/client/:client" component={ClientPage} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/clients" component={Clients} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/news" component={News} />
          <Route path="/" component={Landing} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </div>
)

export default App
