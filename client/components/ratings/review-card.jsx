import React, { useState } from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import ImageModal from './imageModal.jsx';

const ReviewCard = ({ review }) => {

  // adding the recommend line if applicable
  const Recommend = () => {
    if (review.recommend) {
      return <div className="review-body">I recommend this item.</div>;
    }
    return <></>;
  };

  // adding the response section, if applicable
  const Response = () => {
    if (review.response) {
      return (
        <div className="review-response">
          <div className="review-response" style={{ fontWeight: 'bold' }}>Response:</div>
          <span className="review-response">{review.response}</span>
        </div>
      );
    }
    return <></>;
  };

  // main render
  return (
    <div>
      <StarRating number={review.rating} uniqNum={review.date} />
      <span className="review-info">
        {review.reviewer_name},  {moment(review.date).format('LL')}
      </span>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <Recommend />
      {review.photos.map( (photo) => (
        <ImageModal photo={photo} />
      ))}
      <Response />
      <div className="review-help">
        Helpful? Yes (
        {review.helpfulness}
        )  |  Report
      </div>
    </div>
  );
};

export default ReviewCard;
