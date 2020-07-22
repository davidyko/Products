require('newrelic');
const express = require('express');
const cors = require('cors');
const router = require('./router/index.js');

const app = express();
const port = 3001;

// middleware
app.use(cors());
app.use(express.json());

// serve static assets
app.use(express.static('public'));

// router
app.use('/', router);
app.get('/loaderio-f0b2bf5e0deeaac261f4b05e45163092', (req, res) => {
  res.status(200).send('loaderio-f0b2bf5e0deeaac261f4b05e45163092');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at port: `, port));
