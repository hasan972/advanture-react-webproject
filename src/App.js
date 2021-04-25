import React from 'react';
import Navabr from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navabr />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
