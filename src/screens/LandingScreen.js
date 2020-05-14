import React, { useState } from 'react';
import { Container, Heading, FormGroup, FormControl, Label, Image, Text, Button, Badge } from '../components/UI';
import Logo from '../assets/logo.svg';

function LandingScreen(props) {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

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

    if (username.length > 30) {
      formIsValid = false;
      errors["username"] = "Max. 30 characters";
    }

    setErrors(errors);
    return formIsValid;
  }

  function submitUser() {
    if (handleValidation()) {
      let user = {
        name: username,
        settings: {},
        achievements: {},
        rewards: {},
      }
      localStorage.setItem('user', JSON.stringify(user));
      props.setUser(user);
    }
  }

  return (
    <Container mt="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0" px="xl">
        <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="50px" mr="md" verticalAlign="baseline" />
        Pomodoify
      </Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg" px="xl">Be more productive and unlock cool badges with Pomodoify!</Heading>
      <Container maxWidth="480px" mx="auto" mt="xxxxl" mb="lg" px="xl">
        <Container backgroundColor="bg.1" p="lg" borderRadius="md">
          <Text textAlign="center">Create your account below (locally stored on device for now)</Text>
          <FormGroup>
            <Label>What is your name? <Badge color="secondary" backgroundColor="transparent" p="0">{errors["username"]}</Badge></Label>
            <FormControl textAlign="left" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username..." />
          </FormGroup>
          <Container textAlign="center" mt="xxl">
            <Button onClick={() => submitUser()}>
              Create account
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingScreen;
