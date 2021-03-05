import React, { useState } from 'react';

const ImageModal = ({ photo }) => {
  const [isOpen, setOpen] = useState(false);

  // opening or closing the picture modals
  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <span>
      {isOpen ?
        <div className="modal-content">
          <img key={photo.id}
            className="review-img-large"
            src={photo.url}
            alt="no image"
            onClick={handleClick} />
          <div className="modal-footer">
            <button onClick={handleClick} className="btn-cancel">Close</button>
          </div>
        </div> :
        <img key={photo.id}
          className="review-img-small"
          src={photo.url}
          alt="no image"
          onClick={handleClick}
      /> }
    </span>
  )
};

export default ImageModal;
