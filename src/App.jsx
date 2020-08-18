import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/Homepage/Homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={HomePage} />
        <Route exact path="/shop/:category" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
