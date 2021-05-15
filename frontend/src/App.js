import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core/styles'
import CSSBaseline from '@material-ui/core/CssBaseline'

import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import './assets/scss/main.scss'

import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
