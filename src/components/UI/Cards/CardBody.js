import styled from 'styled-components';
import { space } from 'styled-system';

const CardBody = styled.div`
  flex: 1 1 auto;
  & > a {
    &:hover {
      text-decoration: none;
    };
    & + a {
      margin-left: ${props => props.theme.space.sm};
    };
  };
  ${space}
`;

CardBody.defaultProps = {
  p: 'lg',
};

export default CardBody;
