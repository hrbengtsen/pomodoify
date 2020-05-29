import React, { useState, useRef } from 'react';
import { Button, Sheet, SheetHeader, SheetBody, Heading, Icon, Container, Text } from '../UI';
import { useUser } from '../../hooks/useUser';

const DeleteAccountSheet = (props) => {
  const { deleteUser } = useUser();
  const [hidden, setHidden] = useState(true);
  const buttonRef = useRef(null);

  function handleSheet() {
    setHidden(!hidden);
    buttonRef.current.focus();
  }

  return (
    <>
      <Button fontWeight="bold" ref={buttonRef} onClick={() => handleSheet()}>Delete account</Button>
      <Sheet hidden={hidden} toggle={() => handleSheet()}>
        <SheetHeader>
          <Heading type="h4" mx="auto" fontWeight="reg">Delete account</Heading>
          <Button fontSize={['lg', 'xl']} position="absolute" right="0" m="sm" mr="lg" onClick={() => handleSheet()}>
            <Icon icon="times" style={{ verticalAlign: 'baseline' }} />
          </Button>
        </SheetHeader>
        <SheetBody p="lg" pt="0">
          <Container maxWidth="480px" mx="auto">
            <Container backgroundColor="bg.1" borderRadius="md" p="lg">
              <Text mb="0">
                Are you sure you want to delete your account? This action is final and you will lose all of your progression.
              </Text>
            </Container>
            <Container textAlign="center" mt="lg">
              <Button m="0" mr="xl" variant="danger" onClick={() => deleteUser()}>Delete</Button>
              <Button m="0" ml="xl" fontWeight="bold" onClick={() => handleSheet()}>Cancel</Button>
            </Container>
          </Container>
        </SheetBody>
      </Sheet>
    </>
  );
}

export default DeleteAccountSheet;