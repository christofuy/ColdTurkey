import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
