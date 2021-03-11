import React from 'react';
import AnswerEntry from './AnswerEntry';
import AnswerAccordion from './AnswerAccordion';

const AnswersList = ({answer}) => {
  const answerValues = Object.values(answer);
  const helpfulSort = answerValues.sort((a, b) => (b.helpfulness - a.helpfulness));

  const sellers = () => {
    const sellerArr = [];
    for (let i = 0; i < answerValues.length; i += 1) {
      if (answerValues[i].answerer_name === ('Seller')) {
        sellerArr.push(answerValues[i]);
      }
    }
    return sellerArr;
  };

  const twoAnswers = () => {
    const sellerPresent = sellers();
    if (sellerPresent.length > 0) {
      for (let i = 0; i < sellerPresent.length; i += 1) {
        if (sellerPresent[i].id === undefined) {
          helpfulSort.unshift(sellerPresent[i]);
        }
      }
      return helpfulSort.slice(0, 2);
    }
    return helpfulSort.slice(0, 2);
  };

  const answers = twoAnswers();
  const restOfAnswers = helpfulSort.slice(3, helpfulSort.length);

  const MoreAnswers = () => {
    if (answerValues.length > 2) {
      return (
        <div>
          <AnswerAccordion
            title="See More Answers"
            content={restOfAnswers.map((answer) => <AnswerEntry key={answer.id} answer={answer} />)}
          />
        </div>
      );
    }
    return <></>;
  };

  return (
    <div className="answer-list">
      <div>
        {answers.map((answer) => <AnswerEntry key={answer.id} answer={answer} />)}
      </div>
      <MoreAnswers />
    </div>
  );
};

export default AnswersList;
