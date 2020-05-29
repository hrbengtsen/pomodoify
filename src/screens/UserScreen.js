import React from 'react';
import { Container, Heading, RouterButton, Badge } from '../components/UI';
import { useUser } from '../hooks/useUser';
import { useProgression } from '../hooks/useProgression';

function UserScreen() {
  const { user } = useUser();
  const { progression } = useProgression();
  let amountOfNewAchievements = 0;
  progression.achievements.forEach((achievement) => {
    if (achievement.isNew) {
      amountOfNewAchievements++;
    }
  });

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0" px="lg">Pomodoify</Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg" px="lg">Welcome back {user.name}! Ready to get to work?</Heading>
      <Container textAlign="center" mt="xxxl">
        <RouterButton to="/timer" m="0" mr="xl" variant="primary">Start a timer</RouterButton>
        <Container display="inline-block">
          <RouterButton to="/progression" m="0" ml="xl" fontWeight="bold">Check progress</RouterButton>
          {amountOfNewAchievements > 0 ? <Badge backgroundColor="secondary" color="bg.0" borderRadius="circle" position="absolute" right="-7px" top="-7px" width="22px" fontSize="60%" scaleWithSibling>{amountOfNewAchievements}</Badge> : ''}
        </Container>
      </Container>
    </Container>
  );
}

export default UserScreen;

/*
<Container maxWidth="480px" mx="auto" mt="xxxl" px="lg">
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
*/