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

app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

app.get(['/', '/search', 'upload'], (req, res) => {
	res.sendFile(path.join(__dirname, '/../../dist/index.html'));
});

app.post('/api/videos/upload', uploadVideo);

app.get('/api/videos', searchVideos);

app.listen(port, () =>
	console.log(`The magic is happening on port ${port}...`)
);
