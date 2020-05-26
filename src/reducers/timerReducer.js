import { changeState } from '../utils/changeState';
import { reset } from '../utils/reset';

export function timerReducer(state, action) {
  switch (action.type) {
    case 'Pomodoro':
      return state.iteration === 3 ? changeState(state, 'Long break') : changeState(state, 'Break');

    case 'Break':
    case 'Long break':
      return changeState(state, 'Pomodoro');

    case 'toggleTimer':
      return {
        ...state,
        active: !state.active
      };

    case 'toggleRepeat':
      return {
        ...state,
        repeat: !state.repeat
      };

    case 'resetTimer':
      return reset(state, 'timer');

    case 'resetSet':
      return reset(state, 'set');

    case 'tick':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
        timePassed: state.totalTime - (state.timeLeft - 1)
      };

    case 'save':
      localStorage.setItem('timer', JSON.stringify(state));
      return state;

    case 'sync':
      let storedTimer = JSON.parse(localStorage.getItem('timer'));
      let storedSettings = JSON.parse(localStorage.getItem('user')).settings;

      if (storedTimer && storedSettings) { //  && storedTimer.equals(state) https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
        if (storedTimer.times.pomodoro !== storedSettings.pomodoro * 60 || storedTimer.times.break !== storedSettings.break * 60 || storedTimer.times.longBreak !== storedSettings.longBreak * 60) {
          return {
            ...storedTimer,
            timeLeft: storedSettings.pomodoro * 60,
            timePassed: 0,
            totalTime: storedSettings.pomodoro * 60,
            times: {
              pomodoro: storedSettings.pomodoro * 60,
              break: storedSettings.break * 60,
              longBreak: storedSettings.longBreak * 60
            },
            active: false,
            state: 'Pomodoro',
            iteration: 0,
            repeat: false
          };
        }
        return storedTimer;
      }
      return state;

    default:
      throw new Error('Unknown timer action: ' + action.type);
  }
}