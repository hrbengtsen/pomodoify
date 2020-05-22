import React from 'react';
import { Container } from '../components/UI';
import Timer from '../components/Timer/Timer';
import Task from '../components/Timer/Task';

function TimerScreen() {
  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Timer />
      <Task />
    </Container>
  );
}

export default TimerScreen;
