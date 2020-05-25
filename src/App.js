import React from 'react';
import { useUser } from './hooks/useUser';
import AuthApp from './app/AuthApp';
import UnAuthApp from './app/UnAuthApp';

/*
  To-do:
  - Rewards
    - Achievements
  - Home page (latest/streak)
  - Sound
  - Relevant toasts (notifications like: Saved settings!)
  - Polish
  - Firebase integration
*/

function App() {
  const { user } = useUser();

  return (
    <>
      {user ? <AuthApp /> : <UnAuthApp />}
    </>
  );
}

export default App;
