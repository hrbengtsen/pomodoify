import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Card = styled('div').withConfig({ shouldForwardProp })`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  transition: box-shadow 0.15s ease-in-out, top 0.15s ease-in-out;
  top: 0;
  &:hover {
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.gray[1]};
    top: -5px;
  }
  ${space}
  ${color}
  ${border}
`;

const CardClickable = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  text-align: inherit;
  &:focus > div {
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.gray[1]};
    top: -5px;
  }
`;

Card.defaultProps = {
  backgroundColor: 'gray.0',
  borderRadius: 'md'
};

export { Card, CardClickable };
