const express = require('express');
const path = require('path');
const { uploadVideo, searchVideos } = require('./handlers');
require('dotenv').config();

const { PORT } = process.env;

const port = PORT || 8080;

const app = express();

app.disable('x-powered-by');
app.disable('etag');

app.use(express.static(path.join(__dirname, '../../dist')));

app.post('/api/videos/upload', uploadVideo);

app.get('/api/videos', searchVideos);

app.listen(port, () =>
	console.log(`The magic is happening on port ${port}...`)
);
