import React, { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import UserScreen from './UserScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/Routing/PrivateRoute';
import BaseRoute from '../components/Routing/BaseRoute';
import RouteTransitions from '../components/Routing/Transitions/RouteTransitions';
import ScrollToTop from '../components/Routing/ScrollToTop';

/*
  To-do:
  - Rewards
  - Achievements
  - Home page (latest/streak)
        - Pause timer when not on timer page (implement this)
  - Sound
  - Relevant toasts (notifications like: Saved settings!)
  - Polish
  - Firebase integration
*/

function App() {
  const defaultUser = {
    name: 'No user',
    settings: {
      pomodoro: 25, // 1500 sec
      break: 5, // 300 sec
      longBreak: 15, // 900 sec
      sound: 'Sound 1',
      volume: 50,
      unfocusPause: false
    },
    achievements: {},
    rewards: {}
  };

  const [user, setUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  function addUser(username) {
    let user = {
      ...defaultUser,
      name: username
    }
    setUser(user);
  }

  function deleteUser() {
    localStorage.removeItem('user');
    setUser(null);
  }

  function updateSettings(newSettings) {
    setUser({
      ...user,
      settings: newSettings
    });
  }

  const navigationRoutes = ['/home', '/timer', '/progression', '/settings'];

  return (
    <>
      {user ? (
        <>
          <ScrollToTop />
          <Route path={navigationRoutes} component={Header} />
          <RouteTransitions locationKey={location.key} {...location.state}>
            <Switch location={location}>
              <Route path="/home">
                <UserScreen username={user.name} />
              </Route>
              <Route path="/timer">
                <TimerScreen userSettings={user.settings} />
              </Route>
              <Route path="/progression">
                <ProgressionScreen />
              </Route>
              <Route path="/settings">
                <SettingsScreen userSettings={user.settings} defaultSettings={defaultUser.settings} deleteUser={deleteUser} updateSettings={updateSettings} />
              </Route>
              <Redirect to="/home" />
            </Switch>
          </RouteTransitions>
          <Route path={navigationRoutes} component={Footer} />
        </>
      ) : (
        <>
          <BaseRoute user={user} exact path="/">
            <LandingScreen addUser={addUser} />
          </BaseRoute>
          <Redirect to="/" />
        </>
      )}
    </>
  );
}

export default App;
