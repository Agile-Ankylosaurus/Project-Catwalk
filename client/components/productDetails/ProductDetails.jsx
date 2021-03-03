import React from 'react';
import StyleView from './StyleView.jsx';



const ProductDetails = (props) => {
  const { product, styles, selectedStyle, handleStyleClick} = props;

  return (
    <div id="productView">
      <div>ratings component</div>
      {/* {console.log('this is product', product)} */}
      <span>{product.category}</span>
      <h1>{styles[selectedStyle].name} {product.name}</h1>
      <div>
        {
          styles[selectedStyle].sale_price
            ? <>
              <span className="origStrike">
                ${styles[selectedStyle].original_price}
              </span>
              <span className="salePrice">
                ${styles[selectedStyle].sale_price}
              </span>
              </>
            : <span>${styles[selectedStyle].original_price}</span>
        }
      </div>
      <div>
        STYLE &gt; {styles[selectedStyle].name}
      </div>
      <div className="styleView">
        <StyleView
          product={product}
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
        />
      </div>
      <select id="sizeBar" name="SELECT SIZE">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <select id="qtyBar" className="m20" name="QUANTITY">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <div className="flexSpaceBetween">
        <div id="addToBag" className="m20">
          <span>ADD TO BAG</span>
          <span className=""> +</span>
        </div>
        <div className="star m20">
          *
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
