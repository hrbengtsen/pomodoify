import React, { createContext, useReducer, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import { timerReducer } from '../reducers/timerReducer';
import { getMinutes } from '../utils/getMinutes';
import { getSeconds } from '../utils/getSeconds';

export const TimerContext = createContext();

function TimerProvider({ children }) {
  const { user } = useUser();
  const [timer, timerDispatch] = useReducer(timerReducer, {
    timeLeft: user.settings.pomodoro * 60,
    timePassed: 0,
    totalTime: user.settings.pomodoro * 60,
    times: {
      pomodoro: user.settings.pomodoro * 60,
      break: user.settings.break * 60,
      longBreak: user.settings.longBreak * 60
    },
    active: false,
    state: 'Pomodoro',
    iteration: 0,
    repeat: false,
  });
  
  useEffect(() => {
    timerDispatch({ type: 'sync' });
  }, []);

  useEffect(() => {
    timerDispatch({ type: 'save' });
  }, [timer]);

  useEffect(() => {
    document.title = 'Pomodoify - ' + getMinutes(timer.timeLeft) + ":" + getSeconds(timer.timeLeft);
  }, [timer.timeLeft]);

  useEffect(() => {
    let interval = null;
    if (timer.active) {
      interval = setInterval(() => {
        timerDispatch({ type: 'tick' });
      }, 1000);
    }
    else if (!timer.active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer.active]);

  useEffect(() => {
    if (timer.timeLeft === 0) {
      timerDispatch({ type: timer.state });
    }
  }, [timer.timeLeft, timer.state]);

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

  return (
    <TimerContext.Provider value={{
      timer,
      toggleTimer,
      toggleRepeat,
      resetTimer,
      resetSet
    }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;