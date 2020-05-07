import React from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  display: ${props => props.hidden ? 'none' : 'block'};
`;

const Accordion = (props) => (
  <StyledAccordion {...props}>
    {props.children}
  </StyledAccordion>
);

export default Accordion;
