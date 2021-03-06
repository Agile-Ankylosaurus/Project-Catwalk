import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionEntry from './QuestionEntry';
import QuestionsAccordion from './QuestionsAccordion';
import QuestionsModal from './QuestionsModal';

const QuestionsList = (props) => {
  // console.log('hardcode data', QuestionsData.results);
  // console.log('api data', props.questions);
  const data = props.questions;
  // const [data, setData] = useState([]); // props.questions
  const [display, setDisplay] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [showQ, setShowQ] = useState(false);
  const restOfQuestions = data.slice(2, data.length);

  data.sort((a, b) => (
    b.question_helpfulness - a.question_helpfulness));
  const firstFour = data.slice(0, 2);

  // React.useEffect(() => {
  //   setData(props.questions);
  // }, [props.questions]);

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
    if (data.length > 4) {
      return (
        <div>
          <QuestionsAccordion
            titleQ="More Answered Questions"
            contentQ={restOfQuestions.map(
              (question) => <QuestionEntry key={question.question_id} question={question} />,
            )}
          />
        </div>
      );
    }
    return <></>;
  };

  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
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
      <MoreQuestions />
      <div>
        <input className="add-question" type="submit" value="Add A Question +" onClick={() => setShowQ(true)} />
        <QuestionsModal showQ={showQ} onCloseQues={() => setShowQ(false)} />
      </div>
    </div>
  );
};

export default QuestionsList;
