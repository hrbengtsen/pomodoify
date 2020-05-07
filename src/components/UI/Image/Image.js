import styled from 'styled-components';
import { layout, space } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Image = styled('img').withConfig({ shouldForwardProp })`
  display: inline-block;
  ${layout}
  ${space}
`

Image.defaultProps = {
  verticalAlign: 'text-top'
};

export default Image;
