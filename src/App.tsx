import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { FilterProvider } from './context/FilterContext';

import { Login } from './components/Login';
import { Home } from './components/Home';

import  { ProtectedRoute } from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute path="/home" component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
      </FilterProvider>
    </div>
  );
}

export default App;
