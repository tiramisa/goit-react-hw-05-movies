import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Li = styled.li`
  width: 225px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  display: block;
  height: 100%;
  width: 100%;
`;

export const ImgCard = styled.div`
  height: 339px;
  width: 226px;
`;
