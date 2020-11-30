const fs = require('fs');
const ffmpeg = require('ffmpeg');
const config = require('../config');

const allowedFileExtensions = ['mov', 'avi', 'wmv', 'flv', '3gp', 'mp4', 'mpg'];

const allowedFileExtensionsRegex = new RegExp(
	`\.(${allowedFileExtensions.join('|')})$`
);

function videoFilter(req, file, cb) {
	if (!file.originalname.match(allowedFileExtensionsRegex)) {
		const errorMessage = `File does not have expected extension. Allowed file types: ${allowedFileExtensions.join()}`;
		req.fileValidationError = errorMessage;
		return cb(new Error(errorMessage), false);
	}

	cb(null, true);
}

function extractFrames({ filename, id }, cb) {
	try {
		const process = new ffmpeg(`${config.uploadsDir}/${filename}`);
		process.then(
			(video) => {
				const framesPath = `${config.uploadsDir}/${id}`;
				fs.mkdirSync(framesPath);
				video.fnExtractFrameToJPG(
					framesPath,
					{
						every_n_percentage: 10,
						file_name: `${filename}_%t_%s`
					},
					cb
				);
			},
			(err) => {
				console.log('Error: ' + err);
			}
		);
	} catch (e) {
		cb(e);
	}
}

module.exports = {
	videoFilter,
	extractFrames
};
