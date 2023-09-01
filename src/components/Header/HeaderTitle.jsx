import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  margin-top: 20px;
  margin-left: 20px;
`;
