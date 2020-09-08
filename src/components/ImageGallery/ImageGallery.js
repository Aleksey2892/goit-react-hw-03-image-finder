import React from 'react';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, ...otherProps }) => (
        <ImageGalleryItem
          key={id}
          onShowModal={onShowModal}
          otherProps={otherProps}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
