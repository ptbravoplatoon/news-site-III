import React, { Component } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      history: this.props.history,
        navItems: navItems,
      
    }
  }

  render() {
    
  
  
    return (
      <div class="container">
        <div class="row">
      <div class="col-md-12">
        <h1>AppNav Component</h1>
        <hr />
        
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
          </div>
        </Router>
      </div>
      </div>
       </div>
    );
  }
}

export default App;
