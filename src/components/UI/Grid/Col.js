import styled, { css } from 'styled-components';
import { space, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const colums = 12;

const percentage = (val) => `${100 * val}%`;

const styleForSize = (size) => css`
  flex: 0 0 ${percentage(size / colums)};
  max-width: ${percentage(size / colums)};
`;

const styleForOffset = (offset) => css`
  margin-left: ${percentage(offset / colums)};
`;

const order = (props) => (
  props.order && css`
    order: ${props.order};
  `
);

const hasSize = (props) => (props.xs
  || props.sm
  || props.md
  || props.lg
  || props.xl);

const Col = styled('div').withConfig({ shouldForwardProp })`
  box-sizing: border-box;
  position: relative;
  width: 100%;

  ${props => order(props)}

  ${props => props.xs && styleForSize(props.xs)}
  ${props => props.xsOff && styleForOffset(props.xsOff)}

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    ${props => !hasSize(props) && css`
      flex-basis: 0;
      flex-grow: 1;
    `}

    ${props => props.sm && styleForSize(props.sm)}
    ${props => props.smOff && styleForOffset(props.smOff)}
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    ${props => props.md && styleForSize(props.md)}
    ${props => props.mdOff && styleForOffset(props.mdOff)}
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    ${props => props.lg && styleForSize(props.lg)}
    ${props => props.lgOff && styleForOffset(props.lgOff)}
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    ${props => props.xl && styleForSize(props.xl)}
    ${props => props.xlOff && styleForOffset(props.xlOff)}
  }
  ${space}
  ${typography}
`;

Col.defaultProps = {
  p: 'lg'
};

export default Col;
