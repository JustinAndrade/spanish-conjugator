import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import Account from './components/AccountPage/Account';
import Navigation from './components/Navigation/Navigation';
import Home from './DefaultLanding';
import DefaultLanding from './DefaultLanding';
import SignUp from './components/Navigation/SignUp';
import Graph from './components/Graph/Graph';
import { ProtectedRoute } from './components/auth/protectedRoute';
import PageNotFound from './components/Pages/PageNotFound';
import LoginPage from './components/Pages/LoginPage';
import SignOutPage from './components/Pages/SignOutPage';
import About from './components/Navigation/About';
import styled from 'styled-components';
import { ModalContext, RegisterContext } from './Context/Store';

const App = () => {
	const [ modal ] = useContext(ModalContext);
	const [ register ] = useContext(RegisterContext);

	const modalStorage = localStorage.setItem('modal', modal);

	return (
		<div>
			{/* <Header /> */}
			<ContainingDiv>
				<div className="app-wrapper">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/my-account" component={Account} />
						<ProtectedRoute exact path="/learn" component={Container} />
						<Route exact path="/progress" component={Graph} />
						<Route exact path="/about" component={About} />
						<Route exact path="/goodbye" component={SignOutPage} />
						<Route path="/*" component={PageNotFound} />
					</Switch>
				</div>
			</ContainingDiv>
		</div>
	);
};

export default App;

const ContainingDiv = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	width: 100%;
`;
