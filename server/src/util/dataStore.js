const fs = require('fs');
const { dbPath } = require('../config.js');

let existingDb = [];
const exists = fs.existsSync(dbPath);
if (exists) {
	existingDb = JSON.parse(fs.readFileSync(dbPath));
}

class VideoStore {
	constructor() {
		this.videos = existingDb;
	}

	addVideo({ title, filename, id, frames }) {
		const now = Date.now();

		const record = {
			id,
			title,
			filename,
			added: now,
			modified: now,
			frames
		};

		this.videos.push(record);

		fs.writeFile(dbPath, JSON.stringify(this.videos), (err) => {
			if (!err) {
				console.log(`New record added with id ${id}`);
			} else {
				console.error('Error:', err);
			}
		});

		return record;
	}

	getAllVideos() {
		return this.videos;
	}

	searchVideos(filterFunc) {
		return this.videos.filter(filterFunc);
	}
}

module.exports = {
	videoStore: new VideoStore()
};
