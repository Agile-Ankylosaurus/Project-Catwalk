import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';

const MEANINGS = require('./meanings');

const AddModal = ({ metaData, closeClick }) => {
  const [newRating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(true);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complete, setComplete] = useState(false);
  const [newQuals, setQuals] = useState({});
  // const [photo, addPhoto] = useState([]);

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
    const qualities = Object.keys(metaData.characteristics);
    return (
      <div>
        {qualities.map((quality) => (
          <div>
            <div className="radio-qual">
              <span>{quality}</span>
              <span className="radio-qual-list">
                <input
                  className="radio-char-btn"
                  type="radio"
                  onClick={() => setQuals(1)}
                />
                <input
                  className="radio-char-btn"
                  type="radio"
                  onClick={() => setQuals(2)}
                />
                <input
                  className="radio-char-btn"
                  type="radio"
                  onClick={() => setQuals(3)}
                />
                <input
                  className="radio-char-btn"
                  type="radio"
                  onClick={() => setQuals(4)}
                />
                <input
                  className="radio-char-btn"
                  type="radio"
                  onClick={() => setQuals(5)}
                />
              </span>
            </div>
            <span className="radio-qual">
              <span className="low-qual-add">{MEANINGS[quality][1]}</span>
              <span className="high-qual-add">{MEANINGS[quality][5]}</span>
            </span>
          </div>
        ))}
      </div>
    );
  };

  const validateEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const getDummyQuals = (chars) => {
    const qualities = Object.keys(chars);
    const oldQuals = {};
    for (let i = 0; i < qualities.length; i++) {
      const id = chars[qualities[i]].id.toString();
      oldQuals[id] = Math.round(chars[qualities[i]].value);
    }
    setQuals(oldQuals);
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
    // } else if (!validCharacteristics()) {
    //   alert('Please describe all the products characteristics');
    // } else if (!validPhotos) {
    //   alert('There was a problem with one or more of your photos');
    } else {
      setComplete(true);
    }
    getDummyQuals(metaData.characteristics);
    if (complete) {
      const prod = parseInt(metaData.product_id, 10);
      const reviewObj = {
        product_id: prod,
        rating: newRating,
        summary,
        body,
        recommend,
        name,
        email,
        photos: [],
        characteristics: newQuals,
      };
      axios.post('/newReview/', { reviewObj })
        .then((response) => {
          console.log('submit review success', response.data);
        })
        .catch((err) => {
          console.log('error submitting review', err);
        });
      closeClick();
    }
  }

  return (
    <div className="add-modal">
      <div className="add-modal-content">
        <div className="add-modal-header">
          <button type="submit" className="close-modal-btn" onClick={closeClick}>&times;</button>
          <h1>Write Your Review</h1>
          <h3>--- about the Product ---</h3>
        </div>
        <form className="add-modal-body">
          <div className="new-review">
            <div>
              <div className="add-review-area">Review</div>
              <span className="data-input">Summary</span>
              <input
                type="text"
                maxLength="60"
                className="input-box"
                placeholder="Example: Best Purchase Ever!"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
              <textarea
                maxLength="1000"
                className="input-review"
                rows="5"
                placeholder="Why did you like the product or not"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div>
              <span className="data-input">Nickname:</span>
              <input
                type="text"
                maxLength="60"
                className="input-box"
                placeholder="Example: Jackson11!"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="disclaimer-review">
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <span className="data-input">E-mail:</span>
              <input
                type="email"
                maxLength="60"
                className="input-box"
                placeholder="Example: Jackson11!@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="disclaimer-review">
                For authentication reasons, you will not be emailed
              </div>
            </div>
            <div className="add-recommend">
              <span className="data-recommend">Do you recommend this product?</span>
              <span className="radio-recommend">
                <input
                  type="radio"
                  name="recommend"
                  onClick={() => setRecommend(true)}
                />
                Yes
                <input
                  type="radio"
                  name="recommend"
                  onClick={() => setRecommend(false)}
                />
                No
              </span>
            </div>
          </div>
          <div className="new-review-sidebar">
            <div>Overall Rating</div>
            <ShowRating />
            <Characteristic />
            <span>upload photos</span>
          </div>
        </form>
        <div className="add-modal-footer">
          <button
            type="submit"
            className="submit-review-btn"
            onClick={onSubmitReview}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
