import React, { useState } from 'react';

const AnswerModal = (props) => {
  const [answerValue, setAnswerValue] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
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
    setEmail(e.target.value);
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
    if (answerValue.length === 0 || nickname.length === 0 || email.length === 0) {
      <div>You must enter any of the following: Answer, Nickname, Email</div>;
    }
    console.log(answerValue, nickname, email);
  };

  return (
    <div className="modal-a">
      <div className="modal-a-content">
        <div className="modal-a-header">
          <h4 className="modal-a-title"> Submit Your Answer </h4>
          <h4 className="modal-a-title"> [Product Title] : {props.questionBody} </h4>
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
            <input type="text" value={email} maxLength="60" onChange={handleEmail} placeholder="Example: jack@email.com" />
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
