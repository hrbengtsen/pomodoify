import styled, { css } from 'styled-components';
import { space, color, border, typography, layout, position } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const scaleWithSibling = (props) => (
  props.scaleWithSibling && css`
    transition: all ${props => props.theme.hoverTime} ease-in-out;
    a:hover + & {
      transform: ${props => props.theme.scale.hover};
    };
    a:active + & {
      transform: ${props => props.theme.scale.active};
    };
  `
);

const Badge = styled('span').withConfig({ shouldForwardProp })`
  display: inline-block;
  font-size: 75%;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  top: -1px;
  ${props => scaleWithSibling(props)}
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
  ${position}
`;

Badge.defaultProps = {
  color: 'text.0',
  backgroundColor: 'bg.0',
  borderRadius: 'md',
  p: 'sm',
  fontWeight: 'bold',
  position: 'relative'
};

export default Badge;
