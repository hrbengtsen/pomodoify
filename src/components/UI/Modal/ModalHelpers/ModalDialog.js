import styled, { css } from 'styled-components';

const dialogCentered = (props) => (
  props.centered && css`
    display: flex;
    align-items: center;
  `
);

const ModalDialog = styled.div`
  position: relative;
  margin: auto;
  padding: 0.5rem;
  min-height: calc(100% - (0.5rem * 2));
  ${(props) => dialogCentered(props)};
  max-width: 500px;

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0;
    min-height: 100%;
  };
`;

export { ModalDialog };
