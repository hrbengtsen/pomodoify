import React, { useState, useEffect, useReducer } from 'react';
import { Container, Button, Icon, Text } from '../UI';
import TimerCircle from './TimerCircle';

const changeState = (state, nextState) => {
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

const reset = (state, type) => {
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

function reducer(state, action) {
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
      console.log("saving timer: " + JSON.stringify(state));
      return state;

    case 'sync':
      let storedTimer = JSON.parse(localStorage.getItem('timer'));
      let storedSettings = JSON.parse(localStorage.getItem('user')).settings;
      console.log("syncing timer: " + JSON.stringify(state));
      if (storedTimer && storedSettings) {
        if (storedTimer.times.pomodoro !== storedSettings.pomodoro * 60 || storedTimer.times.break !== storedSettings.break * 60 || storedTimer.times.longBreak !== storedSettings.longBreak * 60) {
          return {
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
      throw new Error('Unknown timer action.type');
  }
}

function Timer(props) {
  const { userSettings } = props;

  const [timerState, timerDispatch] = useReducer(reducer, {
    timeLeft: userSettings.pomodoro * 60,
    timePassed: 0,
    totalTime: userSettings.pomodoro * 60,
    times: {
      pomodoro: userSettings.pomodoro * 60,
      break: userSettings.break * 60,
      longBreak: userSettings.longBreak * 60
    },
    active: false,
    state: 'Pomodoro',
    iteration: 0,
    repeat: false,
  });
  const [timerIcon, setTimerIcon] = useState("play-circle");

  useEffect(() => {
    timerDispatch({ type: 'sync' });
  }, []);

  useEffect(() => {
    timerDispatch({ type: 'save' });
  }, [timerState]);

  useEffect(() => {
    let interval = null;
    if (timerState.active) {
      interval = setInterval(() => {
        timerDispatch({ type: 'tick' });
      }, 1000);
    }
    else if (!timerState.active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerState.active]);

  useEffect(() => {
    setTimerIcon(timerState.active ? "pause-circle" : "play-circle");
  }, [timerState.active]);

  useEffect(() => {
    if (timerState.timeLeft === 0) {
      timerDispatch({ type: timerState.state });
    }
  }, [timerState.timeLeft, timerState.state]);

  const toggleTimer = () => {
    timerDispatch({ type: 'toggleTimer' });
  }

  const toggleRepeat = () => {
    timerDispatch({ type: 'toggleRepeat' });
  }

  const resetTimer = () => {
    timerDispatch({ type: 'resetTimer' });
  }

  const resetSet = () => {
    timerDispatch({ type: 'resetSet' });
  }

  function getMinutes() {
    if (timerState.timeLeft === 3600) {
      return "60";
    }
    return ("0" + Math.floor((timerState.timeLeft % 3600) / 60)).slice(-2);
  }

  function getSeconds() {
    return ("0" + (timerState.timeLeft % 60)).slice(-2);
  }

  return (
    <>
      <Container mx="auto" textAlign="center" maxWidth="480px">
        <Button variant="timerControl" onClick={() => resetTimer()}>
          <Icon icon="redo-alt" size="3x" style={{ verticalAlign: 'middle' }} />
          <Text mb="0">Reset</Text>
        </Button>
        <Button variant="timerControl" onClick={() => toggleTimer()}>
          <Icon icon={timerIcon} size="3x" style={{ verticalAlign: 'middle' }} />
          <Text mb="0">{timerState.active ? 'Pause' : 'Start'}</Text>
        </Button>
        <Button variant="timerControl" className={timerState.repeat ? 'active' : ''} onClick={() => toggleRepeat()}>
        <Icon icon="sync-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        <Text mb="0">Repeat</Text>
        </Button>
      </Container>
      <Container textAlign="center" mt="xxxl">
        <TimerCircle min={getMinutes()} sec={getSeconds()} state={timerState.state} iteration={timerState.iteration} active={timerState.active} toggleTimer={toggleTimer} progress={(timerState.timePassed / timerState.totalTime) * 100} />
      </Container>
      {timerState.iteration > 0 && 
      <Container mx="auto" textAlign="center" mt="xxxl">
        <Button fontWeight="bold" onClick={() => resetSet()}>Reset set</Button>
      </Container>}
    </>
  );
}

export default Timer;