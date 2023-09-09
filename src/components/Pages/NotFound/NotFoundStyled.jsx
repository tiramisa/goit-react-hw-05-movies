import styled from 'styled-components';

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
