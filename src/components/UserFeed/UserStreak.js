import React from 'react';
import { Container, Heading, Icon, Text } from '../UI';
import { useProgression } from '../../hooks/useProgression';

function UserStreak() {
  const { progression } = useProgression();

  if (progression.sessionStreak < 2) return null;

  return (
    <Container my="lg">
      <Heading type="h5">
        <Icon icon="fire-alt" mr="md" color="#FDD10B" />
        Streak
      </Heading>
      <Container backgroundColor="bg.1" p="lg" borderRadius="md">
        <Text textAlign="center" mb="0">You have been productive for <b>{progression.sessionStreak}</b> days in a row!</Text>
      </Container>
    </Container>
  );
}

export default UserStreak;