import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderLogo = styled.h1`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  margin-left: 20px;
`;

export const HeaderNav = styled.nav`
  float: right;
  align-items: center;
  gap: 80px;
`;
