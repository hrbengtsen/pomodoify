import React from 'react';
import { Container, Heading, Button, FormGroup, FormControl, Row, Col, Text, Checkbox, Label } from '../components/UI';

function SettingsScreen(props) {
  const { deleteUser } = props;

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0">Settings</Heading>
      <Container maxWidth="480px" mx="auto" px="xl">
        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Pomodoro Timer
        </Heading>
        <Container my="lg">
          <Row>
            <Col xs={4}>
              <FormGroup>
                <Label textAlign="center">Pomodoro</Label>
                <FormControl textAlign="right" placeholder="25 min" />
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup>
                <Label textAlign="center">Break</Label>
                <FormControl textAlign="right" placeholder="5 min" />
              </FormGroup>
            </Col>
            <Col xs={4}> 
              <FormGroup>
                <Label textAlign="center">Long break</Label>
                <FormControl textAlign="right" placeholder="15 min" />
              </FormGroup>
            </Col>
          </Row>
        </Container>

        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Sound and volume
        </Heading>
        <Container my="lg" p="md">
          <FormGroup>
            <Label>Timer sound</Label>
            <FormControl select>
              <option value="Sound 1">Sound 1</option>
              <option value="Sound 2">Sound 2</option>
              <option value="Sound 3">Sound 3</option>
            </FormControl>
          </FormGroup>
        </Container>
        <Container my="lg" p="md">
          <FormGroup>
            <Label display="flex">
              Volume
              <Text ml="auto" mb="0">100%</Text>
            </Label>
            <FormControl type="range" min="1" max="100" />
          </FormGroup>
        </Container>

        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Preferences
        </Heading>
        <Container my="lg" p="md">
          <Button fontWeight="bold" onClick={() => deleteUser()}>Reset account</Button>
        </Container>
        <Container my="lg" m="sm" p="md" display="flex">
          <Checkbox mr="md" />
          <Text fontWeight="bold">Pause timer when not on timer page</Text>
        </Container>

        <Container textAlign="center" my="lg">
          <Button variant="primary" m="0" mr="lg">Save changes</Button>
          <Button fontWeight="bold" m="0" ml="lg">Back to default</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default SettingsScreen;
