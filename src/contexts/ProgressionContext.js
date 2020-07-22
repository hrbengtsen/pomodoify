import React, { createContext, useEffect, useState } from 'react';
import { getAchievements } from '../utils/getAchievements';
import { toast } from 'react-toastify';

export const ProgressionContext = createContext();

function ProgressionProvider({ children }) {
  const [progression, setProgression] = useState({
    achievements: getAchievements(),
    pomodoros: 0,
    sets: 0,
    sessionStreak: 0,
    prevSession: null
  });

  useEffect(() => {
    let storedProgression = JSON.parse(localStorage.getItem('progression'));
    if (storedProgression) {
      let isNextDay = false;

      const newSession = new Date();
      const newSessionDay = newSession.getDay();
      
      const prevSession = new Date(storedProgression.prevSession);
      const prevSessionDay = prevSession.getDay();

      if (prevSessionDay === 59) {
        if (newSessionDay === 0) {
          isNextDay = true;
        }
      }
      else {
        if (newSessionDay === prevSessionDay + 1) {
          isNextDay = true;
        }
      }

      const shouldResetStreak = newSessionDay === prevSessionDay ? false : (isNextDay ? false : true);

      const newSessionStreak = shouldResetStreak ? 1 : (
        isNextDay ? storedProgression.sessionStreak + 1 : storedProgression.sessionStreak);

      setProgression({
        ...storedProgression,
        sessionStreak: newSessionStreak,
        prevSession: newSession
      });

      if (newSessionStreak !== storedProgression.sessionStreak) {
        let newUnlock = false;

        let updatedAchievements = storedProgression.achievements.map((achievement) => {
          // Check to prevent same achievement getting unlocked multiple times
          if (achievement.locked) {
            if (achievement.streak) {
              if (newSessionStreak >= achievement.streak) {
                newUnlock = true;
                return {
                  ...achievement,
                  locked: false,
                  isNew: true
                }
              }
            }
          }
          return achievement;
        });

        setProgression(prevProg => ({
          ...prevProg,
          achievements: updatedAchievements
        }));

        if (newUnlock) {
          toast('New achievement unlocked!', {
            toastId: 'achievement-unlock-toast'
          });
        }
      }
    }
    else {
      setProgression(prevProg => ({
        ...prevProg,
        sessionStreak: 1,
        prevSession: new Date()
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('progression', JSON.stringify(progression));
  }, [progression]);

  function updateProgression() {
    let newUnlock = false;

    // Calculate new base progression
    let newPomodoros = progression.pomodoros + 1;
    let newSets = Math.floor((progression.pomodoros + 1) / 4);

    let updatedAchievements = progression.achievements.map((achievement) => {
      // Check to prevent same achievement getting unlocked multiple times
      if (achievement.locked) {
        // Check for if it has something to do with pomodoros
        if (achievement.pomodoros) {
          if (newPomodoros >= achievement.pomodoros) {
            newUnlock = true;
            return {
              ...achievement,
              locked: false,
              isNew: true
            };
          }
        }
        // Check for if it has something to do with sets
        else if (achievement.sets) {
          if (newSets >= achievement.sets) {
            newUnlock = true;
            return {
              ...achievement,
              locked: false,
              isNew: true
            };
          }
        }
      }
      return achievement;
    });

    setProgression(prevProg => ({
      ...prevProg,
      achievements: updatedAchievements,
      pomodoros: newPomodoros,
      sets: newSets
    }));

    if (newUnlock) {
      toast('New achievement unlocked!', {
        toastId: 'achievement-unlock-toast'
      });
    }
  }

  function resetNewAchievements() {
    let newUnlock = false;

    let updatedAchievements = progression.achievements.map((achievement) => {
      if (achievement.isNew) {
        newUnlock = true;
        return {
          ...achievement,
          isNew: false
        }
      }
      return achievement;
    });

    if (newUnlock) {
      setProgression(prevProg => ({
        ...prevProg,
        achievements: updatedAchievements
      }));
    }
  }

  return (
    <ProgressionContext.Provider value={{
      progression,
      updateProgression,
      resetNewAchievements
    }}>
      {children}
    </ProgressionContext.Provider>
  );
}

export default ProgressionProvider;