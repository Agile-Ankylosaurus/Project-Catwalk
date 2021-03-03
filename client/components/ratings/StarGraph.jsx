import React from 'react';

const StarGraph = ({ stars, reviews }) => {
  const percent = {};
  const width = {};
  for (const key in stars) {
    percent[key] = Math.round(100 * stars[key] / reviews);
    width[key] = `width: '${percent[key]}%'`;
  }
  const widthFive = width[5];
  // console.log(width[5], widthFive, percent[5], `"${percent[5]}%"`);
  return (
    <div className="star-graph">
      <div className="starBox">
        <p>5 Stars</p>
        <p>{stars[5]}</p>
        <div className="starbar">
          <div className="starbar-level" style={{ width: '18%' }} ></div>
        </div>
      </div>
      <div className="starBox">
        <p>4 Stars</p>
        <p>{stars[4]}</p>
        <div className="starbar">
          <div className="starbar-level" />
        </div>
      </div>
      <div className="starBox">
        <p>3 Stars</p>
        <p>{stars[3]}</p>
        <div className="starbar">
          <div className="starbar-level" />
        </div>
      </div>
      <div className="starBox">
        <p>2 Stars</p>
        <p>{stars[2]}</p>
        <div className="starbar">
          <div className="starbar-level" />
        </div>
      </div>
      <div className="starBox">
        <p>1 Star</p>
        <p>{stars[1]}</p>
        <div className="starbar">
          <div className="starbar-level" />
        </div>
      </div>
    </div>
  );
};

export default StarGraph;

// const RatingItem = React.createClass({
//   render() {
//     const {
//       width,
//       height,
//       clipPath,
//       backgroundColor,
//       fillColor} = this.props;
//     return (
//       <div
//           class="rating-item-container"
//           style={{
//               display: 'inline-block',
//               height: height || '20px',
//               width: width || '20px',
//               'background-color': backgroundColor || 'gray',
//               'clip-path': clipPath || "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);",
//               '-webkit-clip-path': clipPath || "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);"
//            }}>
//         <div
//             class="rating-item"
//             style={{
//               'background-color': fillColor || 'yellow',
//               width: `${this.props.val * 100}%`,
//               height: '100%'
//             }}>
//         </div>
//       </div>
//     );
//   }
// })

// const RatingBar = React.createClass({
//   render() {
//     const {max, rating, clipPath, itemWidth, itemHeight, backgroundColor, fillColor} = this.props;
//     let ratingItems = [];
//     while (ratingItems.length < max) {
//       const ratingValue = rating - (ratingItems.length + 1) > 0 ?
//           1 : Math.max(rating - ratingItems.length, 0);
//       ratingItems.push(
//         <RatingItem
//             val={ratingValue}
//             clipPath={clipPath}
//             height={itemHeight}
//             width={itemWidth}
//             backgroundColor={backgroundColor}
//             fillColor={fillColor}/>)
//     }
//     return (
//       <div className="rating-bar">
//         {ratingItems}
//       </div>
//     )
//   }
// })

// const RatingBarDemo = React.createClass({
//   render() {
//     return (
//       <div class="rating-bar-demo">
//         <RatingBar
//             max={5}
//             rating={3.45}
//             itemHeight="45px"
//             itemWidth="45px"/>
//         <RatingBar
//             max={5}
//             rating={2.3}
//             itemHeight="100px"
//             itemWidth="100px"
//             backgroundColor={'blue'}
//             fillColor={'pink'}/>
//         <RatingBar
//             max={15}
//             rating={12.5}
//             fillColor={'pink'}/>
//         <RatingBar
//             max={25}
//             rating={8.5}
//             clipPath="polygon(59% 8%, 81% 24%, 100% 75%, 41% 97%, 45% 50%, 0 55%, 28% 18%);"
//             itemHeight="50px"
//             itemWidth="45px"
//             backgroundColor="#A3A7AD"
//             fillColor="#F9D04B"/>
//         <RatingBar
//             max={270}
//             rating={169.8}
//             clipPath="polygon(50% 0%, 80% 10%, 43% 55%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);"
//             backgroundColor="#A3A7AD"/>
//       </div>
//     );
//   }
// })
