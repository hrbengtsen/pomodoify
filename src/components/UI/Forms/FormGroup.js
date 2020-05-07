import styled from 'styled-components';
import { layout, flexbox, space, typography } from 'styled-system';

const FormGroup = styled.div`
  box-sizing: border-box;
  ${layout}
  ${flexbox}
  ${space}
  ${typography}
`;

FormGroup.defaultProps = {
  borderRadius: 'md'
};

export default FormGroup;
