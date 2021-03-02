import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {
  // console.log('answersList props: ', props.answer);
  const answerValues = Object.values(props.answer);
  // console.log(answerValues);

  const helpfulSort = answerValues.sort((a, b) => (b.helpfulness - a.helpfulness));
  const twoAnswers = helpfulSort.slice(0, 2);

  return (
    <div className="answer-list">
      <div>
        {twoAnswers.map((answer, idx) => <AnswerEntry key={answer + idx} answer={answer} />)}
      </div>
      <form className="load-answers">
        <input type="submit" value="Load More Answers" />
      </form>
    </div>
  );
};

export default AnswersList;

// const [answers, setAnswers] = useState(props)
// for (let key in props.answer) {
//   let answer = props.answer[key].body;
// }
// const moreAnswers = () => {
//   const lastValues = answerValues.slice(3, answerValues.length - 1);

// };