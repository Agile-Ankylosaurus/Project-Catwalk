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
      if ( (number - index) < 1 && (number - index) > 0 ) {
        const pctOn = 100 * (number - index);
        const pctOff = 100 - pctOn;
        return (
          <span
            key={uniqNum + index}
            className="star-shape"
            style={{ background: `linear-gradient(90deg, #074b36 ${pctOn}%, #aaa ${pctOff}%` }}
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