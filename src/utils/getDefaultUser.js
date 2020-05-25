export function getDefaultUser() {
  const defaultUser = {
    name: 'Default user',
    settings: {
      pomodoro: 25,
      break: 5,
      longBreak: 15,
      sound: 'Sound 1',
      volume: 50
    }
  };
  return defaultUser;
}