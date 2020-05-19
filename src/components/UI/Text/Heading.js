import React from 'react';
import styled, { css } from 'styled-components';
import { space, typography, color, border, position } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const highlight = (props) => (
  props.highlight && css`
    &::after {
      content: "";
      position: absolute;
      width: 250px;
      background: #FCEDA2;
      left: 0;
      bottom: .5em;
      height: .5em;
      z-index: -1;
      border-radius: 16px;
    };

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      &::after {
        width: 200px;
      };
    }
  `
);

const StyledHeading = styled('h1').withConfig({ shouldForwardProp })`
  ${props => highlight(props)}
  ${space}
  ${typography}
  ${color}
  ${border}
  ${position}
`;

const Heading = (props) => {
  let {type, ...rest} = props;

  return (
    <StyledHeading
      as={`${props.type}`}
      {...rest}
    />
  )
};

Heading.defaultProps = {
  type: 'h1',
};

StyledHeading.defaultProps = {
  color: 'text.1',
  fontWeight: 'bold'
};

export default Heading;
