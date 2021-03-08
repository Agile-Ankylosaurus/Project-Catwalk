const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';
const TOKEN = require('../config.js');

// API request to get the reviews based on a different sort option
app.get('/reviews/sort', (req, res) => {
  console.log(req.params);
  axios.get(`${url}reviews/?product_id=${req.body.id}&count=${req.body.num}&sort=${req.body.sort}`, {
    headers: { Authorization: TOKEN },
  })
    .then((data) => res.send(data))
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
