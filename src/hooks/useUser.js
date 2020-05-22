import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useUser() {
  const { user, defaultUser, addUser, deleteUser, updateUser } = useContext(UserContext);
  return {
    user,
    defaultUser,
    addUser,
    deleteUser,
    updateUser
  };
}