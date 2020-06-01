import React from 'react';
import { Nav, NavItem, Icon, Container, Badge } from '../UI';
import { slideUp } from '../Routing/Transitions/SlideUp';
import { useProgression } from '../../hooks/useProgression';

function Footer() {
  const { progression } = useProgression();
  let amountOfNewAchievements = 0;
  progression.achievements.forEach((achievement) => {
    if (achievement.isNew) {
      amountOfNewAchievements++;
    }
  });

  return (
    <Nav p="lg" position="fixed" width="100%" zIndex="1000" bottom="0" show="sm" boxShadow="reg" justifyContent="space-around">
        <NavItem to={{ pathname: "/pomodoify/timer", state: slideUp }} borderRadius="circle" backgroundColor="bg.1" p="md" mr="md" width="40px" height="40px" textAlign="center" fontSize="1.5em" overflow="hidden">
          <Icon icon="clock" style={{ verticalAlign: '25%' }} />
        </NavItem>
        <Container>
          <NavItem to={{ pathname: "/pomodoify/progression", state: slideUp }} borderRadius="circle" backgroundColor="bg.1" p="md" ml="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
            <Icon icon="tasks" style={{ verticalAlign: '25%' }} />
          </NavItem>
          {amountOfNewAchievements > 0 ? <Badge backgroundColor="secondary" color="bg.0" borderRadius="circle" position="absolute" right="-7px" top="-7px" width="22px" fontSize="60%" scaleWithSibling>{amountOfNewAchievements}</Badge> : ''}
        </Container>
    </Nav>
  );
}

export default Footer;
