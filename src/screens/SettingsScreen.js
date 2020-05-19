import React, { useState, useEffect } from 'react';
import { Container, Heading, Button, FormGroup, FormControl, Row, Col, Text, Checkbox, Label, Badge } from '../components/UI';

function SettingsScreen(props) {
  const { userSettings, defaultSettings, deleteUser, updateSettings } = props;

  const [settings, setSettings] = useState(userSettings);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userSettings === defaultSettings) {
      let storedSettings = JSON.parse(localStorage.getItem('user')).settings;
      setSettings(storedSettings);
    }
  }, [userSettings, defaultSettings]);

  function handleValidation() {
    let errors = {};
    let settingsAreValid = true;

    if (settings.pomodoro > 60 || settings.pomodoro < 1) {
      settingsAreValid = false;
      errors["pomodoro"] = "Only 1-60 min";
    }

    if (!settings.pomodoro) {
      settingsAreValid = false;
      errors["pomodoro"] = "Must be number";
    }

    if (settings.break > 60 || settings.break < 1) {
      settingsAreValid = false;
      errors["break"] = "Only 1-60 min";
    }

    if (!settings.break) {
      settingsAreValid = false;
      errors["break"] = "Must be number";
    }

    if (settings.longBreak > 60 || settings.longBreak < 1) {
      settingsAreValid = false;
      errors["longBreak"] = "Only 1-60 min";
    }

    if (!settings.longBreak) {
      settingsAreValid = false;
      errors["longBreak"] = "Must be number";
    }

    setErrors(errors);
    return settingsAreValid;
  }

  function saveSettings() {
    if (handleValidation()) {
      updateSettings(settings);
    }
  }

  function resetSettings() {
    setSettings(defaultSettings);
    updateSettings(defaultSettings);
  }

  return (
    <Container position="absolute" width="auto" height="auto" left="0" right="0" my="xxxxl">
      <Heading textAlign="center" fontWeight="reg" p="0">Settings</Heading>
      <Container maxWidth="480px" mx="auto" px="xl">
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
              <Text ml="auto" mb="0">{settings.volume}%</Text>
            </Label>
            <FormControl type="range" min="0" max="100" value={settings.volume} onChange={(e) => setSettings({
              ...settings,
              volume: e.target.value
            })} />
          </FormGroup>
        </Container>

        <Heading type="h5" color="text.0" position="relative" display="inline-block" highlight zIndex="1">
          Preferences
        </Heading>
        <Container p="md">
          <Button fontWeight="bold" onClick={() => deleteUser()}>Reset account</Button>
        </Container>
        <Container my="lg" m="sm" p="md">
          <Label>
            <Checkbox checked={settings.unfocusPause} onChange={(e) => setSettings({
              ...settings,
              unfocusPause: e.target.checked
            })} mr="md" />
            Pause timer when not on timer page
          </Label>
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
