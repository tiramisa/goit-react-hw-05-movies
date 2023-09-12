import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GeneralContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2);
  grid-template-rows: repeat(2);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 900px;
  margin-bottom: 40px;

  img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    grid-area: 1 / 1 / 2 / 2;
    width: 290px;
    height: auto;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 22px;
  grid-area: 1 / 2 / 2 / 3;
  h1 {
    font-weight: 900;
    font-size: 34px;
    color: #ffa733;
  }

  h1,
  h2,
  p {
    font-size: 24px;
    padding: 8px;
    font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace,
      'Montserrat', sans-serif;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    color: #b3b3b6;
    padding-top: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #ffa733;
    padding-bottom: 0;
  }
`;

export const Score = styled.div`
  color: #838383;
  padding-left: 8px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  padding-bottom: 60px;
`;

export const AdditionalInfoWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 2;

  h2 {
    color: #ffa733;
    padding-bottom: 10px;
  }

  h2,
  p {
    font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace,
      'Montserrat', sans-serif;
  }
`;
export const GoBack = styled.div`
  width: 100px;
  padding: 5px;
  text-align: center;
  margin: 10px;
  border-radius: 30px;
  background-color: #838383;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #aba8a9;
  }
`;
export const StyledLink = styled(NavLink)`
  margin-top: 20px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  padding-right: 20px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  font-weight: 300;
  font-size: 16px;

  &.active {
    color: #ffee04;
    font-weight: 500;
  }
`;
