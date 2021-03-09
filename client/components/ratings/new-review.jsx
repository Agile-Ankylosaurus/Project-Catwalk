import React, { useState } from 'react';
import StarRating from './StarRating';

const MEANINGS = require('./meanings');

const AddModal = ({ metaData, closeClick }) => {
  const [newRating, setRating] = useState(0);
  const [newQuals, setQuals] = useState(0);
  const [recommend, setRecommend] = useState(true);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, addPhoto] = useState([]);
  const [complete, setComplete] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  function onSubmitReview() {
    // check for valid form
    if (body.length < 50) {
      alert('Your review is not descriptive enough.  Give us more details, please.')
    } else if (newRating === 0) {
      alert('You must enter a rating.');
    } else if (name === '') {
      alert('Please tell us your nickname.');
    } else if (email === '' || !validateEmail(email)) {
      alert('Please give us a correct e-mail address.');
    } else if (!validCharacteristics()) {
      alert('Please describe all the products characteristics');
    } else if (!validPhotos) {
      alert('There was a problem with one or more of your photos');
    } else {
      setComplete(true);
      // var temp = new Date();
      // newReview.date = temp.toISOString();
    }
  }

  const ShowRating = () => {
    if (newRating === 0) {
      return (
        <div>
          {[...Array(5)].map((item, idx) => (
            <span key={idx} className="star-shape" onClick={()=>setRating(idx + 1)} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <StarRating number={newRating} uniqNum={metaData.product_id} />
        <span className="star-meaning">{MEANINGS.Stars[newRating]}</span>
      </div>
    );
  };

  const Characteristic = () => {
    const quality = Object.keys(metaData.characteristics);
    console.log(quality);
    return (
      <div>
        <span>{quality[0]}</span>
        <span className="radio-qual">
          <span className="low-qual">{MEANINGS[quality[0]][1]}</span>
          <input type="radio" name={quality[0]} value="1" onClick={() => setQuals(value)} />
          <input type="radio" name={quality[0]} value="2" onClick={() => setQuals(value)} />
          <input type="radio" name={quality[0]} value="3" onClick={() => setQuals(value)} />
          <input type="radio" name={quality[0]} value="4" onClick={() => setQuals(value)} />
          <input type="radio" name={quality[0]} value="5" onClick={() => setQuals(value)} />
          <span className="high-qual">{MEANINGS[quality[0]][5]}</span>
        </span>
      </div>
    );
  };

  return (
    <div className="add-modal">
      <div className="add-modal-content">
        <div className="add-modal-header">
          <button type="submit" className="close-modal-btn" onClick={closeClick}>&times;</button>
          <h1>Write Your Review</h1>
          <h3>--- about the Product ---</h3>
        </div>
        <div className="add-modal-body">
          <div className="new-review">
            <div>
              <div className="add-review-area">Review</div>
              <span className="data-input">Summary  </span>
              <input
                type="text"
                className="input-box"
                placeholder="Example: Best Purchase Ever!"
              />
              <input
                type="text"
                className="input-review"
                rows="5"
                placeholder="Why did you like the product or not"
              />
            </div>
            <div>
              <span className="data-input">Nickname:</span>
              <input type="text" className="input-box" placeholder="Example: Jackson11!" />
            </div>
            <div>
              <span className="data-input">E-mail:</span>
              <input type="email" className="input-box" placeholder="Example: Jackson11!@email.com" />
            </div>
            <div className="add-recommend">
              <span className="data-input">Do you recommend this product?</span>
              <span className="radio-recommend">
                <input type="radio" name="recommend" value="yes" />Yes
                <input type="radio" name="recommend" value="no" />No
              </span>
            </div>
          </div>
          <div className="new-review-sidebar">
            <div>Overall Rating</div>
            <ShowRating />
            <Characteristic />
            <span>upload photos</span>
          </div>
        </div>
        <div className="add-modal-footer">
          <button type="submit" className="submit-review-btn" onClick={onSubmitReview}>Submit</button>
        </div>
      </div>
     </div>
  );
};

export default AddModal;
