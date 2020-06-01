import React from 'react';
import { useUser } from './hooks/useUser';
import AuthApp from './app/AuthApp';
import UnAuthApp from './app/UnAuthApp';

function App() {
  const { user } = useUser();

  return (
    <>
      {user ? <AuthApp /> : <UnAuthApp />}
    </>
  );
}

export default App;
