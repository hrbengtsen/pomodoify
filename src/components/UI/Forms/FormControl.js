import React from 'react';
import styled, { css } from 'styled-components';
import { space, color, border, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const formControlStyle = (props) => css`
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  transition: color ${props => props.theme.hoverTime} ease-in-out, box-shadow ${props => props.theme.hoverTime} ease-in-out;
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

const slider = (props) => {
  if (props.type === "range") {
    return css`
      -webkit-appearance: none;
      border: 0;
      height: 10px;
      cursor: pointer;
      &::-webkit-slider-thumb {
        appearance: none;
        width: 12px;
        height: 24px;
        background-color: ${props => props.theme.colors.text[0]};
        border-radius: ${props => props.theme.radii.xl}px;
      };
      &::-moz-range-thumb {
        appearance: none;
        width: 12px;
        height: 24px;
        background-color: ${props => props.theme.colors.text[0]};
        border-radius: ${props => props.theme.radii.xl}px;
      };
      &::-ms-thumb {
        appearance: none;
        width: 12px;
        height: 24px;
        background-color: ${props => props.theme.colors.text[0]};
        border-radius: ${props => props.theme.radii.xl}px;
      };

      &::-webkit-slider-thumb:hover {
        background-color: ${props => props.theme.colors.text[1]};
      };
      &::-webkit-slider-thumb:focus {
        background-color: ${props => props.theme.colors.text[1]};
      };
      &::-moz-range-thumb:hover {
        background-color: ${props => props.theme.colors.text[1]};
      };
      &::-moz-range-thumb:focus {
        background-color: ${props => props.theme.colors.text[1]};
      };
      &::-ms-thumb:hover {
        background-color: ${props => props.theme.colors.text[1]};
      };
      &::-ms-thumb:focus {
        background-color: ${props => props.theme.colors.text[1]};
      };
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
  ${props => slider(props)}
`;

const FormControlTextarea = styled('textarea').withConfig({ shouldForwardProp })`
  ${formControlStyle};
  resize: none;
`;

const FormControlSelect = styled('select').withConfig({ shouldForwardProp })`
  ${formControlStyle};
  cursor: pointer;
  ${props => slider(props)}
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
  border: 'md',
  borderColor: 'text.0',
  color: 'text.0',
  backgroundColor: 'bg.1'
};

export default FormControl;
