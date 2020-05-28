import React from 'react';
import { Button, Icon, Image } from '../UI';

function Achievement(props) {
  const { flex, onClick, achievement } = props;
  let achievementVariant = "achievement";

  if (achievement.isNew) {
    achievementVariant = "newAchievement";
  }

  return (
    <Button variant={achievementVariant} flex={flex} onClick={achievement.locked ? null : onClick}>
      {achievement.locked ? <Icon icon="lock" size="2x" style={{ verticalAlign: 'middle' }} /> :
      <Image src={achievement.src} width="32px" />}
    </Button>
  );
}

export default Achievement;
