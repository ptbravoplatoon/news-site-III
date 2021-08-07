import React, { Component, useState } from 'react';
import sections from '../../config/Sections.json'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class AppNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  setIsOpen(openState){
    let newState = this.state;
    newState.isOpen = openState;
    this.setState(newState);
  }
  render() {
    const isOpen = this.state.isOpen;
    const toggle = () => this.setIsOpen(!isOpen);
    let i = 0;

    const items = sections.map((x) => {
      let item = (<NavItem key={i} onClick={() => this.props.handleNavClick(x.value)}>
        <NavLink>{x.label}</NavLink>
        </NavItem>);
      i++;
      return item;
      })

    return (
      <Navbar color="Light" light expand="md">
        <NavbarBrand href="/">News</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {items}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default AppNav;
