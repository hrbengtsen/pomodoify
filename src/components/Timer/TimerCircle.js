import React from 'react';
import { Container, Button, Heading, Text } from '../UI';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function TimerCircle(props) {
  const { progress } = props;

  return (
    <Container width={["225px", "300px"]} margin="auto">
      <Button borderRadius="circle" backgroundColor="bg.1" p="0" m="0" border="none">
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
          <Text m="0">Pomodoro</Text>
          <Heading fontWeight="reg" p="0">25:00</Heading>
          <Text m="0">0/4</Text>
        </CircularProgressbarWithChildren>
      </Button>
    </Container>
  );
}

export default TimerCircle;