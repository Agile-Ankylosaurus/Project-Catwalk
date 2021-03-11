import React, { useState } from 'react';
import axios from 'axios';

const AnswerEntry = ({answer}) => {
  // console.log('answerEntry: ', props);
  const [count, setCount] = useState(answer.helpfulness);
  const [report, setReport] = useState('Report');
  const [disable, setDisable] = useState(false);

  const handleYesClick = () => {
    setCount(disable === false ? count + 1 : count);
    if (!disable) {
      const answerId = answer.id;
      answer.helpfulness += 1;
      axios.put(`/api/qa/answers/${answerId}/helpful`, { id: answerId })
        .then(() => setDisable(true))
        .catch((err) => console.log('error in put', err));
    }
  };

  const handleReportClick = () => {
    setReport(report === 'Report' ? 'Reported' : 'Reported');
    const answerId = answer.id;
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
    const photoPresent = answer.photos;
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
          {answer.body}
        </span>
      </div>
      <span className="user-info">
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
      </span>
      <span className="user-info-date">
        {formattedDate(answer.date)}
        {' '}
      </span>
      <span className="user-info-helpful">
        | Helpful?
        {' '}
        <span className="user-info-click" onClick={handleYesClick} aria-hidden="true">
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
      <span className="user-info-click" onClick={handleReportClick} aria-hidden="true">
        {report}
      </span>
      <div>
        <Photos />
      </div>
    </div>
  );
};

export default AnswerEntry;
