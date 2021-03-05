import React from 'react';

const StarGraph = ({ stars, reviews }) => {
  const percent = {};
  const width = {};
  for (const key in stars) {
    percent[key] = Math.round(100 * stars[key] / reviews);
    width[key] = `width: '${percent[key]}%'`;
  }

  return (
    <div className="star-graph">
      <div className="starBox">
        <p>5 Stars</p>
        <p>{stars[5]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{width: `${percent[5]}%`}} />
        </div>
      </div>
      <div className="starBox">
        <p>4 Stars</p>
        <p>{stars[4]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{width: `${percent[4]}%`}} />
        </div>
      </div>
      <div className="starBox">
        <p>3 Stars</p>
        <p>{stars[3]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{width: `${percent[3]}%`}} />
        </div>
      </div>
      <div className="starBox">
        <p>2 Stars</p>
        <p>{stars[2]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{width: `${percent[2]}%`}}/>
        </div>
      </div>
      <div className="starBox">
        <p>1 Star</p>
        <p>{stars[1]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{width: `${percent[1]}%`}}/>
        </div>
      </div>
    </div>
  );
};

export default StarGraph;
