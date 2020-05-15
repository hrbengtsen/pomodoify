import React from 'react';
import { Container, Button, RouterButton, Row, Col, FormGroup, FormControl, Badge, Label } from '../components/UI';
import TimerCircle from '../components/Timer/TimerCircle';

function TimerScreen(props) {
  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Container mx="auto" textAlign="center" mt="xxxl" maxWidth="800px">
        <Row>
          <Col sm={6} p="lg">
            <Button m="0" mr="xl" fontWeight="bold">Start / Stop</Button>
            <Button m="0" ml="xl" fontWeight="bold">Reset current</Button>
          </Col>
          <Col sm={6} p="lg">
            <Button m="0" mr="xl" fontWeight="bold">Loop sets</Button>
            <RouterButton to="/progression" m="0" ml="xl" fontWeight="bold" position="relative">
              Check progress
              <Badge backgroundColor="secondary" borderRadius="circle" width="26px" height="26px" position="absolute" left="90%" top="-15px" color="bg.0">1</Badge>
            </RouterButton>
          </Col>
        </Row>
        
      </Container>
      <Container textAlign="center" mt="xxxl">
        <TimerCircle progress="20" />
      </Container>
      <Container textAlign="center" my="xxxl" maxWidth={["300px", "375px"]} mx="auto" px="lg">
        <FormGroup>
          <Label fontWeight="bold">Task at hand</Label>
          <FormControl placeholder="Write your task here..." />
        </FormGroup>
      </Container> 
    </Container>
  );
}

export default TimerScreen;
