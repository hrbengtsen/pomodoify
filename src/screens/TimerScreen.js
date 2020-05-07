import React from 'react';
import { Container, Button, RouterButton, Row, Col, FormGroup, FormControl, Badge } from '../components/UI';
import TimerCircle from '../components/Timer/TimerCircle';

function TimerScreen(props) {
  return (
    <Container>
      <Container textAlign="center" mt="xxxl">
        <Row>
          <Col md={6}>
            <Button m="0" mr="xl" fontWeight="bold">Start / Stop</Button>
            <Button m="0" ml="xl" fontWeight="bold">Reset current</Button>
          </Col>
          <Col md={6}>
            <Button m="0" mr="xl" fontWeight="bold">Loop sets</Button>
            <RouterButton to="/progression" m="0" ml="xl" fontWeight="bold" position="relative">
              Check progress
              <Badge backgroundColor="secondary" borderRadius="circle" width="26px" height="26px" position="absolute" left="90%" top="-15px" color="bg.0">1</Badge>
            </RouterButton>
          </Col>
        </Row>
        
      </Container>
      <Container textAlign="center" mt="xxxxl">
        <TimerCircle radius="150" stroke="10" progress="20" />
      </Container>
      <Container textAlign="center" mt="xxxl" maxWidth={["300px", "375px"]} mx="auto">
        <FormGroup>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '4px', fontWeight: '700' }}>Task at hand</label>
          <FormControl placeholder="Write your task here..." />
        </FormGroup>
      </Container> 
    </Container>
  );
}

export default TimerScreen;
