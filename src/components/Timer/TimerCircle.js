import React from 'react';
import { Container, Button, Heading, Text } from '../UI';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function TimerCircle(props) {
  const { progress, min, sec, state, iteration, active, toggleTimer } = props;

  return (
    <Container textAlign="center" mt="xxxl" mx="auto" maxWidth="300px">
      <Button variant="timer" className={active ? 'active' : ''} onClick={() => toggleTimer()}>
        <CircularProgressbarWithChildren 
          value={progress} 
          strokeWidth={3}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: '#3DB0A5',
            textColor: '#7C684B',
            trailColor: '#7C684B',
            backgroundColor: '#EDE1CA',
        })}>
          <Text m="0" fontWeight="bold">{state}</Text>
          <Heading fontWeight="reg" p="0">{min}:{sec}</Heading>
          <Text m="0">Set: {iteration}/4</Text>
        </CircularProgressbarWithChildren>
      </Button>
    </Container>
  );
}

export default TimerCircle;