import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import { space } from 'styled-system';

const StyledIcon = styled.span`
  ${space}
`;

const Icon = (props) => {
  return (
    <StyledIcon {...props}>
      <FontAwesomeIcon {...props} />
    </StyledIcon>
  );
};

export default Icon;
