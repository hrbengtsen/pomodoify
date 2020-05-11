import styled from 'styled-components';
import { space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const SheetHeader = styled('div').withConfig({ shouldForwardProp })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${space}
`;

SheetHeader.defaultProps = {
  p: 'lg'
};

export default SheetHeader;
