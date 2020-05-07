import React from 'react';
import { Nav, NavItem, Icon, Image } from '../UI';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Nav p="xl">
        <NavItem to="/" mr="auto">
            <Image src={Logo} alt="Pomodoify Logo (Resembles a clock)" width="48px" />
        </NavItem>
        <NavItem to="/settings" borderRadius="circle" bg="bg.1" p="md">
           <Icon icon="cog" size="2x" style={{ verticalAlign: 'middle' }} />
        </NavItem>
    </Nav>
  );
}

export default Header;
