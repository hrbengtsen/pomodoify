import styled, { css, keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
      opacity: 0;
  }

  to {
      opacity: 0.6;
  }
`;

const FadeOut = keyframes`
  from {
      opacity: 0.6;
  }

  to {
      opacity: 0;
  }
`;

const toggle = (props) => {
  if (props.hidden) {
    return css`
      animation-name: ${FadeOut};
      animation-duration: 0.6s;
      animation-timing-function: ease;
      visibility: hidden;
    `;
  }

  return css`
    animation-name: ${FadeIn};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    visibility: visible;
  `;
};

const SheetBackdrop = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #887D6A;
  opacity: 0.6;
  transition: visibility 0.6s ease;
  ${props => toggle(props)}
`;

export { SheetBackdrop };
