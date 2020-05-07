import styled from 'styled-components';

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: 0;
  background-clip: padding-box;
  background-color: ${props => props.theme.colors.gray[0]};
  color: ${props => props.theme.colors.gray[1]};
  border: ${props => props.theme.borders.md} ${props => props.theme.colors.gray[0]};
  border-radius: ${props => props.theme.radii.md}px;
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    min-height: 100vh;
  };
`;

export { ModalContent };
