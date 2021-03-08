import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = (props) => {
  // console.log('answerEntry: ', props);
  const [count, setCount] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report');
  const [disable, setDisable] = useState(false);

  const handleYesClick = () => {
    setCount(disable === false ? count + 1 : count);
    // setDisable(true);
    if (!disable) {
      const answerId = props.answer.id;
      props.answer.helpfulness += 1;
      axios.put(`/api/qa/answers/${answerId}/helpful`, { id: answerId })
        .then(() => setDisable(true))
        .catch((err) => console.log('error in put', err));
    }
  };

  const handleReportClick = () => {
    setReport(report === 'Report' ? 'Reported' : 'Reported');
  };
  // props.answer.photos.map((photo) =>
  //   console.log(photo),
  //   <img src={photo.photos} alt="" />
  // )

  const formattedDate = (date) => {
    const tempDate = new Date(date).toLocaleDateString('en-gb', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const dateArr = tempDate.split(' ');
    return `${dateArr[1]} ${dateArr[0]}, ${dateArr[2]}`;
  };

  return (
    <div className="answer-entry">
      <div>
        A: {props.answer.body}
      </div>
      <span className="user-info">
        by
        {props.answer.answerer_name}
        ,
        {'   '}
      </span>
      <span>
        {formattedDate(props.answer.date)}
        {'   '}
      </span>
      <span>
        | Helpful?
        {' '}
        <span onClick={handleYesClick}>
          Yes
          {' '}
        </span>
        (
        {count}
        )
        |
      </span>
      <span onClick={handleReportClick}>
        {' '}
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
