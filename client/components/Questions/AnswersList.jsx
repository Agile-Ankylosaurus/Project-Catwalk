import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {
  // console.log('answersList props: ', props)
  // const [answers, setAnswers] = useState(props)
  // for (let key in props.answer) {
  //   let answer = props.answer[key].body;
  // }
  const answerValues = Object.values(props.answer);
  return (
    <div className="answer-list">
      <div>
        {answerValues.map((answer) => <AnswerEntry key={answer} answer={answer} />)}
      </div>
      <form className="load-answers"> 
        <input type="submit" value="Load More Answers" />
      </form>
    </div>
  );
};

export default AnswersList;
