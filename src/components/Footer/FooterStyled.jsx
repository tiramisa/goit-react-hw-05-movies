import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  margin: auto;
  padding: 20px;
  gap: 24px;
  cursor: pointer;

  & > svg {
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
  }

  & > svg:hover,
  & > svg:focus {
    fill: #ccc;
    transform: scale(1.2);
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 24px;
  height: 24px;
`;

export const FacebookIcon = styled(FaFacebook)`
  width: 24px;
  height: 24px;
`;

export const TwitterIcon = styled(FaTwitter)`
  width: 24px;
  height: 24px;
`;
export const FooterCopy = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  font-weight: 400;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 20px;
  gap: 24px;
`;
export const FooterText = styled.p`
  font-size: 16px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  font-weight: 400;
`;
