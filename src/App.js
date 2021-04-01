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
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <PrivateRoute exact path='/dashboard/add' component={Add} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path="/recipe/:id/edit" component={Edit} />
        <PrivateRoute exact path="/recipe/:id" component={Recipe} />
      </Router>
    </div>
  );
}

export default App;
