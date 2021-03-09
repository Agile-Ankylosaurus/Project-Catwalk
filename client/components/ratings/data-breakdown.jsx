import React from 'react';
// import sampleObj from '../Sample_data/SampleMetadata';
import StarRating from './StarRating';
import StarGraph from './StarGraph';
import Characteristics from './characteristics';

const Breakdown = ({ metaData, overallRating }) => {
  const transformData = (dataObj) => {
    // initialize the transformed data obj
    const results = {};

    // find the percentage of recommends
    const recommend = parseInt(dataObj.recommended.true, 10) || 0;
    const notRecommend = parseInt(dataObj.recommended.false, 10) || 0;
    results.pctRecommend = Math.round(100 * (recommend / (recommend + notRecommend)));

    // find the number of each star rating and the weighted average
    results.stars = {};
    results.totalReviews = 0;
    const ratings = Object.keys(dataObj.ratings);
    for (let i = 0; i < ratings.length; i += 1) {
      results.stars[ratings[i]] = parseInt(dataObj.ratings[ratings[i]], 10);
      results.totalReviews += results.stars[ratings[i]];
    }

    // save all the characteristics into the new obj
    results.characteristics = {};
    const quals = Object.keys(dataObj.characteristics);
    for (let j = 0; j < quals.length; j += 1) {
      results.characteristics[quals[j]] = dataObj.characteristics[quals[j]].value;
    }
    return results;
  };
  const goodData = transformData(metaData);

  return (
    <div>
      <h1 className="overall-rating">{overallRating}</h1>
      <div>
        <span className="stars-rating">
          <StarRating number={overallRating} uniqNum={goodData.totalReviews} />
        </span>
      </div>
      <div className="percent-reviews">
        {goodData.pctRecommend}
        % of reviews recommend this product
      </div>
      <StarGraph stars={goodData.stars} reviews={goodData.totalReviews} />
      <Characteristics qualities={goodData.characteristics} />
    </div>
  );
};

export default Breakdown;
