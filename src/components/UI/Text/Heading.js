import React from 'react';
import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const StyledHeading = styled('h1').withConfig({ shouldForwardProp })`
  ${space}
  ${typography}
  ${color}
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
