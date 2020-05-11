import styled, { css, keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
      transform: translate3d(0, 50vh, 0);
  }

  to {
      transform: translate3d(0, 0, 0);
  }
`;

const FadeOut = keyframes`
  from {
      transform: translate3d(0, 0, 0);
  }

  to {
      transform: translate3d(0, 50vh, 0);
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

const SheetWrapper = styled.div`
  display: block;
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
  transition: visibility 0.6s ease;
  ${props => toggle(props)}
`;

export { SheetWrapper };
