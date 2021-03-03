import React from 'react';
import ProductDetails from './ProductDetails.jsx';

const ProductDetailsView = (props) => {
  const { product, styles, selectedStyle, handleStyleClick} = props;
  // console.log(product, styles, selectedStyle);
  // console.log(styles[selectedStyle].photos[0].url)

  return (
    <div id="productContainer" className="border">
      <div id="productImageView" className="border">
        <div id="imgViewerComponent">
          { <img id="imgNormalView" src={styles[selectedStyle].photos[0].url}></img> }
        </div>
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
