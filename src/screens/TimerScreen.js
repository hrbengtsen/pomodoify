import React from 'react';
import { Container, Button, FormGroup, FormControl, Label, Icon } from '../components/UI';
import TimerCircle from '../components/Timer/TimerCircle';

function TimerScreen(props) {
  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Container mx="auto" textAlign="center" maxWidth="480px">
        <Button variant="timer">
          <Icon icon="play-circle" size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
        <Button variant="timer">
          <Icon icon="redo-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
        <Button variant="timer">
         <Icon icon="sync-alt" size="3x" style={{ verticalAlign: 'middle' }} />
        </Button>
      </Container>
      <Container textAlign="center" mt="xxxl">
        <TimerCircle progress="20" />
      </Container>
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
