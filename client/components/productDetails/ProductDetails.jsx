import React from 'react';
import StyleView from './StyleView.jsx';

const ProductDetails = (props) => (
  <div id="productView">
    <div>ratings component</div>
    {/* {console.log('this is product', props.product)} */}
    <span>{props.product.category}</span>
    <h1>{props.styles[props.selectedStyle].name} {props.product.name}</h1>
    <div>
      {props.styles[props.selectedStyle].sale_price ? `$${props.styles[props.selectedStyle].original_price} $${props.styles[props.selectedStyle].sale_price}` : <span>${props.styles[props.selectedStyle].original_price}</span>}
    </div>
    <div>
      STYLE &gt; {props.styles[props.selectedStyle].name}
    </div>
    <div className="styleView">
      <StyleView
        product={props.product}
        styles={props.styles}
        selectedStyle={props.selectedStyle}
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

export default ProductDetails;
