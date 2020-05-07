import styled, { css } from 'styled-components';
import { flexbox, layout, position, typography, color, space } from 'styled-system';
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

const Nav = styled('nav').withConfig({ shouldForwardProp })`
  display: flex;
  flex-wrap: wrap;
  & > a {
    text-decoration: none;
  }
  &:last-child {
    flex: 1;
  }
  @media (max-width: calc(${props => props.theme.breakpoints[1]} - 1px)) {
    & > nav:not(:last-child) {
      width: 100%;
    }
  };
  ${props => navCollapse(props)}
  ${flexbox}
  ${layout}
  ${position}
  ${typography}
  ${color}
  ${space}
`;

Nav.defaultProps = {
  backgroundColor: 'bg.0',
  p: 'lg'
};

export default Nav;
