import React from 'react';

const Button = ({ onLoadMore }) => {
  return (
    <div className="BtnBox">
      <button type="button" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
