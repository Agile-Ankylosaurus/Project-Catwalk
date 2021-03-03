import React from 'react';
import AnswerEntry from './AnswerEntry';
import AnswerAccordion from './AnswerAccordion';

const AnswersList = (props) => {
  // console.log('answersList props: ', props.answer);
  const answerValues = Object.values(props.answer);
  // console.log('answervalue', answerValues);
  const helpfulSort = answerValues.sort((a, b) => (b.helpfulness - a.helpfulness));

  const sellers = () => {
    const sellerArr = [];
    for (let i = 0; i < answerValues.length; i += 1) {
      if (answerValues[i].answerer_name === ('Seller')) {
        sellerArr.unshift(answerValues[i]);
      }
    }
    return sellerArr;
  };

  const twoAnswers = () => {
    const sellerPresent = sellers();
    if (sellerPresent.length > 0) {
      sellerPresent.forEach((item) => {
        helpfulSort.unshift(item);
      });
      return helpfulSort.slice(0, 2);
    }
    return helpfulSort.slice(0, 2);
  };

  const answers = twoAnswers();
  const restOfAnswers = helpfulSort.slice(3, helpfulSort.length - 1);

  const MoreAnswers = () => {
    if (answerValues.length > 2) {
      return (
        <div>
          <AnswerAccordion
            title="See more answers"
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

// /* <form className="load-answers">
// <input type="submit" value="Load More Answers" />
// </form> */

export default AnswersList;
