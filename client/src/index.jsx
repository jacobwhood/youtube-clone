import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index.js';

const App = () => (
  <div className='app-container'>
    Hello, world
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById('app')
  </Provider>
);
