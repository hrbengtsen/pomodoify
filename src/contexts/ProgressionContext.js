import React, { createContext, useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer';
import { getAchievements } from '../utils/getAchievements';

export const ProgressionContext = createContext();

function ProgressionProvider({ children }) {
  const { timer } = useTimer();
  const [progression, setProgression] = useState({
    achievements: getAchievements(),
    pomodoros: 0,
    sets: 0
  });

  useEffect(() => {
    let storedProgression = JSON.parse(localStorage.getItem('progression'));
    if (storedProgression) {
      setProgression(storedProgression);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('progression', JSON.stringify(progression));
  }, [progression]);

  useEffect(() => {
    updateProgression(timer.completed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.completed]);

  function updateProgression(completed) {
    let updatedAchievements = progression.achievements.map((achievement) => {
      if (completed.pomodoros >= achievement.pomodoros) {
        return {
          ...achievement,
          locked: false
        };
      }
      return achievement;
    });
    setProgression(prevProg => ({
      ...prevProg,
      achievements: updatedAchievements,
      pomodoros: completed.pomodoros,
      sets: completed.sets
    }));
  }

  return (
    <ProgressionContext.Provider value={{
      progression
    }}>
      {children}
    </ProgressionContext.Provider>
  );
}

export default ProgressionProvider;