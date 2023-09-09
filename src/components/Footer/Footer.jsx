import { Container } from '../App/App.styled';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

import {
  Social,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Social>
          <InstagramIcon>
            <FaInstagram />
          </InstagramIcon>
          <FacebookIcon>
            <FaFacebook />
          </FacebookIcon>
          <TwitterIcon>
            <FaTwitter />
          </TwitterIcon>
        </Social>
        <p>&copy; SoftCat</p>
      </Container>
    </footer>
  );
};

export default Footer;
