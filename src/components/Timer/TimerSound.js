import React, { useState, useEffect } from 'react';
import { useHowl, Play } from 'rehowl';
import Alarm from '../../assets/sounds/alarm.mp3';
import Cuckoo from '../../assets/sounds/cuckoo.mp3';
import Yoo from '../../assets/sounds/yoo.mp3';
import { useTimer } from '../../hooks/useTimer';
import { useUser } from '../../hooks/useUser';

function TimerSound() {
  const { timer } = useTimer();
  const { user } = useUser();
  const [play, setPlay] = useState(false);
  const timerSounds = [Alarm, Cuckoo, Yoo];
  const [currentSound, setCurrentSound] = useState(timerSounds[0]);
  const { howl } = useHowl({ src: currentSound });

  useEffect(() => {
    if (timer.timeLeft === 0) {
      setPlay(true);
    }
  }, [timer.timeLeft]);

  useEffect(() => {
    let newSound;
    switch (user.settings.sound) {
      case 'Alarm':
      default:
        newSound = timerSounds[0];
        break;

      case 'Cuckoo':
        newSound = timerSounds[1];
        break;

      case 'Yoo':
        newSound = timerSounds[2];
        break;
    }

    setCurrentSound(newSound);
  }, [user.settings.sound, timerSounds]);

  return (
    <Play howl={howl} pause={!play} volume={user.settings.volume} onEnd={() => setPlay(false)} /> 
  );
}

export default TimerSound;