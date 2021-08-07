import React from 'react';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';

function AppNav({ handleNavClick }) {
	return (
		<Navbar color="light">
			{navItems.map((navItem, i) => (
				<a href="#" key={`navItem-${i}`} onClick={() => handleNavClick(navItem.value)}>
					{navItem.label} |
				</a>
			))}
		</Navbar>
	);
}

export default AppNav;
