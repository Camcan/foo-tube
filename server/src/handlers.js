const multer = require('multer');
const path = require('path');
const { videoFilter } = require('./util/video');
const { videoStore } = require('./util/dataStore');

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, 'uploads/'),
	filename: (req, { fieldname, originalname }, cb) => {
		cb(null, fieldname + '-' + Date.now() + path.extname(originalname));
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

		const vidInfo = videoStore.addVideo({
			filename: req.file.filename,
			title: req.body.title
		});

		res.send(vidInfo);
	});
}

module.exports = {
	uploadVideo
};
