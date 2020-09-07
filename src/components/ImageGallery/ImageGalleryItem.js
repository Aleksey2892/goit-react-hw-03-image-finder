import React from 'react';

const ImageGalleryItem = ({ src }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img src={src} alt="gallery-img" className="ImageGalleryItem-image" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
