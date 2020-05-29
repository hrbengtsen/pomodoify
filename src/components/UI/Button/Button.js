import styled, { css } from 'styled-components';
import { space, color, border, typography, shadow, position, layout, variant, flexbox } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { buttonVariants } from './buttonVariants.js';
import { Link } from 'react-router-dom';

const block = (props) => {
  if (props.block) {
    return css`
      display: block;
      width: 100%;
      & + & {
        margin-top: 8px;
      };
    `;
  }

  return css`
    display: inline-block;
  `;
};

const disabled = (props) => (
  props.disabled && css`
    opacity: 0.6;
  `
);

const cursor = (props) => (
  !props.disabled && css`
    cursor: pointer;
  `
);

const buttonStyles = (props) => css`
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  transition: color ${props => props.theme.hoverTime} ease-in-out, background-color ${props => props.theme.hoverTime} ease-in-out, transform ${props => props.theme.hoverTime} ease-in-out, border ${props => props.theme.hoverTime} ease-in-out, box-shadow ${props => props.theme.hoverTime} ease-in-out;
  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.colors.button[0]};
    border-color: ${props => props.theme.colors.button[0]};
    transform: ${props => props.theme.scale.hover};
  };
  &:focus {
    outline: 0;
    background-color: ${props => props.theme.colors.button[0]};
    border-color: ${props => props.theme.colors.primary[0]};
    transform: ${props => props.theme.scale.hover};
  };
  &:active {
    transform: ${props => props.theme.scale.active};
  }

  ${block(props)}
  ${disabled(props)}
  ${cursor(props)}

  ${space}
  ${color}
  ${border}
  ${typography}
  ${shadow}
  ${position}
  ${layout}
  ${flexbox}
  ${variant(buttonVariants)}
`;

const Button = styled('button').withConfig({ shouldForwardProp })`
  ${props => buttonStyles(props)}
`;

Button.defaultProps = {
  borderRadius: 'md',
  border: 'md',
  borderColor: 'button.0',
  backgroundColor: 'button.0',
  color: 'text.0',
  p: 'md',
  m: 'sm',
  fontSize: 'md',
  fontFamily: 'regular'
};

const RouterButton = styled(Link).withConfig({ shouldForwardProp })`
  text-decoration: none;
  ${props => buttonStyles(props)}
`;

RouterButton.defaultProps = {
  borderRadius: 'md',
  border: 'md',
  borderColor: 'button.0',
  backgroundColor: 'button.0',
  color: 'text.0',
  p: 'md',
  m: 'sm',
  fontSize: 'md',
  fontFamily: 'regular',
  to: '/'
};

const LinkButton = styled('a').withConfig({ shouldForwardProp })`
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  transition: color ${props => props.theme.hoverTime} ease-in-out, background-color ${props => props.theme.hoverTime} ease-in-out, border ${props => props.theme.hoverTime} ease-in-out, box-shadow ${props => props.theme.hoverTime} ease-in-out;

  ${props => block(props)}
  ${props => disabled(props)}
  ${props => cursor(props)}

  ${space}
  ${color}
  ${border}
  ${typography}
  ${shadow}
  ${position}
  ${layout}
  ${flexbox}
  ${variant(buttonVariants)}
`;

LinkButton.defaultProps = {
  borderRadius: 'md',
  border: 'md',
  borderColor: 'button.0',
  backgroundColor: 'button.0',
  color: 'text.0',
  p: 'md',
  m: 'sm',
  fontSize: 'md',
  fontFamily: 'regular'
};

const ToolbarButton = styled('button').withConfig({ shouldForwardProp })`
  ${props => buttonStyles(props)}

  &:active {
    transform: scale(.95);
  }
  &:not(.active):hover {
    background-color: ${props => props.theme.colors.gray[3]};
  }
  &:not(.active):focus {
    background-color: ${props => props.theme.colors.gray[3]};
  }
  &.active {
    background-color: ${props => props.theme.colors.white};
  }
`;

ToolbarButton.defaultProps = {
  borderRadius: 'md',
  border: 'md',
  borderColor: 'button.0',
  backgroundColor: 'button.0',
  color: 'text.0',
  p: 'md',
  m: 'sm',
  fontSize: 'md',
  fontFamily: 'regular'
};

export {
  Button,
  RouterButton,
  LinkButton,
  ToolbarButton
};
