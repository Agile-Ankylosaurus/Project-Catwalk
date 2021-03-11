import React, { useState } from 'react';
import axios from 'axios';

const QuestionsModal = ({productId, productName, onCloseQues, showQ}) => {
  const [questionsValue, setQuestionsValue] = useState('');
  const [nicknameQues, setNicknameQues] = useState('');
  const [emailQues, setEmailQues] = useState('');
  const prodId = productId;
  const prodName = productName;

  if (!showQ) {
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
          Your Question *
          <div>
            <textarea value={questionsValue} maxLength="1000" rows="5" cols="37" onChange={handleQuestions} />
          </div>
          <div className="modal-name">
            What is your nickname*
            <input type="text" value={nicknameQues} maxLength="60" onChange={handleNicknameQues} placeholder="Example: jackson11!" />
            <div className="disclaimer">
              For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div className="modal-name">
            Your email*
            <input type="text" value={emailQues} maxLength="60" onChange={handleEmailQues} placeholder="Why did you like the product or not?" className="input-email" />
            <div className="disclaimer">
              For authentication reasons, you will not be emailed
            </div>
          </div>
          <button type="button" onClick={handleQuestionSubmit}>Submit Your Question Here</button>
        </form>
        <div className="modal-q-footer">
          <button type="button" onClick={onCloseQues} className="close-q-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsModal;
