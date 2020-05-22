import React, { useState, useEffect } from 'react';
import { Container, Button, Icon, Text } from '../UI';
import TimerCircle from './TimerCircle';
import { useTimer } from '../../hooks/useTimer';
import { getMinutes } from '../../utils/getMinutes';
import { getSeconds } from '../../utils/getSeconds';

function Timer() {
  const { timer, toggleTimer, toggleRepeat, resetTimer, resetSet } = useTimer();
  const [timerIcon, setTimerIcon] = useState("play-circle");

  useEffect(() => {
    setTimerIcon(timer.active ? "pause-circle" : "play-circle");
  }, [timer.active]);

  return (
    <>
      <Container mx="auto" textAlign="center" maxWidth="480px">
        <Button variant="timerControl" onClick={() => resetTimer()}>
          <Icon icon="redo-alt" size="3x" style={{ verticalAlign: 'middle' }} />
          <Text mb="0">Reset</Text>
        </Button>
        <Button variant="timerControl" onClick={() => toggleTimer()}>
          <Icon icon={timerIcon} size="3x" style={{ verticalAlign: 'middle' }} />
          <Text mb="0">{timer.active ? 'Pause' : 'Start'}</Text>
        </Button>
        <Button variant="timerControl" className={timer.repeat ? 'active' : ''} onClick={() => toggleRepeat()}>
        <Icon icon="sync-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        <Text mb="0">Repeat</Text>
        </Button>
      </Container>
      <Container textAlign="center" mt="xxxl">
        <TimerCircle min={getMinutes(timer.timeLeft)} sec={getSeconds(timer.timeLeft)} state={timer.state} iteration={timer.iteration} active={timer.active} toggleTimer={toggleTimer} progress={(timer.timePassed / timer.totalTime) * 100} />
      </Container>
      {timer.iteration > 0 && 
      <Container mx="auto" textAlign="center" mt="xxxl">
        <Button fontWeight="bold" onClick={() => resetSet()}>Reset set</Button>
      </Container>}
    </>
  );
}

export default Timer;