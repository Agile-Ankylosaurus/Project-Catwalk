import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionEntry from './QuestionEntry';
import QuestionsAccordion from './QuestionsAccordion';
import QuestionsModal from './QuestionsModal';

const QuestionsList = ({questions, product}) => {
  const data = questions;
  const [display, setDisplay] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [showQ, setShowQ] = useState(false);
  const restOfQuestions = data.slice(2, data.length);
  const showProduct = product;

  data.sort((a, b) => (
    b.question_helpfulness - a.question_helpfulness));
  const firstFour = data.slice(0, 2);

  const filteredQuestions = (value) => {
    setDisplay(true);
    if (value.length >= 2) {
      const filteredArr = data.filter(
        (question) => {return question.question_body.includes(value)});
      setFiltered(filteredArr);
    }
    if (value.length <= 1) {
      setDisplay(false);
    }
  };

  const MoreQuestions = () => {
    if (data.length > 2) {
      return (
        <span>
          <QuestionsAccordion
            titleQ="More Answered Questions"
            contentQ={restOfQuestions.map(
              (question) => (
                <QuestionEntry
                  key={question.question_id}
                  question={question}
                  product={showProduct}
                />
              ),
            )}
          />
        </span>
      );
    }
    return <></>;
  };

  return (
    <div>
      <h3 className="title">Questions & Answers</h3>
      <div className="search-top">
        <SearchBar filteredQuestions={filteredQuestions} />
      </div>
      <div>
        {display
          ? filtered.map(
            (question) => <QuestionEntry key={question.question_id} question={question} />,
          )
          : firstFour.map(
            (question) => <QuestionEntry key={question.question_id} question={question} />,
          )}
      </div>
      <MoreQuestions className="add-question" />
      <input className="add-question" type="submit" value="Add A Question +" onClick={() => setShowQ(true)} />
      <QuestionsModal
        showQ={showQ}
        onCloseQues={() => setShowQ(false)}
        productId={showProduct.id}
        productName={showProduct.name}
        className="ques-modal"
      />
    </div>
  );
};

export default QuestionsList;
