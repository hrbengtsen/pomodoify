import React, { useState, useEffect, useCallback } from 'react';
import { Container, Button, FormGroup, FormControl, Label, Icon, Text } from '../components/UI';
import TimerCircle from '../components/Timer/TimerCircle';

function TimerScreen(props) {
  const { userSettings } = props;

  // make this state (to remove memory leak + enable persistence)
  const convertedSettings = {
    pomodoro: userSettings.pomodoro * 60,
    break: userSettings.break * 60,
    longBreak: userSettings.longBreak * 60
  }

  /*useEffect(() => { - reload persistence
    if (userSettings === defaultSettings) {
      let storedSettings = JSON.parse(localStorage.getItem('user')).settings;
      setSettings(storedSettings);
    }
  }, [userSettings, defaultSettings]);*/

  const [timer, setTimer] = useState({
    timeLeft: convertedSettings.pomodoro,
    timePassed: 0,
    totalTime: convertedSettings.pomodoro,
    active: false,
    state: 'Pomodoro',
    iteration: 0,
    repeat: false,
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

  const toggleRepeat = () => {
    if (!timer.repeat) {
      setTimer(prevTimer => ({
        ...prevTimer,
        repeat: true
      }));
    }
    else {
      setTimer(prevTimer => ({
        ...prevTimer,
        repeat: false
      }));
    }
  }

  const resetTimer = useCallback((state) => {
    setCountdown(clearInterval(countdown));
    let time = 0;

    switch (state) {
      case 'Pomodoro':
      default:
        time = convertedSettings.pomodoro;
        break;

      case 'Break':
        time = convertedSettings.break;
        break;

      case 'Long break':
        time = convertedSettings.longBreak;
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
          timer.repeat ? toggleTimer(false) : toggleTimer();
          break;

        case 'Long break':
          setTimer(prevTimer => ({
            ...prevTimer,
            iteration: 0
          }));
          resetTimer('Pomodoro');
          timer.repeat ? toggleTimer(false) : toggleTimer();
          break;
      }
    }
  }, [timer.timeLeft, timer.state, timer.repeat, timer.iteration, resetTimer, toggleTimer]);

  function getMinutes() {
    if (timer.timeLeft === 3600) {
      return "60";
    }
    return ("0" + Math.floor((timer.timeLeft % 3600) / 60)).slice(-2);
  }

  function getSeconds() {
    return ("0" + (timer.timeLeft % 60)).slice(-2);
  }

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Container mx="auto" textAlign="center" maxWidth="480px">
        <Button variant="timerControl" onClick={() => resetTimer(timer.state)}>
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
