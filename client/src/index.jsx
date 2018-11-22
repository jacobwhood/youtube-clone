import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index.js';

import LandingPage from './components/LandingPage.jsx';
import Search from './components/Search.jsx';
import UserSavedVideos from './components/UserSavedVideos.jsx';

const App = () => (
  <div className='app-container'>
    <Switch>
      <Route exact path='/' render={props => <LandingPage  ...props />} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/users/:userId/videos' component={UserSavedVideos} />
      <Redirect to='/' />
    </Switch>
  </div>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('app')
// );


ReactDOM.render(
<BrowserRouter history={ browserHistory }>
  <App />
</BrowserRouter >, document.getElementById('app'));
