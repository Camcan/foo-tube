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

module.exports = {
	videoFilter
};
