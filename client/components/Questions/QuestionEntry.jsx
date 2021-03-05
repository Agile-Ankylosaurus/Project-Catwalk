import React, { useState } from 'react';
import AnswersList from './AnswersList';

const QuestionEntry = (props) => {
  // console.log('questionsEntry props: ', props);
  const [questionCount, setQuestionCount] = useState(props.question.question_helpfulness);
  const [countOff, setCountOff] = useState(false);

  const handleCountClick = () => {
    setQuestionCount(countOff === false ? questionCount + 1 : questionCount);
    setCountOff(true);
  };

  return (
    <div>
      <span className="question">
        Q:
        {props.question.question_body}
      </span>
      <span className="question-helpful">
        Helpful?
        <span onClick={handleCountClick}>
          Yes
          <span>
            (
            {questionCount}
            )
            |
            Add Answer
          </span>
        </span>
      </span>
      <div>
        <AnswersList answer={props.question.answers} />
      </div>
    </div>
  );
};

export default QuestionEntry;
