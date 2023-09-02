import { NavLink } from 'react-router-dom';
import { Container } from '../App/App.styled';
import logo from 'img/logo.jpeg';

import { HeaderContainer } from './HeaderStyled';
import { HeaderLogo } from './HeaderStyled';
import { HeaderNav } from './HeaderStyled';

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
