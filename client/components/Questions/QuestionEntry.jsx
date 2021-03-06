import React, { useState } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList';
import AnswerModal from './AnswerModal';

const QuestionEntry = ({question, product}) => {
  const [show, setShow] = useState(false);
  const [questionCount, setQuestionCount] = useState(question.question_helpfulness);
  const [countOff, setCountOff] = useState(false);
  const questionBody = question;
  const prodNameQues = product;
  const answersQ = question.answers;

  const handleCountClick = () => {
    setQuestionCount(countOff === false ? questionCount + 1 : questionCount);
    setCountOff(true);
    if (!countOff) {
      const questionId = question.question_id;
      question.question_helpfulness += 1;
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
        {question.question_body}
      </span>
      <span className="question-helpful">
        Helpful?
        {' '}
        <span className="question-helpful-click" onClick={handleCountClick} aria-hidden="true">
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
          <span className="question-helpful-click" onClick={() => setShow(true)} aria-hidden="true">
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
          answer={answersQ}
          // setAnswer={setAnswers()}
        />
      </span>
      <div className="answer-list">
        <AnswersList answer={answersQ} />
      </div>
    </div>
  );
};

export default QuestionEntry;
