import styled from 'styled-components';
import { space, typography, position, layout, color, border, flexbox } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Container = styled('div').withConfig({ shouldForwardProp })`
  position: relative;
  ${space}
  ${typography}
  ${position}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
`;

export default Container;
