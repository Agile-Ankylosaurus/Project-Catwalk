import React, { useState } from 'react';

const ImageModal = ({ photo }) => {
  const [isOpen, setOpen] = useState(false);

  // opening or closing the picture modals
  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <span>
      {isOpen ? (
        <div className="pic-modal-content">
          <a key={photo.id} onClick={handleClick}>
            <img className="review-img-large" src={photo.url} alt=" " />
          </a>
          <div className="pic-modal-footer">
            <button
              type="submit"
              className="btn-cancel"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      ) :
        <img
          key={photo.id}
          className="review-img-small"
          src={photo.url}
          alt=" "
          onClick={handleClick}
        />}
    </span>
  )
};

export default ImageModal;
