import React from 'react';
import { Container, Text } from '../UI';

function ProgressBar(props) {
  const { percentage, name, progress, total } = props;

  return (
    <Container my="xl">
      <Container display="flex">
        <Text mb="0">{name}</Text>
        <Text ml="auto" mb="0">{progress}/{total}</Text>
      </Container>
      <Container height="sm" borderRadius="xl" backgroundColor="bg.1">
        <Container width={`${percentage}%`} height="100%" backgroundColor="secondary" borderRadius="inherit" />
      </Container>
    </Container>
  );
}

export default ProgressBar;
