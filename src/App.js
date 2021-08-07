import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav/AppNav.js";
import HomePage from "./pages/HomePage.js";
import ArticlePage from "./pages/ArticlePage.js";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       navItems: navItems
//     }
//   }

//   render() {
//     const { navItems } = this.state;

//     return (
//       <div>
//         <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
//         <Router>
//           <div>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/articles/:articleID" component={ArticlePage} />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// Functional solution
function App() {
  return (
    <div>
      <Router>
        <AppNav />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:section" component={HomePage} />
          <Route exact path="/articles/:articleID" component={ArticlePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
