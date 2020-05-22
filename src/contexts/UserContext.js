import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const defaultUser = {
    name: 'Default user',
    settings: {
      pomodoro: 25,
      break: 5,
      longBreak: 15,
      sound: 'Sound 1',
      volume: 50,
      unfocusPause: false
    },
    achievements: {},
    rewards: {}
  };
  const history = useHistory();

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
    localStorage.removeItem('timer');
    setUser(null);
    history.push('/');
  }

  function updateSettings(newSettings) {
    setUser({
      ...user,
      settings: newSettings
    });
  }

  return (
    <UserContext.Provider value={{
      user,
      defaultUser,
      addUser,
      deleteUser,
      updateSettings
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;