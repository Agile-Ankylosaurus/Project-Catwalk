import React, { useState } from 'react';
import RatingsApp from './ratings/RatingsApp';
import QuestionsList from './Questions/QuestionsList';
import ProductDetailsView from './productDetails/ProductDetailsView';
import ProductDescription from './productDetails/ProductDescription';

const axios = require('axios');
const TOKEN = require('../../config.js');

const App = () => {
  const [product, setProduct] = useState([]);
  const [styles, setStyles] = useState([
    {
      name: '',
      sale_price: '',
      photos: [{
        thumbnail_url: '',
        url: '',
      }],
      style_id: '00000',
    },
  ]);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [meta, setMeta] = useState({
    ratings: {},
    recommended: {
      false: '0',
      true: '0',
    },
    characteristics: {},
  });
  const [reviews, setReviews] = useState([]);

  const getOneProduct = () => {
    // this url tests for 4+ styles and items on sale
    // const targetedProductURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/20118';
    // const productURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products';
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';

    // get the default product to populate the page on start up
    axios.get(`${url}products`, {
      headers: {
        Authorization: TOKEN,
      },
      params: {
        count: 1,
      },
    })
      .then((productRes) => {
        // console.log(productRes.data[0]);
        setProduct(productRes.data[0]);
        // get the styles data from the default product id
        axios.get(`${url}products/${productRes.data[0].id}/styles`, {
          headers: {
            Authorization: TOKEN,
          },
        })
          .then((styleRes) => {
            // console.log(styleRes);
            setStyles(styleRes.data.results);
            // get the reviews meta data from the default product id
            axios.get(`${url}reviews/meta?product_id=${productRes.data[0].id}`, {
              headers: {
                Authorization: TOKEN,
              },
            })
              .then((ratingMeta) => {
                // console.log(ratingMeta.data);
                const metaData = ratingMeta.data;
                const totalReviews = parseInt(metaData.recommended.false, 10)
                                 + parseInt(metaData.recommended.true, 10);
                setMeta(metaData);
                // get all reviews for the default product id
                axios.get(`${url}reviews/?product_id=${productRes.data[0].id}&count=${totalReviews}`, {
                  headers: {
                    Authorization: TOKEN,
                  },
                })
                  .then((allReviews) => {
                    setReviews(allReviews.data.results);
                  })
                  .catch((err) => {
                    console.log('error getting reviews', err);
                  });
              })
              .catch((err) => {
                console.log('error getting meta data', err);
              });
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  };

  useState(getOneProduct);

  return (
    <div className="">
      <div className="gridContainer gridMainTemplate">
        <div className="gridSpacer" />
        <div className="header">
          <div className="inner-header">
            <img className="logo-img" src="./img/ankylosaur1.jpg" alt="logo" />
            <p className="logo">Agile Creations</p>
            <input className="logo-search" placeholder="search..." />
          </div>
        </div>
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <ProductDetailsView product={product} styles={styles} selectedStyle={selectedStyle} />
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <ProductDescription product={product} styles={styles} selectedStyle={selectedStyle} />
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <div id="questions-answers">
          <QuestionsList />
        </div>
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <div id="reviews-ratings">
          <RatingsApp metaData={meta} reviews={reviews} />
        </div>
        <div className="gridSpacer" />
      </div>
    </div>
  );
};

export default App;
