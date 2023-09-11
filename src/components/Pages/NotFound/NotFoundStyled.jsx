import styled from 'styled-components';
import CatEat from 'img/cat-eat.png';

export const ErrorNotFound = styled.div`
  img {
    display: flex;
    align-items: center;
    margin: auto;
    filter: brightness(1.2);
  }

  p {
    color: #e5be3c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }
`;
export const LinkFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0;

  .animate__heartBeat {
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
  }
`;

export const CatImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-image: url(${CatEat});
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
