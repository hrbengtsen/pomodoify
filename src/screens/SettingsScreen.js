import React, { useState } from 'react';
import { Container, Heading, Button, FormGroup, FormControl, Row, Col, Text, Label, Badge } from '../components/UI';
import { useUser } from '../hooks/useUser';

function SettingsScreen() {
  const { user, defaultUser, deleteUser, updateUser } = useUser();

  const [username, setUsername] = useState(user.name);
  const [settings, setSettings] = useState(user.settings);
  const [errors, setErrors] = useState({});

  function handleValidation() {
    let errors = {};
    let updateIsValid = true;

    if (settings.pomodoro > 60 || settings.pomodoro < 1 || !/^[0-9]+$/.test(settings.pomodoro)) {
      updateIsValid = false;
      errors["pomodoro"] = "Only 1-60 min";
    }

    if (!settings.pomodoro) {
      updateIsValid = false;
      errors["pomodoro"] = "Must be number";
    }

    if (settings.break > 60 || settings.break < 1 || !/^[0-9]+$/.test(settings.break)) {
      updateIsValid = false;
      errors["break"] = "Only 1-60 min";
    }

    if (!settings.break) {
      updateIsValid = false;
      errors["break"] = "Must be number";
    }

    if (settings.longBreak > 60 || settings.longBreak < 1 || !/^[0-9]+$/.test(settings.longBreak)) {
      updateIsValid = false;
      errors["longBreak"] = "Only 1-60 min";
    }

    if (!settings.longBreak) {
      updateIsValid = false;
      errors["longBreak"] = "Must be number";
    }

    if (!username) {
      updateIsValid = false;
      errors["username"] = "Required";
    }

    if (username && !/^[a-zA-Z0-9æøåÆØÅ ]+$/.test(username)) {
      updateIsValid = false;
      errors["username"] = "Only letters and numbers";
    }

    if (username.length > 25) {
      updateIsValid = false;
      errors["username"] = "Max. 25 characters";
    }

    setErrors(errors);
    return updateIsValid;
  }

  function saveSettings() {
    if (handleValidation()) {
      updateUser(username, settings);
    }
  }

  function resetSettings() {
    setErrors({});
    setSettings(defaultUser.settings);
    updateUser(username, defaultUser.settings);
  }

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0">Settings</Heading>
      <Container maxWidth="480px" mx="auto" px="lg">
        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Pomodoro timer (minutes)
        </Heading>
        <Container>
          <Row>
            <Col xs={4}>
              <FormGroup>
                <Label>Pomodoro</Label>
                <FormControl type="number" min="1" max="60" value={settings.pomodoro} onChange={(e) => setSettings({
                  ...settings,
                  pomodoro: e.target.value
                })} />
                <Badge color="danger" backgroundColor="transparent" p="0">{errors["pomodoro"]}</Badge>
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup>
                <Label>Break</Label>
                <FormControl type="number" min="1" max="60" value={settings.break} onChange={(e) => setSettings({
                  ...settings,
                  break: e.target.value
                })} />
                <Badge color="danger" backgroundColor="transparent" p="0">{errors["break"]}</Badge>
              </FormGroup>
            </Col>
            <Col xs={4}> 
              <FormGroup>
                <Label>Long break</Label>
                <FormControl type="number" min="1" max="60" value={settings.longBreak} onChange={(e) => setSettings({
                  ...settings,
                  longBreak: e.target.value
                })} />
                <Badge color="danger" backgroundColor="transparent" p="0">{errors["longBreak"]}</Badge>
              </FormGroup>
            </Col>
          </Row>
        </Container>

        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Sound and volume
        </Heading>
        <Container p="md">
          <FormGroup>
            <Label>Timer sound</Label>
            <FormControl select value={settings.sound} onChange={(e) => setSettings({
              ...settings,
              sound: e.target.value
            })}>
              <option value="Alarm">Alarm</option>
              <option value="Cuckoo">Cuckoo</option>
            </FormControl>
          </FormGroup>
        </Container>
        <Container my="lg" p="md">
          <FormGroup>
            <Label display="flex">
              Volume
              <Text ml="auto" mb="0">{Math.round(settings.volume * 100)}%</Text>
            </Label>
            <FormControl type="range" min={0} max={1} step={0.05} value={settings.volume} onChange={(e) => setSettings({
              ...settings,
              volume: parseFloat(e.target.value)
            })} />
          </FormGroup>
        </Container>

        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Preferences
        </Heading>
        <Container my="lg" m="sm" p="md">
          <FormGroup>
            <Label>Username <Badge color="danger" backgroundColor="transparent" p="0">{errors["username"]}</Badge></Label>
            <FormControl textAlign="left" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username..." />
          </FormGroup>
        </Container>
        <Container p="md">
          <Button fontWeight="bold" onClick={() => deleteUser()}>Reset account</Button>
        </Container>

        <Container textAlign="center" my="lg">
          <Button variant="primary" m="0" mr="lg" onClick={() => saveSettings()}>Save changes</Button>
          <Button fontWeight="bold" m="0" ml="lg" onClick={() => resetSettings()}>Back to default</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default SettingsScreen;
