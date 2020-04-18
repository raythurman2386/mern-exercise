import 'dotenv/config';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './assets/main.css';
import App from './App';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: process.env.BACKEND_URL || 'http://localhost:8000/graphql',
	cache,
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
