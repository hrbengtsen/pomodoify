import React from 'react';
import { Nav, NavItem, Icon, Image, Text, Container } from '../UI';
import Logo from '../../assets/logo.svg';
import { slideDown } from '../Routing/Transitions/SlideDown';
import { useTimer } from '../../hooks/useTimer';
import { getMinutes } from '../../utils/getMinutes';
import { getSeconds } from '../../utils/getSeconds';
import { Route } from 'react-router-dom';

function Header() {
  const { timer } = useTimer();

  return (
    <Nav p="lg" position="fixed" width="100%" zIndex="1000">
      <NavItem to={{ pathname: "/home", state: slideDown }} mr={["auto", "0"]} width="40px" height="40px">
          <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="40px" />
      </NavItem> 

      <Container ml={["0", "auto"]} mr={["auto", "md"]}>
        <Route path={['/home', '/progression', '/settings']}>
          {timer.active && 
            <Text fontWeight="bold" mb="0" p="md">{timer.state} - {getMinutes(timer.timeLeft)}:{getSeconds(timer.timeLeft)}</Text>
          }
        </Route>
      </Container>

      <Nav p="0" hide="sm">
        <NavItem to={{ pathname: "/timer", state: slideDown }} borderRadius="circle" backgroundColor="bg.1" p="md" mr="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
          <Icon icon="clock" style={{ verticalAlign: '25%' }} />
        </NavItem>
        <NavItem to={{ pathname: "/progression", state: slideDown }} borderRadius="circle" backgroundColor="bg.1" p="md" mx="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
          <Icon icon="tasks" style={{ verticalAlign: '25%' }} />
        </NavItem>
      </Nav>
      <NavItem to={{ pathname: "/settings", state: slideDown }} borderRadius="circle" backgroundColor="bg.1" p="md" ml="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
          <Icon icon="cog" style={{ verticalAlign: '25%' }} />
      </NavItem>
    </Nav>
  );
}

export default Header;
