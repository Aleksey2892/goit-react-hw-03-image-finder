import React from 'react';

const ImageGalleryItem = ({ src, bigImg, onShowModal }) => {
  // console.log(bigImg);
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={src}
          alt="gallery-img"
          className="ImageGalleryItem-image"
          data-bigImg={bigImg}
          onClick={onShowModal}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
