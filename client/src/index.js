import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './assets/main.css';
import App from './App';

const client = new ApolloClient({
	uri:
		'https://lift-track-mern.herokuapp.com/graphql' ||
		'http://localhost:8000/graphql',
});

const AppWithRouter = withRouter(App);

render(
	<ApolloProvider client={client}>
		<Router>
			<AppWithRouter />
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);
