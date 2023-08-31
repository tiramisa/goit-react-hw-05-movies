import { Link, NavLink } from 'react-router-dom';
import { FaBilibili } from 'react-icons/fa6';
import { Container } from '../App/App.styled';

const Header = () => {
  return (
    <header>
      <Container>
        <Link to="/">
          <div>
            <FaBilibili />
            <h1>KinoCat</h1>
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
