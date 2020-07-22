import React from 'react';
import { Container, Heading } from '../components/UI';
import AchievementSheet from '../components/Sheets/AchievementSheet';
import Completed from '../components/Progression/Completed';

function ProgressionScreen() {
  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0">Progression</Heading>
      <Container maxWidth="480px" mx="auto" px="lg">
        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Completed
        </Heading>
        <Completed />

        <Heading mt="xl" type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Achievements
        </Heading>
        <AchievementSheet />
      </Container>
    </Container>
  );
}

export default ProgressionScreen;