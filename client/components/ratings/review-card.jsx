import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import ImageModal from './imageModal';

const ReviewCard = ({ review }) => {
  const [help, setHelp] = useState(false);
  const [report, setReport] = useState('Report');

  // adding the recommend line if applicable
  const Recommend = () => {
    if (review.recommend) {
      return (
        <div>
          <img
            src="./img/checkmark.png"
            className="featureCheckmark"
            alt="checkmark"
          />
          <span className="review-body">I recommend this item.</span>
        </div>
      );
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

  // incrementing the helpful counter on the review
  function handleYesClick() {
    if (!help) {
      review.helpfulness += 1;
      axios.put('/reviews/help', {id: review.review_id})
        .then(() => setHelp(true))
        .catch((err) => console.log('error in the post', err));
    }
  }

  // reporting the review will remove it from the database
  function handleReportClick() {
    if (report === 'Report') {
      axios.put('/reviews/report', {id: review.review_id})
        .then(() => setReport('Reported'))
        .catch((err) => console.log('error in the post', err));
    }
  }

  function correctDate(date) {
    const temp = new Date(date).toLocaleDateString('en-gb', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const array = temp.split(' ');
    return `${array[1]} ${array[0]}, ${array[2]}`;
  }

  // main render
  return (
    <div>
      <StarRating number={review.rating} uniqNum={review.date} />
      <span className="review-info">
        {review.reviewer_name}
        `,  `
        {correctDate(review.date)}
      </span>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <Recommend />
      {review.photos.map((photo) => (
        <ImageModal key={photo.id} photo={photo} />
      ))}
      <Response />
      <div className="review-help">
        <span className="normal">Helpful?  </span>
        <span className="clickable" onClick={handleYesClick}>Yes ({review.helpfulness})</span>
        <span className="normal">  |  </span>
        <span className="clickable" onClick={handleReportClick}>{report}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
