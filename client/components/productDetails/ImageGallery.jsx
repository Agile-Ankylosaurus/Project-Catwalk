import React from 'react';

const ImageGallery = (props) => {
  const {
    product,
    styles,
    selectedStyle,
    imgView,
    handleArrowClick,
    handleImgThumbnailClick,
  } = props;


  return (
    <div id="imgSlider">
      <div
        className="imgContainer"
        style={
          { left: imgView * -800, width: styles[selectedStyle].photos.length * 800 }
        }
      >
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
          // style={{ left: 750 }}
        />
      </button>
      <div className="mainImgThumbnailContainer">
        {styles[selectedStyle].photos.map((photo, idx) => (
          <button
            type="button"
            onClick={handleImgThumbnailClick}
            key={`thumbnail${photo.thumbnail_url}`}
            className="mainImgThumbnailButton"
            style={{ top: idx * 75 }}
          >
            <img
              src={photo.thumbnail_url}
              alt={photo.thumbnail_url}
              key={photo.thumbnail_url}
              value={idx}
              className={imgView === idx ? 'mainImgThumbnail highlight' : 'mainImgThumbnail'}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
