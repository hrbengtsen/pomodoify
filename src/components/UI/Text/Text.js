import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Text = styled('p').withConfig({ shouldForwardProp })`
  ${space}
  ${typography}
  ${color}
`;

Text.defaultProps = {
  color: 'text.0'
};

export default Text;
