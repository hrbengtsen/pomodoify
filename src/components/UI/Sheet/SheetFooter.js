import styled from 'styled-components';
import { space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const SheetFooter = styled('div').withConfig({ shouldForwardProp })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${space}
`;

SheetFooter.defaultProps = {
  p: 'lg'
};

export default SheetFooter;
