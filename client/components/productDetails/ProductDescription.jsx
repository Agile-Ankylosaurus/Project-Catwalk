import React from 'react';

const ProductDescription = (props) => {
  const { product } = props;


  return (
    <div id="productDiscContainer" className="border">
      <div className="flexGrow3">
        <h3>{product.slogan}</h3>
        <span>
          {product.description}
        </span>
      </div>
      <div className="border flexGrow1">
        <ul>
          {product.features.map((feature) => (
            <li>
              <img
                src="./img/checkmark.png" className="featureCheckmark"
                alt="checkmark"
              />
              {`${feature.feature} `}
              {feature.value === null ? '' : feature.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
