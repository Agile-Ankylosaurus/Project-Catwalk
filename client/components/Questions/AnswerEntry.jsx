import React, { useState } from 'react';
import moment from 'moment';

const AnswerEntry = (props) => {
  // console.log('answerEntry: ', props);
  const [count, setCount] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report');
  // const [disable, setDisable] = useState(false);

  // const handleYesClick = () => {
  //   console.log('i am here');
  //   if (setDisable) {
  //     setCount(count + 1);
  //   }
  //   setDisable(false);
  // };
  const handleReportClick = () => {
    setReport(report === 'Report' ? 'Reported' : 'Reported');
  };
  // props.answer.photos.forEach((photo) => 
  //   console.log(photo),
  //   <img src={photo.photos} alt="" />
  // )

  return (
    <div className="answer-entry">
      <div>A: {props.answer.body}</div>
      <span className="user-info">
        by {props.answer.answerer_name}  
      </span>
      <span>
        {moment(props.answer.date).format('LL')}
      </span>
      <span>
        | Helpful? 
        <span onClick={() => setCount(count + 1)}>
          Yes 
        </span>
        ({count}) | 
      </span>
      <span onClick={handleReportClick}>
        {report}
      </span>
      <div className="container-img">
          <img className="answer-img" src={props.answer.photos[0]} alt="" />
          <img className="answer-img" src={props.answer.photos[1]} alt="" />
          <img className="answer-img" src={props.answer.photos[2]} alt="" />
      </div>

    </div>
  );
};

export default AnswerEntry;
