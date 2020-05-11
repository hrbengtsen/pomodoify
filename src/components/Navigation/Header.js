import React from 'react';
import { Nav, NavItem, Icon, Image } from '../UI';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Nav p="lg" position="fixed" width="100%" zIndex="1000">
        <NavItem to="/" mr="auto">
            <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="40px" />
        </NavItem>

        <Nav p="0" hide="sm">
          <NavItem to="/timer" borderRadius="circle" backgroundColor="bg.1" p="md" mr="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
            <Icon icon="clock" style={{ verticalAlign: '25%' }} />
          </NavItem>
          <NavItem to="/progression" borderRadius="circle" backgroundColor="bg.1" p="md" mx="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
            <Icon icon="tasks" style={{ verticalAlign: '25%' }} />
          </NavItem>
        </Nav>
        <NavItem to="/settings" borderRadius="circle" backgroundColor="bg.1" p="md" ml="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
           <Icon icon="cog" style={{ verticalAlign: '25%' }} />
        </NavItem>
    </Nav>
  );
}

export default Header;
