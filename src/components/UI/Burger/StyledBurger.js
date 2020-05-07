import styled, { css } from 'styled-components';

const open = (props) => {
  if (!props.hidden) {
    return css`
      span:nth-child(1) {
        top: 12px;
        width: 0%;
        left: 50%;
      }
      span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        top: 12px;
        width: 0%;
        left: 50%;
      }
    `;
  }

  return '';
};

const StyledBurger = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -ms-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  background-color: ${props => props.theme.colors.purple};
  border: none;
  cursor: pointer;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  };

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -ms-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  &:hover span {
    background-color: ${props => props.theme.colors.yellow[0]};
  }
  &:focus {
    outline: 0;
  }
  &:focus span {
    background-color: ${props => props.theme.colors.yellow[0]};
  }
  span:nth-child(1) {
    top: 3px;
  }
  span:nth-child(2), span:nth-child(3) {
    top: 11px;
  }
  span:nth-child(4) {
    top: 19px;
  }
  ${props => open(props)}
`;

export default StyledBurger;
