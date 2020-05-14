import React from 'react';
import { Container, Heading, RouterButton, Text, Icon } from '../components/UI';

function UserScreen(props) {
  const { username } = props;

  return (
    <Container>
      <Heading textAlign="center" fontWeight="reg" p="0" px="xl">Pomodoify</Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg" px="xl">Welcome back {username}! Ready to get to work?</Heading>
      <Container textAlign="center" mt="xxxl">
        <RouterButton to="/timer" m="0" mr="xl" variant="primary">Start a timer</RouterButton>
        <RouterButton to="/progression" m="0" ml="xl" fontWeight="bold">Check progress</RouterButton>
      </Container>
      <Container maxWidth="480px" mx="auto" mt="xxxl" px="xl">
        <Container my="lg">
          <Heading type="h5">
            <Icon icon="fire-alt" mr="md" color="#FDD10B" />
            Streak
          </Heading>
          <Container backgroundColor="bg.1" p="lg" borderRadius="md">
            <Text textAlign="center" mb="0">You have been productive for <b>2</b> days in a row!</Text>
          </Container>
        </Container>
        <Container my="lg">
          <Heading type="h5">
            <Icon icon="lock-open" mr="md" color="#FDD10B" />
            Latest progress
          </Heading>
          <Container backgroundColor="bg.1" p="lg" borderRadius="md" textAlign="center">
            <Text fontWeight="bold">Achievement</Text>
            <Text mb="0">Your first Pomodoro</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default UserScreen;
