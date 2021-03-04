import React from 'react';
import Breakdown from './data-breakdown';
import Reviews from './reviewSection';

const RatingsApp = ({ metaData, reviews, setReviews }) => {
  return (
  <div className="ratings-module">
    <span className="ratings-title">Ratings &amp; Reviews</span>
    <div className="metadata-sidebar">
      <Breakdown metaData={metaData} />
    </div>
    <div className="reviews">
      <Reviews reviews={reviews} product={metaData.product_id} setReviews={setReviews} />
    </div>
  </div>
)};

export default RatingsApp;
