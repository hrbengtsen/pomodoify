import styled, { css } from 'styled-components';

const display = (props) => {
  if (props.hidden) {
    return css`display: none;`;
  }

  return css`display: block;`;
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #21252b;
  opacity: 0.6;
  ${(props) => display(props)}
`;

export { ModalBackdrop };
