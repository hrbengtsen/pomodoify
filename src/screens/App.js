import React, { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import UserScreen from './UserScreen';
import TimerScreen from './TimerScreen';
import ProgressionScreen from './ProgressionScreen';
import SettingsScreen from './SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { Route, Switch, useLocation } from 'react-router-dom';
import PrivateRoute from '../components/Navigation/PrivateRoute';
import BaseRoute from '../components/Navigation/BaseRoute';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const noUser = {
    name: 'No user',
    settings: {},
    achievements: {},
    rewards: {}
  };

  const [user, setUser] = useState(noUser);
  const [isAuth, setAuthentication] = useState(false);

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setAuthentication(true);
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
    setAuthentication(true);
  }

  function deleteUser() {
    localStorage.removeItem('user');
    setUser(noUser);
    setAuthentication(false);
  }

  const navigationRoutes = ['/home', '/timer', '/progression', '/settings'];

  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Route path={navigationRoutes} component={Header} />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
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
        </CSSTransition>
      </TransitionGroup>
      <Route path={navigationRoutes} component={Footer} />
    </>
  );
}

export default App;
