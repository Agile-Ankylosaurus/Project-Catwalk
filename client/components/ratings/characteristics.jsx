import React from 'react';

const Characteristics = function(props) {
  const quals = Object.keys(props.qualities)
  console.log(props.qualities, quals);
  return (
    <div className="quality">
      {quals.map( (quality, idx) =>
        <div key={quality + idx}>
          <div>{quality}, {Math.round(100 * props.qualities[quality] / 5)}%</div>
          <div className="qualbar">
          </div>
          <span className="low-qual">{meanings[quality][1]}</span>
          <span className="high-qual">{meanings[quality][5]}</span>
        </div>
      )}
    </div>
  )
}

const meanings = {
  Size: {
    '1': 'A size too small',
    '2': '1/2 size too small',
    '3': 'Perfect',
    '4': '1/2 size too big',
    '5': "A size too big"
  },
  Width: {
    '1': 'Too narrow',
    '2': 'Slightly narrow',
    '3': 'Perfect',
    '4': 'Slightly wide',
    '5': "Too wide"
  },
  Comfort: {
    '1': 'Uncomfortable',
    '2': 'Slightly uncomfortable',
    '3': 'Ok',
    '4': 'Comfortable',
    '5': "Perfect"
  },
  Quality: {
    '1': 'Poor',
    '2': 'Below average',
    '3': 'Expected',
    '4': 'Pretty great',
    '5': "Perfect"
  },
  Length: {
    '1': 'Runs short',
    '2': 'Slightly short',
    '3': 'Perfect',
    '4': 'Slightly long',
    '5': "Runs long"
  },
  Fit: {
    '1': 'Runs tight',
    '2': 'Slightly tight',
    '3': 'Perfect',
    '4': 'Slightly loose',
    '5': "Runs loose"
  }
}

export default Characteristics;