const { v4: uuidv4 } = require('uuid');

class VideoStore {
	constructor() {
		this.videos = [];
	}

	addVideo({ title, filename }) {
		const now = Date.now();
		const record = {
			id: uuidv4(),
			title,
			filename,
			added: now,
			modified: now
		};
		this.videos.push(record);
		return record;
	}

	getVideos() {
		return this.videos;
	}
}

module.exports = {
	videoStore: new VideoStore()
};
