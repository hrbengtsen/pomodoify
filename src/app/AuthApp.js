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
import TimerProvider from '../contexts/TimerContext';
import ProgressionProvider from '../contexts/ProgressionContext';
import { Slide } from 'react-toastify';
import { StyledToastContainer } from '../utils/StyledToastContainer';
import 'react-toastify/dist/ReactToastify.min.css';

function AuthApp() {
  const location = useLocation();

  return (
    <ProgressionProvider>
      <TimerProvider>
        <ScrollToTop />
        <Header />
        <StyledToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={2}
          transition={Slide}
        />
        <RouteTransitions locationKey={location.key} {...location.state}>
          <Switch location={location}>
            <Route exact path="/pomodoify">
              <Redirect to="/pomodoify/home" />
            </Route>
            <Route path="/pomodoify/home">
              <UserScreen />
            </Route>
            <Route path="/pomodoify/timer">
              <TimerScreen />
            </Route>
            <Route path="/pomodoify/progression">
              <ProgressionScreen />
            </Route>
            <Route path="/pomodoify/settings">
              <SettingsScreen />
            </Route>
          </Switch>
        </RouteTransitions>
        <Footer />
      </TimerProvider>
    </ProgressionProvider>
  );
}

export default AuthApp;