import React, { useState, useRef } from 'react';
import { Button, Sheet, SheetHeader, SheetBody, Heading, Icon, Text, Container } from '../UI';
import Achievement from '../Progression/Achievement';

const AchievementSheet = (props) => {
  const [hidden, setHidden] = useState(true);
  //const buttonRef = useRef(null);

  function handleSheet() {
    setHidden(!hidden);
    //buttonRef.current.focus();
  }

  return (
    <>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        <Achievement onClick={() => handleSheet()} />
        <Achievement />
        <Achievement />
        <Achievement />
        <Achievement />
      </Container>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        <Achievement />
        <Achievement />
        <Achievement />
        <Achievement />
        <Achievement />
      </Container>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        <Achievement />
        <Achievement />
        <Achievement />
        <Achievement />
        <Achievement />
      </Container>
      <Sheet hidden={hidden} toggle={() => handleSheet()}>
        <SheetHeader>
          <Heading type="h4" mx="auto" fontWeight="reg">Achievement</Heading>
          <Button fontSize={['lg', 'xl']} position="absolute" right="0" m="sm" mr="lg" onClick={() => handleSheet()}>
            <Icon icon="times" style={{ verticalAlign: 'baseline' }} />
          </Button>
        </SheetHeader>
        <SheetBody p="lg" pt="0">
          <Container maxWidth="480px" mx="auto" backgroundColor="bg.1" borderRadius="md">
            <Text textAlign="center" fontWeight="bold" p="lg" mb="0">Your first Pomodoro</Text>
            <Text textAlign="center" p="lg">
              Obtained by completing a Pomodoro.
            </Text>
          </Container>
        </SheetBody>
      </Sheet>
    </>
  );
}

export default AchievementSheet;