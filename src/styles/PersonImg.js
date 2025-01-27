import styled from "styled-components";

export const PersonImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; 
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px; 
  aspect-ratio: 1 / 1; 
  margin: 10px; 
  border-radius: 50%; 
  object-fit: cover;
  border: 3px solid #ccc; 
`;