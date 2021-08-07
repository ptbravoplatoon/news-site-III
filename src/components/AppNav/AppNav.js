import React from 'react';
import { Navbar } from 'reactstrap';
import navData from '../../config/Sections.json'

const AppNav = (props) => {

  const { handleNavClick } = props;

  const printNavBar = () => {
    const navBarItems = navData.map( (navItem) => {
      return <a href="#" onClick={ () => handleNavClick( navItem.value )} key={navItem.value} >
        { navItem.label }</a>
    })
    return navBarItems
  }

  return (
    <Navbar color="light">
      {printNavBar()}
    </Navbar>
  );
};

export default AppNav;
