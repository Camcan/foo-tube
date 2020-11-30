const express = require('express');
const { uploadVideo } = require('./handlers');
require('dotenv').config();

const { PORT } = process.env;

const port = PORT || 8080;

const app = express();

app.post('/api/videos/upload', uploadVideo);

app.listen(port, () =>
	console.log(`The magic is happening on port ${port}...`)
);
