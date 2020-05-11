import React from 'react';
import { Nav, NavItem, Icon } from '../UI';

function Footer() {
  return (
    <Nav p="lg" position="fixed" width="100%" zIndex="1000" bottom="0" show="sm" boxShadow="reg" justifyContent="space-around">
        <NavItem to="/timer" borderRadius="circle" backgroundColor="bg.1" p="md" mr="md" width="40px" height="40px" textAlign="center" fontSize="1.5em" overflow="hidden">
          <Icon icon="clock" style={{ verticalAlign: '25%' }} />
        </NavItem>
        <NavItem to="/progression" borderRadius="circle" backgroundColor="bg.1" p="md" ml="md" width="40px" height="40px" textAlign="center" fontSize="1.5em">
          <Icon icon="tasks" style={{ verticalAlign: '25%' }} />
        </NavItem>
    </Nav>
  );
}

export default Footer;
