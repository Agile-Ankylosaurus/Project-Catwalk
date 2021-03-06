import React, { useState } from 'react';
import AnswersList from './AnswersList';
import AnswerModal from './AnswerModal';

const QuestionEntry = (props) => {
  // console.log('questionsEntry props: ', props);
  const [questionCount, setQuestionCount] = useState(props.question.question_helpfulness);
  const [countOff, setCountOff] = useState(false);
  const [show, setShow] = useState(false);
  const [questionBody, setQuestionBody] = useState(props.question.question_body);
  // console.log(questionBody);

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
        {' '}
        <span onClick={handleCountClick}>
          Yes
          {' '}
        </span>
        <span>
          <span>
            (
            {questionCount}
            )
            |
            {' '}
          </span>
          <span onClick={() => setShow(true)}>
            Add Answer
          </span>
          <span>
            <AnswerModal onClose={() => setShow(false)} show={show} questionBody={questionBody} />
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
