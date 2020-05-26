import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  /* .toast-container */

   /* .toast is passed to toastClassName */
  .toast {
    background-color: ${props => props.theme.colors.button[0]};
    color: ${props => props.theme.colors.text[1]};
    font-family: ${props => props.theme.fonts.regular};
    min-height: 48px;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    .toast {
      min-height: 64px;
    }
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
    
  }

  /* .progress is passed to progressClassName */
  .progress {
    background: #3DB0A5;
    background-color: #3DB0A5;
    color: #3DB0A5;
  }
`;