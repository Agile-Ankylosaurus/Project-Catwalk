import React from 'react';

const ImageGallery = (props) => {
  const {
    product,
    styles,
    selectedStyle,
    selectedStyleImgMemory,
    imgView,
    thumbnailView,
    handleArrowClick,
    handleImgThumbnailClick,
  } = props;
// console.log(styles)

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
          imgViewValue={imgView}
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
          imgViewValue={imgView}
          className="rightArrow"
          // style={{ left: 750 }}
        />
      </button>
      <div
        className="mainImgThumbnailSlider"
      >
        <div
          className="mainImgThumbnailContainer"
          style={{ top: thumbnailView * -75 }}
        >
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
      <button
        type="button"
        // className="thumbnailArrowButton thumbnailArrowUpper"
        className={thumbnailView === 0 ? 'hiddenEle' : 'thumbnailArrowButton thumbnailArrowUpper'}
        onClick={handleArrowClick}
      >
        <img
          src="./img/slimArrow.png"
          alt="upper thumbnail arrow"
          className="thumbnailArrow thumbnailArrowUpper"
          value="up"
          thumbnailView={thumbnailView}
        />
      </button>
      <button
        type="button"
        className={thumbnailView + 7 >= styles[selectedStyle].photos.length ? 'hiddenEle' : 'thumbnailArrowButton thumbnailArrowLower'}
        onClick={handleArrowClick}
      >
        <img
          src="./img/slimArrow.png"
          alt="lower thumbnail arrow"
          className="thumbnailArrow thumbnailArrowLower rotate180"
          value="down"
          thumbnailView={thumbnailView}
        />
      </button>
    </div>
  );
};

export default ImageGallery;
