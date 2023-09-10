import { NavLink } from 'react-router-dom';
import { Container } from '../App/AppStyled';
import { HeaderContainer, HeaderLogo, StyledLink } from './HeaderStyled';

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
            <StyledLink to="/movies">Movies</StyledLink>
            <StyledLink to="/">Home</StyledLink>
          </nav>
        </HeaderContainer>
      </Container>
    </header>
  );
};

export default Header;
