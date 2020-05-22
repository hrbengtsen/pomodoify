import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme, GlobalStyles } from './components/UI';
import './assets/icons/fontawesome';
import { ThemeProvider } from 'styled-components';
import UserProvider from './contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
