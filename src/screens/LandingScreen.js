import React, { useState } from 'react';
import { Container, Heading, FormGroup, FormControl, Label, Image, Text, Button, Badge } from '../components/UI';
import Logo from '../assets/logo.svg';

function LandingScreen(props) {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const { addUser } = props;

  function handleValidation() {
    let errors = {};
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      errors["username"] = "Required";
    }

    if (username && !/^[a-zA-Z0-9æøåÆØÅ ]+$/.test(username)) {
      formIsValid = false;
      errors["username"] = "Only letters and numbers";
    }

    if (username.length > 25) {
      formIsValid = false;
      errors["username"] = "Max. 25 characters";
    }

    setErrors(errors);
    return formIsValid;
  }

  function submitUser() {
    if (handleValidation()) {
      addUser(username);
    }
  }

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0" px="xl">
        <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="50px" mr="md" verticalAlign="baseline" />
        Pomodoify
      </Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg" px="xl">Be more productive and unlock cool badges with Pomodoify!</Heading>
      <Container maxWidth="480px" mx="auto" mt="xxxxl" mb="lg" px="xl">
        <Text textAlign="center">Create your account below (locally stored on device for now)</Text>
        <Container backgroundColor="bg.1" p="lg" borderRadius="md">
          <FormGroup>
            <Label>What is your name? <Badge color="danger" backgroundColor="transparent" p="0">{errors["username"]}</Badge></Label>
            <FormControl textAlign="left" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username..." />
          </FormGroup>
          <Container textAlign="center" mt="xxl">
            <Button fontWeight="bold" onClick={() => submitUser()}>
              Create account
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingScreen;
