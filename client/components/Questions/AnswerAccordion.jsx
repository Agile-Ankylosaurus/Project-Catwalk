import React, { useState } from 'react';

const AnswersAccordion = (props) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [list, setList] = useState(false);

  // const content = useRef(null);
  // ref={content}

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : '500px',
    );
    setList(!list);
    // console.log(content.current.scrollHeight);
  };

  return (
    <div className="accordian-section">
      <button className={`accordian ${active}`} type="submit" onClick={toggleAccordion}>
        <div className="accordian-title">{list ? 'Collapse Answers' : 'See More Answers'}</div>
      </button>
      <div style={{ maxHeight: `${height}` }} className="accordian-content">
        <div
          className="accordian-text"
        >
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default AnswersAccordion;
