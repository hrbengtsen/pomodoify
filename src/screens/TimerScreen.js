import React, { useState, useEffect, useCallback } from 'react';
import { Container, Button, FormGroup, FormControl, Label, Icon } from '../components/UI';
import TimerCircle from '../components/Timer/TimerCircle';

function TimerScreen(props) {
  const [timer, setTimer] = useState({
    timeLeft: 6,
    timePassed: 0,
    totalTime: 6,
    active: false,
    state: 'Pomodoro',
    iteration: 0,
    loop: false,
  });
  const [timerIcon, setTimerIcon] = useState("play-circle");
  const [countdown, setCountdown] = useState(null);

  const toggleTimer = useCallback((isActive = timer.active) => {
    if (!isActive) {
      setTimer(prevTimer => ({
        ...prevTimer,
        active: true
      }));
      setCountdown(setInterval(() => {
        setTimer(prevTimer => ({
          ...prevTimer,
          timeLeft: prevTimer.timeLeft - 1,
          timePassed: prevTimer.totalTime - (prevTimer.timeLeft - 1)
        }));
      }, 1000));
    } 
    else {
      setTimer(prevTimer => ({
        ...prevTimer,
        active: false
      }));
      setCountdown(clearInterval(countdown));
    }
  }, [timer.active, countdown]);

  const toggleLoop = () => {
    if (!timer.loop) {
      setTimer(prevTimer => ({
        ...prevTimer,
        loop: true
      }));
    }
    else {
      setTimer(prevTimer => ({
        ...prevTimer,
        loop: false
      }));
    }
  }

  const resetTimer = useCallback((state) => {
    setCountdown(clearInterval(countdown));
    let time = 0;

    switch (state) {
      case 'Pomodoro':
      default:
        time = 6;
        break;

      case 'Break':
        time = 4;
        break;

      case 'Long break':
        time = 5;
        break;
    }

    setTimer(prevTimer => ({
      ...prevTimer,
      timeLeft: time,
      timePassed: 0,
      totalTime: time,
      active: false,
      state: state
    }));
  }, [countdown]);

  const resetSet = () => {
    setTimer(prevTimer => ({
      ...prevTimer,
      iteration: 0
    }));
    resetTimer('Pomodoro');
  }

  useEffect(() => {
    setTimerIcon(timer.active ? "pause-circle" : "play-circle");
  }, [timer.active]);

  useEffect(() => {
    if (timer.timeLeft === 0) {
      switch (timer.state) {
        case 'Pomodoro':
        default:
          setTimer(prevTimer => ({
            ...prevTimer,
            iteration: prevTimer.iteration + 1
          }));
          timer.iteration === 3 ? resetTimer('Long break') : resetTimer('Break');
          // Provide isActive = false to play timer
          toggleTimer(false);
          break;
  
        case 'Break':
          resetTimer('Pomodoro');
          timer.loop ? toggleTimer(false) : toggleTimer();
          break;

        case 'Long break':
          setTimer(prevTimer => ({
            ...prevTimer,
            iteration: 0
          }));
          resetTimer('Pomodoro');
          timer.loop ? toggleTimer(false) : toggleTimer();
          break;
      }
    }
  }, [timer.timeLeft, timer.state, timer.loop, timer.iteration, resetTimer, toggleTimer]);

  function getMinutes() {
    return ("0" + Math.floor((timer.timeLeft % 3600) / 60)).slice(-2);
  }

  function getSeconds() {
    return ("0" + (timer.timeLeft % 60)).slice(-2);
  }

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Container mx="auto" textAlign="center" maxWidth="480px">
        <Button variant="timerControl" onClick={() => toggleTimer()}>
          <Icon icon={timerIcon} size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
        <Button variant="timerControl" onClick={() => resetTimer(timer.state)}>
          <Icon icon="redo-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
        <Button variant="timerControl" className={timer.loop ? 'active' : ''} onClick={() => toggleLoop()}>
         <Icon icon="sync-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
      </Container>
      <Container textAlign="center" mt="xxxl">
        <TimerCircle min={getMinutes()} sec={getSeconds()} state={timer.state} iteration={timer.iteration} active={timer.active} toggleTimer={toggleTimer} progress={(timer.timePassed / timer.totalTime) * 100} />
      </Container>
      {timer.iteration > 0 && 
      <Container mx="auto" textAlign="center" mt="xxxl">
        <Button fontWeight="bold" onClick={() => resetSet()}>Reset set</Button>
      </Container>}
      <Container textAlign="center" my="xxxl" maxWidth={["300px", "375px"]} mx="auto" px="lg">
        <FormGroup>
          <Label fontWeight="bold">Task at hand</Label>
          <FormControl placeholder="Write your task here..." />
        </FormGroup>
      </Container> 
    </Container>
  );
}

export default TimerScreen;
