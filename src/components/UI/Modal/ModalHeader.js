import styled from 'styled-components';
import { space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const ModalHeader = styled('div').withConfig({ shouldForwardProp })`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${space}
`;

ModalHeader.defaultProps = {
  p: 'lg'
};

export default ModalHeader;
