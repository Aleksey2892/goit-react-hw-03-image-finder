import React from 'react';

const ImageGalleryItem = ({ onShowModal, otherProps }) => {
  const { largeImageURL, webformatURL } = otherProps;

  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt="gallery-img"
          className="ImageGalleryItem-image"
          onClick={() => onShowModal(largeImageURL)}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
