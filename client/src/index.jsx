import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route } from 'react-router-dom';

const App = () => (
  <div className='app-container'>
    Hello, world
  </div>
);

ReactDOM.render(
  <App />, document.getElementById('app')
);
