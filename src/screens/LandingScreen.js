import React, { useState } from 'react';
import { Container, Heading, FormGroup, FormControl, Label, Image, Text, Button, Badge, Row, Col, LinkButton } from '../components/UI';
import Logo from '../assets/logo.svg';
import { useUser } from '../hooks/useUser';

function LandingScreen() {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const { addUser } = useUser();

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
      <Heading textAlign="center" fontWeight="reg" p="0" px="lg">
        <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="50px" mr="md" verticalAlign="baseline" />
        Pomodoify
      </Heading>
      <Heading type="h5" textAlign="center" fontWeight="reg" px="lg">Be more productive and unlock cool badges with Pomodoify!</Heading>
      <Container maxWidth="480px" mx="auto" mt="xxxxl" mb="xxxl" px="lg">
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
      <Container maxWidth="900px" mx="auto" mb="xxxl">
        <Row>
          <Col sm={6}>
            <Heading type="h5" textAlign="center" fontWeight="reg" px="lg">What is Pomodoify?</Heading>
            <Text>
              Pomodoify is a relaxing and simple productivity app to boost your efficiency through <LinkButton variant="link" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">the Pomodoro Technique</LinkButton> and a progression system.
            </Text>
          </Col>
          <Col sm={6}>
            <Heading type="h5" textAlign="center" fontWeight="reg" px="lg">Still in development</Heading>
            <Text>
              The app is still in development towards 1.0 and therefore everything is subject to improve/change. Any feedback is highly appreciated <LinkButton variant="link" href="mailto:mikkelbengtsen@gmail.com">(Send me an email)</LinkButton>.
            </Text>
          </Col>
        </Row>
      </Container>
      <Container px="lg" textAlign="center">
        <Text mb="0">© 2020, Designed and Developed by <LinkButton variant="link" href="https://www.mikkelbengtsen.com/">Mikkel Bengtsen</LinkButton></Text>
      </Container>
    </Container>
  );
}

export default LandingScreen;
