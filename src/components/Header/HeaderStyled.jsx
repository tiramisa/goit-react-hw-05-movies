import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderLogo = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 180px;
  height: 100px;
`;

export const StyledLink = styled(NavLink)`
  margin-top: 20px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  float: right;
  align-items: center;
  padding: 20px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  font-weight: 600;
  font-size: 18px;

  &.active {
    color: #ffee04;
    font-weight: 500;
  }
`;
