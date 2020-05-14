import React, { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import UserScreen from './UserScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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

  function addUser(username) {
    let user = {
      name: username,
      settings: {},
      achievements: {},
      rewards: {},
    }
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  function deleteUser() {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <Router>
      <Route render={({ location }) => (
        <>
          {user 
          ?
            <>
              <Header />
              <div style={{ margin: '65px 0' }}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" render={() =>
                    <UserScreen username={user.name} />
                  } />
                  <Route path="/timer" component={TimerScreen} />
                  <Route path="/progression" component={ProgressionScreen} />
                  <Route path="/settings" render={() => <SettingsScreen deleteUser={deleteUser} />} />
                </Switch>
              </div>
              <Footer />
            </>
          :
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <LandingScreen addUser={addUser} />} />
                <Redirect to="/" />
              </Switch>
            </AnimatePresence>
          }
        </>
      )} />
    </Router>
  );
}

export default App;
