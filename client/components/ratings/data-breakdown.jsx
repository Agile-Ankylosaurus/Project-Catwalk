import React from 'react';
import sampleObj from '../Sample_data/SampleMetadata.js';
import StarGraph from './StarGraph.jsx';
import Characteristics from './characteristics.jsx';

const Breakdown = ({ metaData }) => {
  const transformData = (dataObj) => {
    // initialize the transformed data obj
    const results = {};

    // find the percentage of recommends
    const recommend = parseInt(dataObj.recommended.true, 10);
    const notRecommend = parseInt(dataObj.recommended.false, 10);
    results.pctRecommend = Math.round(100 * (recommend / (recommend + notRecommend)));

    // find the number of each star rating and the weighted average
    results.stars = {};
    results.totalReviews = 0;
    results.weightedTotal = 0;
    for (let i in dataObj.ratings) {
      results.stars[i] = Number.parseInt(dataObj.ratings[i]);
      results.totalReviews += results.stars[i];
      results.weightedTotal += results.stars[i] * Number.parseInt(i);
    }
    if (results.totalReviews) {
      results.weightedAvg = (Math.round(10 * (results.weightedTotal / results.totalReviews))) / 10;
    }

    // save all the characteristics into the new obj
    results.characteristics = {};
    for ( var key in dataObj.characteristics) {
      results.characteristics[key] = dataObj.characteristics[key].value
    }
    return results;
  }
  // console.log(props);
  var goodData = transformData(metaData);

  return (
    <div>
      <h1 className="overall-rating">{goodData.weightedAvg}</h1>
      <div>
        <span className="stars-rating">
          {[...Array(5)].map( (star, idx) => (
            <span key={'overallkey' + idx} className="star-shape" />))}
        </span>
      </div>
      <div className="percent-reviews">
        {goodData.pctRecommend}
        % of reviews recommend this product
      </div>
      <StarGraph stars={goodData.stars} reviews={goodData.totalReviews}/>
      <Characteristics qualities={goodData.characteristics}/>
    </div>
  );
};

export default Breakdown;