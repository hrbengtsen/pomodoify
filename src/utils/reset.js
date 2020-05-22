export const reset = (state, type) => {
  switch (type) {
    case 'timer':
    default: 
      let time = state.times.pomodoro;
      if (state.state === 'Break') time = state.times.break
      else if (state.state === 'Long break') time = state.times.longBreak

      return {
        ...state,
        timeLeft: time,
        timePassed: 0,
        totalTime: time,
        active: false
      };

    case 'set':
      return {
        ...state,
        timeLeft: state.times.pomodoro,
        timePassed: 0,
        totalTime: state.times.pomodoro,
        active: false,
        state: 'Pomodoro',
        iteration: 0
      };
  }
}