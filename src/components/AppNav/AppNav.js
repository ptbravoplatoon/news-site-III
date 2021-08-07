import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      }
      this.toggleNavbar = this.toggleNavbar.bind(this);  
  }
  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { navItems, handleNavClick } = this.props;
      return (
      <div>
    <Navbar color="faded" light>
        <NavbarBrand href="/"   className="mr-auto">Menu</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
          {navItems.map((navItem,index) =>
            <NavItem key={index}>
              <NavLink href="/" onClick={ (e) =>{ e.preventDefault();  handleNavClick(navItem.value)}}>{navItem.label}</NavLink>
            </NavItem>
          )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
