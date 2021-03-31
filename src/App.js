import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import './App.css';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Recipe from './components/Recipe'
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/dashboard/add' component={Add} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
        <Route path="/recipe/:id/edit" component={Edit} />
        <Route path="/recipe/:id" component={Recipe} />
      </Router>
    </div>
  );
}

export default App;
