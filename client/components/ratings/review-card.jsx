import React, { useState } from 'react';
import moment from 'moment';
import StarRating from './StarRating';
import ImageModal from './imageModal';

const ReviewCard = ({ review }) => {
  const [help, setHelp] = useState(false);
  const [report, setReport] = useState('Report');

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

  function handleYesClick() {
    !help ? review.helpfulness++ : null;
    setHelp(true);
  }

  function handleReportClick() {
    report === 'Report' ? setReport('Reported') : null;
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
        {review.reviewer_name},  {correctDate(review.date)}
      </span>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <Recommend />
      {review.photos.map( (photo) => (
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
