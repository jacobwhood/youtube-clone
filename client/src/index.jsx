import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index.js';

import App from './components/App.jsx';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('app')
// );


ReactDOM.render(
<BrowserRouter history={browserHistory}>
  <App />
</BrowserRouter>, document.getElementById('app'));
