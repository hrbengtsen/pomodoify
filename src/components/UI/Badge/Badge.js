import styled from 'styled-components';
import { space, color, border, typography, layout, position } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Badge = styled('span').withConfig({ shouldForwardProp })`
  display: inline-block;
  font-size: 75%;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  top: -1px;
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
  ${position}
`;

Badge.defaultProps = {
  color: 'white',
  backgroundColor: 'blue.0',
  borderRadius: 'md',
  p: 'sm',
  fontWeight: 'bold',
  position: 'relative'
};

export default Badge;
