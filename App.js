import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
