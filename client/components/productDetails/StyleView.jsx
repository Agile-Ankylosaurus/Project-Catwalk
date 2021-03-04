import React from 'react';

const StyleView = (props) => {
  const { product, styles, selectedStyle, handleStyleClick } = props;

  return (
    <div>
      {styles.map((style, idx) => {
        // console.log(idx === currentStyle ? 'true hide' : 'false hide')
        const styleButton = (
          <button
            type="button"
            onClick={handleStyleClick}
            className="styleButton"
            key={style.style_id}
            >
            <img
              id={style.style_id}
              styleidx={idx}
              alt={style.name + product.name}
              src={style.photos[0].thumbnail_url}
              className={idx === selectedStyle ? 'selectedStyle' : 'styleThumbnail '}
              key={style.style_id}
              />
            <img
              key={style.style_id}
              src="./img/checkmark.png"
              className={idx === selectedStyle ? 'ShowEle checkmark' : 'hiddenEle '}
            />
          </button>
        );
        if (idx % 4 === 0) {
          return (
            <>
              <br />
              { styleButton }
            </>
          );
        }
        return (
          <>
            {styleButton}
          </>
        );
      })}
    </div>
  );
};

export default StyleView;
