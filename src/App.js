import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
