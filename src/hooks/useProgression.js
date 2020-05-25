import { useContext } from 'react';
import { ProgressionContext } from '../contexts/ProgressionContext';

export function useProgression() {
  const { progression } = useContext(ProgressionContext);
  return {
    progression
  };
}