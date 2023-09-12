import styled from 'styled-components';

export const CardContainer = styled.div`
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px;
    text-align: center;
  }

  img {
    width: 150px;
    margin: 10px;
    height: 250px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }

  p {
    width: 200px;
    margin-top: 5px;
    font-weight: bold;
  }
`;
