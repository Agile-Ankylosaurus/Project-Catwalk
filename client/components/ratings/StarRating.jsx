import React from 'react';

const StarRating = ({ number, uniqNum }) => (
  <span style={{ padding: '10px 0' }}>
    {[...Array(5)].map((item, index) => {
      if (index < number && (number - index) >= 1) {
        return (
          <span
            key={uniqNum + index}
            className="star-shape"
            style={{ backgroundColor: '#074b36' }}
          />
        );
      }
      if ((number - index) < 1 && (number - index) > 0) {
        const pctOn = Math.round(100 * (number - index));
        return (
          <span
            key={uniqNum + index}
            className="star-shape"
            style={{ background: `linear-gradient(90deg, #074b36 ${pctOn}%, #aaa ${pctOn}%` }}
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
);

export default StarRating;
