import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 16px;
`;

export const GalleryItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  height: 100%; 
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ImageCaption = styled.div`
  padding: 8px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  border-radius: 0 0 8px 8px; 
`;


export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;