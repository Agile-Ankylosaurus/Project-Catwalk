import React from 'react';
import ProductDetails from './ProductDetails.jsx';
import ImageGallery from './ImageGallery';

const ProductDetailsView = (props) => {
  const {
    product,
    styles,
    selectedStyle,
    imgView,
    handleStyleClick,
    handleArrowClick,
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
          imgView={imgView}
          handleArrowClick={handleArrowClick}
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
