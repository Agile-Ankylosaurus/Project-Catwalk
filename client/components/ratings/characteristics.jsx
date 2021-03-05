import React from 'react';

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
          <span className="low-qual">{meanings[quality][1]}</span>
          <span className="high-qual">{meanings[quality][5]}</span>
        </div>
      ))}
    </div>
  );
};

const meanings = {
  Size: {
    1: 'A size too small',
    2: '1/2 size too small',
    3: 'Perfect',
    4: '1/2 size too big',
    5: 'A size too big',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'Expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs short',
    2: 'Slightly short',
    3: 'Perfect',
    4: 'Slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Slightly tight',
    3: 'Perfect',
    4: 'Slightly loose',
    5: 'Runs loose',
  },
};

export default Characteristics;
