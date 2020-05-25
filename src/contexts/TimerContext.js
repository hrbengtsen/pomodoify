import React, { createContext, useReducer, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import { timerReducer } from '../reducers/timerReducer';
import { getMinutes } from '../utils/getMinutes';
import { getSeconds } from '../utils/getSeconds';
import { useHowl, Play } from 'rehowl';
import Tick from '../assets/sounds/tick.mp3';
import { useState } from 'react';

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
    completed: {
      pomodoros: 0,
      sets: 0
    },
    active: false,
    state: 'Pomodoro',
    iteration: 0,
    repeat: false,
  });
  const { howl } = useHowl({ src: Tick });
  const [playTickSound, setPlayTickSound] = useState(false);
  
  useEffect(() => {
    timerDispatch({ type: 'sync' });
  }, [user.settings]);

  useEffect(() => {
    timerDispatch({ type: 'save' });
  }, [timer]);

  useEffect(() => {
    if (timer.active) {
      document.title = `${getMinutes(timer.timeLeft)}:${getSeconds(timer.timeLeft)} (${timer.state}) - Pomodoify`;
    }
    else {
      document.title = 'Pomodoify'
    }
  }, [timer.active, timer.state, timer.timeLeft]);

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
    setPlayTickSound(true);
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
      <Play howl={howl} pause={!playTickSound} volume={user.settings.volume} onEnd={() => setPlayTickSound(false)} />
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;