import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid black;
  background-color: #333;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: #aba8a9;
  padding-left: 15px;
  padding-right: 15px;

  a {
    color: #ffa733; /*золото*/
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  a:hover {
    transform: scale(1.01);
    color: #d55b0f;
  }

  h1 {
    cursor: default;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 48px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 100;
    padding: 14px;
    color: #ffa733;
    transition: color 0.2s ease-in-out;
  }
  h1:hover {
    transform: scale(1.01);
    color: #d55b0f;
  }
`;
