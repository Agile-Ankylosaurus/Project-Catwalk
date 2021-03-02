import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsData from '../Sample_data/QuestionsData.js';

const QuestionsList = (props) => {
  const [data, setData] = useState(QuestionsData.results);
  // console.log('questionsList data: ', data);

  const firstFour = data.slice(0, 4);

  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBar />
      </div>
      <div>
        {firstFour.map((question, idx) => <QuestionEntry key={question+idx} question={question} />)}
      </div>
      <form>
        <input type="submit" value="More Answered Questions" />
        <input type="submit" value="Add A Question +" />
      </form>
    </div>
  );
};

export default QuestionsList;
