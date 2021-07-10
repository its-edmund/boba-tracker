import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Tracker from './Tracker';

const App = (): ReactElement => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/tracker">
        <Tracker />
      </Route>
    </Router>
  );
};

export default App;
