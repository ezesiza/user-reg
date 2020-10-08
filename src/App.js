import React from 'react';
import './App.css';
import {Route,  BrowserRouter as Router, } from 'react-router-dom'
import Register from './components/Register'
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Landing} />
    </Router>
    </div>
  );
}

export default App;
