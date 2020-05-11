import styled from 'styled-components';

const SheetDialog = styled.div`
  position: relative;
  margin: auto;
  min-height: 100%;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 100%;
  };
  max-width: ${props => props.theme.breakpoints[0]};
`;

export { SheetDialog };
