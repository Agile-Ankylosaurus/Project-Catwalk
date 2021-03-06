import React from 'react';

const MEANINGS = require('./meanings');

const Characteristics = ({ qualities }) => {
  const quals = Object.keys(qualities);
  // style={{width: `${Math.round(100 * (qualities[quality] / 5))}%`}}
  return (
    <div>
      {quals.map((quality, idx) => (
        <div key={quality + idx}>
          <div className="quality">
            {quality}
            <div className="slider"
              style={{width: `${100 - (Math.round(100 * (qualities[quality] / 5)))}%`}}
            >
              <span className="slider-shape"></span>
            </div>
          </div>
          <div className="qualbar" />
          <span className="low-qual">{MEANINGS[quality][1]}</span>
          <span className="high-qual">{MEANINGS[quality][5]}</span>
        </div>
      ))}
    </div>
  );
};


export default Characteristics;
