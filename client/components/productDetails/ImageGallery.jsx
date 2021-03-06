import React from 'react';

const ImageGallery = (props) => {
  const { product, styles, selectedStyle} = props;

  return (
    <div id="imgSlider">
      <div className="imgContainer">
        {console.log('styles obj', styles)}
        <img
          src="./img/arrow.png"
          alt=""
        />
        {styles[selectedStyle].photos.map((photo)=>{
          return (
            <img
              src={photo.url}
              alt={photo.url}
              key={photo.urs}
              className="imgNormalSlide"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
