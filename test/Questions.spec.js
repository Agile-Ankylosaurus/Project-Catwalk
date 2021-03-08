// import React from 'react';
// import { render, cleanup, screen } from '@testing-library/react';
// import QuestionsList from '../client/components/Questions/QuestionsList.jsx';

// afterEach(cleanup);

// describe('QuestionsList', () => {

//   it('renders QuestionsList component', () => {
//     render(<QuestionsList />);
//     screen.getByText('Questions & Answers');
//   });

//   // it('renders QuestionsList component', () => {
//   //   const { findByText } = render(<QuestionsList />);

//   //   expect(findByText('Questions & Answers').toBeInTheDocument());
//   // });
// });

const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
