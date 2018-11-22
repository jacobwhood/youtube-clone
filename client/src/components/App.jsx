import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage.jsx';
import Search from './Search.jsx';
import UserSavedVideos from './UserSavedVideos.jsx';

const App = () => (
  <div className='app-container'>
    <Switch>
      <Route exact path='/' render={props => <LandingPage />} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/users/:userId/videos' component={UserSavedVideos} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
