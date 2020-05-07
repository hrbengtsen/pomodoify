import React, { useState } from 'react';
import LandingScreen from './LandingScreen';
import TimerScreen from './TimerScreen';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  make dummy authentication, by making isAuth route switch if you dont have a username in localstorage (What is your name? screen to set it) - to quickly be able to integrate firebase
*/

function App() {
  const [user, setUser] = useState({
    name: 'User'
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() =>
          <LandingScreen userName={user.name} />
        } />
        <Route path="/timer" component={TimerScreen} />
      </Switch>
    </Router>
  );
}

export default App;
