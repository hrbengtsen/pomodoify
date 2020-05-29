import React from 'react';
import { Button, Icon } from '../UI';

function Achievement(props) {
  const { flex, onClick, achievement } = props;
  let achievementVariant = "achievement";

  if (achievement.isNew) {
    achievementVariant = "newAchievement";
  }

  return (
    <Button variant={achievementVariant} flex={flex} onClick={achievement.locked ? null : onClick}>
      {achievement.locked ? <Icon icon="lock" size="2x" style={{ verticalAlign: 'middle' }} /> :
      <Icon icon={achievement.icon} size="2x" style={{ verticalAlign: 'middle' }} />}
    </Button>
  );
}

export default Achievement;
