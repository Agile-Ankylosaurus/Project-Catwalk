import React, { useState } from 'react';
import RatingsApp from './ratings/RatingsApp';
import QuestionsList from './Questions/QuestionsList';
import ProductDetailsView from './productDetails/ProductDetailsView';
import ProductDescription from './productDetails/ProductDescription';

const axios = require('axios');
const TOKEN = require('../../config.js');

const App = () => {
  const [product, setProduct] = useState(
    {
      features: [
        {
          feature: '',
          value: '',
        },
      ],
    },
  );
  const [styles, setStyles] = useState([
    {
      name: '',
      sale_price: '',
      photos: [{
        thumbnail_url: '',
        url: '',
      }],
      style_id: '00000',
      skus: {
        0: {
          quantity: 0,
          size: '',
        },
      },
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
  const [questions, setQuestions] = useState([]);

  // functions
  const handleStyleClick = (e) => {
    setSelectedStyle(parseInt((e.target.attributes.styleidx.value), 10));
  };

  const getOneProduct = () => {
    // this url tests for 4+ styles and items on sale
    // const targetedProductURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/20118';
    // const productURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products';
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';
    const productLimit = 20;
    const randomNumberGenerator = (max) => {
      let result = Math.floor(Math.random() * Math.floor(max) + 1);
      if (result < 10) {
        result = `2011${result.toString()}`;
        return result;
      }
      result = `201${result.toString()}`;
      return result;
    };
    const randomProductUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/${randomNumberGenerator(productLimit).toString()}`;
    console.log(randomProductUrl);

    // get the default product to populate the page on start up
    axios.get(randomProductUrl, {
      headers: {
        Authorization: TOKEN,
      },
      params: {
        count: 1,
      },
    })
      .then((styleRes) => {
        // console.log(styleRes);
        setStyles(styleRes.data.results);
        // get the reviews meta data from the default product id
        axios.get(`${url}reviews/meta?product_id=${styleRes.data.product_id}`, {
          headers: {
            Authorization: TOKEN,
          },
        })
          .then((ratingMeta) => {
            const metaData = ratingMeta.data;
            // determine the total reviews from the recommended
            const good = metaData.recommended.true ? parseInt(metaData.recommended.true, 10) : 0;
            const bad = metaData.recommended.false ? parseInt(metaData.recommended.false, 10) : 0;
            const totalReviews = good + bad;
            setMeta(metaData);
            // get all reviews for the default product id
            axios.get(`${url}reviews/?product_id=${styleRes.data.product_id}&count=${totalReviews}`, {
              headers: {
                Authorization: TOKEN,
              },
            })
              .then((allReviews) => {
                setReviews(allReviews.data.results);
                // get questions for q&a
                axios.get(`${url}qa/questions/?product_id=${styleRes.data.product_id}`, {
                  headers: {
                    Authorization: TOKEN,
                  },
                })
                  .then((question) => {
                    setQuestions(question.data.results);
                  })
                  .catch((err) => {
                    console.log('error getting questions', err);
                  });
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
  };

  useState(getOneProduct);

  console.log(product);

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
        <ProductDetailsView
          product={product}
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
        />
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <ProductDescription product={product} styles={styles} selectedStyle={selectedStyle} />
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <div id="questions-answers">
          <QuestionsList questions={questions} />
        </div>
        <div className="gridSpacer" />
        <div className="gridSpacer" />
        <div id="reviews-ratings">
          <RatingsApp metaData={meta} reviews={reviews} setReviews={setReviews} />
        </div>
        <div className="gridSpacer" />
      </div>
    </div>
  );
};

export default App;
