import React from 'react';
import { Container, Row, Col, Text, Badge } from '../UI';
import { useProgression } from '../../hooks/useProgression';

function Completed() {
  const { progression } = useProgression();

  return (
    <Container my="xl" textAlign="center">
      <Row>
        <Col xs={6} p="0">
          <Badge mb="0" backgroundColor="bg.1" borderRadius="circle" fontSize="md" width="48px" height="48px">
            <Text mb="0" mt="md" style={{ verticalAlign: 'bottom' }}>
              {progression.pomodoros}
            </Text>
          </Badge>
          <Text fontWeight="bold" mb="0">Pomodoros</Text>
        </Col>
        <Col xs={6} p="0">
          <Badge mb="0" backgroundColor="bg.1" borderRadius="circle" fontSize="md" width="48px" height="48px">
            <Text mb="0" mt="md" style={{ verticalAlign: 'bottom' }}>
              {progression.sets}
            </Text>
          </Badge>
          <Text fontWeight="bold" mb="0">Sets</Text>
        </Col>
      </Row>
    </Container>
  );
}

export default Completed;