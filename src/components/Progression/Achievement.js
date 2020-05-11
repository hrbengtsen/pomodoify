import React from 'react';
import { Button, Icon } from '../UI';

function Achievement(props) {
  const { flex, onClick } = props;

  return (
    <Button variant="achievement" flex={flex} onClick={onClick}>
      <Icon icon="lock" size="2x" style={{ verticalAlign: 'middle' }} />
    </Button>
  );
}

export default Achievement;
