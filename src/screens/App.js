import React, { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import UserScreen from './UserScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  To-do:
  - Dummy authentication (with isAuth route and User object in localstorage: What is your name? screen)
  - Timer
  - Goals
  - Achievements
  - Settings
  - Sound
  - Polish
  - Firebase integration
*/

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      {user 
      ?
        <>
          <Header />
          <div style={{ margin: '65px 0' }}>
            <Switch>
              <Route exact path="/" render={() =>
                <UserScreen username={user.name} />
              } />
              <Route path="/timer" component={TimerScreen} />
              <Route path="/progression" component={ProgressionScreen} />
              <Route path="/settings" component={SettingsScreen} />
            </Switch>
          </div>
          <Footer />
        </>
      :
        <LandingScreen setUser={setUser} />
      }
    </Router>
  );
}

export default App;
