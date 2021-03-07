import React from 'react';
import ProductDetails from './ProductDetails.jsx';
import ImageGallery from './ImageGallery';

const ProductDetailsView = (props) => {
  const {
    product,
    styles,
    selectedStyle,
    selectedStyleImgMemory,
    imgView,
    handleStyleClick,
    handleArrowClick,
    handleImgThumbnailClick,
  } = props;

  // console.log(product, styles, selectedStyle);
  // console.log(styles[selectedStyle].photos[0].url)

  return (
    <div id="productContainer" className="border">
      <div id="productImageView" className="border">
        <ImageGallery
          product={product}
          styles={styles}
          selectedStyle={selectedStyle}
          selectedStyleImgMemory={selectedStyleImgMemory}
          imgView={imgView}
          handleArrowClick={handleArrowClick}
          handleImgThumbnailClick={handleImgThumbnailClick}
        />
        <ProductDetails
          product={product}
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
        />
      </div>
    </div>
  );
};

export default ProductDetailsView;
