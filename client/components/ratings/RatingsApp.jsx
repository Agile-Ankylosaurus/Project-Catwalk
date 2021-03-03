import React from 'react';
import Breakdown from './data-breakdown.jsx';
import Reviews from './reviewSection.jsx';

const RatingsApp = ({ metaData, reviews }) => (
  <div className="ratings-module">
    <span className="ratings-title">Ratings &amp; Reviews</span>
    <div className="metadata-sidebar">
      <Breakdown metaData={metaData} />
    </div>
    <div className="reviews">
      <div>
        <Reviews reviews={reviews} />
        <button type="submit" className="big-review-btn">More Reviews</button>
        <button type="submit" className="big-review-btn">Add A Review +</button>
      </div>
    </div>
  </div>
);

export default RatingsApp;
