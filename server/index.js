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
app.use('/api', router)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at port: `, port));
