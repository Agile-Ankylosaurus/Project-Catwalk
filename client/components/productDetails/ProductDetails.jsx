import React, { useState, useEffect } from 'react';
import StyleView from './StyleView.jsx';

const ProductDetails = (props) => {
  const { product, styles, selectedStyle, handleStyleClick} = props;
  // const [size, setSize] = useState('');
  // const [qty, setQty] = useState(0);
  const [SKU, setSKU] = useState(0);
  const [arr, setArr] = useState([0])
  // let arr = [];

  const arrMaker = (itemQty) => {
    setArr([0]);
    let tempArr = [];
    if (itemQty > 15) {
      for (let i = 1; i <= 15; i += 1) {
        tempArr.push(i);
      }
    } else {
      for (let i = 1; i <= itemQty; i += 1) {
        tempArr.push(i);
      }
    }
    setArr(tempArr);
  };

  const sizeChangeHandler = (e) => {
    arrMaker(styles[selectedStyle].skus[e.target.value].quantity)
    setSKU(e.target.value);
    // console.log(styles[selectedStyle].skus[e.target.value].quantity);
    // setQty(styles[selectedStyle].skus[e.target.value].quantity);
    // setSize(styles[selectedStyle].skus[e.target.value].size);
    // if (styles[selectedStyle].skus[e.target.value].quantity > 15) {
    //   arr = new Array(15);
    // } else {
    //   arr = new Array(styles[selectedStyle].skus[e.target.value].quantity);
    // }
  };


  // useEffect(() => {
  // }, [arr]);

  return (
    <div id="productView">
      {/* {console.log(arr)} */}
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
      {/* {console.log(styles[selectedStyle].skus)}
      {console.log(Object.entries(styles[selectedStyle].skus).map((key, value) => {
        console.log(key[1].quantity, '=', key[1].size, key[0])
      }))} */}
      <select id="sizeBar" name="SELECT SIZE" onChange={sizeChangeHandler}>
      {/* <select id="sizeBar" name="SELECT SIZE" onChange={(e) => { setSKU(e.target.value); }}> */}
        <option value="">Select Size</option>
        {Object.entries(styles[selectedStyle].skus).map((key) => (
          key[1].quantity !== 0 ? <option value={key[0]} key={key[0]}>{key[1].size}</option> : <option key={key[0]}/>
        ))}
      </select>
      <select id="qtyBar" className="m20" name="QUANTITY">
        <option>Select Qty</option>
        {arr.map((item) => (
          <option>
            {item}
          </option>
        ))}
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
