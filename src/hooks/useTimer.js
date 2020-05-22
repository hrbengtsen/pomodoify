import { useContext } from 'react';
import { TimerContext } from '../contexts/TimerContext';

export function useTimer() {
  const { timer, toggleTimer, toggleRepeat, resetTimer, resetSet } = useContext(TimerContext);
  return {
    timer,
    toggleTimer,
    toggleRepeat,
    resetTimer,
    resetSet
  };
}