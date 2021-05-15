import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core/styles'
import CSSBaseline from '@material-ui/core/CssBaseline'
import Dashboard from './pages/Dashboard/Dashboard'

import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
