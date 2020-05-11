import styled, { css } from 'styled-components';
import { flexbox, layout, position, typography, color, space, shadow } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const navCollapse = (props) => {
  if (props.collapse && !props.hidden) {
    document.body.style.overflowY = 'hidden';
    return css`
      @media (max-width: calc(${props => props.theme.breakpoints[1]} - 1px)) {
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        height: calc(100vh - 48px);
      };
    `;
  } else if (props.collapse && props.hidden) {
    document.body.style.overflowY = 'auto';
    return css`
      @media (max-width: calc(${props => props.theme.breakpoints[1]} - 1px)) {
        display: none;
        flex-basis: auto;
        flex-direction: column;
      };
    `;
  }

  document.body.style.overflowY = 'auto';
  return '';
};

const hide = (props) => {
  if (props.hide === 'sm') {
    return css`
      @media (max-width: calc(${props => props.theme.breakpoints[0]} - 1px)) {
        display: none;
      };
    `;
  }

  return '';
};

const show = (props) => {
  if (props.show === 'sm') {
    return css`
      @media (min-width: ${props => props.theme.breakpoints[0]}) {
        display: none;
      };
    `;
  }

  return '';
};

const Nav = styled('nav').withConfig({ shouldForwardProp })`
  display: flex;
  flex-wrap: wrap;
  & > a {
    text-decoration: none;
  }
  &:last-child {
    flex: 1;
  }
  @media (max-width: calc(${props => props.theme.breakpoints[0]} - 1px)) {
    & > nav:not(:last-child) {
      width: 100%;
    }
  };
  ${props => navCollapse(props)}
  ${props => hide(props)}
  ${props => show(props)}
  ${flexbox}
  ${layout}
  ${position}
  ${typography}
  ${color}
  ${space}
  ${shadow}
`;

Nav.defaultProps = {
  backgroundColor: 'bg.0',
  p: 'lg'
};

export default Nav;
