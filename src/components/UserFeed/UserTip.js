import React, { useState } from 'react';
import { Container, Heading, Icon, Text } from '../UI';
import { getUserTips } from '../../utils/getUserTips';

function UserTip() {
  const tips = getUserTips();
  const randomTip = tips[tips.length * Math.random() | 0];
  const [currentTip, setCurrentTip] = useState(randomTip); 

  return (
    <Container my="lg">
      <Heading type="h5">
        <Icon icon="info-circle" mr="md" color="#FDD10B" />
        Tip
      </Heading>
      <Container backgroundColor="bg.1" p="lg" borderRadius="md">
        <Text fontWeight="bold">{currentTip.title}</Text>
        <Text mb="0">{currentTip.desc}</Text>
      </Container>
    </Container>
  );
}

export default UserTip;

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