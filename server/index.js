const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const path = require('path');
const { reset } = require('nodemon');
const TOKEN = require('../config.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';

// API request to get the reviews based on a different sort option
app.get('/reviews/:params', (req, res) => {
  const { params } = req.params;
  axios.get(`${url}reviews/?product_${params}`, {
    headers: { Authorization: TOKEN },
  })
    .then((data) => res.send(data.data))
    .catch((err) => console.log('error getting reviews', err.response.data));
});

// API request to increment the helpfulness counter
app.put('/reviews/help', (req, res) => {
  axios.put(`${url}reviews/${req.body.id}/helpful`, { body: { review_id: req.body.id } }, {
    headers: { Authorization: TOKEN },
  })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log('server help error', err));
});

// API request to remove the review
app.put('/reviews/report', (req, res) => {
  axios.put(`${url}reviews/${req.body.id}/report`, { body: { review_id: req.body.id } }, {
    headers: { Authorization: TOKEN },
  })
    .then(() => res.send(204))
    .catch((err) => console.log('server report error', err));
});

app.post('/api/qa/questions/:questionId/answers', (req, res) => {
  const { questionId } = req.params;
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions/${questionId}/answers`, req.body.params, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((response) => {
      console.log('server answer submit response');
      res.send(201);
    })
    .catch((err) => {
      console.log('server answer submit error', err);
      res.sendStatus(500);
    });
});

app.post('/api/qa/questions', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', req.body, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((response) => {
      console.log('server question submit response');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server question submit error', err);
      res.sendStatus(500);
    });
});

app.put('/api/qa/answers/:answerId/helpful', (req, res) => {
  const { answerId } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/answers/${answerId}/helpful`, 
    {
      body: { answer_id: req.body.id },
    },
    {
      headers: {
        Authorization: TOKEN,
      },
    })
    .then((response) => {
      console.log('server helpfulness put response');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server helpfulness put error', err);
      res.sendStatus(500);
    });
});

app.put('/api/qa/questions/:questionId/helpful', (req, res) => {
  const { questionId } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions/${questionId}/helpful`,
    {
      body: { question_id: req.body.id },
    },
    {
      headers: {
        Authorization: TOKEN,
      },
    })
    .then((response) => {
      console.log('server helpfulness question put response');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server helpfulness question put error', err);
      res.sendStatus(500);
    });
});

app.put('/api/qa/answers/:answerId/report', (req, res) => {
  const { answerId } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/answers/${answerId}/report`,
    {
      body: { answer_id: req.body.id },
    },
    {
      headers: {
        Authorization: TOKEN,
      },
    })
    .then((response) => {
      console.log('server report put response');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server report put error', err);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
