import React from 'react';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          bigImg={largeImageURL}
          onShowModal={onShowModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
