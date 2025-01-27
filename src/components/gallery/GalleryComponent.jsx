import { useState } from "react";
import {
  GalleryContainer,
  GalleryImage,
  GalleryItem,
  ImageCaption,
  ImageContainer,
  Modal,
  ModalContent,
  ModalImage,
} from "../../styles/GalleryComponent";

const GalleryComponent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      {images.map((image) => (
        <GalleryItem
          key={image.id}
          onClick={() => handleImageClick(image)}
        >
          <ImageContainer>
            <GalleryImage src={image.src} alt={image.alt} />
            <ImageCaption>{image.alt}</ImageCaption>
          </ImageContainer>
        </GalleryItem>
      ))}

      {selectedImage && (
        <Modal onClick={handleCloseModal}>
          <ModalContent>
            <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
  );
};

export default GalleryComponent;
