import React from 'react';

const ImageGallery = (props) => {
  const {
    product,
    styles,
    selectedStyle,
    imgView,
    handleArrowClick,
  } = props;

  return (
    <div id="imgSlider">
      <div className="imgContainer" style={{ left: imgView * -800 }}>
        {styles[selectedStyle].photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.url}
            key={photo.urs}
            className="imgNormalSlide"
          />
        ))}
      </div>
        <button
          type="button"
          onClick={handleArrowClick}
          >
          <img
            src="./img/arrow.png"
            alt="arrow.png"
            value="left"
            className="leftArrow"
          />
        </button>
        <button
          type="button"
          onClick={handleArrowClick}
          >
          <img
            src="./img/arrow.png"
            alt="arrow.png"
            value="right"
            className="rightArrow"
            style={{ left: 750 }}
          />
        </button>
    </div>
  );
};

export default ImageGallery;
