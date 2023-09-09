import { Container } from '../App/AppStyled';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

import {
  Social,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  FooterCopy,
  FooterContent,
  FooterText,
} from './FooterStyled';

const Footer = () => {
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/';
  };

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  const handleTwitterClick = () => {
    window.location.href = 'https://twitter.com/';
  };

  return (
    <footer>
      <Container>
        <Social>
          <InstagramIcon onClick={handleInstagramClick}>
            <FaInstagram />
          </InstagramIcon>
          <FacebookIcon onClick={handleFacebookClick}>
            <FaFacebook />
          </FacebookIcon>
          <TwitterIcon onClick={handleTwitterClick}>
            <FaTwitter />
          </TwitterIcon>
        </Social>
        <FooterContent>
          <FooterText>
            We are SoftCat, your trusted source for everything related to the
            film industry. We provide you with up-to-date information about new
            films, reviews, interesting facts, and much more.
          </FooterText>

          <FooterText>
            Follow us on Instagram, Facebook, and Twitter to keep up to date
            with the latest updates and share your impressions about movies!
          </FooterText>
        </FooterContent>
        <FooterCopy>&copy; SoftCat</FooterCopy>
      </Container>
    </footer>
  );
};

export default Footer;
