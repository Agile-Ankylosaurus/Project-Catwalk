import React, { useState } from 'react';
import axios from 'axios';

const QuestionsModal = (props) => {
  const [questionsValue, setQuestionsValue] = useState('');
  const [nicknameQues, setNicknameQues] = useState('');
  const [emailQues, setEmailQues] = useState('');
  // console.log('ques modal', props.productId);
  const [show, setShow] = useState(false);
  const prodId = props.productId;
  const prodName = props.productName;

  if (!props.showQ) {
    return null;
  }

  const handleQuestions = (e) => {
    setQuestionsValue(e.target.value);
  };
  const handleNicknameQues = (e) => {
    setNicknameQues(e.target.value);
  };
  const handleEmailQues = (e) => {
    setEmailQues(e.target.value);
  };

  const handleQuestionSubmit = () => {
    if (questionsValue.length === 0) {
      alert('You must enter the following: answer');
    }
    if (nicknameQues.length === 0) {
      alert('You must enter the following: nickname');
    }
    if (emailQues.length === 0) {
      alert('You must enter the following: email');
    }
    if (!emailQues.includes('@') || !emailQues.includes('.com')) {
      alert('The email address provided is not in correct email format');
    }

    axios.post('/api/qa/questions', {
      body: questionsValue,
      name: nicknameQues,
      email: emailQues,
      product_id: prodId,
    })
      // console.log(params);
      .then((response) => {
        console.log('submit question success', response);
      })
      .catch((err) => {
        console.log('error submitting question', err);
      });

    setShow(true);
  };

  return (
    <div className="modal-q">
      <div className="modal-q-content">
        <div className="modal-q-header">
          <h4 className="modal-q-title"> Ask Your Question </h4>
          <h4 className="modal-q-title">
            About the
            {' '}
            {prodName}
          </h4>
        </div>
        <form className="modal-q-body">
          <div>
            Your Question *
            <textarea value={questionsValue} maxLength="1000" rows="5" cols="33" onChange={handleQuestions} />
          </div>
          <div>
            What is your nickname*
            <input type="text" value={nicknameQues} maxLength="60" onChange={handleNicknameQues} placeholder="Example: jackson11!" />
            <div>
              For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div>
            Your email*
            <input type="text" value={emailQues} maxLength="60" onChange={handleEmailQues} placeholder="Why did you like the product or not?" />
            <div>
              For authentication reasons, you will not be emailed
            </div>
          </div>
          <button type="button" onClick={handleQuestionSubmit}>Submit</button>
        </form>
        <div className="modal-q-footer">
          <button type="button" onClick={props.onCloseQues} className="close-q-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsModal;
