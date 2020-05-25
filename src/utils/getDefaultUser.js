export function getDefaultUser() {
  const defaultUser = {
    name: 'Default user',
    settings: {
      pomodoro: 25,
      break: 5,
      longBreak: 15,
      sound: 'Alarm',
      volume: 0.5
    }
  };
  return defaultUser;
}