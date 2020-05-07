import styled from 'styled-components';
import { space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const ModalFooter = styled('div').withConfig({ shouldForwardProp })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${space}
`;

ModalFooter.defaultProps = {
  p: 'lg'
};

export default ModalFooter;
