import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onShowModal }) => (
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
