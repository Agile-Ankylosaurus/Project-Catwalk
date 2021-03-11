import React, { useState } from 'react';
import axios from 'axios';

const AnswerModal = ( {show, questionBody, onClose}) => {
  const [answerValue, setAnswerValue] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailAnswer, setEmailAnswer] = useState('');
  const [file, setFile] = useState([]);
  const showDisplay = show;

  const handleAnswer = (e) => {
    setAnswerValue(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailAnswer(e.target.value);
  };
  const fileChange = (e) => {
    const array = [];
    for (let i = 0; i < file.length; i += 1) {
      array.push(file[i]);
    }
    array.push(URL.createObjectURL(e.target.files[0]));
    setFile(array);
  };

  const handleAnswerSubmit = () => {
    if (answerValue.length === 0) {
      alert('You must enter the following: answer');
    }
    if (nickname.length === 0) {
      alert('You must enter the following: nickname');
    }
    if (emailAnswer.length === 0) {
      alert('You must enter the following: email');
    }
    if (!emailAnswer.includes('@') || !emailAnswer.includes('.com')) {
      alert('The email address provided is not in correct email format');
    }

    axios.post(`/api/qa/questions/${questionBody.question_id}/answers`, {
      params: {
        body: answerValue,
        name: nickname,
        email: emailAnswer,
        photos: [],
      },
    })
      .then((response) => {
        console.log('submit answer success', response);
      })
      .catch((err) => {
        console.log('error submitting answer', err);
      });
  };

  if (showDisplay === false) {
    return null;
  }

  return (
    <div className="modal-a">
      <div className="modal-a-content">
        <div className="modal-a-header">
          <h4 className="modal-a-title"> Submit Your Answer </h4>
          <h4 className="modal-a-title">
            {questionBody.question_body}
          </h4>
        </div>
        <form className="modal-a-body">
          Your Answer *
          <div>
            <textarea value={answerValue} maxLength="1000" rows="5" cols="37" onChange={handleAnswer} />
          </div>
          <div className="modal-name"> 
            What is your nickname*
            <input type="text" value={nickname} maxLength="60" onChange={handleNickname} placeholder="Example: jack543!" />
            <div className="disclaimer">
              For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div className="modal-name">
            Your email*
            <input type="text" value={emailAnswer} maxLength="60" onChange={handleEmail} placeholder="Example: jack@email.com" className="input-email" />
            <div className="disclaimer">
              For authentication reasons, you will not be emailed
            </div>
          </div>
          <input type="file" onChange={fileChange} className="modal-name"/>
          {file.map((photo, idx) => <img src={photo} key={idx} alt="" className="upload-photo" />)}
          <div className="submit">
            <button type="button" onClick={handleAnswerSubmit}>Submit Your Answer Here</button>
          </div>
        </form>
        <div className="modal-a-footer">
          <button type="button" onClick={onClose} className="close-a-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
