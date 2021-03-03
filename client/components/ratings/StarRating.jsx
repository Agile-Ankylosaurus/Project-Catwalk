import React from 'react';

const StarRating = ({ number, uniqNum }) => (
  <span style={{ padding: '10px 0' }}>
    {[...Array(5)].map((item, index) => {
      if (index < number) {
        return (
          <span
            key={uniqNum + index}
            className="star-shape"
            style={{ backgroundColor: '#074b36' }}
          />
        );
      }
      return (
        <span
          key={uniqNum + index}
          className="star-shape"
        />
      );
    })}
  </span>
)

export default StarRating;