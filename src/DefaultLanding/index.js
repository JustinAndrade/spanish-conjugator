import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.css';

export default (props) => {
	return (
		<div className="null">
			<div className="greetings" />
			<div className="books" />
			<div className="home-menu">
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/learn">Go Learn</NavLink>
					{/* <NavLink to="/about">About</NavLink> */}
					<NavLink className="loginLogout" to="login">
						Log In
					</NavLink>
				</nav>
			</div>
			<div className="home-greeting">
				<span>
					Practice is <i>progress</i>,
				</span>
				<h1>MyConjugator.</h1>
				<Link to="/login">Get Started</Link>
			</div>
		</div>
	);
};
