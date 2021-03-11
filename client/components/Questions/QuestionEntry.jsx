import React, { useState } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList';
import AnswerModal from './AnswerModal';

const QuestionEntry = (props) => {
  const [show, setShow] = useState(false);
  const [questionCount, setQuestionCount] = useState(props.question.question_helpfulness);
  const [countOff, setCountOff] = useState(false);
  const [questionBody, setQuestionBody] = useState(props.question);
  const prodNameQues = props.product;
  const [answers, setAnswers] = useState(props.question.answers);

  const handleCountClick = () => {
    setQuestionCount(countOff === false ? questionCount + 1 : questionCount);
    setCountOff(true);
    if (!countOff) {
      const questionId = props.question.question_id;
      props.question.question_helpfulness += 1;
      axios.put(`/api/qa/questions/${questionId}/helpful`, { id: questionId })
        .then(() => setCountOff(true))
        .catch((err) => console.log('error in put question', err));
    }
  };

  return (
    <div>
      <span className="question">
        Q:
        {'  '}
        {props.question.question_body}
      </span>
      <span className="question-helpful">
        Helpful?
        {' '}
        <span className="question-helpful-click" onClick={handleCountClick}>
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
          <span className="question-helpful-click" onClick={() => setShow(true)}>
            Add Answer
          </span>
        </span>
      </span>
      <span>
        <AnswerModal
          show={show}
          onClose={() => setShow(false)}
          productNameA={prodNameQues}
          questionBody={questionBody}
          className="ans-modal"
          answer={answers}
          // setAnswer={setAnswers()}
        />
      </span>
      <div className="answer-list">
        <AnswersList answer={answers} />
      </div>
    </div>
  );
};

export default QuestionEntry;
