import React, { useState } from 'react';
import axios from 'axios';
// import reviews from '../Sample_data/SampleReviews';
import ReviewCard from './review-card';

const TOKEN = require('../../../config.js');

const Reviews = ({ reviews, product, setReviews }) => {
  const [reviewNum, setNum] = useState(0);
  const [sortOrder, setSort] = useState('relevant');
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';

  // opening or closing the picture modals
  function handleSortChange(e) {
    const sort = e.target.value
    if (sort !== sortOrder) {
      setSort(sort);
      axios.get(`${url}reviews/?product_id=${product}&count=${reviews.length}&sort=${sort}`, {
        headers: {
          Authorization: TOKEN,
        },
      })
        .then((allReviews) => {
          console.log(allReviews.data)
          setReviews(allReviews.data.results);
        })
        .catch((err) => {
          console.log('error getting reviews', err);
        });
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
  }

  // opening or closing the picture modals
  function handleMoreClick() {
    setNum(reviewNum + 2);
  }

  // check length of reviews section
  const DisplayReviews = () => {
    if (reviews.length - reviewNum === 1) {
      return (
        <div>
          {reviews.map( (review, idx) => (
            <ReviewCard key={review.id + idx} review={review} />
          ))}
        </div>
      );
    }
    return (
      <div>
        {[...Array(reviewNum + 2)].map( (item, idx) => (
          <ReviewCard key={reviews[idx].id + idx} review={reviews[idx]} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <form className="review-head" onSubmit={handleSubmit}>
        <h4 className="review-head">
          {reviews.length} 
          reviews, sorted by
        </h4>
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="relevant">relevance</option>
          <option value="helpful">helpfulness</option>
          <option value="newest">newest</option>
        </select>
      </form>
      <div className="review-cards">
        { (reviews.length > 0) ?
          <DisplayReviews />
          : null
        }
      </div>
      {reviews.length - reviewNum > 2
        ? <button
            type="submit"
            className="big-review-btn"
            onClick={handleMoreClick}>
              More Reviews
          </button>
        : null}
      <button type="submit" className="big-review-btn">Add A Review +</button>
    </div>
  )
}

export default Reviews;