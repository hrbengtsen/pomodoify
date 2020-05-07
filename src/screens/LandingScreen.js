import React from 'react';
import { Container, Heading, RouterButton } from '../components/UI';

function LandingScreen(props) {
  return (
    <Container>
      <Heading textAlign="center" fontWeight="reg">Pomodoify</Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg">Welcome back {props.userName}! Ready to get to work?</Heading>
      <Container textAlign="center" mt="xxxl">
        <RouterButton to="/timer" m="0" mr="xl" variant="primary">Start a timer</RouterButton>
        <RouterButton to="/progression" m="0" ml="xl" fontWeight="bold">Check progress</RouterButton>
      </Container>
    </Container>
  );
}

export default LandingScreen;
