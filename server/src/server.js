const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const port = PORT || 8080;

const app = express();

app.post('/', (req, res) => res.send('Whattup'));

app.listen(port, () =>
	console.log(`The magic is happening on port ${port}...`)
);
