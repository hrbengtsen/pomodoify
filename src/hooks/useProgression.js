import { useContext } from 'react';
import { ProgressionContext } from '../contexts/ProgressionContext';

export function useProgression() {
  const { progression, updateProgression, resetNewAchievements } = useContext(ProgressionContext);
  return {
    progression,
    updateProgression,
    resetNewAchievements
  };
}