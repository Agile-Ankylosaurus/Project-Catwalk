import React from 'react';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = (props) => {
  // console.log('questionsEntry props: ', props);
  return (
    <div>
      <span className="question"> 
      Q: {props.question.question_body}
      </span>
      <span className="question-helpful"> Helpful? Yes {props.question.question_helpfulness} | Add Answer</span>
      <div>
        <AnswersList answer={props.question.answers}/>
      </div>
    </div>
  )
}

export default QuestionEntry; 