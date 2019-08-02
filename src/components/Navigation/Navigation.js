import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = (props) => {
	if (localStorage.getItem('jwt')) {
		document.getElementsByClassName('loginLogout').innerHTML = 'Logout';
	}
	return (
		<div className="nav-menu">
			<div className="main-header">
				<h1>MyConjugator</h1>
			</div>
			<div>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/learn">Go Learn</NavLink>
					{/* <NavLink to="/about">About</NavLink> */}
					{/* <NavLink className="loginLogout" to="login">
						Log In
					</NavLink> */}
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
