import React from 'react';
import reviews from '../Sample_data/SampleReviews.js';
import ReviewCard from './review-card.jsx';

const Reviews = ({ reviews }) => {
  // check length of reviews section
  const DisplayReviews = () => {
    if (reviews.length === 0) {
      return (
        <div>No Reviews for this product yet</div>
      );
    }
    if (reviews.length === 1) {
      return (
        <div>
          <ReviewCard review={reviews[0]} />
        </div>
      );
    }
    return (
      <div>
        <ReviewCard review={reviews[0]} />
        <ReviewCard review={reviews[1]} />
      </div>
    );
  };

  return (
    <div>
      <label className="review-head" htmlFor="search-select"># of Reviews sorted by </label>
      <select id="search-select">
        <option value="relevance">relevance</option>
        <option value="helpfulness">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      <DisplayReviews />
    </div>
  )
}

export default Reviews;