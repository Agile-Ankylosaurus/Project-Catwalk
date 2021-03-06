import React from 'react';

const StyleView = (props) => {
  const { product, styles, selectedStyle, handleStyleClick } = props;

  return (
    <div>
      {styles.map((style, idx) => {
        const styleButton = (
          <button
            type="button"
            onClick={handleStyleClick}
            className="styleButton"
            key={`button${style.style_id}${idx}`}
          >
            <img
              id={style.style_id}
              styleidx={idx}
              alt={style.name + product.name}
              src={style.photos[0].thumbnail_url}
              className={idx === selectedStyle ? 'selectedStyle styleThumbnail' : 'styleThumbnail '}
              key={`img${style.style_id}${idx}`}
            />
            <img
              key={`check${style.style_id}${idx}`}
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
