import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 900px;
  img {
    grid-area: 1 / 1 / 2 / 2;
    width: 250px;
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

export const AdditionalInfoWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 2;

  h2 {
    color: #ffa733;
  }
  h2,
  p {
    font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace,
      'Montserrat', sans-serif;
  }
`;

export const Score = styled.div`
  color: #838383;
  padding-left: 8px;
  font-family: 'Playfair Display', serif, 'Ubuntu Mono', monospace, 'Montserrat',
    sans-serif;
  padding-bottom: 60px;
`;
