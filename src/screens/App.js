import React, { useState } from 'react';
import LandingScreen from './LandingScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
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
      <div style={{ margin: '65px 0' }}>
        <Switch>
          <Route exact path="/" render={() =>
            <LandingScreen userName={user.name} />
          } />
          <Route path="/timer" component={TimerScreen} />
          <Route path="/progression" component={ProgressionScreen} />
          <Route path="/settings" component={SettingsScreen} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
