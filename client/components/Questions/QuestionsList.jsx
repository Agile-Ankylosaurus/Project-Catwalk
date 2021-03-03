import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionEntry from './QuestionEntry';

const QuestionsList = ({ questions }) => {
  // console.log('hardcode data', QuestionsData.results);
  // console.log('api data', questions);

  const [data, setData] = useState(questions);

  React.useEffect(() => {
    setData(questions);
  }, [questions]);

  const [display, setDisplay] = useState(false);
  const [filtered, setFiltered] = useState([]);
  // console.log('questionsList data: ', data)
  // data.forEach((element) => console.log(element.question_body));

  const firstFour = data.slice(0, 4);

  const filteredQuestions = (value) => {
    setDisplay(true);
    if (value.length >= 2) {
      const filteredAr = data.filter((question) => {return question.question_body.includes(value)});
      setFiltered(filteredAr);
    }
    if (value.length <= 1) {
      setDisplay(false);
    }
  };

  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBar filteredQuestions={filteredQuestions} />
      </div>
      <div>
        {display
          ? filtered.map((question) =>
            <QuestionEntry key={question.question_id} question={question} />)
          : firstFour.map((question) =>
            <QuestionEntry key={question.question_id} question={question} />) }
      </div>
      <form>
        <input className="more-questions" type="submit" value="More Answered Questions" />
        <input className="add-question" type="submit" value="Add A Question +" />
      </form>
    </div>
  );
};

export default QuestionsList;
