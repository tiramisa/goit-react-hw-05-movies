import { Link, NavLink } from 'react-router-dom';
import { Container } from '../App/App.styled';
import logo from 'img/logo.jpeg';
import { HeaderTitle } from './HeaderTitle';

const Header = () => {
  return (
    <header>
      <Container>
        <Link to="/">
          <div>
            <NavLink to="/">
              <HeaderTitle image={logo}></HeaderTitle>
            </NavLink>
          </div>
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
