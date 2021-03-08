import React from 'react';
import Breakdown from './data-breakdown';
import Reviews from './reviewSection';

const RatingsApp = ({
  metaData, reviews, setReviews, overallRating
}) => (
  <div className="ratings-module">
    <span className="ratings-title">Ratings &amp; Reviews</span>
    <div className="metadata-sidebar">
      <Breakdown
        metaData={metaData}
        overallRating={overallRating}
      />
    </div>
    <div className="reviews">
      <Reviews
        reviews={reviews}
        metaData={metaData}
        setReviews={setReviews}
      />
    </div>
  </div>
);

export default RatingsApp;
