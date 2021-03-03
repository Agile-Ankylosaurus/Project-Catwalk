import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsData from '../Sample_data/QuestionsData.js';

const QuestionsList = (props) => {
  const [data, setData] = useState(QuestionsData.results);
  const [display, setDisplay] = useState(false);
  const [filtered, setFiltered] = useState([]);
  // console.log('questionsList data: ', data)
  // data.forEach((element) => console.log(element.question_body));

  const firstFour = data.slice(0, 4);

  const filteredQuestions = (value) => {
    setDisplay(true);
    if (value.length >= 2) {
      const filteredArr = data.filter((question) => {
        return question.question_body.includes(value);
      })
      setFiltered(filteredArr);
    } 
    if (value.length <= 1) {
      setDisplay(false);
    }
  } 

  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBar filteredQuestions={filteredQuestions}/>
      </div>
      <div>
        {display ? 
          filtered.map((question) => 
          <QuestionEntry key={question.question_id} question={question} /> ) :
          firstFour.map((question) => 
          <QuestionEntry key={question.question_id} question={question} /> ) }
      </div>
      <form>
        <input className="more-questions" type="submit" value="More Answered Questions" />
        <input className="add-question" type="submit" value="Add A Question +" />
      </form>
    </div>
  );
};

export default QuestionsList;
