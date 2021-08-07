import React, { Component } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />

        <AppNav handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
        <Router>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/articles/:articleID" component={ArticlePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
