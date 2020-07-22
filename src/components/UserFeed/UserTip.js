import React, { useState } from 'react';
import { Container, Heading, Icon, Text } from '../UI';
import { getUserTips } from '../../utils/getUserTips';

function UserTip() {
  const tips = getUserTips();
  const randomTip = tips[tips.length * Math.random() | 0];
  const [currentTip] = useState(randomTip); 

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