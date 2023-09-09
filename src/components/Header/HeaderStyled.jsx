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
  width: 180px;
  height: 100px;
`;

export const HeaderNav = styled.nav`
  float: right;
  align-items: center;
  padding: 20px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  font-weight: 600;
  font-size: 18px;
`;
