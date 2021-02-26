import React from 'react';
import AnswersList from './AnswersList';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <QuestionEntry />
        </div>
        <div>
          <AnswersList />
        </div>
        <form>
          <input type='submit' value='More Answered Questions' />
          <input type='submit' value='Add A Question' />
        </form>
      </div>
    )   
  }
}

export default QuestionsList;