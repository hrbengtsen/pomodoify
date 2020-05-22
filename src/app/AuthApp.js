import React from 'react';
import UserScreen from '../screens/UserScreen';
import TimerScreen from '../screens/TimerScreen';
import ProgressionScreen from '../screens/ProgressionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import RouteTransitions from '../components/Routing/Transitions/RouteTransitions';
import ScrollToTop from '../components/Routing/ScrollToTop';
import { useAuthRoutes } from '../hooks/useAuthRoutes';
import TimerProvider from '../contexts/TimerContext';

function AuthApp() {
  const authRoutes = useAuthRoutes();
  const location = useLocation();

  return (
    <TimerProvider>
      <ScrollToTop />
      <Route path={authRoutes} component={Header} />
      <RouteTransitions locationKey={location.key} {...location.state}>
        <Switch location={location}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <UserScreen />
          </Route>
          <Route path="/timer">
            <TimerScreen />
          </Route>
          <Route path="/progression">
            <ProgressionScreen />
          </Route>
          <Route path="/settings">
            <SettingsScreen />
          </Route>
        </Switch>
      </RouteTransitions>
      <Route path={authRoutes} component={Footer} />
    </TimerProvider>
  );
}

export default AuthApp;