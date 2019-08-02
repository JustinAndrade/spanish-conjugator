import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';
import { useRouter } from '../../hooks/useRouter';
import { RouterContext } from '../../Context/CustomBrowserRouter';
import { Button, Form, Input, Span } from './Navigation';

const Login = (props) => {
	const [ modal, setModal ] = useContext(ModalContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const routeProps = useContext(RouterContext);

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/login', {
				username: username,
				password: password
			})
			.then((res) => {
				if (res.data) {
					localStorage.setItem('jwt', res.data.your_token);
					auth.login(() => {
						routeProps.history.push('/learn');
					});
					localStorage.setItem('isAuth', auth.authenticated);
				}
			})
			.catch((error) => {
				console.log('Axios Error Msg: ', error);
			});
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	}
	function handleUsername(e) {
		setUsername(e.target.value);
	}

	return (
		<div className="login-form">
			<div>
				<button className="log-in-button" onClick={toggle}>
					Login
				</button>
				<form className="sign-up-form" onSubmit={submitHandler}>
					<Span>Username</Span>
					<input
						className="sign-up-input"
						name="username"
						onChange={handleUsername}
						value={username}
						placeholder="username"
					/>
					<Span>Password</Span>
					<Input
						type="password"
						className="sign-up-input"
						name="password"
						onChange={handlePassword}
						value={password}
						placeholder="password"
					/>
					<div>
						<Input className="sign-up-input" type="checkbox" name="remeber me" /> remember me <br />
					</div>
					{/* <button className="form-button" onClick={clickHandler}> */}
					<button className="form-button">Login</button>
				</form>
				{/* </ModalBody>
          <ModalFooter />
        </Modal> */}
			</div>
		</div>
	);
};

export default Login;

//Styled-Components
