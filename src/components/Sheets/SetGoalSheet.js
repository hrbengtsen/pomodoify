import React, { useState, useRef } from 'react';
import { Button, Sheet, SheetHeader, SheetBody, Heading, Icon, FormGroup, FormControl, Container, Label } from '../UI';

const SetGoalSheet = (props) => {
  const [hidden, setHidden] = useState(true);
  const buttonRef = useRef(null);

  function handleSheet() {
    setHidden(!hidden);
    buttonRef.current.focus();
  }

  return (
    <>
      <Button fontWeight="bold" ref={buttonRef} onClick={() => handleSheet()}>Set a goal</Button>
      <Sheet hidden={hidden} toggle={() => handleSheet()}>
        <SheetHeader>
          <Heading type="h4" mx="auto" fontWeight="reg">Set a goal</Heading>
          <Button fontSize={['lg', 'xl']} position="absolute" right="0" m="sm" mr="lg" onClick={() => handleSheet()}>
            <Icon icon="times" style={{ verticalAlign: 'baseline' }} />
          </Button>
        </SheetHeader>
        <SheetBody p="lg" pt="0">
          <Container maxWidth="480px" mx="auto">
            <FormGroup p="md">
              <Label>Your new goal</Label>
              <FormControl textAlign="left" placeholder="Name of goal..." />
            </FormGroup>
            <FormGroup p="md" width="25%">
              <Label textAlign="center">Pomodoro</Label>
              <FormControl textAlign="right" placeholder="4" />
            </FormGroup>
            <Container textAlign="center" mt="lg">
              <Button m="0" mr="xl" variant="primary">Add goal</Button>
              <Button m="0" ml="xl" fontWeight="bold" onClick={() => handleSheet()}>Cancel</Button>
            </Container>
          </Container>
        </SheetBody>
      </Sheet>
    </>
  );
}

export default SetGoalSheet;