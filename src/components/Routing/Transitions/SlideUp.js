import { css } from 'styled-components';

const transitionClassName = 'slideUp';
const duration = 400;

const slideUpStyles = css`
  .${transitionClassName}-enter {
    z-index: 1;
    opacity: 0;
    transform: translateY(40%);
  }

  .${transitionClassName}-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity ${duration}ms, transform ${duration}ms;
  }

  .${transitionClassName}-exit {
    opacity: 1;
  }

  .${transitionClassName}-exit-active {
    opacity: 0;
    transition: opacity ${duration / 2}ms;
  }
`;

const slideUp = { transition: transitionClassName, duration };

export { slideUp, slideUpStyles };
