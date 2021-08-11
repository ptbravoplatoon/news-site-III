import React, { Component } from 'react';
import { Navbar, NavItem } from 'reactstrap';

class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar color="light">
        {navItems.map((navItem) =>
          <a href={navItem.value} onClick={ () => handleNavClick( navItem.value )} key={NavItem.label}>
            { navItem.label } |
          </a>
        )}
      </Navbar>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick( navItem.value )} >
//           { navItem.label } |
//         </a>
//       )}
//     </Navbar>
//   );
// }
