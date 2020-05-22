import React from 'react';
import { Container, FormGroup, FormControl, Label } from '../components/UI';
import Timer from '../components/Timer/Timer';

function TimerScreen() {
  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Timer />
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
