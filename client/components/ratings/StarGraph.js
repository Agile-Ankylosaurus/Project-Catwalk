import React from 'react';

const StarGraph = function(props) {
  let percent = {};
  let width = {};
  for (var key in props.stars) {
    console.log(props.reviews, props.stars[key]);
    percent[key] = Math.round(100 * props.stars[key] / props.reviews);
    width[key] = `width: "${percent[key]}%"`
    console.log(percent[key], width[key]);
  }
  var widthFive = width[5];
  console.log(width[5], widthFive, percent[5], `"${percent[5]}%"`);
  const widthStyle = {widthFive};
  console.log(widthStyle);
  return (
  <div className="star-graph">
    <div className="starBox">
      <p>5 Stars</p>
      <p>{props.stars[5]}</p>
      <div className="star">
        <div className="star-level" style={widthStyle.widthFive}></div>
      </div>
    </div>
    <div className="starBox">
      <p>4 Stars</p>
      <p>{props.stars[4]}</p>
      <div className="star">
        <div className="star-level"></div>
      </div>
    </div>
    <div className="starBox">
      <p>3 Stars</p>
      <p>{props.stars[3]}</p>
      <div className="star">
        <div className="star-level"></div>
      </div>
    </div>
    <div className="starBox">
      <p>2 Stars</p>
      <p>{props.stars[2]}</p>
      <div className="star">
        <div className="star-level"></div>
      </div>
    </div>
    <div className="starBox">
      <p>1 Star</p>
      <p>{props.stars[1]}</p>
      <div className="star">
        <div className="star-level"></div>
      </div>
    </div>
  </div>
  )
  }
export default StarGraph;
