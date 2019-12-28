import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css"

const AppWithRouter = withRouter(App)

render(<Router><AppWithRouter /></Router>, document.getElementById('root'));