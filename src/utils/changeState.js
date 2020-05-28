export const changeState = (state, nextState) => {
  let time = 0;
  let stayActive = false;
  let nextIteration = state.iteration;

  switch (nextState) {
    case 'Pomodoro':
    default:
      time = state.times.pomodoro;
      nextIteration = nextIteration === 4 ? 0 : nextIteration;
      break;

    case 'Break':
      time = state.times.break;
      stayActive = true;
      nextIteration++;
      break;

    case 'Long break':
      time = state.times.longBreak;
      stayActive = true;
      nextIteration++;
      break;
  }

  if (state.repeat) stayActive = true;

  return {
    ...state,
    timeLeft: time,
    timePassed: 0,
    totalTime: time,
    active: stayActive,
    state: nextState,
    iteration: nextIteration
  };
}