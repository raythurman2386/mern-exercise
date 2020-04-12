import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
	uri: process.env.BACKEND_URL || 'http://localhost:8000/graphql',
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
