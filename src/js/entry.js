require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

// Components
import App from './containers/App';
import ErrorBoundary from './containers/ErrorBoundary';

// Sentry error reporting
process.env.SENTRY_DSN && Raven.config(process.env.SENTRY_DSN).install();

const store = observable({});

ReactDOM.render(
  <ErrorBoundary>
    <App store={store} />
  </ErrorBoundary>,
  document.getElementById('app')
);