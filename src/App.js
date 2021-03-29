import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
