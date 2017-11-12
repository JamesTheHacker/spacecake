import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import App from './containers/App';

const store = observable({
  counter: 0
});

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);