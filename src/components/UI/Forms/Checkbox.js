import React from 'react';
import styled from 'styled-components';
import { space, color, border, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Icon } from '../index';

const CheckboxContainer = styled('div')`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const HiddenCheckbox = styled('input').attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled('div').withConfig({ shouldForwardProp })`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    outline: 0;
    box-shadow: 0 0 0 0.15rem ${props => props.theme.colors.text[0]};
  };

  ${space}
  ${color}
  ${border}
  ${typography}
`;

const Checkbox = (props) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={props.checked} {...props} />
    <StyledCheckbox checked={props.checked} {...props}>
       <Icon icon="check" style={{ visibility: (props.checked ? 'visisble' : 'hidden')}} />
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  checked: false,
  borderRadius: 'md',
  border: 'md',
  borderColor: 'text.0',
  backgroundColor: 'bg.1'
};

export default Checkbox;
