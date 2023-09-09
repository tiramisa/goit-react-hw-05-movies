import { NavLink } from 'react-router-dom';
import { Container } from '../App/App.styled';
import { HeaderContainer, HeaderNav, HeaderLogo } from './HeaderStyled';

import logo from 'img/logo.jpeg';

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderContainer>
          <NavLink to="/">
            <div>
              <HeaderLogo image={logo}></HeaderLogo>
            </div>
          </NavLink>
          <nav>
            <NavLink to="/">
              <HeaderNav>Home</HeaderNav>
            </NavLink>
            <NavLink to="/movies">
              <HeaderNav>Movies</HeaderNav>
            </NavLink>
          </nav>
        </HeaderContainer>
      </Container>
    </header>
  );
};

export default Header;
