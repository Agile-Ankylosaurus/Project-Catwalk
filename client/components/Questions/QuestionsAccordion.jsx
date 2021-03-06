import React, { useState, useRef } from 'react';

const QuestionsAccordion = ({contentQ}) => {
  const [activeQ, setActiveQ] = useState('');
  const [heightQ, setHeightQ] = useState('0px');
  const [title, setTitle] = useState(false);
  const [rotate, setRotate] = useState('chevron');

  const listHeight = useRef(null);

  const toggleAccordionQ = () => {
    setActiveQ(activeQ === '' ? 'activeQ' : '');
    setHeightQ(
      activeQ === 'activeQ' ? '0px' : '500px',
    );
    setTitle(!title);
    setRotate(activeQ === '' ? 'chevron-rotate' : 'chevron');
  };

  const Chevron = () => (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" width="10" className={`${rotate}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );

  return (
    <div className="accordion-q-section">
      <button className={`accordion-q ${activeQ}`} type="submit" onClick={toggleAccordionQ}>
        <span className="accordion-q-title">{title ? 'Show Less Questions' : 'More Answered Questions'}</span>
        <Chevron />
      </button>
      <div style={{ maxHeight: `${heightQ}` }} ref={listHeight} className="accordion-q-content">
        <div
          className="accordion-q-text"
        >
          {contentQ}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAccordion;
