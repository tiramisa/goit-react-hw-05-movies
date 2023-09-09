import { Container } from '../App/App.styled';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

import { Social } from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Social>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </Social>
        <p>&copy; SoftCat</p>
      </Container>
    </footer>
  );
};

export default Footer;
