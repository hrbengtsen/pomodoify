import React from 'react';
import { Container, Heading } from '../components/UI';
import ProgressBar from '../components/Progression/Progressbar';
import SetGoalSheet from '../components/Sheets/SetGoalSheet';
import AchievementSheet from '../components/Sheets/AchievementSheet';

function ProgressionScreen(props) {
  return (
    <Container>
      <Heading textAlign="center" fontWeight="reg" p="0">Progression</Heading>
      <Container maxWidth="480px" margin="auto" px="xl">
        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Custom rewards
        </Heading>
        <ProgressBar percentage={25} name="Reward name" progress={2} total={4} />
        <Container textAlign="center" my="xxxl">
          <SetGoalSheet />
        </Container>

        <Heading mt="xl" type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Achievements
        </Heading>
        <AchievementSheet />
      </Container>
    </Container>
  );
}

export default ProgressionScreen;
