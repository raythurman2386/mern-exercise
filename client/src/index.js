import 'dotenv/config';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './assets/main.css';
import App from './App';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: process.env.BACKEND_URL || 'http://localhost:8000/graphql',
	cache,
});

render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);
