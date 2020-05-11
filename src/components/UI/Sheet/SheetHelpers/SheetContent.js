import styled from 'styled-components';

const SheetContent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: 0;
  background-clip: padding-box;
  background-color: ${props => props.theme.colors.button[0]};
  border: ${props => props.theme.borders.md} ${props => props.theme.colors.button[0]};
  border-radius: ${props => props.theme.radii.md}px;
  min-height: 40vh;
`;

export { SheetContent };
