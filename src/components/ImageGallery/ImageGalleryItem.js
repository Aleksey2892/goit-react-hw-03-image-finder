import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onShowModal, otherProps }) => {
  const { largeImageURL, webformatURL } = otherProps;

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt="gallery-img"
        className="ImageGalleryItem-image"
        onClick={() => onShowModal(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onShowModal: PropTypes.func.isRequired,
  otherProps: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
