import React, { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import UserScreen from './UserScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { Route, Switch, useLocation } from 'react-router-dom';
import PrivateRoute from '../components/Routing/PrivateRoute';
import BaseRoute from '../components/Routing/BaseRoute';
import RouteTransitions from '../components/Routing/Transitions/RouteTransitions';
import ScrollToTop from '../components/Routing/ScrollToTop';

/*
  To-do:
    - Timer
  - Goals
  - Achievements
  - Home page (latest/streak)
  - Settings
  - Sound
  - Polish
  - Firebase integration
*/

function App() {
  const noUser = {
    name: 'No user',
    settings: {},
    achievements: {},
    rewards: {}
  };

  const [user, setUser] = useState(noUser);
  const [isAuth, setAuth] = useState(true);

  const location = useLocation();

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      
    } else { 
      setAuth(false); 
    }
  }, []);

  function addUser(username) {
    let user = {
      name: username,
      settings: {},
      achievements: {},
      rewards: {}
    }
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setAuth(true);
  }

  function deleteUser() {
    localStorage.removeItem('user');
    setUser(noUser);
    setAuth(false);
  }

  const navigationRoutes = ['/home', '/timer', '/progression', '/settings'];

  return (
    <>
      <ScrollToTop />
      <Route path={navigationRoutes} component={Header} />
      <RouteTransitions locationKey={location.key} {...location.state}>
        <Switch location={location}>
          <BaseRoute isAuth={isAuth} exact path="/">
            <LandingScreen addUser={addUser} />
          </BaseRoute>
          <PrivateRoute isAuth={isAuth} path="/home">
            <UserScreen username={user.name} />
          </PrivateRoute>
          <PrivateRoute isAuth={isAuth} path="/timer">
            <TimerScreen />
          </PrivateRoute>
          <PrivateRoute isAuth={isAuth} path="/progression">
            <ProgressionScreen />
          </PrivateRoute>
          <PrivateRoute isAuth={isAuth} path="/settings">
            <SettingsScreen deleteUser={deleteUser} />
          </PrivateRoute>
        </Switch>
      </RouteTransitions>
      <Route path={navigationRoutes} component={Footer} />
    </>
  );
}

export default App;
