import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionEntry from './QuestionEntry';
import QuestionsAccordion from './QuestionsAccordion';
import QuestionsData from '../Sample_Data/QuestionsData';

const QuestionsList = (props) => {
  // console.log('hardcode data', QuestionsData.results);
  // console.log('api data', props.questions);
  const data = props.questions;

  // const [data, setData] = useState([]); // props.questions
  const [display, setDisplay] = useState(false);
  const [filtered, setFiltered] = useState([]);
  data.sort((a, b) => (
    b.question_helpfulness - a.question_helpfulness));
  const firstFour = data.slice(0, 2);
  // setData(questionHelpfulSort);
  // console.log('sorted', questionHelpfulSort);

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
  // console.log(data);
  const restOfQuestions = data.slice(2, data.length);
  // console.log(restOfQuestions);

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
        <input className="add-question" type="submit" value="Add A Question +" />
      </div>
    </div>
  );
};

export default QuestionsList;
