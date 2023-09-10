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
  padding-bottom: 40px;
  padding-top: 30px;

  a {
    color: #ffa733; /*золото*/
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  a:hover {
    transform: scale(1.01);
    color: #d55b0f;
  }

  h1 {
    font-size: 24px;
  }
`;
