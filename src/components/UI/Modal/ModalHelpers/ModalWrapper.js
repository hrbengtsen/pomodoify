import styled, { css } from 'styled-components';

const display = (props) => {
  if (props.hidden) {
    return css`display: none;`;
  }

  return css`
    display: block;
  `;
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${props => display(props)}
`;

export { ModalWrapper };
