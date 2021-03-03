import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {
  // console.log('answersList props: ', props.answer);
  const answerValues = Object.values(props.answer);
  // console.log('answervalue', answerValues);
  const helpfulSort = answerValues.sort((a, b) => (b.helpfulness - a.helpfulness));
  
  const sellers = () => {
    const sellerArr = [];
    for (var i = 0 ; i < answerValues.length; i++) {
      if (answerValues[i].answerer_name === ('Seller')) {
        sellerArr.unshift(answerValues[i]);
      }
    }
    return sellerArr;
  }

  const twoAnswers = () => {
    const sellerPresent = sellers();
    if (sellerPresent.length > 0) {
      sellerPresent.forEach((item) => {
        helpfulSort.unshift(item);
      })
      return helpfulSort.slice(0, 2); 
    } else {
      return helpfulSort.slice(0, 2);
    }
  }

  const answers = twoAnswers();

  return (
    <div className="answer-list">
      <div>
        {answers.map((answer) => <AnswerEntry key={answer.id} answer={answer} />)}
      </div>
      <form className="load-answers">
        <input type="submit" value="Load More Answers" />
      </form>
    </div>
  );
};

export default AnswersList;
