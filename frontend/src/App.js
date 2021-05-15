import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
