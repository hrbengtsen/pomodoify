import styled from 'styled-components';
import { space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const ModalBody = styled('div').withConfig({ shouldForwardProp })`
  position: relative;
  flex: 1 1 auto;
  ${space}
`;

ModalBody.defaultProps = {
  p: 'lg'
};

export default ModalBody;
