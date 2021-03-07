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
          // style={{ left: 750 }}
        />
      </button>
      {/* <button
        type="button"
        onClick=""
      >
        <img
          src={styles[selectedStyle].photos[0].thumbnail_url}
          alt={styles[selectedStyle].photos[0].thumbnail_url}
          value=""
          className="mainImgThumbnail"
          style={{ top: 50 }}
        />
      </button>
      <button
        type="button"
        onClick=""
      >
        <img
          src={styles[selectedStyle].photos[1].thumbnail_url}
          alt={styles[selectedStyle].photos[1].thumbnail_url}
          value=""
          className="mainImgThumbnail"
          style={{ top: 120 }}
        />
      </button> */}

      {styles[selectedStyle].photos.map((photo, idx) => (
        <button
          type="button"
          onClick=""
          key={`thumbnail${photo.thumbnail_url}`}
        >
          <img
            src={photo.thumbnail_url}
            alt={photo.thumbnail_url}
            key={photo.thumbnail_url}
            value=""
            className="mainImgThumbnail"
            style={{ top: idx * 75 + 50 }}
          />
        </button>
      ))}
    </div>
  );
};

export default ImageGallery;
