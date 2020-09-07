import React from 'react';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
