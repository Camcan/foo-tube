const multer = require('multer');
const path = require('path');
const { videoFilter, extractFrames } = require('./util/video');
const { VideoStore } = require('./util/dataStore');
const config = require('./config');
const { v4: uuidv4 } = require('uuid');

const videoStore = new VideoStore(config.dbPath);

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, config.uploadsDir),
	filename: (req, { fieldname, originalname }, cb) => {
		cb(null, `${Date.now()}_${originalname}`);
	}
});

function uploadVideo(req, res) {
	const upload = multer({
		storage: diskStorage,
		fileFilter: videoFilter
	}).single('video_file');

	upload(req, res, (err) => {
		if (req.fileValidationError) {
			return res.send(req.fileValidationError);
		} else if (err instanceof multer.MulterError) {
			return res.send(err);
		} else if (err) {
			return res.send(err);
		}
		const id = uuidv4();
		const { filename } = req.file;

		extractFrames({ filename, id }, (err, frames) => {
			if (err) throw err;
			const record = videoStore.addVideo({
				title: req.body.title,
				filename,
				id,
				frames
			});
			res.send(record);
		});
	});
}

function searchVideos({ query }, res) {
	let results;
	if (!Object.keys(query).length) {
		results = videoStore.getAllVideos();
	} else {
		const { count, query: queryString } = query;
		let filter = () => true;
		if (queryString) {
			filter = ({ title }) =>
				title.toLowerCase().includes(queryString.toLowerCase());
		}
		results = videoStore.searchVideos(filter).slice(0, count);
	}
	res.json({ results });
}

module.exports = {
	uploadVideo,
	searchVideos
};
