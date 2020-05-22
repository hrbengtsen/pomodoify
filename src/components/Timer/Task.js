import React, { useState, useEffect } from 'react';
import { Container, FormGroup, FormControl, Label } from '../UI';

function Task() {
  const [task, setTask] = useState('');

  useEffect(() => {
    let storedTask = localStorage.getItem('task');
    if (storedTask) {
      setTask(storedTask);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', task);
  }, [task]);

  return (
    <Container textAlign="center" my="xxxl" maxWidth={["", "400px"]} mx={["", "auto"]} px="lg">
      <FormGroup>
        <Label fontWeight="bold">Task at hand</Label>
        <FormControl value={task} onChange={(e) => setTask(e.target.value)} placeholder="Write your task here..." />
      </FormGroup>
    </Container> 
  );
}

export default Task;