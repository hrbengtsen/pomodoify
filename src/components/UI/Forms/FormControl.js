import React from 'react';
import styled, { css } from 'styled-components';
import { space, color, border, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const formControlStyle = (props) => css`
  display: block;
  width: 100%;
  line-height: 1.5;
  color: ${props => props.theme.colors.text[0]};
  background-color: ${props => props.theme.colors.bg[1]};
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-sizing: border-box;
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  };
  &:focus {
    color: ${props => props.theme.colors.text[0]};
    outline: 0;
    box-shadow: 0 0 0 0.15rem ${props => props.theme.colors.text[0]};
  };
  &::placeholder {
    color: ${props => props.theme.colors.text[0]};
    opacity: 1;
  };
  ${space}
  ${color}
  ${border}
  ${typography}
`;

const focus = (props) => {
  if (props.focus) {
    return css`
      color: ${props => props.theme.colors.text[0]};
      outline: 0;
      box-shadow: 0 0 0 0.15rem ${props => props.theme.colors.text[0]};
    `;
  }

  return '';
};

const FormControlEditor = styled('div').withConfig({ shouldForwardProp })`
  max-height: 105px;
  overflow: auto;
  ${formControlStyle};
  ${props => focus(props)}
`;

const FormControlInput = styled('input').withConfig({ shouldForwardProp })`
  ${formControlStyle};
`;

const FormControlTextarea = styled('textarea').withConfig({ shouldForwardProp })`
  ${formControlStyle};
  resize: none;
`;

const FormControlSelect = styled('select').withConfig({ shouldForwardProp })`
  ${formControlStyle};
  &:focus::-ms-value {
    color: ${props => props.theme.colors.gray[1]};
    background-color: ${props => props.theme.colors.gray[3]};
  };
`;

const FormControl = (props) => {
  if (props.textarea) {
    return <FormControlTextarea {...props} />;
  } else if (props.select) {
    return <FormControlSelect {...props} />;
  } else if (props.editor) {
    return <FormControlEditor {...props} />;
  }

  return <FormControlInput {...props} />;
};

FormControl.defaultProps = {
  fontSize: 'md',
  fontFamily: 'regular',
  borderRadius: 'md',
  p: 'sm',
  border: 'sm',
  borderColor: 'gray.1',
  backgroundColor: 'gray.3'
};

export default FormControl;
