import React from 'react';
import { Container, Heading, RouterButton, Badge } from '../components/UI';
import { useUser } from '../hooks/useUser';
import { useProgression } from '../hooks/useProgression';
import UserFeed from '../components/UserFeed/UserFeed';

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
        <RouterButton to="/pomodoify/timer" m="0" mr="xl" variant="primary">Start a timer</RouterButton>
        <Container display="inline-block">
          <RouterButton to="/pomodoify/progression" m="0" ml="xl" fontWeight="bold">Check progress</RouterButton>
          {amountOfNewAchievements > 0 ? <Badge backgroundColor="secondary" color="bg.0" borderRadius="circle" position="absolute" right="-7px" top="-7px" width="22px" fontSize="60%" scaleWithSibling>{amountOfNewAchievements}</Badge> : ''}
        </Container>
      </Container>
      <UserFeed />
    </Container>
  );
}

export default UserScreen;