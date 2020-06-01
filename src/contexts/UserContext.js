import React, { createContext, useEffect, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';
import { useHistory } from 'react-router-dom';
import { getDefaultUser } from '../utils/getDefaultUser';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, userDispatch] = useReducer(userReducer, null);
  const defaultUser = getDefaultUser();
  const history = useHistory();

  useEffect(() => {
    userDispatch({ type: 'sync' });
  }, []);

  useEffect(() => {
    userDispatch({ type: 'save' });
  }, [user]);

  function addUser(username) {
    userDispatch({ type: 'add', payload: username });
    history.push('/pomodoify/home');
  }

  function deleteUser() {
    userDispatch({ type: 'delete' });
    history.push('/pomodoify');
  }

  function updateUser(newName, newSettings) {
    userDispatch({ type: 'updateUser', payload: { name: newName, settings: newSettings }});
  }

  function updateAchievements(completed) {
    userDispatch({ type: 'updateAchievements', payload: completed });
  }

  return (
    <UserContext.Provider value={{
      user,
      defaultUser,
      addUser,
      deleteUser,
      updateUser,
      updateAchievements
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;