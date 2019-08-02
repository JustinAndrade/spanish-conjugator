import React, { useContext } from 'react';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';
import { RouterContext } from '../../Context/CustomBrowserRouter';
import axios from 'axios';
import auth from '../auth/auth';
import Navigation from '../Navigation/Navigation.js';

import './login.css';

const Login = (props) => {
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const routeProps = useContext(RouterContext);

	const loginHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/login', {
				username: username,
				password: password
			})
			.then((res) => {
				console.log(res.data);
				console.log('data ', res.data.your_token);
				localStorage.setItem('jwt', res.data.your_token);
				routeProps.history.push('/learn');
			})
			.catch((error) => {
				console.log('Axios Error Msg: ', error);
			});
	};

	const registerHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/register', {
				username: username,
				password: password
			})
			.then((res) => {
				console.log('res ', res);
				auth.login(() => {
					console.log(auth.authenticated);
				});

				routeProps.history.push('/learn');
			})
			.catch((error) => {
				console.log('Error signing up: ', error);
			});
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	}
	function handleUsername(e) {
		setUsername(e.target.value);
	}

	return (
		<div className="page-container">
			<Navigation />
			<div className="login-container">
				<div className="login">
					<h2>Sign In</h2>
					<span>Already Registered?</span>
					<span>Start learning now!</span>
					<form onSubmit={loginHandler}>
						<input name="username" onChange={handleUsername} value={username} placeholder="username" />
						<input
							type="password"
							name="password"
							onChange={handlePassword}
							value={password}
							placeholder="password"
						/>
						<button>Login</button>
					</form>
				</div>
				<div className="register">
					<h2>Sign Up</h2>

					<span>Practice is progress! Join now and start tracking your progress!</span>
					<form onSubmit={registerHandler}>
						<input
							type="username"
							name="newUsername"
							value={username}
							onChange={handleUsername}
							placeholder="Username"
						/>
						<input type="fullname" name="fullname" placeholder="Full Name" />

						<input
							type="password"
							name="newPassword"
							value={password}
							onChange={handlePassword}
							placeholder="Password"
						/>
						<input
							type="password"
							name="confirmationPassword"
							validate={{ match: { value: 'password' } }}
							placeholder="Retype password"
						/>

						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
