import { getDefaultUser } from '../utils/getDefaultUser';

export function userReducer(state, action) {
  switch (action.type) {
    case 'save':
      localStorage.setItem('user', JSON.stringify(state));
      return state;

    case 'sync':
      let storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        return storedUser;
      }
      return state;

    case 'add':
      const defaultUser = getDefaultUser();
      const user = {
        ...defaultUser,
        name: action.payload
      }
      return user;

    case 'delete':
      localStorage.removeItem('timer');
      localStorage.removeItem('task');
      localStorage.removeItem('progression');
      return null;

    case 'updateUser':
      return {
        ...state,
        name: action.payload.name,
        settings: action.payload.settings
      };

    default:
      throw new Error('Unknown user action: ' + action.type);
  }
}