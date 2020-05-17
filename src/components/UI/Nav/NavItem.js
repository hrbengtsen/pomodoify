import styled from 'styled-components';
import { space, color, typography, border, layout } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink).withConfig({ shouldForwardProp })`
  display: block;
  border: none;
  transition: all ${props => props.theme.hoverTime} ease-in-out;
  cursor: pointer;
  outline: 0;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.text[1]};
    transform: ${props => props.theme.scale.hover};
  };
  &:focus {
    background-color: ${props => props.theme.colors.primary[0]};
  };
  &:active {
    transform: ${props => props.theme.scale.active};
  };
  &.active {
    color: ${props => props.theme.colors.text[1]};
  };
  ${space}
  ${color}
  ${typography}
  ${border}
  ${layout}
`;

NavItem.defaultProps = {
  color: 'text.0',
  fontWeight: 'reg',
  to: '/'
}

export default NavItem;
