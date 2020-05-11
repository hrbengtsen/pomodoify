import styled from 'styled-components';
import { space, typography, layout } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Label = styled('label').withConfig({ shouldForwardProp })`
  ${space}
  ${typography}
  ${layout}
`;

Label.defaultProps = {
  mb: 'sm',
  textAlign: 'left',
  display: 'block'
};

export default Label;