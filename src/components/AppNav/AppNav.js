import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import navItems from "../../config/Sections.json";

// class AppNav extends Component {
//   render() {
//     const { navItems, handleNavClick } = this.props;

//     return (
//       <Navbar color="light">
//         {navItems.map((navItem, i) => (
//           <a
//             key={`${navItem.label}-${i}`}
//             href="#"
//             onClick={() => handleNavClick(navItem.value)}
//           >
//             {navItem.label} |
//           </a>
//         ))}
//       </Navbar>
//     );
//   }
// }

function AppNav() {
  return (
    <Navbar color="light">
      {navItems.map((navItem, i) => (
        <Link key={`${navItem.label}-${i}`} to={`/${navItem.value}`}>
          {navItem.label}
        </Link>
      ))}
    </Navbar>
  );
}

export default AppNav;
