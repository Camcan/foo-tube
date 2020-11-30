const fs = require('fs');

class VideoStore {
	constructor(dbPath) {
		let existingDb = [];
		const exists = fs.existsSync(dbPath);
		if (exists) {
			const content = fs.readFileSync(dbPath, 'utf8');
			existingDb = JSON.parse(content);
		}
		this.dbPath = dbPath;
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

		fs.writeFileSync(this.dbPath, JSON.stringify(this.videos), (err) => {
			if (!err) {
				// eslint-disable-next-line no-console
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
	VideoStore
};
