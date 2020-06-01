import React from 'react';
import { Container } from '../UI';
import UserTip from './UserTip';

function UserFeed() {
  return (
    <Container maxWidth="480px" mx="auto" mt="xxxl" px="lg">
      <UserTip />
        
    </Container>
  );
}

export default UserFeed;

/*
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
*/