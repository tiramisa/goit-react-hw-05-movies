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
