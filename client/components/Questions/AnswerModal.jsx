import React, { useState } from 'react';
import axios from 'axios';

const AnswerModal = (props) => {
  const [answerValue, setAnswerValue] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailAnswer, setEmailAnswer] = useState('');
  const [file, setFile] = useState([]);

  if (!props.show) {
    return null;
  }

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

  // console.log('answer modal', props);

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
    // console.log('answer', answerValue, 'nickname', nickname, 'email', email);

    axios.post(`/api/qa/questions/${props.questionBody.question_id}/answers`, {
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

  return (
    <div className="modal-a">
      <div className="modal-a-content">
        <div className="modal-a-header">
          <h4 className="modal-a-title"> Submit Your Answer </h4>
          <h4 className="modal-a-title"> [Product Title] : {props.questionBody.question_body} </h4>
        </div>
        <form className="modal-a-body">
          <div>
            Your Answer *
            <textarea value={answerValue} maxLength="1000" rows="5" cols="33" onChange={handleAnswer} />
          </div>
          <div>
            What is your nickname*
            <input type="text" value={nickname} maxLength="60" onChange={handleNickname} placeholder="Example: jack543!" />
            <div>
              For privacy reasons, do not use your full name or email address
            </div>
          </div>
          <div>
            Your email*
            <input type="text" value={emailAnswer} maxLength="60" onChange={handleEmail} placeholder="Example: jack@email.com" />
            <div>
              For authentication reasons, you will not be emailed
            </div>
          </div>
          <input type="file" onChange={fileChange} />
          {file.map((photo, idx) => <img src={photo} key={idx} alt="" className="upload-photo" />)}
          <div>
            <button type="button" onClick={handleAnswerSubmit}>Submit</button>
          </div>
        </form>
        <div className="modal-a-footer">
          <button type="button" onClick={props.onClose} className="close-a-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
