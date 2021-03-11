import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = (props) => {
  // console.log('answerEntry: ', props);
  const [count, setCount] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report');
  const [disable, setDisable] = useState(false);

  const handleYesClick = () => {
    setCount(disable === false ? count + 1 : count);
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
    const answerId = props.answer.id;
    if (report === 'Report') {
      axios.put(`/api/qa/answers/${answerId}/report`, { id: answerId })
        .then(() => setReport('Reported'))
        .catch((err) => console.log('error in report put', err));
    }
  };

  const formattedDate = (date) => {
    const tempDate = new Date(date).toLocaleDateString('en-gb', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const dateArr = tempDate.split(' ');
    return `${dateArr[1]} ${dateArr[0]}, ${dateArr[2]}`;
  };

  const Photos = () => {
    const photoPresent = props.answer.photos;
    if (photoPresent.length >= 1) {
      return (
        photoPresent.map(
          (photo, idx) => <img src={photo} key={idx} alt="" className="answer-img" />,
        )
      );
    }
    return <></>;
  };

  return (
    <div className="answer-entry">
      <div>
        <span className="answer-letter">
          A:
          {' '}
        </span>
        <span className="answer-body">
          {props.answer.body}
        </span>
      </div>
      <span className="user-info">
        by
        {' '}
        {props.answer.answerer_name}
        ,
        {' '}
      </span>
      <span className="user-info-date">
        {formattedDate(props.answer.date)}
        {' '}
      </span>
      <span className="user-info-helpful">
        | Helpful?
        {' '}
        <span className="user-info-click" onClick={handleYesClick}>
          Yes
          {' '}
        </span>
        <span className="user-info-count">
          (
          {count}
          )
        </span>
        {' '}
        |
      </span>
      {' '}
      <span className="user-info-click" onClick={handleReportClick}>
        {report}
      </span>
      <div>
        <Photos />
      </div>
    </div>
  );
};

export default AnswerEntry;
